import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/297e7112-1e67-485a-88b6-69508f096fec", thumbnail: "https://github.com/user-attachments/assets/297e7112-1e67-485a-88b6-69508f096fec" },
    { original: "https://github.com/user-attachments/assets/54cc5fb6-36ce-40ae-bb40-5fc61096655b", thumbnail: "https://github.com/user-attachments/assets/54cc5fb6-36ce-40ae-bb40-5fc61096655b" },
    { original: "https://github.com/user-attachments/assets/ad4675b0-65df-4976-849f-56637b2166fc", thumbnail: "https://github.com/user-attachments/assets/ad4675b0-65df-4976-849f-56637b2166fc" },
    { original: "https://github.com/user-attachments/assets/6a26f52a-07ef-4a67-8ccc-3463661151bb", thumbnail: "https://github.com/user-attachments/assets/6a26f52a-07ef-4a67-8ccc-3463661151bb" },
    { original: "https://github.com/user-attachments/assets/d5484880-3e2b-4bc0-9f62-454bf3dd182b", thumbnail: "https://github.com/user-attachments/assets/d5484880-3e2b-4bc0-9f62-454bf3dd182b" },
    { original: "https://github.com/user-attachments/assets/d17e6e92-a29d-4e1c-b097-3d4442074a57", thumbnail: "https://github.com/user-attachments/assets/d17e6e92-a29d-4e1c-b097-3d4442074a57" },
    { original: "https://github.com/user-attachments/assets/0d89f06b-953b-4276-8d23-fc9d9287110b", thumbnail: "https://github.com/user-attachments/assets/0d89f06b-953b-4276-8d23-fc9d9287110b" },
    { original: "https://github.com/user-attachments/assets/5353af86-e70d-4a0d-9ffc-a1cfe0359718", thumbnail: "https://github.com/user-attachments/assets/5353af86-e70d-4a0d-9ffc-a1cfe0359718" },
    { original: "https://github.com/user-attachments/assets/a895be1f-1cb0-4b4f-9a8f-328c3e059f6b", thumbnail: "https://github.com/user-attachments/assets/a895be1f-1cb0-4b4f-9a8f-328c3e059f6b" },
    { original: "https://github.com/user-attachments/assets/fc980c9d-b58c-4549-b34c-1267872326b2", thumbnail: "https://github.com/user-attachments/assets/fc980c9d-b58c-4549-b34c-1267872326b2" },
    { original: "https://github.com/user-attachments/assets/50ac1e21-1838-4ea4-96c8-9ac0c5f8303b", thumbnail: "https://github.com/user-attachments/assets/50ac1e21-1838-4ea4-96c8-9ac0c5f8303b" },
];

export default function DrywellsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
