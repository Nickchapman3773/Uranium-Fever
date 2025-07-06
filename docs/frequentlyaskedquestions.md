---
sidebar_position: 9
title: Frequently Asked Questions
hide_title: true
sidebar_label: Frequently Asked Questions
---

# ![Frequently Asked Questions Banner](https://github.com/user-attachments/assets/b491a1d0-15e0-4a4a-a0c3-1f99cebb5bdf)

:::tip
To find information quickly, use `Ctrl + F` to search for relevant keywords.
:::

:::danger Troubleshooting
For any installation errors, launch crashes, or launch freezes, perform these steps sequentially, testing again after each:
<details><summary>
Expand - Troubleshooting Steps
</summary>

- NVIDIA graphics card users with 50xx series cards should downgrade to [Driver Version 572.83](https://www.nvidia.com/en-us/drivers/details/242277/), as subsequent versions are incompatible with DXVK.
- Verify ownership of supported versions of `Fallout: New Vegas`, `Fallout 3`, and all DLCs, as specified in [Requirements](https://uraniumfever.net/docs/requirements).
- Log out and back into Nexus within the Wabbajack client, as outlined in [Installing Uranium Fever](https://uraniumfever.net/docs/setupinstructions#-installing-uranium-fever-).
- Reinstall the required .NET Framework and Visual C++ Runtime Libraries, per [Requirements](https://uraniumfever.net/docs/requirements).
- Verify the antivirus exclusions are appropriately configured, per [Creating Antivirus Exclusions](https://uraniumfever.net/docs/setupinstructions#-creating-antivirus-exclusions-).
- Disable or uninstall any 3rd party antivirus.
- Disable any VPN.
- Disable any overlay like Steam, Overwolf, Afterburner, Discord, Nvidia, etc. | Xbox Game Bar does not need disabling.
- Disable Windows Defender.
- If using a pre-built computer or laptop, close or uninstall any proprietary programs (for example, Omen Gaming Hub).
- Update to the most recent graphics card drivers.
- Right click the Uranium Fever folder and uncheck Read-only.
- Restart your computer.
- Launch Fallout: New Vegas once more from Steam/GOG, then try launching again through Mod Organizedr2.v
- Re-run the Uranium Fever Wabbajack Installer. This process will repair errors and is much quicker than the initial installation.
- Ensure that the Tale of Two Wastelands’ filepath and mod size match the instructions in [Installing Tale of Two Wastelands (TTW)](https://uraniumfever.net/docs/setupinstructions/#-installing-tale-of-two-wastelands-ttw-) (this MUST be INSIDE of the `Uranium Fever > Mods` folder.
- Repeat the [Running 4GB Patcher](https://uraniumfever.net/docs/setupinstructions#-running-4gb-patcher-) step.
- Repeat the [New Vegas Reloaded (NVR) installation process](https://uraniumfever.net/docs/setupinstructions#-installing-new-vegas-reloaded-nvr-).
- If using an older graphics card, confirm use of the correct version of DXVK, per [Intel iGPU Users and GPUs Without Vulkan Support - Downgrading DXVK](https://uraniumfever.net/docs/troubleshooting#-intel-igpu-users-and-gpus-without-vulkan-support---downgrading-dxvk-).
- If issues persist, delete the `Uranium Fever` folder and restart the installation process from the beginning.
- For further help, share your crash log (found in `Uranium Fever > [NoDelete] Stock New Vegas > Crash Logs`) in the [uf-support-unmodified-list](https://discord.gg/WswmBGXQZt) Discord channel.
</details>
:::

- **3rd Person - Is 3rd person supported?**
  - Partially. The Fallout: New Vegas modding community lacks high quality 3rd person animation replacers, which impacts both aesthetics and balance. We recommend only using 3rd person as a vanity camera.

- **4GB Patcher - I am a GOG user and a 4GB patch is already bundled with GOG. I don't think 4GB patcher is necessary for me and I am much more stable without it.**
  - This is a different utility than the one instructed for use with Uranium Fever. The 4GB patcher you are instructed to use patches the game to use xNVSE. Without running it, you are not playing with the majority of the mods included in Uranium Fever.

- **Abbreviations - What do the abbreviations in Mod Organizer 2 mod names mean?**
  - These abbreviations help organize and maintain Uranium Fever:
    - **ALT** - Altered mod.
    - **OP** - Optimized mod.
    - **MG** - Plugin merged into a master patch.
    - **HID** - Plugin hidden following merge.
    - **FL** - Plugin flagged as ESM.
    - **INF** - Mod integrated into the Uranium Fever Wabbajack Installer.
    - **AEN** - Mod included but defaults to disabled.
    - **CDN** - Mod hosted on the Wabbajack server.
    - **BOS** - Mod utilized base object swapper.
    - **SOFT AF** - These mods were created by OrgasmicSneeze, specifically for Uranium Fever.
    - **SQ, LQ, VLQ, DB** - Mod disabled in Standard, Low, Very Low Quality, or Debug profiles.

- **Addiction - How does addiction work in Uranium Fever?**
  - Addictions can be recovered from over time, after expereincing three days of withdrawals. Taking the associated chem resets the three day timer.
  - Paying a doctor to addres your addiction or using a fixer will provide a period of immunity against the negative effects of the addiction. The addiction will still naturally recover at the same rate.

- **Adding Mods - How do I add ___ mod?**
  - The Uranium Fever support team will not provide any advice or instructions on how to add mods to Uranium Fever. You may do so at your own risk, though you void any support by doing so.

- **Ammo Types - There are several different types of ammo included in each caliber. What do they each do?**
  - **AP** - Expensive and uncommon. Reduces weapon damage, but significantly reduces enemy DT (Damage Threshold). Very effective against large, powerful, armored enemies.
  - **HP** - Expensive and uncommon. Increases weapon damage, but multiplies enemy DT (Damage Treshold). Very effective against soft, weak, unarmored enemies.
  - **Regular** - Cheap and common. Ineffective against armored enemies.
  - **Junk/Surplus** - Cheap and common. Causes weapons to degrade in condition quicker and deals less damage.
  - **Other** - Other unnoted types of ammo (SWC, JSP, Match, etc) are special ammo types that typically trump standard ammo types in some fashion.

- **Application Load Error P:0000065432 - How do I fix this error?**
  - Follow the Steam PCR Users instructions in [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions#-configuring-game-settings-).
- **Application Load Error P:0000065434 - How do I fix this error?**
  - Ensure Steam is running and repeat the [Generating Fresh INI Files](https://uraniumfever.net/docs/setupinstructions#-generating-fresh-ini-files-) and [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions#-configuring-game-settings-) steps.

- **BASS Init/XD3 Input Errors - I got a BASS Init/XD3 Input Error while installing TTW. How do I fix it?**
  - You are either using non-English versions of Fallout: New Vegas or Fallout 3, lack the associated DLCs, or have not completed a [clean installation](https://uraniumfever.net/docs/setupinstructions#-creating-clean-installs-and-backups-) appropriately.
 
- **Bobbleheads/Skill Books - I used to know exactly where to find all of the bobbleheads/skill books, but they aren't where I expect them. Why?**
  - They have all been relocated. Gone are the days of free, predictable SPECIAL/Skill points. We enjoy the sense of discovery associated with their relocation, and hope you will too.

- **Cannibal Perk - Why doesn’t the cannibalize perk work?**
  - Ensure you’re crouching to use the cannibalize feature.

- **Companion Combat - My companions keep running to their death, how can I stop them?**
  - Open the Companions Command and Control menu (`C`) and try changing their tactics to `stay back` and `prefer ranged combat`.
  - Make sure you give them a weapon, ammo, and aid.
 
- **Companion Healing - How do I heal my companions?**
  - Companions heal in the same ways as the player does. Give them aid, pay the doctor for healing services (the doctor will stitch them up while they stitch you up), or sleep (they'll sleep when you sleep).

- **Companion Recruitment - Why cant I recruit ___ companion?**
  - The recruitment of companions is dependent on the player's permanent charisma (this does not take modifiers such as equipment or chems into account. The player can recruit one companion at 4 charisma, two companions at 7 charisma, and 3 companions at 10 charisma.

- **Controller Support - Is there controller support?**
  - Yes, but only on Steam. Unfortunately there are no viable third party programs with similar capabilities for GOG users. Use Steam Input and follow the [Official Steam Controller Instructions](https://uraniumfever.net/docs/controllerinstructions).

- **Console Commands - Can I safely use console commands when playing?**
  - No. Almost all console commands can have unintended downstream consequences. Using console commands will void any support.

- **Crippled - How do I heal crippled limbs?**
  - Visit a doctor.
  - Use a Doctor's Bag or Splint.
  - Use healing items beyond full health.
  - Sleep beyond full health.

- **Dialogue Skill Indicator - Why was it removed?**
  - This feature was intentionally removed to enhance immersion and prevent metagaming.
    
- **DLCs - How do I initiate the various DLCs?**
  - **Capital Wasteland:**
    - **Point Lookout** - Walk past the Citadel towards the rivertboat, at which point a horn will sound.
    - **The Pitt** - Listen to a radio broadcast near the Oasis.
    - **Mothership Zeta** - Listen to the radio broadcast near MDPL-13 Power Station.
    - **Operation Anchorage** - Listen to the radio broadcast near Bailey's Crossroads.
  - **Mojave Wasteland:**
    - **Autumn Leaves** - Visit Hypatia.
    - **Into the Deep** - Visit Shamble.
    - **Lake Havasu** - Visit Searchlight Airport.
    - **Dry Wells** - Visit Blue Paradise Vacation Rentals.
    - **Zion Trails** - Explore the Northwestern most corner of the Mojave Wasteland.
    - **Race To The Bottom** - Visit Freeside Coop.
    - **Honest Hearts** - Listen to the radio broadcast near Freeside.
    - **Old World Blues** - Listen to the radio broadcast near the Crashed Satellite.
    - **Dead Money** - Listen to the radio broadcast near Helios One.
    - **Lonesome Road** - Visit the Canyon Wreckage.

- **DLCs & Quest Mods - What levels are recommended for the DLCs and quest mods?**
  - **Capital Wasteland:**
    - **Point Lookout (with Low Level Point Lookout)** - 10
    - **The Pitt** - 15
    - **Mothership Zeta (with Hardcore Zeta)** - 25
    - **Operation Anchorage (with Anchorage Gameplay Expansion)** - 25
  - **Mojave Wasteland:**
    - **Autumn Leaves** - 1
    - **Dry Wells** - 5
    - **Into the Deep** - 10
    - **Race To The Bottom** - 10
    - **Honest Hearts** - 10
    - **Zion Trails** - 10
    - **Lake Havasu** - 15
    - **Old World Blues** - 15
    - **Dead Money (with Dead Money Tweaks)** - 25
    - **Lonesome Road** - 25

- **Disabling Mods - Can I disable ___ mod?**
  - The only mods you can safely enable or disable are those in the `Optional` separators.

- **Disguise - What happened to the disguise system?**
  - It is been removed due to unresolvable bugs in the base implementation.

- **DMP Files - Mod Organizer 2 crashes on launch and opens 3 DMP files. Why?**  
  - This is a result of outdated Runtimes. Instructions for updating are included in [Requirements](https://uraniumfever.net/docs/requirements).

- **Failed or Slow Nexus Downloads - Why are my downloads slow or failing?**  
  - Relog into your Nexus account in the Wabbajack settings.

- **Fallout 3 - Is Fallout 3 absolutely required to play Uranium Fever?**  
  - Yes. There is no way to play Uranium Fever without owning Fallout 3 and the associated DLCs.

- **Fast Traveling - Can I fast travel in Uranium Fever?**  
  - Yes. The only circumstances in which fast travel is prohibited is when over-encumbered, while in combat, or while prohibited by quest content.

- **First Time Playing - Is this list suitable for a Fallout newcomer?**  
  - Yes. This list is ideal for anyone seeking a challenging experience. If Uranium Fever feels overwhelming, consider other TTW/FNV Wabbajack lists.

- **First Time Playing - I want to experience the intro sequence.**  
  - To experience the intro sequence, disable the `Quick Start - Wasteland Starting Gear - Uranium Fever Merge Patch` mod in the Mod Organizer 2 `Optional Settings & Additions` separator.  
  - Please note the intro sequence is known to be associated with bugs, and we will not provide support for these bugs.

- **First Time Playing - Do you have any tips on how to be successful?**  
  - Avoid reducing any SPECIAL stat too low during character creation. No stat is useless in Uranium Fever, despite this being contrary to standard Fallout: New Vegas.
  - Choose two weapon skills to focus on at the start of the game. Ammo is scarce, as are skill points. Melee is powerful, though weapons break easily.
  - All perks and traits have been overhauled. Review their effects carefully, as they may have unintended consequences later on.
  - Trash is important. Scavenge for everything possible. Selling trash will be important to gaining enough caps to afford food, ammo, and aid.
  - Empty bottles are invaluable for water collection.
  - Food will not provide much healing. The best ways to heal are by sleeping and by visiting doctors.
  - Chems and alcohol can give strong transient buffs, though are also associated with severe drawbacks during times of addiction. Visiting a doctor about the player's addiction will only help for a period of time while the player takes time to naturally recover from their addiction.
  - Some crafting items have unexpected uses. Study crafting stations carefully.
  - Carry multiple weapons that require different ammo types. Ammo scarcity will require you to switch weapons frequently.
  - Forget any preconceptions of the utility of certain weapons or items in standard Fallout: New Vegas or Fallout 3. Everything in Uranium Fever has been completely rebalanced, and weapons that were weak previously may now be much more useful.

- **FPS/Stutter - How can I increase FPS/Reduce Stutter in Uranium Fever?**  
  - If using NVIDIA, ensure that the [Applying NVIDIA Profile](https://uraniumfever.net/docs/setupinstructions/#-nvidia-users---applying-nvidia-profile-) instructions have been followed.
  - If using AMD, ensure that the [Disabling Ultra-Low Power State (ULPS)](https://uraniumfever.net/docs/setupinstructions/#-amd-users---disabling-ultra-low-power-state-ulps-) instructions have been followed.
  - Reduce the [Uranium Fever Profile](https://uraniumfever.net/docs/setupinstructions/#-selecting-a-uranium-fever-profile-) quality.
  - Reduce the `Detail` quality in [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions/#-configuring-game-settings-).
  - If using a 4k monitor, try reducing resolution to 2k in [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions/#-configuring-game-settings-), your computers `Display Settings`, and in `[#] [INF] [DB] - OneTweak - Custom INI`.
  - Consider trying [Lossless Scaling](https://uraniumfever.net/docs/losslessscalingguide).  
    Please note that the Uranium Fever team has no affiliation with Lossless Scaling and does not provide support for it.

- **FPS Limiters - Do I need a separate FPS limiter?**  
  - Yes. RTSS utilizes CPU-based functions to limit FPS, which offers lower latency and better consistency than GPU-based methods, especially in Fallout: New Vegas.

- **Freecam - How can I use freecam to look at myself?**
  - Enter 3rd person, open the console with the ` key, type TFC, then press enter. You can move your camera around as needed to view your character. Type TFC into console again to exit freecam.

- **Gambling - I used to be able to easily win gambling and earn free money, but I can't anymore. Why?**
  - Luck no longer affects gambling in UF to prevent abuse of the economy.

- **Hardcore - Can I disable the hardcore mode?**  
  - No. Many mods in Uranium Fever rely on hardcore mode, and the list is designed around it.

- **Hardercore - What changes does the Hardercore Optional Mod change?**  
  - The changes for hardercore can be found in the [Optional Mods Section](https://uraniumfever.net/docs/setupinstructions#-optional-mods-) of the Setup Instructions

- **Healing - When I pay a doctor to heal me, I do not heal fully. Why?**  
  - This is an intentional balance design. You will need to pay for several different healing sessions or heal through other means to fully heal.

- **HDR - The launcher is configured with HDR on, but my monitor doesn't support HDR. Should I turn it off?**  
  - No, Fallout: New Vegas uses the term HDR to reference the quality of rendering, which is independent of your monitor.

- **Humbled/Traveling to the Mojave/Capital Wasteland - What do I get to keep when I transition from from one Wasteland to the other (get humbled/Benny'd)?**
  - The players level, skills, and karma are reset. Perks are retained. Skills gained from skill books are retained. Caps are stolen and permanently removed. Gear is stolen, though can later be recovered.

- **Items - What does ___ item do?**
  - **Air Scrubber** - Used to repair gas masks and other items that provide radiation resistance.
  - **Bypass Module** - Uses a combination of modules and microfusion cells to bypass terminal hacking. The amount of material required depends on the hacking difficulty.
  - **Grinder** - Uses a combination of discs and small energy cells to bypass locks. The amount of material required depends on the lock difficulty.
  - **Power Drill** - Uses a combination of drill bits and small energy cells to bypass locks. The amount of material required depends on the lock difficulty.
  - **Skill Items** - Add specified skill bonuses while held in the players inventory.
  - **Welding Torch** - Used to augment armor and weapon repair, alongside flamer fuel, and silver or gold coins.
 
- **Items - Where is ___ item located? It used to be in this very specific location!**  
  - Please enjoy the thrill of discovery, rather than focusing on what used to be. Any missing items you encounter have been relocated as part of an intentional overhaul. No, we will not tell you the new location.

- **Keybinds - How can I view Uranium Fever’s keybinds?**  
  - Press `K` in the pause menu.

- **Launch/Start - When I launch Uranium Fever after finishing the installation process, it launches unmodded/vanilla Fallout: New Vegas. How do I fix it?**
  - Re-run the Uranium Fever Wabbajack installer, it will fix repair any incorrect filepaths.
  - Ensure the game is not being launched from the launcher.

- **Leaning - Is there a way to toggle leaning?**
  - Yes. Activate the `Keybinds - F Activates, Q & E Lean` mod in the `Optional - Settings` separator.

- **Loading & Saving - In Skyrim I am told I can't quicksave or quickload. Is this also true in Uranium Fever?**
  - No. Quicksaves, autosaves, and full saves are also functionally similar, and none of these negatively impact the game. Similarly, reloading will not negatively impact your game.

- **Level Cap - What is the level cap in Uranium Fever?**  
  - 60, as set by Tale of Two Wastelands.

- **Long Load Screens - I have very long load screens, why?**  
  - You likely capped your FPS at too low a value.

- **Manual Installs - Why must I manually install TTW and NVR?**  
  - TTW requires manual installation due to ModPub restrictions and NVR is only available on Discord.

- **Meat - Why don't animals drop meat?**
  - Without the Hunter perk, you struggle to hunt and harvest meat from your kills.

- **Megaton Bomb - How do I defuse the megaton bomb?**
  - The formula now depends on intelligence, science, repair, and explosives levels. The player must be a defusal skill level of 90, which is calculated by the defusal skill formula, `((Intelligence * Science) * .05) + Repair + Explosives`.

- **Mod Order/Load Order - I accidentally messed up my mod order/load order. How do I fix it?**  
  - A backup is pre-bundled with Uranium Fever. You can either restore from the backup or re-run the Uranium Fever Wabbajack Installer, which will revert the modlist and load order to default configuration.

- **Mod Organizer 2 - Mod Organizer 2 isn't locking when I launch the game. Why?**
  - This is intentional in order to avoid long refresh times with BSA archive parsing enabled.

- **Modularity - Can I customize Uranium Fever to my preferences?**  
  - Uranium Fever is not inherently modular. Due to various complicated optimizations, plugin merges, and custom updates, modified lists are unsupported.

- **Mod Configuration Menu (MCM) - Can I change settings in the MCM?**
  - Doing so is considered modifying the list and will invalidate support.

- **Modifying Uranium Fever - Can I modify the mods?**
  - Modifying the list voids official support. Use the [uf-support-modified-list](https://discord.gg/WswmBGXQZt) Discord channel for community assistance.

- **Mods - Why are there so many empty mods or mods that are completely overwritten in Uranium Fever?**
  - They have been merged or optimized in some fashion, though they are still included in an empty state to ensure the author receives appropriate downloads, donation points, and recognition for their creation.

- **New Vegas Heap Replacer (NVHR) - Why don't you include NVHR in the Uranium Fever installation?**
  - It is no longer recommended. xNVSE has built in changes to the vanilla heap that are superior to those found in NVHR, but without the massively increased memory usage that results from NVHR.

- **Nexus Upload - A new update to LODGen/Facegen/SOFT AF was posted to the Nexus page. Should I download it?**
  - No. This was uploaded in preparation for a future update, and may break the game if downloaded in isolation. Mods should only be updated when included as part of Uranium Fever update or when instructed to.

- **NoDelete - What does [NoDelete] mean?**  
  - This tag prevents Wabbajack from modifying the contents of tagged folders during updates.

- **NVIDIA Profile Inspector Unhandled Exception - I received an error that there is an unhandled exception when trying to run the NVIDIA Profile Inspector. How do I fix it?**
  - Update or reinstall your graphics card drivers.

- **Optimization - How is Uranium Fever optimized?**  
  - We used Cathedral Asset Optimizer and Nvidia Texture Tools to compress textures, downsize to 2k, and generate mipmaps. These are subsequently further adjusted by SNIFF when appropriate. Animations are compressed then BSA-packed with BSArchPro, LOD distances are optimized, and priority flags are set to load only necessary items.

- **Optional Mods - How do I use the bundled optional mods?**
  - Instructions are provided in the [Optional Mods](https://uraniumfever.net/docs/setupinstructions#-optional-mods-) section.

- **Other Modded Instances - Can I keep my other modded setups while playing Uranium Fever?**  
  - Yes. Uranium Fever is self-contained in the Stock New Vegas folder and won’t interfere with other setups.

- **Overwolf - Can I use Overwolf with Uranium Fever?**
  - No. Overwolf causes the game to crash.

- **Pagefile - Should I increase the pagefile size for New Vegas?**  
  - No. Fallout: New Vegas has a 3.9GB memory limit, meaning that the pagefile will not even be used prior to memory-related crashes.

- **Parse Errors - Are parse errors during installation an issue?**  
  - No, as long as the installer shows "Complete" at the end.

- **Pink Screen - Why do I see pink transition screens?**  
  - You likely skipped the 4GB patching process (`FNVPatch.exe` in `[NoDelete] Stock New Vegas`).

- **Plugin No Longer Present - I'm notified that certain plugins are missing. Is this an issue?**  
  - No, unless specifically noted. Some plugins may be merged or removed during optimization, which will not have a major impact on your save unless otherwise specified.

- **Purifier - Why do I return to main menu after activating the purifier? Is this a bug?**
  - You died. Try a different method of activating the purifier.

- **Radiation - ___ is too irradiated to complete! What can I do?**
  - Use a combination of a Radiation Suit, Rad-x, Radaway, and Alcohol to mitigate the effects of radiation. However, if an area is too irradiated to even be possible, please report the location in the [uf-bug-reports](https://discord.gg/WswmBGXQZt) Discord channel.

- **Ragdolls - Does the Ragdolls mod cause crashes?**  
  - No. The Death Throes replacement plugin used here is stable.

- **Reflections - Why are landscape reflections visible in windows despite there being a building or object behind me?**  
  - This is intentional to prevent significant performance degradation.

- **Runtime Error - I’m getting a runtime error at launch. Why?**  
  - You likely opened MO2 before creating your Stock New Vegas folder. Re-run the Uranium Fever Wabbajack Installer to correct the error. This will repair any errors and will be much quicker than the initial installation.

- **Saving - How does saving work in Uranium Fever?**
  - In addition to manual saves, there is an auto-save function that rotates through 10 auto-saves on one minute save intervals.

- **Shadows - Why do my shadows suddenly jump, rather than move continuously?**
  - This is an intentional design choice in NVR to reduce associated performance cost and flicker that is introduced by continuously moving shadows.

- **Shimmering/Sparkling/Firefly Objects - Why do some objects shimmer?**  
  - This is an unfortunate consequence of the NVR PBR shader interacting with poorly made textures. Ideally, these textures will be gradually replaced.

- **Size - Why is Uranium Fever so large?**  
  - Despite optimizations, the list's texture enhancements are extensive, with the original downloads alone requiring 50GB.

- **Skill Tags - How do skill tags work in Uranium Fever? I do not see the 15 point increase I am used to?**
  - Uranium Fever uses classic skill tagging, meaning that that all skill points input into the tagged skill are doubled per level up (each one skill point you have per level up would count as 2 for a tagged skill).

- **SPECIAL - What do SPECIAL do in Uranium Fever?**
  - **All SPECIALS:**
    - All grant extra items in starting gear in both Wastelands and various DLCs.
    - Contribute the the players size during character creaton.
  - **Strength:**
    - Increased carry weight.
    - Increased melee damage.
    - Increased knockdown resistance.
    - Improved hip fire spread.
    - Improved recoil control.
  - **Perception:**
    - Improved NPC sneak awareness recognition.
    - Improved non-damaging forced entry bonus.
    - Improved bullet spread.
    - Improved degree of time dilation associated with Just Bullet Time.
  - **Endurance:**
    - Increased HP.
    - Increased radiation resistance.
    - Increased poison resistance.
    - Increased knockdown resistance.
    - Increased health regeneration over time.
    - Increased sleep and wait health regeneration.
    - Reduced addiction chance.
  - **Charisma:**
    - Improved companion damage and defense.
    - Higher number of recruitable companions.
    - Improved barter prices.
    - Easier dialogue checks.
    - Increased reputation gains and decreased reputation losses.
  - **Intelligence:**
    - Improved skill points per level.
    - Improved non-damaging forced entry bonus.
    - Enemy intelligence reduces success in dialogue checks.
  - **Agility:**
    - Increased AP.
    - Improved radiation decay.
    - Improved non-damaging forced entry bonus.
    - Improved lockpicking.
    - Faster swim speed.
    - Faster reload speed.
    - Faster draw and holster speed.
    - Faster weapon jam recovery speed.
  - **Luck:**
    - Improved chance for critical hit.
    - Improved chance for crippled limb recovery while sleeping at full health.
    - Reduced odds for item destruction during forced entry.
    - Reduced chance for bypass tool to be destroyed.
    - Improved outcomes in various scripted events, such as repairing electrical boxes.
    - Improved lockpicking chances.
    - Improved hacking chances when using Immersive Minigame Tweaks.
    - Reduced weapon jam chance.

- **Sound - Why is the music or sound cutting in and out or crackling?**
  - Bluetooth sound devices do not work correctly with Fallout: New Vegas. One solution is to play some type of video or music in the background when launching the game, which then can be turned off after loading.
    Another solution is to download and run the [Soundkeeper 64](https://veg.by/en/projects/soundkeeper/) executable. It plays a constant imperceptible tone to fix any audio lag or connection oddities when using bluetooth headphones.

- **Sped-up Game - Why is my game sped-up?**
  - Cap your FPS below 120, this is a byproduct of exceeding the maximum capable FPS.

- **Start - For some reason my game launches with unmodded Fallout: New Vegas instead of Uranium Fever. How do I fix it?**
  - This is due to incorrect filepaths. Rerun the Uranium Fever Wabbajack installer. This process will repair errors and is much quicker than the initial installation.

- **Start - How do I start in the Mojave Wasteland instead of the Capital Wasteland?**  
  - Select `memory` when prompted after leaving the Vault 101 cave.

- **Start - Which Wasteland should I choose to start in?**
  - Either! Mechanics are in place to promote balance regardless of starting location.

- **Storage - What can be safely deleted/uninstalled after Uranium Fever installation?**
  - Fallout 3 can be uninstalled from Steam/GOG and the `Uranium Fever > Downloads` folder can be deleted (though much of this will be redownloaded during updates).

- **Tale of Two Wastelands - Is TTW required for Uranium Fever?**  
  - Yes. The modlist cannot be installed or used without TTW.

- **Traits - I can choose 99 traits. Is this a bug?**  
  - No, this is intentional behavior. Most traits have both benefits and downsides, which provide balance in having additional traits. Having the ability to have many traits provides ample opportunity for unique character experiences.

- **Traits - I chose a trait that said I could immediately select a new perk, but I was not offered a new perk. Why?**
  - You will be able to choose this perk when you next level up.

- **Traits - Why can I sometimes select new traits upon leveling up?**
  - New trait selections occur every 4 levels (levels 5, 9, 13, 17, etc).

- **Tweaks - Can I change settings in Stewie's Tweaks?**
  - Doing so is considered modifying the list and will invalidate support.

- **Ultrawide - Can I use an ultrawide resolution with Uranium Fever?**  
  - Yes. Enable the appropriate preset corresponding to your monitor's aspect ratio in the `Optional - Settings` separator in Mod Organizer 2.
 
- **Updates - Will updating impact my saves?**  
  - Unless specified otherwise, your saves will still work, though updates after starting a save may introduce small bugs.

- **Updates - ___ mod updated. Should I update it?**  
  - No. Unless instructed otherwise, you should not manually update any mods.

- **VATS - Can I disable Bullet Time and enable VATS instead?**  
  - No. VATS is very difficult to balance and is inherently incompatible with other mods included in Uranium Fever. All perks and traits are functional with Bullet Time, which is a superior skill-based alternative to VATS.

- **Wabbajack - The Uranium Fever installation froze in Wabbajack. What do I do?**
  - Re-run the `Uranium Fever.wabbajack` installer. The installer will resume where it left off, correcting any errors that occurred along the way.

- **Weapon Sway - Why does my weapon sway around my crosshair?**
  - You do not meet the required SPECIAL and weapon skill recommended in order to use the weapon, which are specified in the weapon statstics once you hover over the weapon in the Pip-Boy.

- **Wordle/Hacking - How do I play wordle?**
  - Letters are categorized into three categories when words are played:
    - Solid green highlight means the letter is in the correct position.
    - Solid yellow/orange highlight means the letter is in the word but in the wrong position.
    - No highlight means the letter is not in the word.
  - Previously utilized letters that are not in the word will be darkened on the bottom keyboard.

  ![image](https://github.com/user-attachments/assets/b7be4085-6be8-4df9-bd14-a3dc546b5d44)

- **XP - I do not always get XP when I kill enemies. Why?**  
  - XP is reported collectively at the end of combat and the player will not be rewarded XP for companion kills.
