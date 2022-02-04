import { ActorType } from "@actor/data";
import { ItemPF2e } from "@item";
import { DamageType, DAMAGE_TYPES } from "@module/damage-calculation";
import { ModifierAdjustment } from "@module/modifiers";
import { PredicatePF2e } from "@system/predication";
import { isObject, setHasElement } from "@util";
import { AELikeRuleElement, AELikeData, AELikeSource } from "./ae-like";
import { RuleElementOptions } from "./";

class AdjustModifierRuleElement extends AELikeRuleElement {
    protected static override validActorTypes: ActorType[] = ["character", "familiar", "npc"];

    slug: string | null;

    selectors: string[];

    constructor(data: AdjustModifierSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions) {
        super({ ...data, phase: "beforeDerived", priority: data.priority ?? 90 }, item, options);
        this.slug = this.data.slug ?? null;
        this.data.predicate = new PredicatePF2e(this.data.predicate);
        this.selectors =
            typeof this.data.selector === "string"
                ? [this.data.selector]
                : Array.isArray(this.data.selectors)
                ? this.data.selectors
                : [];
    }

    protected override validateData(): void {
        if (this.ignored) return;
        const tests = {
            selectors:
                Array.isArray(this.selectors) &&
                this.selectors.length > 0 &&
                this.selectors.every((s) => typeof s === "string"),
            slug: typeof this.slug === "string" || this.slug === null,
            predicate: this.predicate.isValid,
            mode: AELikeRuleElement.CHANGE_MODES.includes(String(this.mode)),
            value: ["string", "number"].includes(typeof this.value) || isObject(this.value),
        };

        for (const [key, result] of Object.entries(tests)) {
            if (!result) this.warn(key);
        }
    }

    /** Instead of applying the change directly to a property path, defer it to a synthetic */
    override applyAELike(): void {
        this.validateData();
        if (this.ignored) return;

        const adjustment: ModifierAdjustment = {
            slug: this.slug,
            predicate: this.predicate,
            getNewValue: (current: number): number => {
                const change = this.resolveValue();
                if (typeof change !== "number") {
                    this.failValidation("value does not resolve to a number");
                    return current;
                }

                return this.getNewValue(current, change);
            },
            getDamageType: (current: DamageType | null): DamageType | null => {
                if (!this.data.damageType) return current;

                const damageType = this.resolveInjectedProperties(this.data.damageType);
                if (!setHasElement(DAMAGE_TYPES, damageType)) {
                    this.failValidation(`${damageType} is an unrecognized damage type.`);
                    return current;
                }

                return damageType;
            },
        };

        for (const selector of this.selectors) {
            const adjustments = (this.actor.synthetics.modifierAdjustments[selector] ??= []);
            adjustments.push(adjustment);
        }
    }
}

interface AdjustModifierRuleElement extends AELikeRuleElement {
    data: AdjustModifierData;
}

interface AdjustModifierSource extends Exclude<AELikeSource, "path"> {
    damageType?: unknown;
    selectors?: unknown;
}

interface AdjustModifierData extends Exclude<AELikeData, "path"> {
    predicate: PredicatePF2e;
    selectors: string[];
    slug: string | null;
    damageType?: DamageType;
}

export { AdjustModifierRuleElement };
