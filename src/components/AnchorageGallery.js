import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/17ddb214-bcbb-4b06-a1a0-3ce9e436d2a5", thumbnail: "https://github.com/user-attachments/assets/17ddb214-bcbb-4b06-a1a0-3ce9e436d2a5" },
    { original: "https://github.com/user-attachments/assets/b40fa773-dfcd-4fa8-8f8c-bf159e03fe5d", thumbnail: "https://github.com/user-attachments/assets/b40fa773-dfcd-4fa8-8f8c-bf159e03fe5d" },
    { original: "https://github.com/user-attachments/assets/44ef8ab1-eea1-468b-b0cf-1d52e85a9836", thumbnail: "https://github.com/user-attachments/assets/44ef8ab1-eea1-468b-b0cf-1d52e85a9836" },
    { original: "https://github.com/user-attachments/assets/f23e2950-ded7-4b82-9a6e-315be2a1f0ea", thumbnail: "https://github.com/user-attachments/assets/f23e2950-ded7-4b82-9a6e-315be2a1f0ea" },
    { original: "https://github.com/user-attachments/assets/cd1f8a64-6a94-472f-b4d2-8cf2d6063e4f", thumbnail: "https://github.com/user-attachments/assets/cd1f8a64-6a94-472f-b4d2-8cf2d6063e4f" },
    { original: "https://github.com/user-attachments/assets/cc8612a7-4586-4c51-bff7-9f664e8006c7", thumbnail: "https://github.com/user-attachments/assets/cc8612a7-4586-4c51-bff7-9f664e8006c7" },
    { original: "https://github.com/user-attachments/assets/998c1cd3-b964-4671-bf75-9c2b2a372049", thumbnail: "https://github.com/user-attachments/assets/998c1cd3-b964-4671-bf75-9c2b2a372049" },
    { original: "https://github.com/user-attachments/assets/014f3c40-f776-460e-a5c7-005170aec067", thumbnail: "https://github.com/user-attachments/assets/014f3c40-f776-460e-a5c7-005170aec067" },
    { original: "https://github.com/user-attachments/assets/28477523-5d39-455b-af95-bdd0ae136ee1", thumbnail: "https://github.com/user-attachments/assets/28477523-5d39-455b-af95-bdd0ae136ee1" },
    { original: "https://github.com/user-attachments/assets/d1821185-ecca-416a-95fd-ec521e5d440d", thumbnail: "https://github.com/user-attachments/assets/d1821185-ecca-416a-95fd-ec521e5d440d" },
    { original: "https://github.com/user-attachments/assets/b4d2a20b-13c3-43cd-9192-a754cb13897c", thumbnail: "https://github.com/user-attachments/assets/b4d2a20b-13c3-43cd-9192-a754cb13897c" },
    { original: "https://github.com/user-attachments/assets/d57c1f49-0459-4da4-9368-2c9e8571ea59", thumbnail: "https://github.com/user-attachments/assets/d57c1f49-0459-4da4-9368-2c9e8571ea59" },
    { original: "https://github.com/user-attachments/assets/f409c5e2-cba1-46d9-8250-12578caf9f80", thumbnail: "https://github.com/user-attachments/assets/f409c5e2-cba1-46d9-8250-12578caf9f80" },
    { original: "https://github.com/user-attachments/assets/62db1a3e-f8a7-4a26-8bc7-17f76eb57153", thumbnail: "https://github.com/user-attachments/assets/62db1a3e-f8a7-4a26-8bc7-17f76eb57153" },
    { original: "https://github.com/user-attachments/assets/a9f6525f-eae8-4c34-9d6e-4b5a09d55d06", thumbnail: "https://github.com/user-attachments/assets/a9f6525f-eae8-4c34-9d6e-4b5a09d55d06" },
];

export default function AnchorageGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
