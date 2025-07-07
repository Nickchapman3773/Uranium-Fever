import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/0c012b42-5637-4450-843e-6c7f122ec282", thumbnail: "https://github.com/user-attachments/assets/0c012b42-5637-4450-843e-6c7f122ec282" },
    { original: "https://github.com/user-attachments/assets/d3af91fd-82a4-4ceb-ab5c-e1ebf3cdf50c", thumbnail: "https://github.com/user-attachments/assets/d3af91fd-82a4-4ceb-ab5c-e1ebf3cdf50c" },
    { original: "https://github.com/user-attachments/assets/ce586e6e-895b-40d8-81e4-55d7f6d19ad0", thumbnail: "https://github.com/user-attachments/assets/ce586e6e-895b-40d8-81e4-55d7f6d19ad0" },
    { original: "https://github.com/user-attachments/assets/d5f75f8c-1335-4e7d-801b-2a41aea3ddd7", thumbnail: "https://github.com/user-attachments/assets/d5f75f8c-1335-4e7d-801b-2a41aea3ddd7" },
    { original: "https://github.com/user-attachments/assets/b40dc390-c11c-401c-86ec-20182c9159b0", thumbnail: "https://github.com/user-attachments/assets/b40dc390-c11c-401c-86ec-20182c9159b0" },
    { original: "https://github.com/user-attachments/assets/c51db006-5ec9-4fea-82a9-c06e489391b4", thumbnail: "https://github.com/user-attachments/assets/c51db006-5ec9-4fea-82a9-c06e489391b4" },
];

export default function HumboldtGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
