import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/7d4bb8ac-efc6-4db7-9d3d-d965527a9a01", thumbnail: "https://github.com/user-attachments/assets/7d4bb8ac-efc6-4db7-9d3d-d965527a9a01" },
    { original: "https://github.com/user-attachments/assets/96d28aa0-d9ab-4565-b668-de700e3a1525", thumbnail: "https://github.com/user-attachments/assets/96d28aa0-d9ab-4565-b668-de700e3a1525" },
    { original: "https://github.com/user-attachments/assets/7043c1b6-2584-4901-a69a-ee4c1cf8255b", thumbnail: "https://github.com/user-attachments/assets/7043c1b6-2584-4901-a69a-ee4c1cf8255b" },
    { original: "https://github.com/user-attachments/assets/61ea4313-9f1e-449a-a32b-813e6ec43d93", thumbnail: "https://github.com/user-attachments/assets/61ea4313-9f1e-449a-a32b-813e6ec43d93" },
    { original: "https://github.com/user-attachments/assets/781b3ca5-1e6e-4b23-a3ff-ec7b1c7d85cc", thumbnail: "https://github.com/user-attachments/assets/781b3ca5-1e6e-4b23-a3ff-ec7b1c7d85cc" },
    { original: "https://github.com/user-attachments/assets/c1fa097b-55e7-46f4-a295-8ce1caea3bef", thumbnail: "https://github.com/user-attachments/assets/c1fa097b-55e7-46f4-a295-8ce1caea3bef" },
    { original: "https://github.com/user-attachments/assets/ce59dd21-6948-48d8-aa49-08cfca08b09d", thumbnail: "https://github.com/user-attachments/assets/ce59dd21-6948-48d8-aa49-08cfca08b09d" },
    { original: "https://github.com/user-attachments/assets/ad403279-2860-44df-8f60-80337a00ac56", thumbnail: "https://github.com/user-attachments/assets/ad403279-2860-44df-8f60-80337a00ac56" },
    { original: "https://github.com/user-attachments/assets/90506ca9-7996-49b1-95d9-a6925428d7f7", thumbnail: "https://github.com/user-attachments/assets/90506ca9-7996-49b1-95d9-a6925428d7f7" },
    { original: "https://github.com/user-attachments/assets/e9affe7c-3973-453a-b9d3-6a20233d868a", thumbnail: "https://github.com/user-attachments/assets/e9affe7c-3973-453a-b9d3-6a20233d868a" },
    { original: "https://github.com/user-attachments/assets/6286bbc7-da24-4257-9f9c-27bae75ec9dd", thumbnail: "https://github.com/user-attachments/assets/6286bbc7-da24-4257-9f9c-27bae75ec9dd" },
];

export default function ArroyocanyonGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
