import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/880cd596-cdb0-4365-9237-ea9001e2252a", thumbnail: "https://github.com/user-attachments/assets/880cd596-cdb0-4365-9237-ea9001e2252a" },
    { original: "https://github.com/user-attachments/assets/2edba0b8-7cb6-4fa9-87b4-c69a3b3173c3", thumbnail: "https://github.com/user-attachments/assets/2edba0b8-7cb6-4fa9-87b4-c69a3b3173c3" },
    { original: "https://github.com/user-attachments/assets/086eb8dd-3622-4fb6-a566-84245cb4af51", thumbnail: "https://github.com/user-attachments/assets/086eb8dd-3622-4fb6-a566-84245cb4af51" },
    { original: "https://github.com/user-attachments/assets/4346d6fb-d0f8-4669-bcb0-189ba69f04c3", thumbnail: "https://github.com/user-attachments/assets/4346d6fb-d0f8-4669-bcb0-189ba69f04c3" },
    { original: "https://github.com/user-attachments/assets/0eadc836-bf11-41f2-b423-fcfc3cfde2fb", thumbnail: "https://github.com/user-attachments/assets/0eadc836-bf11-41f2-b423-fcfc3cfde2fb" },
    { original: "https://github.com/user-attachments/assets/8b2f9b5d-e636-454c-9041-a5f9279e4d36", thumbnail: "https://github.com/user-attachments/assets/8b2f9b5d-e636-454c-9041-a5f9279e4d36" },
    { original: "https://github.com/user-attachments/assets/2820caad-dfe5-4c4d-9445-077266629bd9", thumbnail: "https://github.com/user-attachments/assets/2820caad-dfe5-4c4d-9445-077266629bd9" },
    { original: "https://github.com/user-attachments/assets/5f7eaaa4-11e9-4e3f-9aa6-b2bc417c9ebd", thumbnail: "https://github.com/user-attachments/assets/5f7eaaa4-11e9-4e3f-9aa6-b2bc417c9ebd" },
    { original: "https://github.com/user-attachments/assets/0293e06a-86f2-42bf-8a39-4e9dacbf843d", thumbnail: "https://github.com/user-attachments/assets/0293e06a-86f2-42bf-8a39-4e9dacbf843d" },
    { original: "https://github.com/user-attachments/assets/b484e3e6-dfbe-486f-bd63-f1f0a65d2234", thumbnail: "https://github.com/user-attachments/assets/b484e3e6-dfbe-486f-bd63-f1f0a65d2234" },
    { original: "https://github.com/user-attachments/assets/a9baa9ea-0ab0-46af-9f20-de1189d658d0", thumbnail: "https://github.com/user-attachments/assets/a9baa9ea-0ab0-46af-9f20-de1189d658d0" },
    { original: "https://github.com/user-attachments/assets/1a7cda14-e2fb-49ed-8316-050deccbf253", thumbnail: "https://github.com/user-attachments/assets/1a7cda14-e2fb-49ed-8316-050deccbf253" },
    { original: "https://github.com/user-attachments/assets/0c2da5ef-4d79-4c5e-be53-499103ec2817", thumbnail: "https://github.com/user-attachments/assets/0c2da5ef-4d79-4c5e-be53-499103ec2817" },
    { original: "https://github.com/user-attachments/assets/d7d11134-dade-492d-91ec-b49cf2c761a7", thumbnail: "https://github.com/user-attachments/assets/d7d11134-dade-492d-91ec-b49cf2c761a7" },
    { original: "https://github.com/user-attachments/assets/b8cd24cd-5d83-40b5-81bb-d130c1b1e719", thumbnail: "https://github.com/user-attachments/assets/b8cd24cd-5d83-40b5-81bb-d130c1b1e719" },
    { original: "https://github.com/user-attachments/assets/bba1bbd4-b40a-4e85-b3f6-3cee1aa6f99a", thumbnail: "https://github.com/user-attachments/assets/bba1bbd4-b40a-4e85-b3f6-3cee1aa6f99a" },
    { original: "https://github.com/user-attachments/assets/05a6411d-bc90-4254-96f3-8f94a6dfbed7", thumbnail: "https://github.com/user-attachments/assets/05a6411d-bc90-4254-96f3-8f94a6dfbed7" },
    { original: "https://github.com/user-attachments/assets/551d0d59-2eb1-4d1c-83e1-f96b658b86a9", thumbnail: "https://github.com/user-attachments/assets/551d0d59-2eb1-4d1c-83e1-f96b658b86a9" },
    { original: "https://github.com/user-attachments/assets/1fa36b76-ad79-40a0-ab89-a0e869c64310", thumbnail: "https://github.com/user-attachments/assets/1fa36b76-ad79-40a0-ab89-a0e869c64310" },
    { original: "https://github.com/user-attachments/assets/1c66dd73-91fc-47a2-b755-cf1aa8b46938", thumbnail: "https://github.com/user-attachments/assets/1c66dd73-91fc-47a2-b755-cf1aa8b46938" },
    { original: "https://github.com/user-attachments/assets/d6f17341-a79d-4b5d-bb1f-f6c044d32eed", thumbnail: "https://github.com/user-attachments/assets/d6f17341-a79d-4b5d-bb1f-f6c044d32eed" },
    { original: "https://github.com/user-attachments/assets/c0790022-0b53-445b-a1cc-d02af9324185", thumbnail: "https://github.com/user-attachments/assets/c0790022-0b53-445b-a1cc-d02af9324185" },
    { original: "https://github.com/user-attachments/assets/8abd277b-edfe-4ed6-9452-a5352600cd6e", thumbnail: "https://github.com/user-attachments/assets/8abd277b-edfe-4ed6-9452-a5352600cd6e" },
    { original: "https://github.com/user-attachments/assets/b84e99cd-2107-4f52-80dc-a6bd075ca3d6", thumbnail: "https://github.com/user-attachments/assets/b84e99cd-2107-4f52-80dc-a6bd075ca3d6" },
    { original: "https://github.com/user-attachments/assets/d85cdf1b-2d5d-44be-b2d9-f674a47e3fb8", thumbnail: "https://github.com/user-attachments/assets/d85cdf1b-2d5d-44be-b2d9-f674a47e3fb8" },
    { original: "https://github.com/user-attachments/assets/4140767c-fd6c-4339-b36a-03d07af97789", thumbnail: "https://github.com/user-attachments/assets/4140767c-fd6c-4339-b36a-03d07af97789" },
];

export default function CasinointeriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
