![FeverScreen1159](https://github.com/user-attachments/assets/b738e006-93b1-46af-aa1b-152f3141d6ad)import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2", thumbnail: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2" },
    { original: "https://github.com/user-attachments/assets/784eb2d7-5c87-429e-b67a-b2a319f4626c", thumbnail: "https://github.com/user-attachments/assets/784eb2d7-5c87-429e-b67a-b2a319f4626c" },
    { original: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462", thumbnail: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462" },
    { original: "https://github.com/user-attachments/assets/1e901c87-63ea-4c72-affc-54b75693b825", thumbnail: "https://github.com/user-attachments/assets/1e901c87-63ea-4c72-affc-54b75693b825" },
    { original: "https://github.com/user-attachments/assets/451d24ed-2d68-4d24-818c-89a71bd4b69e", thumbnail: "https://github.com/user-attachments/assets/451d24ed-2d68-4d24-818c-89a71bd4b69e" },
    { original: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2", thumbnail: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2" },
    { original: "https://github.com/user-attachments/assets/8763c043-66ef-4292-af11-babe10ccc027", thumbnail: "https://github.com/user-attachments/assets/8763c043-66ef-4292-af11-babe10ccc027" },
    { original: "https://github.com/user-attachments/assets/b429b72d-4d39-42b8-9fb9-5bd4c0d031c3", thumbnail: "https://github.com/user-attachments/assets/b429b72d-4d39-42b8-9fb9-5bd4c0d031c3" },
    { original: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282", thumbnail: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282" },
    { original: "https://github.com/user-attachments/assets/c645b7a2-031d-4c22-8bcc-09feed6380c4", thumbnail: "https://github.com/user-attachments/assets/c645b7a2-031d-4c22-8bcc-09feed6380c4" },
    { original: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971", thumbnail: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971" },
    { original: "https://github.com/user-attachments/assets/3cdd3685-5d96-4d31-b926-9d4ec9a3bbf8", thumbnail: "https://github.com/user-attachments/assets/3cdd3685-5d96-4d31-b926-9d4ec9a3bbf8" },
    { original: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e", thumbnail: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e" },
    { original: "https://github.com/user-attachments/assets/a0fc0ba1-1964-435b-a89a-bc63f43c3caa", thumbnail: "https://github.com/user-attachments/assets/a0fc0ba1-1964-435b-a89a-bc63f43c3caa" },
    { original: "https://github.com/user-attachments/assets/e64c47b7-dace-4092-988d-82d08b36cf51", thumbnail: "https://github.com/user-attachments/assets/e64c47b7-dace-4092-988d-82d08b36cf51" },
    { original: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae", thumbnail: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae" },
    { original: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c", thumbnail: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c" },
    { original: "https://github.com/user-attachments/assets/d26a5dc6-2caa-4a35-a606-9f3eac72af5c", thumbnail: "https://github.com/user-attachments/assets/d26a5dc6-2caa-4a35-a606-9f3eac72af5c" },
    { original: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d", thumbnail: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d" },
    { original: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e", thumbnail: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e" },
    { original: "https://github.com/user-attachments/assets/e0098d52-2ac7-4ef1-96ca-09e0ece0c056", thumbnail: "https://github.com/user-attachments/assets/e0098d52-2ac7-4ef1-96ca-09e0ece0c056" },
    { original: "https://github.com/user-attachments/assets/af9685ad-f51a-417b-bdc2-015c6e2a42a3", thumbnail: "https://github.com/user-attachments/assets/af9685ad-f51a-417b-bdc2-015c6e2a42a3" },
    { original: "https://github.com/user-attachments/assets/8a7b2786-fa1c-417d-8c32-47f06aa4aaa4", thumbnail: "https://github.com/user-attachments/assets/8a7b2786-fa1c-417d-8c32-47f06aa4aaa4" },
    { original: "https://github.com/user-attachments/assets/49bd1cff-06ea-4c2b-bf40-37db0f7d2746", thumbnail: "https://github.com/user-attachments/assets/49bd1cff-06ea-4c2b-bf40-37db0f7d2746" },
    { original: "https://github.com/user-attachments/assets/0add5525-a820-4a60-bbba-9dff8c8224f1", thumbnail: "https://github.com/user-attachments/assets/0add5525-a820-4a60-bbba-9dff8c8224f1" },
    { original: "https://github.com/user-attachments/assets/d0290737-1f79-48c4-bc89-772bf49e5e43", thumbnail: "https://github.com/user-attachments/assets/d0290737-1f79-48c4-bc89-772bf49e5e43" },
    { original: "https://github.com/user-attachments/assets/1b2701c4-783b-4e17-9fa7-abe73babf2fd", thumbnail: "https://github.com/user-attachments/assets/1b2701c4-783b-4e17-9fa7-abe73babf2fd" },
    { original: "https://github.com/user-attachments/assets/36919606-8a4d-4aaf-be34-b94a18d14fbb", thumbnail: "https://github.com/user-attachments/assets/36919606-8a4d-4aaf-be34-b94a18d14fbb" },
    { original: "https://github.com/user-attachments/assets/5e63355b-453c-45c9-bfc4-5c53af6b187a", thumbnail: "https://github.com/user-attachments/assets/5e63355b-453c-45c9-bfc4-5c53af6b187a" },
    { original: "https://github.com/user-attachments/assets/a5c9253d-a2b2-46f6-9de6-2819b9dad594", thumbnail: "https://github.com/user-attachments/assets/a5c9253d-a2b2-46f6-9de6-2819b9dad594" },
];

export default function HonestheartsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
