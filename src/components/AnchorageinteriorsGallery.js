import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/8d70b993-c88a-4c05-9096-ece5de3e93d5", thumbnail: "https://github.com/user-attachments/assets/8d70b993-c88a-4c05-9096-ece5de3e93d5" },
    { original: "https://github.com/user-attachments/assets/3439950a-f40d-4625-bc07-bc8a46e2fcc8", thumbnail: "https://github.com/user-attachments/assets/3439950a-f40d-4625-bc07-bc8a46e2fcc8" },
    { original: "https://github.com/user-attachments/assets/f64b7deb-8ce0-46a4-8a20-07524cfeb8dd", thumbnail: "https://github.com/user-attachments/assets/f64b7deb-8ce0-46a4-8a20-07524cfeb8dd" },
    { original: "https://github.com/user-attachments/assets/bb2c78e1-dd10-4351-a2af-be714d30bef9", thumbnail: "https://github.com/user-attachments/assets/bb2c78e1-dd10-4351-a2af-be714d30bef9" },
    { original: "https://github.com/user-attachments/assets/44a1f1ee-eaff-4774-8bd2-ee5320c6edd5", thumbnail: "https://github.com/user-attachments/assets/44a1f1ee-eaff-4774-8bd2-ee5320c6edd5" },
    { original: "https://github.com/user-attachments/assets/b3e77dea-bc2b-4c6a-9c69-51ad2da89d56", thumbnail: "https://github.com/user-attachments/assets/b3e77dea-bc2b-4c6a-9c69-51ad2da89d56" },
];

export default function AnchorageinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
