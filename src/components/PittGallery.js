import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/ed166b38-010a-4c48-a59f-7fddd93c2fd7", thumbnail: "https://github.com/user-attachments/assets/ed166b38-010a-4c48-a59f-7fddd93c2fd7" },
    { original: "https://github.com/user-attachments/assets/84af4b3e-0c71-4166-8c4f-e2ef738b996a", thumbnail: "https://github.com/user-attachments/assets/84af4b3e-0c71-4166-8c4f-e2ef738b996a" },
    { original: "https://github.com/user-attachments/assets/80ae9e4d-e558-4025-81a0-de743de9602c", thumbnail: "https://github.com/user-attachments/assets/80ae9e4d-e558-4025-81a0-de743de9602c" },
    { original: "https://github.com/user-attachments/assets/33e0e43e-066c-42ee-9803-5211158ac29a", thumbnail: "https://github.com/user-attachments/assets/33e0e43e-066c-42ee-9803-5211158ac29a" },
    { original: "https://github.com/user-attachments/assets/5d9c7e34-271e-4e9a-9698-e49b9a04770b", thumbnail: "https://github.com/user-attachments/assets/5d9c7e34-271e-4e9a-9698-e49b9a04770b" },
    { original: "https://github.com/user-attachments/assets/22929362-c09f-4340-8a20-fea3ed973e3b", thumbnail: "https://github.com/user-attachments/assets/22929362-c09f-4340-8a20-fea3ed973e3b" },
    { original: "https://github.com/user-attachments/assets/44c7c2b7-f13f-4480-a740-34e5ed42800b", thumbnail: "https://github.com/user-attachments/assets/44c7c2b7-f13f-4480-a740-34e5ed42800b" },
    { original: "https://github.com/user-attachments/assets/2189a38c-550e-4a99-88cb-ffb9f218a527", thumbnail: "https://github.com/user-attachments/assets/2189a38c-550e-4a99-88cb-ffb9f218a527" },
    { original: "https://github.com/user-attachments/assets/2a9064d4-0d29-4fab-9f8c-9d5ddb792287", thumbnail: "https://github.com/user-attachments/assets/2a9064d4-0d29-4fab-9f8c-9d5ddb792287" },
    { original: "https://github.com/user-attachments/assets/b9fc13c5-65a8-42d1-b6bf-07007b82e74b", thumbnail: "https://github.com/user-attachments/assets/b9fc13c5-65a8-42d1-b6bf-07007b82e74b" },
    { original: "https://github.com/user-attachments/assets/5c799e93-fcbc-4ed8-9ff2-13635522d6c6", thumbnail: "https://github.com/user-attachments/assets/5c799e93-fcbc-4ed8-9ff2-13635522d6c6" },
];

export default function PittGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
