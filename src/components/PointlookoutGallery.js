import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/be28ad07-45d2-4ab8-91bf-0a1724aabf2e", thumbnail: "https://github.com/user-attachments/assets/be28ad07-45d2-4ab8-91bf-0a1724aabf2e" },
    { original: "https://github.com/user-attachments/assets/04c01207-fd9c-4017-993f-e30fa97aae3c", thumbnail: "https://github.com/user-attachments/assets/04c01207-fd9c-4017-993f-e30fa97aae3c" },
    { original: "https://github.com/user-attachments/assets/3da8e05b-f77b-42d3-85d2-4f7c75dcd95c", thumbnail: "https://github.com/user-attachments/assets/3da8e05b-f77b-42d3-85d2-4f7c75dcd95c" },
    { original: "https://github.com/user-attachments/assets/73ed5369-44cb-4488-b7ce-a6c20e206c5c", thumbnail: "https://github.com/user-attachments/assets/73ed5369-44cb-4488-b7ce-a6c20e206c5c" },
    { original: "https://github.com/user-attachments/assets/263f0ea7-f4c8-4e1e-b81c-d737a66637b3", thumbnail: "https://github.com/user-attachments/assets/263f0ea7-f4c8-4e1e-b81c-d737a66637b3" },
    { original: "https://github.com/user-attachments/assets/3d0b7965-83bc-47ba-a2a9-99c2dc1da492", thumbnail: "https://github.com/user-attachments/assets/3d0b7965-83bc-47ba-a2a9-99c2dc1da492" },
    { original: "https://github.com/user-attachments/assets/3a26f1b3-1b66-4c1f-85f5-06bcc8d67e2d", thumbnail: "https://github.com/user-attachments/assets/3a26f1b3-1b66-4c1f-85f5-06bcc8d67e2d" },
    { original: "https://github.com/user-attachments/assets/2eddac85-e873-490e-8937-888a9a72b6cb", thumbnail: "https://github.com/user-attachments/assets/2eddac85-e873-490e-8937-888a9a72b6cb" },
    { original: "https://github.com/user-attachments/assets/08cd8e2a-88e7-4bd1-b77a-e6226493c662", thumbnail: "https://github.com/user-attachments/assets/08cd8e2a-88e7-4bd1-b77a-e6226493c662" },
    { original: "https://github.com/user-attachments/assets/f02047f6-2fd3-4c84-82e4-d1a6a440d225", thumbnail: "https://github.com/user-attachments/assets/f02047f6-2fd3-4c84-82e4-d1a6a440d225" },
    { original: "https://github.com/user-attachments/assets/88680c80-92a3-4640-a5a6-6126782cf2f6", thumbnail: "https://github.com/user-attachments/assets/88680c80-92a3-4640-a5a6-6126782cf2f6" },
    { original: "https://github.com/user-attachments/assets/786c8ebd-2ae0-4cc2-af33-c58e2a13229b", thumbnail: "https://github.com/user-attachments/assets/786c8ebd-2ae0-4cc2-af33-c58e2a13229b" },
    { original: "https://github.com/user-attachments/assets/828810a8-60b0-4a1d-b989-22d64df8df94", thumbnail: "https://github.com/user-attachments/assets/828810a8-60b0-4a1d-b989-22d64df8df94" },
    { original: "https://github.com/user-attachments/assets/2460096c-c282-498c-95c5-d153448b31fd", thumbnail: "https://github.com/user-attachments/assets/2460096c-c282-498c-95c5-d153448b31fd" },
    { original: "https://github.com/user-attachments/assets/300c28c5-2147-4eeb-94cb-3a7392809c1e", thumbnail: "https://github.com/user-attachments/assets/300c28c5-2147-4eeb-94cb-3a7392809c1e" },
    { original: "https://github.com/user-attachments/assets/6eefb76b-be64-403e-b6d9-f780770e216b", thumbnail: "https://github.com/user-attachments/assets/6eefb76b-be64-403e-b6d9-f780770e216b" },
    { original: "https://github.com/user-attachments/assets/cf93ca70-0cde-40a7-a31f-5d83f10d1b9c", thumbnail: "https://github.com/user-attachments/assets/cf93ca70-0cde-40a7-a31f-5d83f10d1b9c" },
    { original: "https://github.com/user-attachments/assets/dbe7c37c-70d5-4866-ba88-4dc01c179afa", thumbnail: "https://github.com/user-attachments/assets/dbe7c37c-70d5-4866-ba88-4dc01c179afa" },
    { original: "https://github.com/user-attachments/assets/bb563844-8b13-4329-b7c6-6be0f64b295d", thumbnail: "https://github.com/user-attachments/assets/bb563844-8b13-4329-b7c6-6be0f64b295d" },
];

export default function PointlookoutGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
