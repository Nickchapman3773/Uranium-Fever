---
sidebar_position: 9
title: Frequently Asked Questions
hide_title: true
sidebar_label: Frequently Asked Questions
---

# ![Frequently Asked Questions Banner](https://github.com/user-attachments/assets/b491a1d0-15e0-4a4a-a0c3-1f99cebb5bdf)

- **Afterburner - Should I use Special K for an NVIDIA graphics card when using RTSS alongside Afterburner?**
  - No. Refer to the [Performance Guide](https://performance.moddinglinked.com/falloutnv.html#DXVK), select `Nvidia` from the dropdown, and follow steps 2-8. These steps must be repeated after each graphics card driver update.

- **Application load error P:0000065432 - I am getting an error called Application load error P:0000065432. How do I fix it?**
  - Refer to the Steam PCR Users instructions in the [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions#-configuring-game-settings-) section.

- **Altering Uranium Fever - Can I modify mods in Uranium Fever?**
  - Official support is not provided for modified lists. However, the [uf-support-altered](https://discord.com/channels/1247305852738736219/1295564372978040906) channel on Discord allows community members to assist each other.

- **Black Screen - My game launches to a black screen. How do I fix this?**
  - This issue usually stems from a conflict between Special K and the GeForce overlay. Disable the overlay as described in the Special K section above.  
  - **Note**: We do not provide support for modified lists.

- **Cannibal Perk - Why doesn’t the cannibalize function from the Cannibal perk work?**
  - You must be crouching to use the cannibalize function.

- **Clean Install - Do I need a clean install of Fallout: New Vegas and Fallout 3 to use Uranium Fever?**
  - No. Uranium Fever is fully self-contained and independent of your regular Fallout installations!

- **Controller Support - Does Uranium Fever support controllers?**
  - Unfortunately, no. Creating a unified scheme for various equipment and platforms proved challenging. We recommend using Steam Input and this [Unofficial Controller Preset](https://discord.com/channels/1247305852738736219/1247325147950747699/1301652878703726612).

- **Crashing - My game crashes. How can I fix it?**
  - Post your crash log (located in `Uranium Fever > [NoDelete] Stock New Vegas > Crash Logs`) in the Uranium Fever Support channel on Discord.
  - If you’ve modified the list, use the modified Uranium Fever support channel. Note that altering Uranium Fever voids official support.

- **Dialogue Skill Indicator - Why don’t I see the skill check indicator in dialogue like in the original game?**
  - This feature has been intentionally removed to prevent players from knowing if they’ll pass a skill check.

- **DLCs - What levels are recommended for the DLCs and DLC-like quest mods?**
  - **Capital Wasteland:**
    - Point Lookout (with Early Decisions and Gameplay Enhancement) - 10
    - The Pitt - 15
    - Mothership Zeta (with Hardcore Zeta) - 25
    - Operation Anchorage (with Anchorage Gameplay Expansion) - 25
  - **Mojave Wasteland:**
    - Autumn Leaves - 1
    - Lake Havasu - 10
    - Dry Wells - 10
    - Honest Hearts - 10
    - Old World Blues - 15
    - Dead Money (with Dead Money Tweaks) - 25
    - Lonesome Road - 25

- **Failed and Slow Nexus Downloads - Why are my downloads slow or failing?**
  - Make sure your Nexus account is connected to Wabbajack. Open Wabbajack settings to link your Nexus account.

- **First Time Playing - Is this list suitable for a Fallout newcomer?**
  - Yes. This list is ideal for anyone seeking a challenging experience. If Uranium Fever feels overwhelming, consider other TTW/FNV Wabbajack lists.

- **First Time Playing - I want to experience the intro sequence.**
  - We do not support the Fallout 3 intro sequence. It has bugs and complications that cannot be resolved in a satisfactory way.

- **Flickering - Why are distant objects or mountains flickering?**
  - This is called z-fighting. The only available mod to address this is not public and can cause issues like broken render distances.

- **FPS - How can I increase FPS in Uranium Fever?**
  - Step 1:
    - Consider trying [Lossless Scaling](https://uraniumfever.net/docs/losslessscalingguide). Please note that the Uranium Fever team has no affiliation with Lossless Scaling and does not provide support for it.
  - Step 2:
    - Switch to the High-Quality launcher preset to trade visual quality for improved performance.
  - Step 3:
    - Enable the [Performance Profile](https://uraniumfever.net/docs/setupinstructions#-optional---enabling-the-performance-profile-).

- **FPS Limiters - Do I need a separate FPS limiter?**
  - Yes. Special K and RTSS use CPU functions to limit FPS, which offers lower latency and better consistency than GPU-based methods, especially in Fallout: New Vegas.

- **Hardcore - Can I disable hardcore mode?**
  - No. Many mods in Uranium Fever rely on hardcore mode, and the list is designed around it.

- **Installation Error - I encountered an error during Wabbajack installation. What should I do?**
  - Simply rerun the installation; Wabbajack errors are often temporary.

- **Hacking - Why can’t I use the vanilla hacking mini-game?**
  - It’s replaced by Immersive Minigames, offering a balanced, resource-management-focused alternative.

- **Keybinds - How can I view Uranium Fever’s keybinds?**
  - Press `K` in the pause menu.

- **Launcher - My launcher only shows "Install" and "Options" is greyed out. Why?**
  - Re-run the launcher from Steam/GOG to regenerate the necessary INIs. This usually happens after updating Uranium Fever.

- **Long Load Screens - I have very long load screens, why?**
  - You likely capped your FPS at too low a value.

- **Lockpicking - Why can’t I use the vanilla lockpicking mini-game?**
  - It has been replaced by Immersive Minigames.

- **Manual Installs - Why must I manually install TTW and NVR?**
  - TTW requires manual installation due to ModPub restrictions, and NVR is locked behind Discord, which Wabbajack cannot access.

- **Mod Order/Load Order - I accidentally messed up my mod order/load order. How do I fix it?**
  - A backup is pre-bundled with Uranium Fever. You can either restore from the backup or re-run the Uranium Fever installer.

- **Modularity - Can I customize Uranium Fever to my preferences?**
  - Uranium Fever is not inherently modular. Due to optimizations, plugin merging, and updates, altered lists are unsupported.

- **NoDelete - What does [NoDelete] mean?**
  - This tag prevents Wabbajack from modifying the contents of tagged folders during updates.

- **Notification Size - Why are my notifications so large?**
  - Notification size is large at the start of a new game but will normalize after reloading.

- **NPCs - Why aren’t certain NPCs completing quest tasks?**
  - You may have interrupted their scripted actions. Reload a prior save and allow them to complete their tasks.

- **Optimization - How is Uranium Fever optimized?**
  - We used Cathedral Asset Optimizer and Nvidia Texture Tools to compress textures, downsize to 2k, and generate mipmaps. Animations are BSA-packed with BSArchPro, LOD distances are optimized, and priority flags are set to load only necessary items.

- **Other Modded Instances - Can I keep my other modded setups while playing Uranium Fever?**
  - Yes. Uranium Fever is self-contained in the Stock New Vegas folder and won’t interfere with other setups.

- **Pagefile - Should I increase the pagefile size for New Vegas?**
  - No. Fallout: New Vegas has a 3.9GB memory limit, so increasing the pagefile won’t prevent memory-related crashes.

- **Parse Errors - Are parse errors during installation an issue?**
  - No, as long as the installer shows "Complete" at the end.

- **Pink Screen - Why do I see pink transition screens?**
  - You likely skipped the 4GB patching process (`FNVPatch.exe` in `[NoDelete] Stock New Vegas`).

- **Plugin No Longer Present - I'm notified that certain plugins are missing. Is this an issue?**
  - No, unless specifically noted. Some plugins may be merged or removed during optimization, which doesn’t affect your save.

- **Quick Save - Why is there no quick save button?**
  - This is to prevent reloading to avoid negative outcomes in combat or skill checks.

- **Ragdolls - Does the Ragdolls mod cause crashes?**
  - No. The Death Throes plugin used here is stable.

- **Reflections - Why are landscape reflections visible in windows?**
  - This prevents significant performance loss.

- **Resolution - Why is my resolution locked at 4K?**
  - If using Special K, change the resolution in its menu and restart the game.

- **Runtime Error - I’m getting a runtime error at launch.**
  - You likely opened MO2 before creating your Stock New Vegas folder. Re-run the Uranium Fever Installer to fix this.

- **Selecting Perks - Why can’t I select a perk every level?**
  - You can select perks only on even levels. Vegas Elysium requires the perk menu to display every level, even when perks aren’t available.

- **Wild Card Support - Can I ask questions about Wild Card here?**
  - No, **this is NOT the place for Wild Card support**. Wild Card has been taken down and is no longer supported by its creator. Please refrain from asking any Wild Card-related questions here.

- **Size - Why is Uranium Fever so large?**
  - Despite optimizations, the list's texture enhancements are extensive, with original downloads alone requiring 50GB. See [Optional Clean Up](https://uraniumfever.net/docs/setupinstructions#-optional---enabling-the-performance-profile-) for ways to save space.

- **Ultra-wide - Can I use an ultra-wide resolution with Uranium Fever?**
  - Yes, with settings adjustments in the `Options` separator, but this setup is unofficial and unsupported.

- **Updates - Will updating impact my saves?**
  - Unless specified otherwise, your saves will still work, though updates after starting a save may introduce small bugs.
