import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/c6b506c4-7947-4ef1-acca-b6986cc4c3e3", thumbnail: "https://github.com/user-attachments/assets/c6b506c4-7947-4ef1-acca-b6986cc4c3e3" },
    { original: "https://github.com/user-attachments/assets/84d8e745-c242-4aab-8d99-768ed6a37827", thumbnail: "https://github.com/user-attachments/assets/84d8e745-c242-4aab-8d99-768ed6a37827" },
    { original: "https://github.com/user-attachments/assets/ed42e909-c16f-4c52-97e9-07db81127afe", thumbnail: "https://github.com/user-attachments/assets/ed42e909-c16f-4c52-97e9-07db81127afe" },
    { original: "https://github.com/user-attachments/assets/c428fcb5-1780-41f4-8df4-94e3eeea2306", thumbnail: "https://github.com/user-attachments/assets/c428fcb5-1780-41f4-8df4-94e3eeea2306" },
    { original: "https://github.com/user-attachments/assets/bcb4d86b-7372-406b-92d2-2c48618d029f", thumbnail: "https://github.com/user-attachments/assets/bcb4d86b-7372-406b-92d2-2c48618d029f" },
    { original: "https://github.com/user-attachments/assets/8c3ec380-bae2-414f-9489-bd39bf74550d", thumbnail: "https://github.com/user-attachments/assets/8c3ec380-bae2-414f-9489-bd39bf74550d" },
    { original: "https://github.com/user-attachments/assets/5e46edfc-3b5a-421b-9da0-ce0607711df6", thumbnail: "https://github.com/user-attachments/assets/5e46edfc-3b5a-421b-9da0-ce0607711df6" },
    { original: "https://github.com/user-attachments/assets/9554f416-314d-49d0-80cc-3b3b6ce3579f", thumbnail: "https://github.com/user-attachments/assets/9554f416-314d-49d0-80cc-3b3b6ce3579f" },
    { original: "https://github.com/user-attachments/assets/2279b94f-5464-4ddd-81c6-cdd5a005df88", thumbnail: "https://github.com/user-attachments/assets/2279b94f-5464-4ddd-81c6-cdd5a005df88" },
];

export default function MechanicsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
