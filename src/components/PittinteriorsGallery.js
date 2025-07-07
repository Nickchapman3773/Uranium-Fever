import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/523648ec-8651-42f0-b60f-aededee81318", thumbnail: "https://github.com/user-attachments/assets/523648ec-8651-42f0-b60f-aededee81318" },
    { original: "https://github.com/user-attachments/assets/ed98d835-d4bc-4d01-84f8-e4805eb26ade", thumbnail: "https://github.com/user-attachments/assets/ed98d835-d4bc-4d01-84f8-e4805eb26ade" },
    { original: "https://github.com/user-attachments/assets/b3dd2ca4-0a6d-4738-b435-2d1b8c5be1ca", thumbnail: "https://github.com/user-attachments/assets/b3dd2ca4-0a6d-4738-b435-2d1b8c5be1ca" },
    { original: "https://github.com/user-attachments/assets/f977b986-15e0-4cb2-88bf-511102453948", thumbnail: "https://github.com/user-attachments/assets/f977b986-15e0-4cb2-88bf-511102453948" },
    { original: "https://github.com/user-attachments/assets/99b0667b-d684-4e02-875b-a45d34735cbc", thumbnail: "https://github.com/user-attachments/assets/99b0667b-d684-4e02-875b-a45d34735cbc" },
    { original: "https://github.com/user-attachments/assets/649b471f-82ed-439b-ab6c-62c4cf323462", thumbnail: "https://github.com/user-attachments/assets/649b471f-82ed-439b-ab6c-62c4cf323462" },
    { original: "https://github.com/user-attachments/assets/f1207a3a-a088-462e-9f0f-6c2291211d64", thumbnail: "https://github.com/user-attachments/assets/f1207a3a-a088-462e-9f0f-6c2291211d64" },
    { original: "https://github.com/user-attachments/assets/0c1683b6-3abe-4062-a672-36b9d6292f1f", thumbnail: "https://github.com/user-attachments/assets/0c1683b6-3abe-4062-a672-36b9d6292f1f" },
    { original: "https://github.com/user-attachments/assets/c7b27d59-7adc-4a98-823f-2d862a4ad64d", thumbnail: "https://github.com/user-attachments/assets/c7b27d59-7adc-4a98-823f-2d862a4ad64d" },
    { original: "https://github.com/user-attachments/assets/f36b7dd8-3d44-4015-b7aa-aec7eb0f746d", thumbnail: "https://github.com/user-attachments/assets/f36b7dd8-3d44-4015-b7aa-aec7eb0f746d" },
    { original: "https://github.com/user-attachments/assets/0ee42f5d-395d-47d4-9217-657d2454de77", thumbnail: "https://github.com/user-attachments/assets/0ee42f5d-395d-47d4-9217-657d2454de77" },
    { original: "https://github.com/user-attachments/assets/2e5a056b-c623-4f36-ab3c-22f27dc5e00e", thumbnail: "https://github.com/user-attachments/assets/2e5a056b-c623-4f36-ab3c-22f27dc5e00e" },
    { original: "https://github.com/user-attachments/assets/4278699a-1eaa-4a44-b47e-255063c68f21", thumbnail: "https://github.com/user-attachments/assets/4278699a-1eaa-4a44-b47e-255063c68f21" },
];

export default function PittinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
