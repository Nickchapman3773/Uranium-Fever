import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/cd636935-59e7-46b6-9785-22069d6fb903", thumbnail: "https://github.com/user-attachments/assets/cd636935-59e7-46b6-9785-22069d6fb903" },
    { original: "https://github.com/user-attachments/assets/0873d7fe-d691-4a1a-92ba-6f22b1b3bb3e", thumbnail: "https://github.com/user-attachments/assets/0873d7fe-d691-4a1a-92ba-6f22b1b3bb3e" },
    { original: "https://github.com/user-attachments/assets/0759c0e2-d590-415a-ac76-2b1f0e085671", thumbnail: "https://github.com/user-attachments/assets/0759c0e2-d590-415a-ac76-2b1f0e085671" },
    { original: "https://github.com/user-attachments/assets/90afb266-69f4-40db-b69c-175c79354388", thumbnail: "https://github.com/user-attachments/assets/90afb266-69f4-40db-b69c-175c79354388" },
];

export default function BrokensteelGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
