// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [

  {
    original: 'https://github.com/user-attachments/assets/715b6b6f-ed0c-4b3b-9d25-86ab7764c8a5',
    thumbnail: 'https://github.com/user-attachments/assets/715b6b6f-ed0c-4b3b-9d25-86ab7764c8a5',
  },
  {
    original: 'https://github.com/user-attachments/assets/88d62768-e81b-4d3f-9114-bf7fcfbb0acd',
    thumbnail: 'https://github.com/user-attachments/assets/88d62768-e81b-4d3f-9114-bf7fcfbb0acd',
  },
  {
    original: 'https://github.com/user-attachments/assets/94a18221-7c43-4d09-9103-f0baa521fcd0',
    thumbnail: 'https://github.com/user-attachments/assets/94a18221-7c43-4d09-9103-f0baa521fcd0',
  },
  {
    original: 'https://github.com/user-attachments/assets/4045d661-c8f4-4fd7-b588-4285b5342dd6',
    thumbnail: 'https://github.com/user-attachments/assets/4045d661-c8f4-4fd7-b588-4285b5342dd6',
  },
  {
    original: 'https://github.com/user-attachments/assets/31233e96-95ab-450b-b6fc-20f075634125',
    thumbnail: 'https://github.com/user-attachments/assets/31233e96-95ab-450b-b6fc-20f075634125',
  },
  {
    original: 'https://github.com/user-attachments/assets/d95bc3ff-63bb-4d98-aa0c-f15f83c98288',
    thumbnail: 'https://github.com/user-attachments/assets/d95bc3ff-63bb-4d98-aa0c-f15f83c98288',
  },
  {
    original: 'https://github.com/user-attachments/assets/8c57c846-d271-45f3-ae77-68da9222f51b',
    thumbnail: 'https://github.com/user-attachments/assets/8c57c846-d271-45f3-ae77-68da9222f51b',
  },
  {
    original: 'https://github.com/user-attachments/assets/ff57f9da-dfa8-4085-8d53-774efbb4510a',
    thumbnail: 'https://github.com/user-attachments/assets/ff57f9da-dfa8-4085-8d53-774efbb4510a',
  },
  {
    original: 'https://github.com/user-attachments/assets/bd6c1485-fd83-40ce-a685-9d423318dfd5',
    thumbnail: 'https://github.com/user-attachments/assets/bd6c1485-fd83-40ce-a685-9d423318dfd5',
  },
  {
    original: '(https://github.com/user-attachments/assets/dd419887-759a-4401-8972-fb50cf3b6516',
    thumbnail: '(https://github.com/user-attachments/assets/dd419887-759a-4401-8972-fb50cf3b6516',
  },
  {
    original: 'https://github.com/user-attachments/assets/08c5be7c-bb0c-4916-85d7-4b00dae64b25',
    thumbnail: 'https://github.com/user-attachments/assets/08c5be7c-bb0c-4916-85d7-4b00dae64b25',
  }
];

export default function galleryui() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
    />;
}
