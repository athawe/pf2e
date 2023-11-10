export { Migration600Reach } from "./600-reach.ts";
export { Migration601SplitEffectCompendia } from "./601-migrate-effect-compendia.ts";
export { Migration602UpdateDiehardFeat } from "./602-update-diehard-feat.ts";
export { Migration603ResetQuickRollDefault } from "./603-reset-quick-roll-default.ts";
export { Migration604FixClassItem } from "./604-fix-class-items.ts";
export { Migration605CatchUpToTemplateJSON } from "./605-catch-up-to-template-json.ts";
export { Migration606SignatureSpells } from "./606-signature-spells.ts";
export { Migration607MeleeItemDamageRolls } from "./607-melee-item-damage-rolls.ts";
export { Migration608DeletePersistedKits } from "./608-delete-persisted-kits.ts";
export { Migration609LootActorTraits } from "./609-loot-actor-traits.ts";
export { Migration610SetHeritageFeatType } from "./610-set-heritage-feat-type.ts";
export { Migration611UpdateToughnessMountainsStoutness } from "./611-update-toughness-mountains-stoutness.ts";
export { Migration612NormalizeRarities } from "./612-normalize-rarities.ts";
export { Migration613RemoveAmmoCharges } from "./613-remove-ammo-charges.ts";
export { Migration614NumifyMeleeBonuses } from "./614-numify-melee-bonuses.ts";
export { Migration615RemoveInstinctTrait } from "./615-remove-instinct-trait.ts";
export { Migration616MigrateFeatPrerequisites } from "./616-migrate-feat-prerequisites.ts";
export { Migration617FixUserFlags } from "./617-fix-user-flags.ts";
export { Migration618MigrateItemImagePaths } from "./618-migrate-item-img-paths.ts";
export { Migration619TraditionLowercaseAndRemoveWandScroll } from "./619-remove-wand-and-scroll-tradition.ts";
export { Migration620RenameToWebp } from "./620-rename-to-webp.ts";
export { Migration621RemoveConfigSpellSchools } from "./621-remove-config-spell-schools.ts";
export { Migration623NumifyPotencyRunes } from "./623-numify-potency-runes.ts";
export { Migration624RemoveTokenEffectIconFlags } from "./624-removed-token-effect-icon-flags.ts";
export { Migration625EnsurePresenceOfSaves } from "./625-ensure-presence-of-saves.ts";
export { Migration626UpdateSpellCategory } from "./626-update-spell-category.ts";
export { Migration627LowerCaseSpellSaves } from "./627-lowercase-spell-saves.ts";
export { Migration629SetBaseItems } from "./629-set-base-items.ts";
export { Migration630FixTalismanSpelling } from "./630-fix-talisman-spelling.ts";
export { Migration631FixSenseRuleElementSelector } from "./631-fix-sense-rule-element-selector.ts";
export { Migration632DeleteOrphanedSpells } from "./632-delete-orphaned-spells.ts";
export { Migration633DeleteUnidentifiedTraits } from "./633-delete-unidentified-traits.ts";
export { Migration634PurgeMartialItems } from "./634-purge-martial-items.ts";
export { Migration635NumifyACAndQuantity } from "./635-numify-ac-and-quantity.ts";
export { Migration636NumifyArmorData } from "./636-numify-armor-data.ts";
export { Migration637CleanMeleeItems } from "./637-clean-melee-items.ts";
export { Migration638SpellComponents } from "./638-spell-components.ts";
export { Migration639NormalizeLevelAndPrice } from "./639-normalize-level-and-price.ts";
export { Migration640CantripsAreNotZeroLevel } from "./640-cantrips-are-not-zero-level.ts";
export { Migration641SovereignSteelValue } from "./641-sovereign-steel-value.ts";
export { Migration642TrackSchemaVersion } from "./642-track-schema-version.ts";
export { Migration643HazardLevel } from "./643-hazard-level.ts";
export { Migration644SpellcastingCategory } from "./644-spellcasting-category.ts";
export { Migration645TokenImageSize } from "./645-token-image-size.ts";
export { Migration646UpdateInlineLinks } from "./646-update-inline-links.ts";
export { Migration647FixPCSenses } from "./647-fix-pc-senses.ts";
export { Migration648RemoveInvestedProperty } from "./648-remove-invested-property.ts";
export { Migration649FocusToActor } from "./649-focus-to-actor.ts";
export { Migration650StringifyWeaponProperties } from "./650-stringify-weapon-properties.ts";
export { Migration651EphemeralFocusPool } from "./651-ephemeral-focus-pool.ts";
export { Migration652KillHalcyonTradition } from "./652-kill-halcyon-tradition.ts";
export { Migration653AEstoREs } from "./653-aes-to-res.ts";
export { Migration654ActionTypeAndCount } from "./654-action-type-count.ts";
export { Migration655CreatureTokenSizes } from "./655-creature-token-sizes.ts";
export { Migration656OtherFocusPoolSources } from "./656-other-focus-pool-sources.ts";
export { Migration657RemoveSetProperty } from "./657-remove-set-property.ts";
export { Migration658MonkUnarmoredProficiency } from "./658-monk-unarmored-proficiency.ts";
export { Migration659MultipleDamageRows } from "./659-multiple-damage-rows.ts";
export { Migration660DerivedSpellTraits } from "./660-derived-spell-traits.ts";
export { Migration661NumifyVehicleDimensions } from "./661-numify-vehicle-dimensions.ts";
export { Migration662LinkToActorSizeDefaults } from "./662-link-to-actor-size-defaults.ts";
export { Migration663FixSpellDamage } from "./663-fix-spell-damage.ts";
export { Migration664DeleteCUBConditions } from "./664-delete-cub-conditions.ts";
export { Migration665HandwrapsCorrections } from "./665-handwraps-corrections.ts";
export { Migration666UsageAndStowingContainers } from "./666-usage-and-stowing-containers.ts";
export { Migration667HPSubProperties } from "./667-hp-subproperties.ts";
export { Migration668ArmorSpeedPenalty } from "./668-armor-speed-penalty.ts";
export { Migration669NPCAttackEffects } from "./669-npc-attack-effects.ts";
export { Migration670AncestryVision } from "./670-ancestry-vision.ts";
export { Migration670NoCustomTrait } from "./670-no-custom-trait.ts";
export { Migration671NoPCItemsOnNonPCs } from "./671-no-pc-items-on-non-pcs.ts";
export { Migration672RemoveNPCBaseProperties } from "./672-remove-npc-base-properties.ts";
export { Migration673RemoveBulwarkREs } from "./673-remove-bulwark-res.ts";
export { Migration674StableHomebrewTagIDs } from "./674-stable-homebrew-tag-ids.ts";
export { Migration675FlatModifierAEsToREs } from "./675-flat-modifier-aes-to-res.ts";
export { Migration676ReplaceItemsWithRELikeAEs } from "./676-replace-items-with-re-like-aes.ts";
export { Migration677RuleValueDataRefs } from "./677-rule-value-data-refs.ts";
export { Migration678SeparateNPCAttackTraits } from "./678-separate-npc-attack-traits.ts";
export { Migration679TowerShieldSpeedPenalty } from "./679-tower-shield-speed-penalty.ts";
export { Migration680SetWeaponHands } from "./680-set-weapon-hands.ts";
export { Migration681GiantLanguageToJotun } from "./681-giant-language-to-jotun.ts";
export { Migration682BiographyFields } from "./682-biography-fields.ts";
export { Migration683FlavorTextToPublicNotes } from "./683-flavortext-to-public-notes.ts";
export { Migration684RationsToConsumable } from "./684-rations-to-consumable.ts";
export { Migration685FixMeleeUsageTraits } from "./685-fix-melee-usage-traits.ts";
export { Migration686HeroPointsToResources } from "./686-hero-points-to-resources.ts";
export { Migration687FamiliarityAEsToREs } from "./687-familiarity-aes-to-res.ts";
export { Migration688ClampSpellLevel } from "./688-clamp-spell-level.ts";
export { Migration689EncumberanceActiveEffects } from "./689-encumberance-aes.ts";
export { Migration690InitiativeTiebreakItems } from "./690-tiebreak-items.ts";
export { Migration691WeaponRangeAbilityCategoryGroup } from "./691-weapon-range-ability-category-group.ts";
export { Migration692CraftingEntryFeatReplacement } from "./692-crafting-entry-feat-replacement.ts";
export { Migration693ArmorCategoryGroup } from "./693-armor-category-group.ts";
export { Migration694RetireSystemTokenSettings } from "./694-retire-system-token-settings.ts";
export { Migration695SummonToSummoned } from "./695-summon-to-summoned.ts";
export { Migration696FlatAbilityModifiers } from "./696-flat-ability-modifiers.ts";
export { Migration697WeaponReachTrait } from "./697-weapon-reach-trait.ts";
export { Migration698RemoveDerivedActorTraits } from "./698-remove-derived-actor-traits.ts";
export { Migration699ItemDescriptionEmptyString } from "./699-item-description-empty-string.ts";
export { Migration700SingleClassFeatures } from "./700-single-class-features.ts";
export { Migration701ModifierNameToSlug } from "./701-modifier-name-to-slug.ts";
export { Migration702REFormulasAtInstanceLevel } from "./702-re-formulas-at-instance-level.ts";
export { Migration703SpellDamageStructure } from "./703-spell-damage-structure.ts";
export { Migration704MartialProficiencyRE } from "./704-martial-proficiency-re.ts";
export { Migration705GunslingerCatchUp } from "./705-gunslinger-catch-up.ts";
export { Migration706FormulasAtInstanceLevelEverythingElse } from "./706-formulas-at-instance-level-everything-else.ts";
export { Migration707BracketedFormulasAtInstanceLevel } from "./707-bracketed-formulas-at-instance-level.ts";
export { Migration708SpecificRuleLabel } from "./708-specific-rule-label.ts";
export { Migration709REFormulasAtInstanceLevelRedux } from "./709-re-formulas-at-instance-level-redux.ts";
export { Migration710RarityToString } from "./710-rarity-to-string.ts";
export { Migration711HeritageItems } from "./711-heritage-items.ts";
export { Migration712ActorShieldStructure } from "./712-actor-shield-structure.ts";
export { Migration713FistToStrikeRE } from "./713-fist-to-strike-re.ts";
export { Migration714RangeIncrementREs } from "./714-range-increment-res.ts";
export { Migration715DangerousSorcery } from "./715-dangerous-sorcery.ts";
export { Migration716StrikeDamageSelector } from "./716-strike-damage-selector.ts";
export { Migration717TakeFeatLimits } from "./717-take-feat-limits.ts";
export { Migration718CarryType } from "./718-carry-type.ts";
export { Migration719ShrugFlanking } from "./719-shrug-flanking.ts";
export { Migration720UpdateSpellDescriptions } from "./720-update-spell-descriptions.ts";
export { Migration721SetReloadValues } from "./721-set-reload-values.ts";
export { Migration722CraftingSystemData } from "./722-crafting-system-data.ts";
export { Migration723CumulativeItemBonuses } from "./723-cumulative-item-bonuses.ts";
export { Migration724CraftingMaxItemLevel } from "./724-crafting-max-item-level.ts";
export { Migration725QuickClimbREs } from "./725-quick-climb-rule-elements.ts";
export { Migration726JournalSetting } from "./726-journal-setting.ts";
export { Migration727TrimSelfRollOptions } from "./727-trim-self-roll-options.ts";
export { Migration728FlattenPhysicalProperties } from "./728-flatten-physical-properties.ts";
export { Migration729CumulativeItemBonusCleanup } from "./729-cumulative-item-bonus-cleanup.ts";
export { Migration730DeruneHandwraps } from "./730-derune-handwraps.ts";
export { Migration731TogglePropertyToRollOption } from "./731-toggle-property-to-roll-option.ts";
export { Migration732FixDedicationFeatTypes } from "./732-fix-dedication-feat-types.ts";
export { Migration733ItemBonusFromEquipment } from "./733-item-bonus-from-equipment.ts";
export { Migration734SpellLocationPropsAndSignature } from "./734-spell-location-props-and-signature.ts";
export { Migration735FirearmAmmoAlchemical } from "./735-firearm-ammo-alchemical.ts";
export { Migration736RemoveBrokenThreshold } from "./736-remove-broken-threshold.ts";
export { Migration737NormalizeRuleElementKeys } from "./737-normalize-re-keys.ts";
export { Migration738UpdateLaughingShadow } from "./738-update-laughing-shadow.ts";
export { Migration739RecoveryCheckDC } from "./739-recovery-check-dc.ts";
export { Migration740MaxTakable } from "./740-fix-max-takable.ts";
export { Migration741RollOptionToggleToItem } from "./741-roll-option-toggle-to-item.ts";
export { Migration742RMAbilityBoostLevels } from "./742-rm-class-ability-boost-levels.ts";
export { Migration743FixWeaknessStructure } from "./743-fix-weakness-structure.ts";
export { Migration744MigrateSpellHeighten } from "./744-migrate-spell-heighten.ts";
export { Migration745EffectTargetToChoiceSet } from "./745-effect-target-to-choice-set.ts";
export { Migration746StandardizePricing } from "./746-standardize-pricing.ts";
export { Migration747FixedHeightening } from "./747-fixed-heightening.ts";
export { Migration748BatchConsumablePricing } from "./748-batch-consumable-pricing.ts";
export { Migration749AssuranceREs } from "./749-assurance-res.ts";
export { Migration750FixCorruptedPrice } from "./750-fix-corrupted-price.ts";
export { Migration751ResetRollOptions } from "./751-reset-roll-options.ts";
export { Migration752StrikeVsWeaponTraits } from "./752-strike-vs-weapon-traits.ts";
export { Migration753WeaponReloadTimes } from "./753-weapon-reload-times.ts";
export { Migration754MightyBulwarkAdjustModifiers } from "./754-mighty-bulwark-adjust-modifiers.ts";
export { Migration755GrantIdsToData } from "./755-grant-ids-to-data.ts";
export { Migration756RMStoredResourceMaxes } from "./756-rm-stored-resource-maxes.ts";
export { Migration757HillockHalfling } from "./757-hillock-halfling.ts";
export { Migration758PrunePCAttributes } from "./758-prune-pc-attributes.ts";
export { Migration759CritSpecRE } from "./759-crit-spec-re.ts";
export { Migration760SeparateNoteTitle } from "./760-separate-note-title.ts";
export { Migration761ShotRules } from "./761-update-shot-rules.ts";
export { Migration762UpdateBackgroundItems } from "./762-update-background-items.ts";
export { Migration763RestoreAnimalStrikeOptions } from "./763-restore-animal-strike-options.ts";
export { Migration764PanacheVivaciousREs } from "./764-panache-vivacious-res.ts";
export { Migration765ChoiceOwnedItemTypes } from "./765-choice-owned-item-types.ts";
export { Migration766WipeURLSources } from "./766-wipe-url-sources.ts";
export { Migration767ConvertVoluntaryFlaws } from "./767-convert-voluntary-flaws.ts";
export { Migration768AddNewAuras } from "./768-add-new-auras.ts";
export { Migration769NoUniversalistFocusPool } from "./769-no-universalist-focus-pool.ts";
export { Migration770REDataToSystem } from "./770-re-data-to-system.ts";
export { Migration771SpellVariantsToSystem } from "./771-spell-variants-to-system.ts";
export { Migration772V10EmbeddedSpellData } from "./772-v10-embedded-spell-data.ts";
export { Migration773ReligiousSymbolUsage } from "./773-religious-symbol-usage.ts";
export { Migration774UnpersistCraftingEntries } from "./774-unpersist-crafting-entries.ts";
export { Migration775AgileFinesseRanged } from "./775-agile-finesse-ranged.ts";
export { Migration776SlugifyConditionOverrides } from "./776-sluggify-condition-overrides.ts";
export { Migration777HandOfTheApprentice } from "./777-hand-of-the-apprentice.ts";
export { Migration778RenameRetiredPackRefs } from "./778-rename-feature-effects-refs.ts";
export { Migration779EliteWeak } from "./779-elite-weak.ts";
export { Migration780NumifySpeeds } from "./780-numify-speeds.ts";
export { Migration781SuppressNoCrowbar } from "./781-suppress-no-crowbar.ts";
export { Migration782UnnestActorTraits } from "./782-unnest-actor-traits.ts";
export { Migration783RemoveClassSkillAELikes } from "./783-remove-class-skill-ae-likes.ts";
export { Migration784CompBrowserPackSetting } from "./784-comp-browser-pack-setting.ts";
export { Migration785ABCKitItemUUIDs } from "./785-abc-kit-items.ts";
export { Migration786RemoveIdentifiedData } from "./786-remove-identified-data.ts";
export { Migration787ResolvablesToSystem } from "./787-resolvables-to-system.ts";
export { Migration788UpdateTanglefootBags } from "./788-update-tanglefoot-bags.ts";
export { Migration789UpdatePreciseStrike } from "./789-update-precise-strike.ts";
export { Migration790MultipleClassDCs } from "./790-multiple-class-dcs.ts";
export { Migration791RuffianHands } from "./791-ruffian-hands.ts";
export { Migration792RemoveTokenAELikes } from "./792-remove-token-ae-likes.ts";
export { Migration793MakePredicatesArrays } from "./793-make-predicates-arrays.ts";
export { Migration794AddWildShapeChoices } from "./794-add-wild-shape-choices.ts";
export { Migration795CleanupFlatFootedToggle } from "./795-cleanup-flat-footed-toggle.ts";
export { Migration796ItemGrantsToObjects } from "./796-item-grants-to-objects.ts";
export { Migration797MetagameSetting } from "./797-metagame-settings.ts";
export { Migration798WeaponToItemStatements } from "./798-weapon-to-item-statements.ts";
export { Migration799RMRecallKnowledgeDuplicates } from "./799-rm-recall-knowledge-duplicates.ts";
export { Migration800SelfEffectPanacheRage } from "./800-self-effect-panache-rage.ts";
export { Migration801ColorDarkvision } from "./801-color-darkvision.ts";
export { Migration802StripFeatActionCategory } from "./802-strip-feat-action-category.ts";
export { Migration803NormalizeSpellArea } from "./803-normalize-spell-area.ts";
export { Migration804RemoveConsumableProperties } from "./804-remove-consumable-properties.ts";
export { Migration805InlineDamageRolls } from "./805-inline-damage-formulas.ts";
export { Migration806TorchImprovisedOtherTags } from "./806-torch-improvised-othertags.ts";
export { Migration807RMActivatedEffectFields } from "./807-rm-activated-effect-fields.ts";
export { Migration808CountDamageDice } from "./808-count-damage-dice.ts";
export { Migration809AutomatonEnhancements } from "./809-automaton-enhancements.ts";
export { Migration810LootDescriptionValue } from "./810-loot-description-value.ts";
export { Migration811InlineDamageRollsPersistent } from "./811-inline-damage-rolls-persistent.ts";
export { Migration812RestructureIWR } from "./812-restructure-iwr.ts";
export { Migration813NormalizeColdIron } from "./813-normalize-cold-iron.ts";
export { Migration814CalculatedExpandedSplash } from "./814-calculated-expanded-splash.ts";
export { Migration815ConsumableDataCleanup } from "./815-consumable-data-cleanup.ts";
export { Migration816AlchemistResearchFields } from "./816-alchemist-research-fields.ts";
export { Migration817FieldDiscoveryPredicates } from "./817-field-discovery-predicates.ts";
export { Migration818BasicUndeadNegativeHealing } from "./818-basic-undead-negative-healing.ts";
export { Migration819SpinTaleAdventureSpecific } from "./819-spin-tale-adventure-specific.ts";
export { Migration820RemoveUnusedTraitsData } from "./820-remove-unused-traits-data.ts";
export { Migration821InlineDamageRolls } from "./821-inline-damage-rolls.ts";
export { Migration822BladeAllyConsolidation } from "./822-blade-ally-consolidation.ts";
export { Migration823HeritageAncestrySlug } from "./823-heritage-ancestry-slug.ts";
export { Migration824SneakAttackDamageSource } from "./824-sneak-attack-damage-source.ts";
export { Migration825KhakkharaFengHuoLun } from "./825-khakkhara-feng-huo-lun.ts";
export { Migration826GutConditionData } from "./826-gut-condition-data.ts";
export { Migration827FixTVShieldTraits } from "./827-fix-tv-shield-traits.ts";
export { Migration828PruneInvalidTraits } from "./828-prune-invalid-traits.ts";
export { Migration829RMRitualEntries } from "./829-rm-ritual-entries.ts";
export { Migration830BarbarianRework } from "./830-condense-instincts.ts";
export { Migration831ClericDoctrines } from "./831-cleric-doctrines.ts";
export { Migration832ChoiceSetFlags } from "./832-choice-set-flags.ts";
export { Migration833AddRogueToysFixPrecision } from "./833-add-rogue-toys-fix-precision.ts";
export { Migration834FeatCategories } from "./834-feat-categories.ts";
export { Migration835InitiativeLongform } from "./835-initiative-longform.ts";
export { Migration836EnergizingConsolidation } from "./836-energizing-consolidation.ts";
export { Migration837MoveHazardBookSources } from "./837-move-hazard-book-source.ts";
export { Migration838StrikeAttackRollSelector } from "./838-strike-attack-roll-selector.ts";
export { Migration839ActionCategories } from "./839-action-categories.ts";
export { Migration840ArrayWrapPredicates } from "./840-array-wrap-predicates.ts";
export { Migration841V11UUIDFormat } from "./841-v11-uuid-format.ts";
export { Migration842NumifyNumericSettings } from "./842-numify-numeric-settings.ts";
export { Migration843RMArmorCustomModifiers } from "./843-rm-armor-custom-modifiers.ts";
export { Migration844DeityDomainUUIDs } from "./844-deity-domains-uuids.ts";
export { Migration845EmptySpellConsumables } from "./845-empty-spell-consumables.ts";
export { Migration846SpellSchoolOptional } from "./846-spell-school-optional.ts";
export { Migration847TempHPRuleEvents } from "./847-temp-hp-rule-events.ts";
export { Migration848NumericArmorProperties } from "./848-numeric-armor-properties.ts";
export { Migration849DeleteBrokenThreshold } from "./849-delete-broken-threshold.ts";
export { Migration850FlatFootedToOffGuard } from "./850-flat-footed-to-off-guard.ts";
export { Migration851JustInnovationId } from "./851-just-innovation-id.ts";
export { Migration852AbilityScoresToModifiers } from "./852-ability-scores-to-modifiers.ts";
export { Migration853RemasterLanguages } from "./853-remaster-languages.ts";
export { Migration854BracketedAbilityScoresToModifiers } from "./854-bracketed-ability-scores-to-modifiers.ts";
export { Migration855ApexEquipmentSystemData } from "./855-apex-equipment-system-data.ts";
export { Migration856NoSystemDotCustom } from "./856-no-system-dot-custom.ts";
export { Migration857WeaponSpecializationRE } from "./857-weapon-spec-re.ts";
export { Migration858FakeWeaponSpecialization } from "./858-fake-weapon-specialization.ts";
export { Migration859MaterialTypeGrade } from "./859-material-type-grade.ts";
export { Migration860RMGroup } from "./860-rm-group.ts";
export { Migration861AuraColorsToAppearance } from "./861-aura-colors-to-appearance.ts";
export { Migration862SpecificMagicArmor } from "./862-specific-magic-armor.ts";
export { Migration863FixMisspelledOrganaizationsProperty } from "./863-fix-misspelled-organaizations-property.ts";
export { Migration864RemoveWeaponMAP } from "./864-rm-weapon-map.ts";
export { Migration865VitalityVoid } from "./865-vitality-void.ts";
export { Migration866LinkToActorSizeAgain } from "./866-link-to-actor-size-again.ts";
export { Migration867DamageRollDomainFix } from "./867-damage-roll-domain-fix.ts";
export { Migration868StrikeRERange } from "./868-strike-re-range.ts";
export { Migration869RefreshMightyBulwark } from "./869-refresh-mighty-bulwark.ts";
export { Migration870MartialToProficiencies } from "./870-martial-to-proficiencies.ts";
export { Migration871MigrateRollActionMacroParams } from "./871-migrate-rollactionmacro-params.ts";
export { Migration872MoveSchemaProperty } from "./872-move-schema-property.ts";
export { Migration873RemoveBonusBulkLimit } from "./873-remove-bonus-bulk-limit.ts";
export { Migration874MoveStaminaStuff } from "./874-move-stamina-stuff.ts";
export { Migration875SetInnovationIdEarly } from "./875-set-innovation-id-early.ts";
export { Migration876FeatLevelTaken } from "./876-feat-level-taken.ts";
export { Migration877PublicationData } from "./877-publication-data.ts";
export { Migration878TakeABreather } from "./878-take-a-breather.ts";
export { Migration879DeviseAStratagemAndFriends } from "./879-devise-a-stratagem-and-friends.ts";
export { Migration880SplitShowDialogsSettings } from "./880-split-show-dialogs-setting.ts";
export { Migration881NoHBPrefix } from "./881-no-hb-prefix.ts";
