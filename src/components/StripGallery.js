import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/16e1404f-cb27-4a5b-9eec-d61fe8dbdcba", thumbnail: "https://github.com/user-attachments/assets/16e1404f-cb27-4a5b-9eec-d61fe8dbdcba" },
    { original: "https://github.com/user-attachments/assets/6602768a-0d61-4a47-8168-4aeecc1ea152", thumbnail: "https://github.com/user-attachments/assets/6602768a-0d61-4a47-8168-4aeecc1ea152" },
    { original: "https://github.com/user-attachments/assets/b7acd5ef-c5ec-43b2-9a48-c3e9c692b9f3", thumbnail: "https://github.com/user-attachments/assets/b7acd5ef-c5ec-43b2-9a48-c3e9c692b9f3" },
    { original: "https://github.com/user-attachments/assets/6da51b7d-0cfb-4b3a-88bf-4469feb8fef6", thumbnail: "https://github.com/user-attachments/assets/6da51b7d-0cfb-4b3a-88bf-4469feb8fef6" },
    { original: "https://github.com/user-attachments/assets/e21f0e17-dd2f-4d3d-9a44-5deac59f70d5", thumbnail: "https://github.com/user-attachments/assets/e21f0e17-dd2f-4d3d-9a44-5deac59f70d5" },
    { original: "https://github.com/user-attachments/assets/32bf5dfd-9b47-4bfa-8079-88c167f15857", thumbnail: "https://github.com/user-attachments/assets/32bf5dfd-9b47-4bfa-8079-88c167f15857" },
    { original: "https://github.com/user-attachments/assets/39576009-e88c-485d-aa25-25ceb92a5182", thumbnail: "https://github.com/user-attachments/assets/39576009-e88c-485d-aa25-25ceb92a5182" },
    { original: "https://github.com/user-attachments/assets/432b6dd1-bf70-4a70-b9b9-f1d5e0806cce", thumbnail: "https://github.com/user-attachments/assets/432b6dd1-bf70-4a70-b9b9-f1d5e0806cce" },
    { original: "https://github.com/user-attachments/assets/0865c307-bf46-4927-bc09-33606791725d", thumbnail: "https://github.com/user-attachments/assets/0865c307-bf46-4927-bc09-33606791725d" },
    { original: "https://github.com/user-attachments/assets/7d72b696-ba4a-48c6-a0d6-66b41800cde0", thumbnail: "https://github.com/user-attachments/assets/7d72b696-ba4a-48c6-a0d6-66b41800cde0" },
    { original: "https://github.com/user-attachments/assets/3142535b-5c0f-4773-9301-72d4362e6052", thumbnail: "https://github.com/user-attachments/assets/3142535b-5c0f-4773-9301-72d4362e6052" },
    { original: "https://github.com/user-attachments/assets/403fa7bf-4a79-46e1-8403-7da7314a63c2", thumbnail: "https://github.com/user-attachments/assets/403fa7bf-4a79-46e1-8403-7da7314a63c2" },
];

export default function StripGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
