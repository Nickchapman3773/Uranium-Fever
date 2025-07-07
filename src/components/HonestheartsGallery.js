import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2", thumbnail: "https://github.com/user-attachments/assets/83109da1-b40f-4ce1-900c-c073378e26f2" },
    { original: "https://github.com/user-attachments/assets/1edcb709-cdd0-4026-8d92-61d6fd47a9b9", thumbnail: "https://github.com/user-attachments/assets/1edcb709-cdd0-4026-8d92-61d6fd47a9b9" },
    { original: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462", thumbnail: "https://github.com/user-attachments/assets/855a2279-e95d-4363-9933-7c1bb9fc1462" },
    { original: "https://github.com/user-attachments/assets/35218dd9-84c8-4025-98ec-1160563b366a", thumbnail: "https://github.com/user-attachments/assets/35218dd9-84c8-4025-98ec-1160563b366a" },
    { original: "https://github.com/user-attachments/assets/6fd55f71-e914-4b87-ad60-e41ad70f4668", thumbnail: "https://github.com/user-attachments/assets/6fd55f71-e914-4b87-ad60-e41ad70f4668" },
    { original: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2", thumbnail: "https://github.com/user-attachments/assets/a9a46fbd-587e-4ec4-90f4-5c01f0b1d9d2" },
    { original: "https://github.com/user-attachments/assets/e1aeeed1-70b7-49c8-80e7-0c06006f257b", thumbnail: "https://github.com/user-attachments/assets/e1aeeed1-70b7-49c8-80e7-0c06006f257b" },
    { original: "https://github.com/user-attachments/assets/39dbd551-c58a-46a2-b91c-a066575c43fe", thumbnail: "https://github.com/user-attachments/assets/39dbd551-c58a-46a2-b91c-a066575c43fe" },
    { original: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282", thumbnail: "https://github.com/user-attachments/assets/72e8c3ba-79bf-4103-8ec7-5f06211c6282" },
    { original: "https://github.com/user-attachments/assets/32a61e97-2dfd-4093-8329-482990abeb14", thumbnail: "https://github.com/user-attachments/assets/32a61e97-2dfd-4093-8329-482990abeb14" },
    { original: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971", thumbnail: "https://github.com/user-attachments/assets/7a67d595-7ad0-4450-adf2-64b9f33b0971" },
    { original: "https://github.com/user-attachments/assets/a0a7f260-ec7b-49dd-848f-e62f96e4b0a3", thumbnail: "https://github.com/user-attachments/assets/a0a7f260-ec7b-49dd-848f-e62f96e4b0a3" },
    { original: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e", thumbnail: "https://github.com/user-attachments/assets/12190be1-876f-4942-aacc-e2e26028ff0e" },
    { original: "https://github.com/user-attachments/assets/5e82064f-3ee3-4e3c-aaf3-897e1c3155e7", thumbnail: "https://github.com/user-attachments/assets/5e82064f-3ee3-4e3c-aaf3-897e1c3155e7" },
    { original: "https://github.com/user-attachments/assets/5d0a81df-6f83-414c-b89f-d963d85c768c", thumbnail: "https://github.com/user-attachments/assets/5d0a81df-6f83-414c-b89f-d963d85c768c" },
    { original: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae", thumbnail: "https://github.com/user-attachments/assets/39bc19a9-167c-453f-812b-194b203613ae" },
    { original: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c", thumbnail: "https://github.com/user-attachments/assets/6afc4b09-0559-476e-95e1-d5727cb1847c" },
    { original: "https://github.com/user-attachments/assets/ee888f49-cd1f-42d3-9ffd-30586408e221", thumbnail: "https://github.com/user-attachments/assets/ee888f49-cd1f-42d3-9ffd-30586408e221" },
    { original: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d", thumbnail: "https://github.com/user-attachments/assets/054f863f-e7f6-4029-a435-7fca93284b2d" },
    { original: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e", thumbnail: "https://github.com/user-attachments/assets/8f5bc1f0-0ce1-4fa9-94bf-7febfa39de1e" },
    { original: "https://github.com/user-attachments/assets/f5cee274-3178-4c66-b9a9-184f0dc549a4", thumbnail: "https://github.com/user-attachments/assets/f5cee274-3178-4c66-b9a9-184f0dc549a4" },
    { original: "https://github.com/user-attachments/assets/a3795d6a-489b-4139-ae17-097b915189fd", thumbnail: "https://github.com/user-attachments/assets/a3795d6a-489b-4139-ae17-097b915189fd" },
];

export default function HonestheartsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
