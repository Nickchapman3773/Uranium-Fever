---
sidebar_position: 6
title: Setup Instructions
hide_title: true
sidebar_label: Setup Instructions
---

# ![Banner Setup Instructions](https://github.com/user-attachments/assets/71196e6c-b2cb-4ade-addf-7f2191cf2bb9)

### <p align="center"> ![Creating Necessary File Paths](https://github.com/user-attachments/assets/34a47045-6a1d-4c9d-bb94-8187f3694834) </p>
- Navigate to the `Root Directory` (e.g., `C:\`, `D:\`).
- Create a folder named `Modding` and open it.
- Create a folder named `Wabbajack`, **DO NOT** open it.
- Create another folder named `Uranium Fever` and open it.
- Create a folder named `downloads`.

:::important Double Check
Ensure these file paths exist, though the Root Directory may vary:
- `C:\Modding\Uranium Fever\downloads`
- `C:\Modding\Wabbajack`
:::

### <p align="center"> ![Downloading Wabbajack](https://github.com/user-attachments/assets/f7f009e8-df47-43b7-847b-7ca2d0dccaa3) </p>

- Download the [Wabbajack Installation file](https://www.wabbajack.org/).
- Move the downloaded `Wabbajack` file to `C:\Modding\Wabbajack`.
- Run `Wabbajack.exe` to install Wabbajack automatically.
- Close Wabbajack.

### <p align="center"> ![Manual Downloads](https://github.com/user-attachments/assets/ee90c955-9d97-4252-a50c-c897eac2b381) </p>
:::danger Required Mods
:::

- Download and run [Manual Downloads.bat](https://drive.google.com/file/d/11qu8i0fHgCYord0Tw6V3-5VmdY_j8rlj/view?usp=sharing), then click `Download anyway` on the two Google Drive links that open in your browser.
	- The `Downloads` folder will now contain:
		- `Ghouls`
		- `MMTV_Mobile_Truck_Base_Sorting_Addon_v1.0`
		- `Tammer's NIF-Bashed Armor Mega-Pack v4.2`
		- `FeralGhoulsHD`
		- `RRTV_CapitalWasteland_Hideouts_TTW-v2.0`
- **MOVE** all five downloaded archives into the `C:\Modding\Uranium Fever\downloads` folder. **DO NOT** extract them.

:::tip Missing Manual Downloads
Occasionally, the Manual Downloads.bat will fail. If this occurs, manually download the archives from the following links:
- [Ghouls](https://drive.usercontent.google.com/download?id=1NR506TBf_flkbwlhpyvNEEb1EX3MrUYv&export=download&authuser=0)
- [MMTV_Mobile_Truck_Base_Sorting_Addon_v1.0](https://drive.usercontent.google.com/download?id=1r1OCf0TY8t8jIWk5g7TYtJsrl85ABcEi&export=download&authuser=0)
- [Tammer's NIF-Bashed Armor Mega-Pack v4.2](https://drive.usercontent.google.com/download?id=1m3LUeY-z_Fm_S9MayG41ZUw-jgvrJkVu&export=download&authuser=0&confirm=t&uuid=b8babfed-6c98-4122-9533-103f5b5eeaff&at=APZUnTWo-M36dDLCed8dULigCLi9%3A1723978755909)
- [FeralGhoulsHD](https://drive.usercontent.google.com/download?id=1OYPU7JlcgZktNvz-hsdGYfkUF1ZV88m_&export=download&authuser=0)
- [RRTV_CapitalWasteland_Hideouts_TTW-v2.0](https://drive.usercontent.google.com/download?id=1MSlY3H4TsbJhBQ9NgGjrf4IhDSp12_fo&export=download&authuser=0&confirm=t&uuid=91c10101-6b5d-4913-b833-0c56fc2c5306&at=APZUnTWDzvRE9au0I7X0TLJ6B5mz%3A1723978675393)
:::

### <p align="center"> ![Creating Clean Installs and Backups](https://github.com/user-attachments/assets/b1e3bda9-ded4-410e-b34a-fc6e5a849e8e) </p>

- Navigate to the `game library folder` and **MOVE** the `Fallout New Vegas` folder to the desktop. Delete the `Fallout 3` folder.
	- This will be the Steam/GOG installation backup for the pre-existing modded instance.
 	- **IF** a separate modded instance is not installed, simply delete the `Fallout New Vegas` folder.
- Navigate to `C:\Users\USERNAME\Documents\My Games` and **MOVE** the `FalloutNV` folder to the desktop. Delete the `Fallout 3` folder.
	- This will be the settings and saves backup for the pre-existing modded instance.
 	- **IF** a separate modded instance is not installed, simply delete the FalloutNV folder.
- Uninstall both `Fallout: New Vegas` and `Fallout 3` in Steam/GOG (this step may already be completed automatically).
- Reinstall both `Fallout: New Vegas` and `Fallout 3` in Steam/GOG.
- These clean installs and backups will be further utilized in the [Creating a Clean Stock New Vegas Folder](https://uraniumfever.net/docs/setupinstructions#-creating-a-clean-stock-new-vegas-folder-) section of these instructions.

### <p align="center"> ![Installing Uranium Fever](https://github.com/user-attachments/assets/34c624af-f780-4666-987d-41a1359cf77f) </p>
- Run the `Uranium Fever.wabbajack` file (Currently linked in the [Uranium Fever Discord Updates channel](https://discord.com/channels/1247305852738736219/1248734738449960981)).
- `Target Modlist` will auto-populate with the filepath of the `Uranium Fever Installation file`.
- `Modlist Installation Location` must be changed to `C:\Modding\Uranium Fever`.
- `Resource Download Location` will auto-populate `C:\Modding\Uranium Fever\downloads`.
- Enable the `Overwrite Installation` checkbox.
  
	![Updating](https://github.com/user-attachments/assets/a77d43aa-1810-4603-b38c-200a9df2fdba)

- Begin the installation and accept the `Nexus Mods API request` when prompted.
- If you are not a Nexus Mods premium user, manually click download on each mod.
- When complete, Wabbajack will display a green, confirmatory `Installation Complete` screen.
- If a red `Installation Failed` screen appears, repeat the above steps.
- Close Wabbajack.

:::warning
Let the installation **FINISH** prior to starting the following sections.
:::

### <p align="center"> ![Creating a Clean Stock New Vegas Folder](https://github.com/user-attachments/assets/01abbcf8-4205-4629-a692-f97596b62d5b) </p>
:::tip Self-Contained
This process facilitates the creation of a **SELF-CONTAINED** installation that does not interfere with any other modded installation of Fallout: New Vegas.

**SKIP** step 2 if you have never played or modded Fallout 3 or Fallout: New Vegas before.
:::

- Step 1: Creating the Clean Stock New Vegas Folder
	- Navigate to the **CLEAN** `Fallout New Vegas` folder, which is located inside of the `game library folder`.
	- Copy **ALL** of the contents from inside of the `Fallout New Vegas` folder.
		- Click anywhere inside the `game library folder`, press `Ctrl+A` to highlight all files, then `Ctrl+C` to copy all files.
		- Click anywhere inside the `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas` folder and press `Ctrl+V` to paste the previously copied files.

- Step 2: Restoring Backups of Current Installs/Modded Instances
	- After successfully creating the `Clean Stock New Vegas folder`, `restore` the files that were previously backed up.
		- Move your `Fallout New Vegas` folder from your desktop back into the `platform installation folder`, selecting `Replace` when prompted.
		- Move your `FalloutNV` folder from your desktop back into `C:\Users\USERNAME\Documents\My Games`, selecting `Replace` when prompted.

- Step 3: Verifying Files in the Clean Stock New Vegas Folder
	- The clean `[NoDelete] Stock New Vegas` folder should now contain the following files (with or without the GECK files). If any **ADDITIONAL** files **NOT INCLUDED** in the following screenshots are present within this folder, **DELETE** the `[NoDelete] Stock New Vegas` folder, re-run the [Installing Uranium Fever](https://uraniumfever.net/docs/setupinstructions#-installing-uranium-fever-) step, then start this section over.
		- Steam - `[NoDelete] Stock New Vegas` file contents:
   
 			![Steam Stock](https://github.com/user-attachments/assets/a8b535fa-3c46-4bcb-92a3-adf1f479a5c6)

 		- GOG - `[NoDelete] Stock New Vegas` file contents:

			![GOG Stock](https://github.com/user-attachments/assets/4076bc90-cc20-4ef8-8af3-c1767a720abe)

:::danger No Extra Files
Extra files inside of the Stock New Vegas folder will result in an error when launching the game. These extra files are most often a byproduct of prior modded instances or playthroughs of Fallout 3 or Fallout: New Vegas. As such, the above steps are **CRITICAL**.

`GECK` files and `SSCE5432.dll` may be missing and will not impact your installaion.
:::

### <p align="center"> ![Generating Fresh INI Files](https://github.com/user-attachments/assets/db4eb7b0-0231-4710-9e37-9a806fcaba45) </p>
- Launch Fallout: New Vegas from `Steam/GOG`.
- Click `OK` when prompted with `Detecting Video Hardware`.
- Close the launcher.
- Launch Fallout 3 from `Steam/GOG`.
- Click `OK` when prompted with `Detecting Video Hardware`.
- Close the launcher.

### <p align="center"> ![Launching Mod Organizer 2 (MO2)](https://github.com/user-attachments/assets/b40dea42-3d9b-4de3-9819-91e21eaf7883) </p>
- Launch `ModOrganizer.exe`, which is located inside of `C:\Modding\Uranium Fever`.
- If prompted that INIs are read only, select `Clear the Read Only Flag`.
- If prompted that `FalloutNV_lang.esp` was found, select `Yes`.
- If prompted to `register`, select `Yes`.

:::note
The prompts may not appear until launching the Uranium Fever launcher or launching the game, though the instructions remain the same.
:::

### <p align="center"> ![Configuring Game Settings](https://github.com/user-attachments/assets/a30e31cc-4ca9-436a-8e07-b7ac84798d7b) </p>
- In the top right corner of MO2, open the drop-down menu that says `Uranium Fever` and select `Uranium Fever Launcher`.
- Click `Run`.

	![Launcher](https://github.com/user-attachments/assets/8a7ef12f-4dd6-45a7-a5a8-629ff8bb0c57)

- Navigate to `Options` then select the `Ultra Preset`.
	- Those with weaker machines and concerns about performance can select the `Very High` preset, though this will come at the cost of visual quality.
- Uncheck the `Windowed` option, then select your monitor's `resolution`.
	- If your monitor's resolution is not present, this can be set manually by entering MO2's INI editor, navigating to the `Falloutprefs.ini` tab, and changing `iSize W` and `iSize H` in the `Display` section to reflect your monitor's screen width and height.
- Click `OK` and close the launcher.

	![Game Settings](https://github.com/user-attachments/assets/7b3de77d-03f8-4f86-82b2-8411b5f98dd0)

:::tip Steam PCR Users
Steam PCR users should navigate to the `executable settings` ![352871292-1de0e254-e1a2-4d2a-bac2-df9630e0677b](https://github.com/user-attachments/assets/744ae726-8c62-452c-8bd5-a0f75515d083), click `Uranium Fever Launcher`, check the `Overwrite Steam AppID` box, enter `22490` into the corresponding field, then click apply.
 	![PCR](https://github.com/user-attachments/assets/2d0ecd75-7a56-4f02-a902-dede6edf5120)
:::

### <p align="center"> ![Installing Tale of Two Wastelands (TTW)](https://github.com/user-attachments/assets/aedc9b9f-a40d-448f-8f70-0a0b2c1bb9ea) </p>
:::danger Required Mod
:::

- Download the [Tale of Two Wastelands Installer](https://mod.pub/ttw/133/files) and `extract the contents of the archive`.
- Open the extracted `Tale of Two Wastelands Installer` folder, right click `TTW Install.exe`, and select `Run as Administrator`.
- Verify that the `file path` for the `Fallout 3` folder matches your normal `Steam/GOG Fallout 3 installation path` (this should be auto-configured).
- **CHANGE** the `Fallout New Vegas file path` to `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`.
- **CHANGE** the `Tale of Two Wastelands Installation Path` to `C:\Modding\Uranium Fever\mods\[NoDelete] Tale of Two Wastelands`.
- Click `Install`.

	![TTW Install](https://github.com/user-attachments/assets/a0909811-6b04-4341-ba11-c49e0e4a636d)

- Once complete and the confirmation screen is visualized, close the Installer.

	![TTW Confirmation](https://github.com/user-attachments/assets/db06e252-7768-460c-80a8-8dcea7dafa1e)

:::tip Double Check
Navigate to `C:\Modding\Uranium Fever\mods`, right click the `[NoDelete] Tale of Two Wasteland` folder, select `Properties`, and verify that the installation size is exactly 17GB.

If this is not the case, delete the `[NoDelete] Tale of Two Wasteland` and `[NoDelete] Stock New Vegas` folders, and repeat the above steps starting at the [Creating Clean Installs and Backups](https://uraniumfever.net/docs/setupinstructions#-creating-clean-installs-and-backups-) section.
:::

:::warning
The TTW Installer **MUST** be run on the copy of Fallout: New Vegas inside of the `[NoDelete] Stock New Vegas` folder. A prior TTW installation **CANNOT** be moved into the Uranium Fever TTW mod folder. This is because the TTW installation process performs BSA decompression, binary patching, and alteration of sound file extensions to base game files, which is a **REQUIREMENT** for a functional copy of TTW.
:::

### <p align="center"> ![Installing New Vegas Reloaded (NVR)](https://github.com/user-attachments/assets/017153a8-2c8e-444d-af1f-83ad452d0370) </p>
:::danger Required Mod
:::

- Navigate to [TES Reloaded Discord Server](https://discord.com/invite/r8EFG5YGBj).
- Download the most recent release from the [Nightly Builds](https://discord.com/channels/344843935123898369/1077004762425348106) channel.

	![TES Nightly Builds](https://github.com/user-attachments/assets/a411a8b2-fb83-4270-9386-a26f2a4de02b)

- Click the `Install a New Mod from Archive` icon in the top left corner of MO2 ![Install Mod from Archive](https://github.com/user-attachments/assets/01905765-0046-43f4-965d-207d8d4ca8be).
- Select the `NewVegasReloaded.zip` from your `Downloads` folder.
- Name it `[NoDelete] NVR (PV)`.
- Select `Replace` when prompted `Mod Exists`.

	![Replace](https://github.com/user-attachments/assets/797e3ea3-0b16-4a70-a902-e65bae4a3767)

:::note Updating New Vegas Reloaded
When instructed to update the mod, simply repeat these steps.
:::

### <p align="center"> ![Running 4GB Patcher](https://github.com/user-attachments/assets/1266e5e4-495f-438d-bcda-6bcaa2465c19) </p>
- Navigate to `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`.
	- Run `FNVpatch.exe`. A CMD prompt popup will appear, confirming `FalloutNV.exe patched!`. `FalloutNV_backup.exe` will also appear in the folder.

:::danger
Failure to run the 4GB Patch will result in a pink screen and/or crash when launching the game.
:::

### <p align="center"> ![Installing on Linux](https://github.com/user-attachments/assets/7b47c7e4-90d9-4d60-a29c-3d8b8aea5af6) </p>
<details><summary>
Expand
</summary>

Linux inherently requires above average operating system knowledge and troubleshooting capability. As such, these instructions are less specific. Support **WILL NOT** be provided for the Linux installation process.

- Requirements:
	- Windows - Access to Windows via a separate installation or a virtual machine.
 	- Lutris, Libstrangle, Steam, and SteamTinkerLaunch.

- Instructions: 
	- Follow the Uranium Fever Installation Instructions **ON WINDOWS** up until the [Disable Base Address Randomization](https://uraniumfever.net/docs/setupinstructions#-disabling-base-address-randomization-) section.
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
		- In the `Runner Options` tab and change the runner to `wine-ge`.
 		- In the `Game Options` tab and `change the executable path` to the `modorganizer.exe` in the `Uranium Fever` folder.
  		- In the `System Options` tab, navigate to `environment tables` and `delete all entries`, instead adding `DXVK_STATE_CACHE disable`. **IF** using an AMD GPU with RADV drivers, also add `RADV_DEBUG noatocdithering`.
	- In command prefix, type `strangle 60`.
	- Launch Uranium Fever through Lutris to open MO2.
	- In MO2:
		- In the MO2 settings, navigate to `Paths`, then `Managed Games`. Ensure this path reflects the `Stock New Vegas` folder.
 		- Change the `Executable Path` for `Uranium Fever Launcher` and `Uranium Fever` to reflect the corresponding executables in the Stock New Vegas folder.
  		- Open `falloutcustom.ini` and `add iPresentInterval=0 under [Display]`.
	- Repeat the [Configuring Game Settings](https://uraniumfever.net/docs/setupinstructions#-configuring-game-settings-) section of the Windows installation instructions.
	- The game should now launch appropriately. Prior to starting a new game, open settings, then `Tweaks`, and `disable No Pip-Boy on Alt Tab`.

Caveats:
- MO2's `Nexus Handler` does not work. As Uranium Fever is updated, corresponding updates will need to be installed manually.
- Double clicking on a mod in MO2 causes MO2 to freeze. Because of this, mods must be edited manually from explorer.
- If problems are encountered, launch Lutris with debug output via the terminal by typing in `lutris -d`.
 </details>

### <p align="center"> ![Disabling Base Address Randomization](https://github.com/user-attachments/assets/0685f415-9655-461e-9a58-5cc843299659) </p>
:::tip Why?
This step can prevent unforeseen crashes.
:::

- Open `Windows Security` from the `Start Menu`.
- Open `App & Browser Control` in the left sidebar.
- Open `Exploit Protection Settings` under `Exploit Protection`.
- Set `Force Randomization for Images (Mandatory ASLR)` to `Use Default (Off)`.

	![Base Address](https://github.com/user-attachments/assets/3a1fcb3d-8bee-4aa6-a394-ece70234160a)

### <p align="center"> ![Creating Antivirus Exclusions](https://github.com/user-attachments/assets/21189acf-4d6a-47d4-bd02-2d1f0af8fd75) </p>
> :::tip Why?
> This process prevents Windows from blocking MO2 and associated mod files from loading.
 
- Open `Windows Security`.
- Open `Virus & Threat Protection`.
- Click `Manage Settings` under `Virus & Threat Protection Settings`.
- Scroll down and select `Add or Remove Exclusions` under `Exclusions`.
- `Add exclusions` for `C:\Modding\Uranium Fever` and `C:\Modding\Wabbajack`.

	![Exclusions](https://github.com/user-attachments/assets/383f5259-3236-4acb-b00a-ce57e895716e)

- This process will also need to be replicated for any third-party antivirus.

### <p align="center"> ![Disabling Steam Overlay](https://github.com/user-attachments/assets/2699ea51-e6f8-47ed-a6e7-fa04d2fe00aa) </p>
:::tip Why?
This process disables Steam Overlay, which has been known to cause crashes and worsen performance. 
:::

- Navigate to your `Steam Folder` (the same folder where `steam.exe` is).
- Right click `GameOverlayRenderer.dll` and open `properties`.
- Open the `security tab` and click `edit`.
- Click the `Deny` option under `Read & Execute` for every user.
- Click `Apply`, then `Yes`.
  
	![Steam Overlay 1](https://github.com/user-attachments/assets/49fdeabe-c964-4290-a28d-af6f06a9b1a9)

- In the same folder, right click `SteamOverlayVulkanLayer.dll` and open `properties`.
- Open the `security tab` and click `edit`.
- Click the `Deny` option under `Read & Execute` for every user.
- Click `Apply`, then `Yes`.

	![Steam Overlay 2](https://github.com/user-attachments/assets/0f84d294-f5f0-4a0d-9927-d0524785362f)

### <p align="center"> ![Intel iGPU Users and GPUs Without Vulkan Support - Downgrading DXVK](https://github.com/user-attachments/assets/ab671005-d13d-46ce-9afd-6c448d2f8d03) </p>

:::warning Pre-Bundled DXVK
The most recent version of DXVK comes bundled with Uranium Fever.

Intel iGPUs and older GPUs without Vulkan support are incompatible with the most recent version of DXVK and must be downgraded.
:::

- Intel iGPU users:
	- Navigate to the `Uranium Fever > DXVK` folder.
	- Move the `d3d9.dll` and `dxvk.conf` from the `DXVK 1.10.1` folder into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.
- GPUs without Vulkan support:
	- Navigate to the `Uranium Fever > DXVK` folder.
	- Move the `d3d9.dll` and `dxvk.conf` from the `1.10.3` folder into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

### <p align="center"> ![Disabling DXVK Cache Storage](https://github.com/user-attachments/assets/2cc79209-9690-4c95-9cc0-e9c83d6927df) </p>
:::tip Why?
DXVK Cache Storage is known to cause memory related crashes. This step disables the creation of the DXVK cache.
:::

- Press the `Windows button`.
- Type `Env` in the search bar and click `Edit the system environmental variables`.
- Click `Environmental Variables`.
- Click `New` under `User variables for USER NAME`.
- Type `DXVK_STATE_CACHE` into the `Variable name`.
- Type `disable` into the `Variable value`.
- Click `OK`.
- Exit `Environmental Variables`.

	![Cache](https://github.com/user-attachments/assets/6bb4cd54-1c6f-4e91-b3ff-006cd95576f7)

- Delete any existing DXVK Cache:
	- Steam Users:
		- Navigate to `Steam > steamapps > shadercache > 22380` and delete `DXVK_STATE_CACHE` if it exists.
  	- GOG Users:
  		- Navigate to `Uranium Fever > [NoDelete] Stock New Vegas > FalloutNV.dxvk-cache` and delete `DXVK_STATE_CACHE` if it exists.
- Restart your computer for this to take effect.

### <p align="center"> ![AMD Graphics Card Users - Installing RivaTuner Statistics Server (RTSS)](https://github.com/user-attachments/assets/53b53292-faf3-4115-9d92-f2e1d7f2c32a) </p>
:::tip Why?
FPS limiters make the game feel smoother by preventing rapid FPS fluctuations and also prevent timescale desync bugs.

RTSS is the required FPS limiter for AMD users. Special K is incompatible with modern AMD GPU drivers.
:::

- Install and launch [RTSS](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download).
- Open the `System Tray` and click the `RTSS icon`.

	![RTSS Icon](https://github.com/user-attachments/assets/f6542135-e257-4053-b6c7-b7c171024a7c)

- Press the green `Add` button and select `FalloutNV.exe` from the `Steam/GOG directory` **OR** from `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, then click `ok`.
	- RTSS will detect any running instance of `FalloutNV.exe` regardless of the file path origin.

 	![RTSS FNV](https://github.com/user-attachments/assets/306eecdd-482b-4011-a81b-51f0a95a8b3c)

- Select `FalloutNV.exe`.
- Set `Application Detection Level` to `Low`.
- Set `Framerate Limit` to `59.95`.
	- The set framerate should be consistently achievable without significant sustained drops. Some users with powerful GPUs may increase this value, though the framerate limit should not exceed more than 0.05 less than the refresh rate of the associated monitor.

	![RTSS Frame](https://github.com/user-attachments/assets/ab24c6ef-f166-4518-b2da-802d89d91c0a)

- Enter the settings using the `Setup` button.
- Scroll down and enable `Passive Waiting`.
- Set `Framerate Limiter` to `Front Edge Sync`.
- Select `OK` then **MINIMIZE** (not close) RTSS back to the System Tray.

	![RTSS Setup](https://github.com/user-attachments/assets/5b269e84-f837-4014-abd4-31c3a6389fa1)

### <p align="center"> ![NVIDIA Graphics Card Users - Installing Special K](https://github.com/user-attachments/assets/d53e2ccc-df55-4a21-b765-e48a8939c1ca) </p>
:::tip Why?
FPS limiters make the game feel smoother by preventing rapid FPS fluctuations and also prevent timescale desync bugs.

Special K is the required FPS limiter for NVIDIA users. RTSS will result in inappropriate configuration and memory related crashes with NVIDIA GPUs.
:::

- `Navigate` to the NVIDIA app settings and `turn off` the `NVIDIA overlay`, otherwise it will cause a black screen followed by a game crash when paired with Special K.

	![NVIDIA Overlay](https://github.com/user-attachments/assets/284d36b6-6f22-4346-b93f-7e1b2edce48b)

- Download [Special K](https://performance.moddinglinked.com/files/SpecialK.7z).
- Extract the downloaded archive into the `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas` folder.
- `Launch` Uranium Fever (launch instructions are provided below).
- Select `Yes` when prompted to `enable DXVK support/vulkan bridge`, then relaunch the game.
- Press `Ctrl + Shift + Backspace` to enter the `Special K Control Panel`.
- Under the `Framerate Limiter`, `check` the `Enable Framerate Limit` checkbox.
  
	![SK1](https://github.com/user-attachments/assets/860a3559-3335-465d-b6be-b9ad20a59ced)

- Right click `the FPS Limit Bar`, which is located just to the right of the Framerate Limit text. This will open a submenu.
- In the submenu, `check` the `Latent Sync` checkbox.
- In the `Scan Mode` dropdown, select your `monitor's refresh rate`.
  
	![SK2](https://github.com/user-attachments/assets/f013262c-26b3-423a-8650-6378ed05f7f7)

- Double Left-Click the `FPS Limit Bar`, `enter 59.995`, and press enter.
	- The set framerate should be consistently achievable without significant sustained drops. Some users with powerful GPUs may increase this value, though the framerate limit should not exceed more than 0.05 less than the refresh rate of the associated monitor.
   
	![SK4](https://github.com/user-attachments/assets/4bbfbd64-f714-4cf2-bc3e-b180865c3824)

- For instructions on configuring Latent Sync or enabling V-Sync or Variable Refresh Rate, please reference the [Special K section of Wall's Performance Guide](https://performance.moddinglinked.com/falloutnv.html#RecommendedLimiters), as this is beyond the scope of Uranium Fever configuration.
	- G-Sync will be compatible without changing any settings.

### <p align="center"> ![Launching The Game](https://github.com/user-attachments/assets/3af8373b-7ec0-433a-8279-7dbf6d1c7bbd) </p>
- The game **CANNOT** be launched outside of MO2. Launching from Steam or GOG **WILL FAIL** to launch Uranium Fever.
- In MO2, select `Uranium Fever` from the dropdown list in the top right, then click `run`.
- After starting a new game, open the pause menu and `press K` to see the `Keybinds and associated legend`. More details are included below in the Mod Feature Quick Reference List section.

	![Launch](https://github.com/user-attachments/assets/7713003d-0e46-45a3-aad4-ec2d21d5c446)

:::danger Desktop Shortcuts
**DO NOT** create a desktop shortcut. If run after updating Uranium Fever, this will cause your load order to be scrambled.
:::

### <p align="center"> ![Optional - Storage Space Clean Up](https://github.com/user-attachments/assets/d39fc256-33a6-44a8-b071-ec67a83c56e4) </p>
:::tip Optional
This is an optional step to remove ~50GB of unneeded archives from your computer. Deleted archives **WILL** need to be redownloaded when updating Uranium Fever **IF** the original mod or the associated assets have been **ALTERED** in any way.
:::

- Confirm that the game launches and runs appropriately **BEFORE** following this step.
- Navigate to the `C:\Modding\Uranium Fever` folder and delete the `downloads` folder.

### <p align="center"> ![Optional - Enabling the Performance Profile](https://github.com/user-attachments/assets/121f49bc-ccec-4028-9bb9-588826b8ee43) </p>
:::tip Optional
This is an **OPTIONAL** step for those with weaker computers. Use the Performance Profile to gain better performance in exchange for worse visuals. This profile disables Real Time Reflections, New Vegas Reloaded, and other associated mods.
:::

- In MO2, select `Uranium Fever` from the large dropdown list in the top middle, then click the `Uranium Fever Performance` Profile.

	![Performance](https://github.com/user-attachments/assets/388b653f-2e6f-4374-bc17-85e71e4d8921)
