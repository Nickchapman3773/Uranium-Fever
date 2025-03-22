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
