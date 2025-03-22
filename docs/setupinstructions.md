---
sidebar_position: 6
title: Setup Instructions
hide_title: true
sidebar_label: Setup Instructions
---

# ![Banner Setup Instructions](https://github.com/user-attachments/assets/71196e6c-b2cb-4ade-addf-7f2191cf2bb9)

:::danger Important
Follow these instructions carefully and in the exact order specified. Skipping steps may lead to installation issues.

Before requesting support, check the [Frequently Asked Questions](https://uraniumfever.net/docs/frequentlyaskedquestions) for troubleshooting common errors.
:::

### <p align="center"> ![Creating Necessary File Paths](https://github.com/user-attachments/assets/34a47045-6a1d-4c9d-bb94-8187f3694834) </p>
- Navigate to the `Root Directory` (e.g., `C:\`, `D:\`).
- Create a folder named `Modding` and open it.
- Inside, create a folder named `Wabbajack` (**DO NOT** open it).
- Create another folder named `Uranium Fever` and open it.
- Inside `Uranium Fever`, create a folder named `downloads`.

:::important Double Check
Verify these file paths exist (Root Directory may vary):
- `C:\Modding\Uranium Fever\downloads`
- `C:\Modding\Wabbajack`
:::

### <p align="center"> ![Creating Antivirus Exclusions](https://github.com/user-attachments/assets/21189acf-4d6a-47d4-bd02-2d1f0af8fd75) </p>
:::tip Why?
Excluding these folders prevents Windows or third-party antivirus from blocking essential files.
:::

- Open `Windows Security`.
- Go to `Virus & Threat Protection`.
- Under `Virus & Threat Protection Settings`, select `Manage Settings`.
- Scroll to `Exclusions` and select `Add or Remove Exclusions`.
- Add exclusions for:
  - `C:\Modding\Uranium Fever`
  - `C:\Modding\Wabbajack`

	![Exclusions](https://github.com/user-attachments/assets/383f5259-3236-4acb-b00a-ce57e895716e)

- Repeat this process for any third-party antivirus software.

### <p align="center"> ![Downloading Wabbajack](https://github.com/user-attachments/assets/f7f009e8-df47-43b7-847b-7ca2d0dccaa3) </p>

- Download the [Wabbajack Installation file](https://www.wabbajack.org/).
- Move the downloaded file to `C:\Modding\Wabbajack`.
- Rename `Wabbajack.exe` to `Wabbajack Launcher.exe`
- Run `Wabbajack Launcher.exe` to complete the installation.
- Close Wabbajack.

:::warning Version Check
**DO NOT** use pre-existing installations of Wabbajack or pre-existing Wabbajack shortcuts.

Wabbajack should **ONLY** be launched from the `Wabbajack Launcher.exe`.
:::

### <p align="center"> ![Creating Clean Installs and Backups](https://github.com/user-attachments/assets/b1e3bda9-ded4-410e-b34a-fc6e5a849e8e) </p>

:::tip Self-Contained
This is part one of a process that creates a **SELF-CONTAINED** installation that won't interfere with preexisting modded setups.
:::

- Navigate to `C:\[STEAM or GOG FILEPATH]` and:
	- Move the `Fallout New Vegas` folder to the desktop.
	- Delete the `Fallout New Vegas` folder instead if backups are not desired.
	- Delete the `Fallout 3` folder.
- Navigate to `C:\Users\[USERNAME]\Documents\My Games` and:
	- Move the `FalloutNV` folder to the desktop.
	- Delete the `FalloutNV` folder if backups are not desired.
 	- Delete the `Fallout3` folder.
- Open `Steam or GOG` and:
	- Uninstall `Fallout: New Vegas` and `Fallout 3` if they are still installed.
 	- Reinstall `Fallout: New Vegas` and `Fallout 3`.

These clean installations and backups will be utilized in the [Creating a Clean Stock New Vegas Folder](https://uraniumfever.net/docs/setupinstructions#-creating-a-clean-stock-new-vegas-folder-) section.

### <p align="center"> ![Installing Uranium Fever](https://github.com/user-attachments/assets/34c624af-f780-4666-987d-41a1359cf77f) </p>
- Launch the `Wabbajack application`.
- Open the `settings` page and log into your Nexus account.

  ![WJLogIn](https://github.com/user-attachments/assets/365c2c63-67a1-48d0-be77-15a4b6dac42f)

- Open the `Browse Lists` page, type `Uranium Fever` into the search bar, and click the `Uranium Fever modlist` image.

  Pending screenshot WJBrowse

- Click `Download & Install`.

  Pending screenshot WJDownload
  
- **COPY** (`Ctrl+C`) `C:\Modding\Uranium Fever`, changing the Root Directory if necessary, and **PASTE** (`Ctrl+V`) it into the `Installation Location`.
- `Download Location` will **auto-populate** `C:\Modding\Uranium Fever\downloads`.
- Once finished, click `Install`.

  ![WJUFInstall](https://github.com/user-attachments/assets/ac393510-1047-449c-ae8e-5f2d04a90802)

- Begin the installation and accept the `Nexus Mods API request` when prompted.
- If you are not a Nexus Mods premium user, manually click download on each mod.
- When complete, Wabbajack will display a green, confirmatory `Installation Complete` notification.
- Close Wabbajack. **DO NOT** select the `Create Desktop Shortcut` option.

:::danger Red `INSTALLATION FAILED` Notification
- Please refer to [Frequently Asked Questions](https://uraniumfever.net/docs/frequentlyaskedquestions) for a list of initial troubleshooting steps for common installation errors **PRIOR** to requesting support.
:::

:::warning Reminder
Let the installation **FINISH COMPLETELY** prior to starting the following sections.
:::

### <p align="center"> ![Creating a Clean Stock New Vegas Folder](https://github.com/user-attachments/assets/01abbcf8-4205-4629-a692-f97596b62d5b) </p>
:::tip Self-Contained
This is part two of a process that creates a **SELF-CONTAINED** installation that won't interfere with preexisting modded setups.
:::

#### Step 1: Creating the Clean Stock New Vegas Folder
- Navigate to the newly **reinstalled** `C:\[STEAM or GOG FILEPATH]\Fallout New Vegas` folder, **COPY** ***ALL*** of the contents (click inside the folder, press `Ctrl+A`, then `Ctrl+C`), and **PASTE** (`Ctrl+V`) them into the `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas` folder.

#### Step 2: Restoring Backups of Current Installs/Modded Instances
:::important
**SKIP** step 2 if **not** backing up another modded instance of Fallout: New Vegas.
:::
- After successfully creating the `Clean Stock New Vegas folder`, restore the files that were previously backed up.
  - Move your `Fallout New Vegas` folder from your desktop back into its origin in the `C:\[STEAM or GOG FILEPATH]` folder, selecting `Replace` when prompted.
  - Move your `FalloutNV` folder from your desktop back into its origin in the `C:\Users\[USERNAME]\Documents\My Games` folder, selecting `Replace` when prompted.

#### Step 3: Reviewing the Files in the Clean Stock New Vegas Folder
- The clean `[NoDelete] Stock New Vegas` folder should now contain the following files. If **EXTRA** files **NOT INCLUDED** in the following screenshots are present, **DELETE** the `[NoDelete] Stock New Vegas` folder, repeat [Installing Uranium Fever](https://uraniumfever.net/docs/setupinstructions#-installing-uranium-fever-), then start this section over.

:::note
Some of the `GECK` files or `SSCE5432.dll` may be missing. This is normal and will not negatively impact the installation.
:::

  - Steam - `[NoDelete] Stock New Vegas` file contents:

    ![Steam Stock](https://github.com/user-attachments/assets/a8b535fa-3c46-4bcb-92a3-adf1f479a5c6)
  - GOG - `[NoDelete] Stock New Vegas` file contents:

    ![GOG Stock](https://github.com/user-attachments/assets/4076bc90-cc20-4ef8-8af3-c1767a720abe)

:::danger Extra Files
Extra files beyond those included in the above screenshots indicate unsuccessful creation of a clean `[NoDelete] Stock New Vegas` and will prevent the game from launching.
:::

### <p align="center"> ![Generating Fresh INI Files](https://github.com/user-attachments/assets/db4eb7b0-0231-4710-9e37-9a806fcaba45) </p>
- Launch Fallout: New Vegas from `Steam/GOG`.
- Click `OK` when prompted with `Detecting Video Hardware`.
- Close the launcher.
- Repeat this process for Fallout 3.

### <p align="center"> ![Launching Mod Organizer 2 (MO2)](https://github.com/user-attachments/assets/b40dea42-3d9b-4de3-9819-91e21eaf7883) </p>
- Launch `ModOrganizer.exe` from `C:\Modding\Uranium Fever`.
- If prompted that `FalloutNV_lang.esp` was found, select `Yes`.
- If prompted to `register to handle nxm links`, select `Yes`.

### <p align="center"> ![Configuring Game Settings](https://github.com/user-attachments/assets/a30e31cc-4ca9-436a-8e07-b7ac84798d7b) </p>

- In the top-right corner of MO2, open the drop-down menu labeled `Uranium Fever` and select `Configuring Game Settings`.
- Click `Run`.

	![Configuring Game Settings](https://github.com/user-attachments/assets/f36d012c-9100-46d4-aea2-e90ea876b4bb)

- Navigate to `Options` and select the `Ultra Preset`.
	- For weaker machines or performance concerns, select the `Very High` preset, though this reduces visual quality.
- Uncheck the `Windowed` option if checked and select your monitor's resolution.
	- If your monitor's resolution is unavailable, manually set it by opening MO2's INI editor, navigating to the `Falloutprefs.ini` tab, and adjusting `iSize W` and `iSize H` under the `Display` section to match your screen's width and height.
- Click `OK` and close the launcher.

	![Game Settings](https://github.com/user-attachments/assets/7b3de77d-03f8-4f86-82b2-8411b5f98dd0)

:::tip Steam Polish-Czech-Russian (PCR) Version
- Open `executable settings` ![352871292-1de0e254-e1a2-4d2a-bac2-df9630e0677b](https://github.com/user-attachments/assets/744ae726-8c62-452c-8bd5-a0f75515d083).
- Select `Configuring Game Settings`, check the `Overwrite Steam AppID` box, enter `22490` in the corresponding field, and click `Apply`.

 	![PCR](https://github.com/user-attachments/assets/2d0ecd75-7a56-4f02-a902-dede6edf5120)
:::

:::danger Configuring Game Settings Crashes
Refer to [Frequently Asked Questions](https://uraniumfever.net/docs/frequentlyaskedquestions) for common troubleshooting steps before requesting support.
:::

### <p align="center"> ![Installing Tale of Two Wastelands (TTW)](https://github.com/user-attachments/assets/aedc9b9f-a40d-448f-8f70-0a0b2c1bb9ea) </p>

:::danger Required Mod
:::

- Download the [Tale of Two Wastelands Installer](https://mod.pub/ttw/133/files) and extract the archive.
- Open the extracted `Tale of Two Wastelands Installer` folder. Right-click `TTW Install.exe` and select `Run as Administrator`.
- Verify that the `Fallout 3` file path matches your Steam/GOG Fallout 3 installation path.
- Copy (`Ctrl+C`) `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, changing the Root Directory path if necessary, and paste (`Ctrl+V`) it into the `Fallout New Vegas` file path.
- Copy (`Ctrl+C`) `C:\Modding\Uranium Fever\mods\[NoDelete] [DB] Tale of Two Wastelands (TTW)`, changing the Root Directory path if necessary, and paste (`Ctrl+V`) it into the `Tale of Two Wastelands Installation Path`.

:::warning Confirm the File Path
Ensure the installation file path is `C:\Modding\Uranium Fever\MODS\[NoDelete] [DB] Tale of Two Wastelands (TTW)`. Installing outside of the `mods` folder will prevent the game from launching.
:::

- Click `Install`.

	![TTW Install](https://github.com/user-attachments/assets/56978202-4fa0-4256-be05-d92dfda9b66c)

- Once the installation is complete and the confirmation screen appears, close the installer.

	![TTW Confirmation](https://github.com/user-attachments/assets/c30f933a-fce4-4715-a13e-1ca4f4d6037f)

:::tip Double Check
Navigate to `C:\Modding\Uranium Fever\mods`, right-click the `[NoDelete] [DB] Tale of Two Wastelands (TTW)` folder, select `Properties`, and verify that the folder size is exactly 17GB.

If not, delete the `[NoDelete] [DB] Tale of Two Wastelands (TTW)` and `[NoDelete] Stock New Vegas` folders, then repeat the steps starting from [Creating Clean Installs and Backups](https://uraniumfever.net/docs/setupinstructions#-creating-clean-installs-and-backups-).
:::

:::warning
The TTW Installer **MUST** run on the copy of Fallout: New Vegas inside the `[NoDelete] Stock New Vegas` folder. A prior TTW installation **CANNOT** be moved into the Uranium Fever TTW mod folder. The TTW installation process performs BSA decompression, binary patching, and sound file extension alterations, which are critical for a functional installation.
:::

### <p align="center"> ![Running 4GB Patcher](https://github.com/user-attachments/assets/1266e5e4-495f-438d-bcda-6bcaa2465c19) </p>
- Navigate to `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas` and run `FNVpatch.exe`.
- A CMD prompt popup will appear, confirming `FalloutNV.exe patched!`. `FalloutNV_backup.exe` will also appear in the folder.

:::danger
Failure to run the 4GB Patch will result in a pink screen or crash when launching the game.
:::

### <p align="center"> ![Installing New Vegas Reloaded (NVR)](https://github.com/user-attachments/assets/017153a8-2c8e-444d-af1f-83ad452d0370) </p>
:::danger Required Mod
:::

- Navigate to [New Vegas Reloaded Discord Server](https://discord.com/invite/r8EFG5YGBj).
- Download the most recent release from the `Nightly Builds` channel in the `DEVELOPMENT` category.

	![image](https://github.com/user-attachments/assets/41a44610-eb6a-4f89-a918-8907f30466df)

:::warning
 **DO NOT** download the versions available in the Ready Builds or Testing channels.
:::

- Click the `Install a New Mod from Archive` icon in the top left corner of MO2 ![Install Mod from Archive](https://github.com/user-attachments/assets/01905765-0046-43f4-965d-207d8d4ca8be), select the downloaded `NVR archive` from the `Downloads` folder, and name it `[NoDelete] [VLQ] [LQ] - New Vegas Reloaded (NVR)`.
- Select `Replace` when prompted `Mod Exists`.

  ![Replace](https://github.com/user-attachments/assets/797e3ea3-0b16-4a70-a902-e65bae4a3767)

:::note Updating New Vegas Reloaded
When instructed to update the mod, simply repeat these steps.
:::

### <p align="center"> ![Installing on Linux](https://github.com/user-attachments/assets/7b47c7e4-90d9-4d60-a29c-3d8b8aea5af6) </p>
<details><summary>
Expand
</summary>

Linux inherently requires above average operating system knowledge and troubleshooting capability. As such, these instructions are less specific. Support **WILL NOT** be provided for the Linux installation process.

- **Requirements**:
  - Windows - Access to Windows via a separate installation or a virtual machine.
  - Lutris, Libstrangle, Steam, and SteamTinkerLaunch.

- **Instructions**:
  - Follow all of the above installation instructions **ON WINDOWS**.
  - Copy the `C:\Modding\Uranium Fever` folder to a temporary location on Linux.
  - Open Lutris, click the `plus arrow`, then search for and install Fallout: New Vegas.
    - Take note of the installation location.
    - Test Fallout: New Vegas to ensure it functions prior to proceeding.
  - Install MO2 via `SteamTinkerLaunch`.
  - Locate the SteamTinkerLaunch installation of MO2 and copy its `wine prefix folder` over to Lutris **WITHOUT** overwriting any files.
  - In Lutris, right click `Fallout New Vegas`, `duplicate its folder`, and name it `Uranium Fever`.
  - Open the `Uranium Fever installation winetricks`, click on `install a dll/component`, and `add lavfilters` and `vcrun2022`. Then, `enable fontsmooth-rgb` in winetricks' settings.
  - Move your Uranium Fever folder into the `Fallout New Vegas wine prefix folder`, preferably next to the `Fallout New Vegas` folder.
  - Right click the `Uranium Fever` profile and:
    - In the `Runner Options` tab, change the runner to `wine-ge`.
    - In the `Game Options` tab, `change the executable path` to the `modorganizer.exe` in the `Uranium Fever` folder.
    - In the `System Options` tab, navigate to `environment tables` and `delete all entries`, instead adding `DXVK_STATE_CACHE disable`. **IF** using an AMD GPU with RADV drivers, also add `RADV_DEBUG noatocdithering`.
  - In command prefix, type `strangle 60`.
  - Launch Uranium Fever through Lutris to open MO2.
  - In MO2:
    - In the MO2 settings, navigate to `Paths`, then `Managed Games`. Ensure this path reflects the `Stock New Vegas` folder.
    - Change the `Executable Path` for `Uranium Fever Launcher` and `Uranium Fever` to reflect the corresponding executables in the Stock New Vegas folder.
    - Open `falloutcustom.ini` and `add iPresentInterval=0 under [Display]`.
  - Repeat the [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions#-configuring-game-settings-) section of the Windows installation instructions.
  - The game should now launch appropriately. Prior to starting a new game, open settings, then `Tweaks`, and `disable No Pip-Boy on Alt Tab`.

**Caveats**:
- MO2's `Nexus Handler` does not work. As Uranium Fever is updated, corresponding updates will need to be installed manually.
- Double clicking on a mod in MO2 causes MO2 to freeze. Because of this, mods must be edited manually from explorer.
- If problems are encountered, launch Lutris with debug output via the terminal by typing in `lutris -d`.
</details>

### <p align="center"> ![Disabling Base Address Randomization](https://github.com/user-attachments/assets/0685f415-9655-461e-9a58-5cc843299659) </p>
:::tip Why?
This step can prevent unforeseen crashes.
:::

- Open `Windows Security` from the `Start Menu`.
- Open `App & Browser Control` from the left sidebar.
- Open `Exploit Protection Settings` under `Exploit Protection`.
- Set `Force Randomization for Images (Mandatory ASLR)` to `Use Default (Off)`.

  ![Base Address](https://github.com/user-attachments/assets/3a1fcb3d-8bee-4aa6-a394-ece70234160a)

### <p align="center"> ![Disabling DXVK Cache Storage](https://github.com/user-attachments/assets/2cc79209-9690-4c95-9cc0-e9c83d6927df) </p>
:::tip Why?
Disabling DXVK Cache Storage prevents memory-related crashes by halting the creation of the DXVK cache.
:::

- Press the `Windows` button.
- Search for `Env`, then select `Edit the system environmental variables`.
- In the dialog box, click `Environmental Variables`.
- Under `User variables for USER NAME`, click `New`.
- Enter `DXVK_STATE_CACHE` in the `Variable name` field.
- Enter `disable` in the `Variable value` field.
- Click `OK` and exit the `Environmental Variables` window.

  ![Cache](https://github.com/user-attachments/assets/6bb4cd54-1c6f-4e91-b3ff-006cd95576f7)

- Delete any existing DXVK Cache:
  - **Steam Users**:
    - Navigate to `Steam > steamapps > shadercache > 22380` and delete `DXVK_STATE_CACHE` if it exists.
  - **GOG Users**:
    - Navigate to `Uranium Fever > [NoDelete] Stock New Vegas > FalloutNV.dxvk-cache` and delete `DXVK_STATE_CACHE` if it exists.

- Restart your computer for changes to take effect.

### <p align="center"> ![Installing RivaTuner Statistics Server (RTSS)](https://github.com/user-attachments/assets/f83c6525-1de0-415e-bf59-88d03053bf07) </p>
:::tip Why?
FPS limiters make the game smoother by reducing rapid FPS fluctuations and preventing timescale desync bugs.
:::

- Download and install [RTSS](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download).
- Open the `System Tray` and click the `RTSS icon`.

  ![RTSS Icon](https://github.com/user-attachments/assets/f6542135-e257-4053-b6c7-b7c171024a7c)

- Press the green `Add` button and select `FalloutNV.exe` from `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`. Click `OK`.

  ![RTSS FNV](https://github.com/user-attachments/assets/306eecdd-482b-4011-a81b-51f0a95a8b3c)

- Select `FalloutNV.exe`.
- Set `Application Detection Level` to `Low`.
- Set `Framerate Limit` to `59.95`.

:::danger Exceeding a Framerate Limit of 59.95
Exceeding this value, even on powerful machines, can result in significantly increased stuttering. Exceeding 120 can result in timesync abnormalities.
:::

  ![RTSS Frame](https://github.com/user-attachments/assets/ab24c6ef-f166-4518-b2da-802d89d91c0a)

- Open the settings using the `Setup` button.
- Enable `Passive Waiting` and set `Framerate Limiter` to `Front Edge Sync`.
- Click `OK`, then **MINIMIZE** (not close) RTSS back to the System Tray.

  ![RTSS Setup](https://github.com/user-attachments/assets/5b269e84-f837-4014-abd4-31c3a6389fa1)

### <p align="center"> ![Nvidia Users - Applying Nvidia Profile](https://github.com/user-attachments/assets/4fbc4f77-c103-47e5-8bbd-9136172710c7) </p>
:::tip Why?
Enabling Flip Model (DXVK with DXGI) reduces latency and supports HDR and VRR.
:::

- Download the premade [Fallout: New Vegas Nvidia Driver Profile](https://performance.moddinglinked.com/files/FO-NvidiaProfile.nip).
- Download [Nvidia Profile Inspector](https://github.com/Orbmu2k/nvidiaProfileInspector/releases/download/2.4.0.8/nvidiaProfileInspector.zip) and extract the contents.
- Run `Nvidia Profile Inspector`, click `Import user defined profiles`, then select `Import Profiles`.

  ![Import Nvidia Profile](https://github.com/user-attachments/assets/976cfd96-b6ff-4c95-ac87-2b888c2dbaa2)

- Select `FNV-NvidiaProfile.nip` and click `Open`.

  ![Selecting Premade Nvidia Profile](https://github.com/user-attachments/assets/ad14fe39-3b9a-452e-8b99-e5ad65ccc3a8)

- Click `OK` on the `Profile Successfully Imported!` prompt.

  ![Nvidia Successfully Imported](https://github.com/user-attachments/assets/178cdbc0-cdf1-499c-bd7d-77aecc973e41)

- Click `Apply Changes`, then close the program.

  ![Apply Nvidia Profile](https://github.com/user-attachments/assets/3cf964e6-fb5d-4407-a0dc-16d0f45b90b7)

:::warning Driver Updates
Repeat this process after every Nvidia driver update.
:::

- Disable the `NVIDIA overlay` in the NVIDIA app settings, as it can reduce performance.

  ![NVIDIA Overlay](https://github.com/user-attachments/assets/284d36b6-6f22-4346-b93f-7e1b2edce48b)

### <p align="center"> ![Selecting a Uranium Fever Profile](https://github.com/user-attachments/assets/9dc22271-8ba5-4025-8171-1ab0260cd69f) </p>

- In MO2, select `Uranium Fever` from the dropdown menu, then choose a profile.

  ![UF Profile](https://github.com/user-attachments/assets/18d341e3-7c9d-49eb-b770-ca2ed36ea3c9)

  - **High Quality Profile**: Enables all mods and settings.
  - **Standard Quality Profile**: Disables several performance-intensive New Vegas Reloaded settings (e.g., shadow shaders, terrain parallax shader, and wetworld shader).
  - **Low Quality Profile**: Disables New Vegas Reloaded, Uranium Haze, and related mods.
  - **Very Low Quality Profile**: Further reduces settings and disables additional effect and lighting mods.
  - **Debugging Profile**: Minimal load order, only essential mods enabled.
 
### <p align="center"> ![Optional Mods](https://github.com/user-attachments/assets/ac08818b-a893-4d46-aa3f-77f40e0e3453) </p>

- Various optional mods with associated descriptions are bundled that the user can enable or disable without voiding support. When enabling or disabling an optional mod, ensure that all other similarly named mods are also enabled or disabled.
 
  ![OptionalSeparators](https://github.com/user-attachments/assets/976d0ff7-c70e-435f-83b7-fe3939ac1cfc)

	- <details><summary>
**Optional - Gameplay**:
</summary>
		- **3rd Person Camera Overhaul** - A comprehensive overhaul of the 3rd person camera with shoulder swapping, scope toggling, and smooth camera movement. May be enabled by 3rd person users, though 1st person is **HIGHLY** recommended for balance and animation considerations.
		- **Auto-Equip Weapon if Unarmed** - Auto-equips weapons that are picked up while unarmed. May be desirable to disable for unarmed character builds.
	  	- **Death, Reload, and Save Consequences** - Leveraged in Uranium Fever to impose a cost on reloading, with a goal of preventing [save scumming](https://blog.acer.com/en/discussion/911/what-is-save-scumming). Keeping this mod enabled is **HIGHLY** recommended.
	  	- **Mod Delivery** - Commission weapon mods for your equipped weapon from vendors. For further details on utilization, visit the [Mod Feature Reference List](https://uraniumfever.net/docs/modquickreference). Disabled by default because it is egregiously underutilized by users that are unaware of the associated functions.
	 	- **Pip-Boy Weapon Mod Vendor** - Enables purchase of weapon mods directly via the pipboy, but at a premium cost. For further details on utilization, visit the [Mod Feature Reference List](https://uraniumfever.net/docs/modquickreference). Disabled by default for balance and immersion considerations.
 		- **Vendor Radio** - Enables purchase of items directly via the pipboy, but at a premium cost. For further details on utilization, visit the [Mod Feature Reference List](https://uraniumfever.net/docs/modquickreference).
		- **Quick Start & Associated Addons - Uranium Fever Merge** - A merge of quick-start related mods. May be disabled by those who want to experience the Fallout 3 introduction sequence.
		- **Uranium Fever Hardercore** - Various settings that dramatically increases the difficulty of Uranium Fever. The mod includes the following changes:
  			- One perk is gained every 3 levels
  			- No perks are gained after being humbled (traveling to the Mojave Wasteland) until the player reaches their pre-humbled level.
  			- Less skill points are gained per level.
  			- Harsher loot scarcity settings.
  			- Hardcore need accumulation rate is doubled.
  			- Overencumbrance has a much more dramatic impact on movement speed.
  			- Sleeping will restore a much smaller amount of health. 
  			- Radiation resist effects are reduced by 50% unianimously.
  			- Bottled water must be boiled to become clean water.
  			- One follower can now be recruited at five permanent charisma, and two followers can be recruited at ten charisma.
  			- Pip-boy can no longer be used in combat.
  			- Fast travel now costs caps. This effect scales based on distance traveled.
  			- Time dilation is halved when using quick select menus.
  			- Weapon sway is increased when not meeting weapon requirements.
  			- Forced entry settings are more likely to break items in containers and door locks have more health.
  			- The Long Haul perk has been disabled, meaning the player can no longer fast travel when over encumbered.
  			- The ammo press can now only be used once.
<details>
	- 
	- <details><summary>
**Optional - Settings**:
</summary>
		- **Keybinds - F Activates, Q & E Lean** - Swaps the activate key to F and enables manual leaning on the Q and E keys.
		- **Stability - More Stable but Worse Performance** - Sacrifices a moderate amount of performance for stability. May be enabled by users with frequent crashes.
		- **Stability - Most Stable but Worst Performance** - Sacrifices a large amount of performance for stability. May be enabled by users with frequent crashes despite enabling `Stability - More Stable but Worse Performance`.
		- **Sound - Uranium Fever Main Menu Music** - Uranium Fever specific menu music.
		- **Tutorial - Uranium Fever Tutorial** - A Uranium Fever specific tutorial. May be disabled by those who have played the game before.
		- **UI - 16-10 Aspect Ratio Monitor Support** - Enables support for 16:10 monitors.
		- **UI - 21-9 Aspect Ratio Monitor (Ultrawide) Support** - Enables support for ultrawide (21:9) monitors.
		- **UI - 32-9 Aspect Ratio Monitor (Super Ultrawide) Support** - Enables support for super ultrawide (32:9) monitors.
<details>

### <p align="center"> ![Launching The Game](https://github.com/user-attachments/assets/3af8373b-7ec0-433a-8279-7dbf6d1c7bbd) </p>

- Launch the game via MO2. Launching from Steam, GOG, or the Uranium Fever Launcher will **NOT** launch the game with Uranium Fever enabled.
- If prompted that INIs are read-only, select `Clear the Read Only Flag`.

  ![Launch](https://github.com/user-attachments/assets/7713003d-0e46-45a3-aad4-ec2d21d5c446)

:::danger Crashing or Freezing During Game Launch
Overwolf is incompatible and will cause a launch crash.

For other sources of crashes, refer to [Frequently Asked Questions](https://uraniumfever.net/docs/frequentlyaskedquestions) for troubleshooting steps before requesting support.
:::

- After starting a new game, press `K` in the pause menu to view `Keybinds and Legend`. For more details, see the [Mod Feature Reference List](https://uraniumfever.net/docs/modquickreference).

:::warning Desktop Shortcuts
Do **NOT** create desktop shortcuts. This will cause load order abnormalities when updating Uranium Fever.
:::

### <p align="center"> ![Modders - Installing Geck](https://github.com/user-attachments/assets/e8904e66-cbe6-4563-9bd0-0bd6379a0bbc) </p>
:::tip Authors Only
This step is only necessary for mod authors.
:::

- Steam users:
	- Navigate to Steam and install `GECK - New Vegas Edition`.
 	- Navigate to `C:\[STEAM FILEPATH]\Fallout New Vegas` and move `SSCE5432.dll` into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`.
 	- Move `GECK.exe` from `C:\Modding\Uranium Fever` into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`.
  
- GOG users:
	- Move `GECK.exe` from `C:\Modding\Uranium Fever` into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.
