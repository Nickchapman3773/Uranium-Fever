import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2", thumbnail: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2" },
    { original: "https://github.com/user-attachments/assets/ef18e6c2-4ece-42b6-a1c2-48f7c68b5246", thumbnail: "https://github.com/user-attachments/assets/ef18e6c2-4ece-42b6-a1c2-48f7c68b5246" },
    { original: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462", thumbnail: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462" },
    { original: "https://github.com/user-attachments/assets/bb450084-8aa8-4198-a8b8-346a7deac9d6", thumbnail: "https://github.com/user-attachments/assets/bb450084-8aa8-4198-a8b8-346a7deac9d6" },
    { original: "https://github.com/user-attachments/assets/f2ea8977-3696-416a-ba1a-9ac9d769a4ab", thumbnail: "https://github.com/user-attachments/assets/f2ea8977-3696-416a-ba1a-9ac9d769a4ab" },
    { original: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2", thumbnail: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2" },
    { original: "https://github.com/user-attachments/assets/9e4284c1-5f8e-4e0e-a846-90b0d32518ac", thumbnail: "https://github.com/user-attachments/assets/9e4284c1-5f8e-4e0e-a846-90b0d32518ac" },
    { original: "https://github.com/user-attachments/assets/208ab7fc-717d-4bf0-83d6-be0e6a1ca20f", thumbnail: "https://github.com/user-attachments/assets/208ab7fc-717d-4bf0-83d6-be0e6a1ca20f" },
    { original: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282", thumbnail: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282" },
    { original: "https://github.com/user-attachments/assets/7e5d7bda-8738-4b1b-9f35-18a31687a924", thumbnail: "https://github.com/user-attachments/assets/7e5d7bda-8738-4b1b-9f35-18a31687a924" },
    { original: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971", thumbnail: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971" },
    { original: "https://github.com/user-attachments/assets/0654ebde-616a-4cd9-bcad-b1d2e8c20160", thumbnail: "https://github.com/user-attachments/assets/0654ebde-616a-4cd9-bcad-b1d2e8c20160" },
    { original: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e", thumbnail: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e" },
    { original: "https://github.com/user-attachments/assets/7b405536-040f-46a6-b6e8-a9d2d34a7a79", thumbnail: "https://github.com/user-attachments/assets/7b405536-040f-46a6-b6e8-a9d2d34a7a79" },
    { original: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae", thumbnail: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae" },
    { original: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c", thumbnail: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c" },
    { original: "https://github.com/user-attachments/assets/b9c006d6-01ce-4f20-8693-02d3d05fdb9c", thumbnail: "https://github.com/user-attachments/assets/b9c006d6-01ce-4f20-8693-02d3d05fdb9c" },
    { original: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d", thumbnail: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d" },
    { original: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e", thumbnail: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e" },
    { original: "https://github.com/user-attachments/assets/b70e4c21-9b81-4d97-af40-b5edb90e5345", thumbnail: "https://github.com/user-attachments/assets/b70e4c21-9b81-4d97-af40-b5edb90e5345" },
    { original: "https://github.com/user-attachments/assets/026f3b6e-c955-4a57-b048-941e5a76ac97", thumbnail: "https://github.com/user-attachments/assets/026f3b6e-c955-4a57-b048-941e5a76ac97" },
    { original: "https://github.com/user-attachments/assets/8fa57980-4abc-4550-b488-588119180cb3", thumbnail: "https://github.com/user-attachments/assets/8fa57980-4abc-4550-b488-588119180cb3" },
    { original: "https://github.com/user-attachments/assets/3f6d8e7c-d052-4c8f-9756-52253e73cfd4", thumbnail: "https://github.com/user-attachments/assets/3f6d8e7c-d052-4c8f-9756-52253e73cfd4" },
    { original: "https://github.com/user-attachments/assets/edd6da22-cdcf-45ac-ad78-9ce67af3e801", thumbnail: "https://github.com/user-attachments/assets/edd6da22-cdcf-45ac-ad78-9ce67af3e801" },
    { original: "https://github.com/user-attachments/assets/7a5f9be1-9e0e-470d-9552-82c82a397ee1", thumbnail: "https://github.com/user-attachments/assets/7a5f9be1-9e0e-470d-9552-82c82a397ee1" },
    { original: "https://github.com/user-attachments/assets/b311a027-d0a6-474e-b030-f0a498d05690", thumbnail: "https://github.com/user-attachments/assets/b311a027-d0a6-474e-b030-f0a498d05690" },
    { original: "https://github.com/user-attachments/assets/3b202c8a-ef37-432a-95bc-e8d27d79a627", thumbnail: "https://github.com/user-attachments/assets/3b202c8a-ef37-432a-95bc-e8d27d79a627" },
    { original: "https://github.com/user-attachments/assets/5d6044d5-2730-4a3e-a396-9a14d10f4f55", thumbnail: "https://github.com/user-attachments/assets/5d6044d5-2730-4a3e-a396-9a14d10f4f55" },
];

export default function HonestheartsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
