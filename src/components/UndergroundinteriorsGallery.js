import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/7e593fd9-fbd5-4884-a831-3395c95d053c", thumbnail: "https://github.com/user-attachments/assets/7e593fd9-fbd5-4884-a831-3395c95d053c" },
    { original: "https://github.com/user-attachments/assets/3a460a00-e4eb-4f5b-b11f-c311ec98249f", thumbnail: "https://github.com/user-attachments/assets/3a460a00-e4eb-4f5b-b11f-c311ec98249f" },
    { original: "https://github.com/user-attachments/assets/54809a43-b9bc-4f18-a601-85547c40a019", thumbnail: "https://github.com/user-attachments/assets/54809a43-b9bc-4f18-a601-85547c40a019" },
    { original: "https://github.com/user-attachments/assets/aecb3637-748e-4587-b55b-0ec653affb8d", thumbnail: "https://github.com/user-attachments/assets/aecb3637-748e-4587-b55b-0ec653affb8d" },
    { original: "https://github.com/user-attachments/assets/50aa13c5-726b-4ce7-bbb6-19df39601c00", thumbnail: "https://github.com/user-attachments/assets/50aa13c5-726b-4ce7-bbb6-19df39601c00" },
    { original: "https://github.com/user-attachments/assets/23fe3316-220f-451f-93c2-e43500855943", thumbnail: "https://github.com/user-attachments/assets/23fe3316-220f-451f-93c2-e43500855943" },
    { original: "https://github.com/user-attachments/assets/15dbb447-2605-4d2d-b547-d99cbf3751ac", thumbnail: "https://github.com/user-attachments/assets/15dbb447-2605-4d2d-b547-d99cbf3751ac" },
    { original: "https://github.com/user-attachments/assets/a4b11e2f-60e2-4851-91b5-49984993836d", thumbnail: "https://github.com/user-attachments/assets/a4b11e2f-60e2-4851-91b5-49984993836d" },
    { original: "https://github.com/user-attachments/assets/b9aeacb3-ef5b-4d10-a43d-0267ab30b4cd", thumbnail: "https://github.com/user-attachments/assets/b9aeacb3-ef5b-4d10-a43d-0267ab30b4cd" },
    { original: "https://github.com/user-attachments/assets/8b59f44a-c8a5-437a-84fa-9e7e218a8a43", thumbnail: "https://github.com/user-attachments/assets/8b59f44a-c8a5-437a-84fa-9e7e218a8a43" },
    { original: "https://github.com/user-attachments/assets/4ea59887-337b-4cc2-9536-e37a782d1fa6", thumbnail: "https://github.com/user-attachments/assets/4ea59887-337b-4cc2-9536-e37a782d1fa6" },
    { original: "https://github.com/user-attachments/assets/447436ec-91ca-46c5-b3a3-cd336d3f1678", thumbnail: "https://github.com/user-attachments/assets/447436ec-91ca-46c5-b3a3-cd336d3f1678" },
    { original: "https://github.com/user-attachments/assets/edc8da34-fb5c-4c9d-8bf2-538ba8604fa4", thumbnail: "https://github.com/user-attachments/assets/edc8da34-fb5c-4c9d-8bf2-538ba8604fa4" },
    { original: "https://github.com/user-attachments/assets/885c32c8-d2a5-4a75-b884-f08f1529c715", thumbnail: "https://github.com/user-attachments/assets/885c32c8-d2a5-4a75-b884-f08f1529c715" },
    { original: "https://github.com/user-attachments/assets/369cfe6d-ae3a-4532-ac2c-43951f8e4d48", thumbnail: "https://github.com/user-attachments/assets/369cfe6d-ae3a-4532-ac2c-43951f8e4d48" },
    { original: "https://github.com/user-attachments/assets/b50a0168-e0ac-4fc9-af27-d841f4366d44", thumbnail: "https://github.com/user-attachments/assets/b50a0168-e0ac-4fc9-af27-d841f4366d44" },
    { original: "https://github.com/user-attachments/assets/dd07e425-e14d-4385-9e34-4e557ef481b5", thumbnail: "https://github.com/user-attachments/assets/dd07e425-e14d-4385-9e34-4e557ef481b5" },
    { original: "https://github.com/user-attachments/assets/2e6e77f9-6e34-4e1b-9a8e-531630ae42cd", thumbnail: "https://github.com/user-attachments/assets/2e6e77f9-6e34-4e1b-9a8e-531630ae42cd" },
    { original: "https://github.com/user-attachments/assets/ebaf643b-e2a2-4273-b024-64b2a4683c21", thumbnail: "https://github.com/user-attachments/assets/ebaf643b-e2a2-4273-b024-64b2a4683c21" },
    { original: "https://github.com/user-attachments/assets/d7001b10-0014-4ecb-8e4b-92d0060a4b81", thumbnail: "https://github.com/user-attachments/assets/d7001b10-0014-4ecb-8e4b-92d0060a4b81" },
    { original: "https://github.com/user-attachments/assets/8f477782-61fb-486c-b4fe-84d549664b21", thumbnail: "https://github.com/user-attachments/assets/8f477782-61fb-486c-b4fe-84d549664b21" },
    { original: "https://github.com/user-attachments/assets/5d5e9936-3077-4408-9421-c5bc0d415b38", thumbnail: "https://github.com/user-attachments/assets/5d5e9936-3077-4408-9421-c5bc0d415b38" },
    { original: "https://github.com/user-attachments/assets/e8ef9cbb-b352-4c6e-980b-fcf02e985f9e", thumbnail: "https://github.com/user-attachments/assets/e8ef9cbb-b352-4c6e-980b-fcf02e985f9e" },
    { original: "https://github.com/user-attachments/assets/e8855701-42fc-42ce-9f40-bdc106606a40", thumbnail: "https://github.com/user-attachments/assets/e8855701-42fc-42ce-9f40-bdc106606a40" },
    { original: "https://github.com/user-attachments/assets/27da2047-b2c1-420b-bb90-88b9080334de", thumbnail: "https://github.com/user-attachments/assets/27da2047-b2c1-420b-bb90-88b9080334de" },
    { original: "https://github.com/user-attachments/assets/754ae67b-9dde-4db2-ba96-06b186c69841", thumbnail: "https://github.com/user-attachments/assets/754ae67b-9dde-4db2-ba96-06b186c69841" },
    { original: "https://github.com/user-attachments/assets/9e4bfae7-be0d-48c3-88a8-42f5dc0bae50", thumbnail: "https://github.com/user-attachments/assets/9e4bfae7-be0d-48c3-88a8-42f5dc0bae50" },
    { original: "https://github.com/user-attachments/assets/fd8c2051-bff3-4f7b-afd1-edf9838c8370", thumbnail: "https://github.com/user-attachments/assets/fd8c2051-bff3-4f7b-afd1-edf9838c8370" },
    { original: "https://github.com/user-attachments/assets/289fa6aa-8410-4606-a721-454540804434", thumbnail: "https://github.com/user-attachments/assets/289fa6aa-8410-4606-a721-454540804434" },
    { original: "https://github.com/user-attachments/assets/a698a619-0b0d-4da6-b526-04d930726163", thumbnail: "https://github.com/user-attachments/assets/a698a619-0b0d-4da6-b526-04d930726163" },
    { original: "https://github.com/user-attachments/assets/77f7a495-38d9-41f9-bf09-908c99a128be", thumbnail: "https://github.com/user-attachments/assets/77f7a495-38d9-41f9-bf09-908c99a128be" },
    { original: "https://github.com/user-attachments/assets/be5f4507-0909-408d-b5a4-6d72e900dc97", thumbnail: "https://github.com/user-attachments/assets/be5f4507-0909-408d-b5a4-6d72e900dc97" },
    { original: "https://github.com/user-attachments/assets/c5db0c81-192c-4261-9d92-e28558b74f54", thumbnail: "https://github.com/user-attachments/assets/c5db0c81-192c-4261-9d92-e28558b74f54" },
    { original: "https://github.com/user-attachments/assets/cdd6da61-eed9-407a-a5dc-7d8405a7e858", thumbnail: "https://github.com/user-attachments/assets/cdd6da61-eed9-407a-a5dc-7d8405a7e858" },
    { original: "https://github.com/user-attachments/assets/5013491e-5108-4e2e-8ed1-3c2a57b67965", thumbnail: "https://github.com/user-attachments/assets/5013491e-5108-4e2e-8ed1-3c2a57b67965" },
    { original: "https://github.com/user-attachments/assets/6ed4b4e2-accc-4052-9649-88d870d61c7e", thumbnail: "https://github.com/user-attachments/assets/6ed4b4e2-accc-4052-9649-88d870d61c7e" },
];

export default function UndergroundinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
