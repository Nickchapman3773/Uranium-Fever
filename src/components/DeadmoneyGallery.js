import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/a4fd0500-c3be-4218-9068-76b9f43282da", thumbnail: "https://github.com/user-attachments/assets/a4fd0500-c3be-4218-9068-76b9f43282da" },
    { original: "https://github.com/user-attachments/assets/54583b98-ffb2-48ef-b119-3f1dcea31d19", thumbnail: "https://github.com/user-attachments/assets/54583b98-ffb2-48ef-b119-3f1dcea31d19" },
    { original: "https://github.com/user-attachments/assets/01f09e75-988c-4d57-8376-dfed404db3f6", thumbnail: "https://github.com/user-attachments/assets/01f09e75-988c-4d57-8376-dfed404db3f6" },
    { original: "https://github.com/user-attachments/assets/72821890-04fa-4607-aa12-dd451c564608", thumbnail: "https://github.com/user-attachments/assets/72821890-04fa-4607-aa12-dd451c564608" },
    { original: "https://github.com/user-attachments/assets/3d26d75f-309b-4dad-807b-e22e4d832ba0", thumbnail: "https://github.com/user-attachments/assets/3d26d75f-309b-4dad-807b-e22e4d832ba0" },
    { original: "https://github.com/user-attachments/assets/79728fb4-3f75-4894-b26a-31230148d43c", thumbnail: "https://github.com/user-attachments/assets/79728fb4-3f75-4894-b26a-31230148d43c" },
    { original: "https://github.com/user-attachments/assets/63bd6657-b053-4057-978a-6ccb4ce5650f", thumbnail: "https://github.com/user-attachments/assets/63bd6657-b053-4057-978a-6ccb4ce5650f" },
];

export default function DeadmoneyGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
