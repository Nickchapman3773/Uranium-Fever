---
title: Troubleshooting
hide_title: true
sidebar_label: Troubleshooting
---

# ![Banner Troubleshooting](https://github.com/user-attachments/assets/95f45159-0f7c-4a72-ae88-825327a70434)

:::tip
This page contains various Uranium Fever troubleshooting steps that should only be used when referenced by the [Frequently Asked Questions](https://uraniumfever.net/docs/main/faq) or Uranium Fever authors.
:::

### <p align="center"> ![Intel iGPU Users and GPUs Without Vulkan Support - Downgrading DXVK](https://github.com/user-attachments/assets/ab671005-d13d-46ce-9afd-6c448d2f8d03) </p>

:::warning Pre-Bundled DXVK
The latest version of DXVK comes included with Uranium Fever.

Intel iGPUs and older GPUs without Vulkan support are incompatible with the bundled version of DXVK and must instead use a downgraded version.
:::

- **Intel iGPU users:**
	- Navigate to the `C:\Modding\Uranium Fever\DXVK\DXVK 1.10.1` folder.
	- Move `d3d9.dll` and `dxvk.conf`into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

- **GPUs without Vulkan support:**
	- Navigate to the `C:\Modding\Uranium Fever\DXVK\DXVK 1.10.3` folder.
	- Move `d3d9.dll` and `dxvk.conf`into `C:\Modding\Uranium Fever\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

### <p align="center"> ![Disabling Steam Overlay](https://github.com/user-attachments/assets/2699ea51-e6f8-47ed-a6e7-fa04d2fe00aa) </p>
:::tip Why?
This process disables Steam Overlay, which causes crashes and worsen performance.
:::

- Navigate to the `Steam Root Folder` (where `steam.exe` is located).
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

:::warning
This step will need to be repeated each time Steam updates, which occurs each time time steam launches.

This CANNOT be done directly through the Steam settings. Even if disabled via Steam, the overlay still injects its DLL directly into the game, which can result in crashes. 
:::
