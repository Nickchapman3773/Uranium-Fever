import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/28f5d988-27f1-4d80-a758-12f2001ec81a", thumbnail: "https://github.com/user-attachments/assets/28f5d988-27f1-4d80-a758-12f2001ec81a" },
    { original: "https://github.com/user-attachments/assets/2616086b-5183-4aa3-a7fb-e9b684ea1aa5", thumbnail: "https://github.com/user-attachments/assets/2616086b-5183-4aa3-a7fb-e9b684ea1aa5" },
    { original: "https://github.com/user-attachments/assets/4bb69b1f-5c67-4e73-8e83-b89b77af6e58", thumbnail: "https://github.com/user-attachments/assets/4bb69b1f-5c67-4e73-8e83-b89b77af6e58" },
    { original: "https://github.com/user-attachments/assets/01538ea7-0159-4664-8340-78ba2f9797ed", thumbnail: "https://github.com/user-attachments/assets/01538ea7-0159-4664-8340-78ba2f9797ed" },
    { original: "https://github.com/user-attachments/assets/932cc7ef-d95e-4b53-b2ea-41c14230a84c", thumbnail: "https://github.com/user-attachments/assets/932cc7ef-d95e-4b53-b2ea-41c14230a84c" },
    { original: "https://github.com/user-attachments/assets/81963aa6-b3cf-4193-8cc7-d110e196f9b2", thumbnail: "https://github.com/user-attachments/assets/81963aa6-b3cf-4193-8cc7-d110e196f9b2" },
    { original: "https://github.com/user-attachments/assets/b4034914-417a-4046-b1b5-d30757ea35b8", thumbnail: "https://github.com/user-attachments/assets/b4034914-417a-4046-b1b5-d30757ea35b8" },
    { original: "https://github.com/user-attachments/assets/8c715203-7073-4615-b00a-e3b751096298", thumbnail: "https://github.com/user-attachments/assets/8c715203-7073-4615-b00a-e3b751096298" },
    { original: "https://github.com/user-attachments/assets/e6149933-7b44-435b-a273-7667622b801d", thumbnail: "https://github.com/user-attachments/assets/e6149933-7b44-435b-a273-7667622b801d" },
    { original: "https://github.com/user-attachments/assets/9d0dfff3-84c7-4b9a-8c23-4cc1d772f328", thumbnail: "https://github.com/user-attachments/assets/9d0dfff3-84c7-4b9a-8c23-4cc1d772f328" },
    { original: "https://github.com/user-attachments/assets/94b8073f-29eb-40d9-bb02-31890e387913", thumbnail: "https://github.com/user-attachments/assets/94b8073f-29eb-40d9-bb02-31890e387913" },
    { original: "https://github.com/user-attachments/assets/f33367d9-3bf6-4393-89cc-1294c0e2ce22", thumbnail: "https://github.com/user-attachments/assets/f33367d9-3bf6-4393-89cc-1294c0e2ce22" },
];

export default function OldworldbluesGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
