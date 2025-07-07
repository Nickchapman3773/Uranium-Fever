// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [

  {
    original: 'https://github.com/user-attachments/assets/7bfee7b6-0d16-4df6-8859-ce817a59faf0',
    thumbnail: 'https://github.com/user-attachments/assets/7bfee7b6-0d16-4df6-8859-ce817a59faf0',
  },
  {
    original: 'https://github.com/user-attachments/assets/0b8ac930-ec64-4b6f-a136-e623b279b003',
    thumbnail: 'https://github.com/user-attachments/assets/0b8ac930-ec64-4b6f-a136-e623b279b003',
  },
];

export default function ImageGalleryComponent() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
    />;
}
