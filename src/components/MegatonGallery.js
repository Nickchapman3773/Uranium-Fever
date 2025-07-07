import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/3a09dfe3-ff30-49d4-8f54-0df8d29496bc", thumbnail: "https://github.com/user-attachments/assets/3a09dfe3-ff30-49d4-8f54-0df8d29496bc" },
    { original: "https://github.com/user-attachments/assets/08a567b4-65a5-464d-b82a-cbf9b7663558", thumbnail: "https://github.com/user-attachments/assets/08a567b4-65a5-464d-b82a-cbf9b7663558" },
    { original: "https://github.com/user-attachments/assets/5968517d-595b-4580-a676-58f16b756e11", thumbnail: "https://github.com/user-attachments/assets/5968517d-595b-4580-a676-58f16b756e11" },
    { original: "https://github.com/user-attachments/assets/ae6b11ac-2c41-4aa5-a779-3c428e2cca4a", thumbnail: "https://github.com/user-attachments/assets/ae6b11ac-2c41-4aa5-a779-3c428e2cca4a" },
    { original: "https://github.com/user-attachments/assets/a5e5b40d-be77-4374-9b2c-63624c00199a", thumbnail: "https://github.com/user-attachments/assets/a5e5b40d-be77-4374-9b2c-63624c00199a" },
    { original: "https://github.com/user-attachments/assets/db5210d7-922d-40ab-b53e-b4d2987c8359", thumbnail: "https://github.com/user-attachments/assets/db5210d7-922d-40ab-b53e-b4d2987c8359" },
];

export default function MegatonGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
