import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/1234156c-992b-450b-a9d8-7ec5fa01824b", thumbnail: "https://github.com/user-attachments/assets/1234156c-992b-450b-a9d8-7ec5fa01824b" },
    { original: "https://github.com/user-attachments/assets/46de79a8-9680-437b-bca4-bc89f068af6c", thumbnail: "https://github.com/user-attachments/assets/46de79a8-9680-437b-bca4-bc89f068af6c" },
    { original: "https://github.com/user-attachments/assets/a96c50ce-339b-4afb-bfbe-ae70061d3cc9", thumbnail: "https://github.com/user-attachments/assets/a96c50ce-339b-4afb-bfbe-ae70061d3cc9" },
    { original: "https://github.com/user-attachments/assets/1dadd1aa-4dc9-4bb3-aba4-4316fc8d377e", thumbnail: "https://github.com/user-attachments/assets/1dadd1aa-4dc9-4bb3-aba4-4316fc8d377e" },
    { original: "https://github.com/user-attachments/assets/3637a4c8-05f9-4675-a4b3-57aee30bfc78", thumbnail: "https://github.com/user-attachments/assets/3637a4c8-05f9-4675-a4b3-57aee30bfc78" },
    { original: "https://github.com/user-attachments/assets/ca38a0f0-56fb-4c85-8215-516d3ae1dd06", thumbnail: "https://github.com/user-attachments/assets/ca38a0f0-56fb-4c85-8215-516d3ae1dd06" },
    { original: "https://github.com/user-attachments/assets/e22afbe6-2326-4cc8-a1ac-d05f90a857cb", thumbnail: "https://github.com/user-attachments/assets/e22afbe6-2326-4cc8-a1ac-d05f90a857cb" },
    { original: "https://github.com/user-attachments/assets/bbace3ce-8390-437b-be64-b608f32bf49b", thumbnail: "https://github.com/user-attachments/assets/bbace3ce-8390-437b-be64-b608f32bf49b" },
    { original: "https://github.com/user-attachments/assets/053b5783-3fd3-4439-814a-95f6198ae58e", thumbnail: "https://github.com/user-attachments/assets/053b5783-3fd3-4439-814a-95f6198ae58e" },
    { original: "https://github.com/user-attachments/assets/dea905f8-6fdd-4e23-9016-f39bfed688f8", thumbnail: "https://github.com/user-attachments/assets/dea905f8-6fdd-4e23-9016-f39bfed688f8" },
    { original: "https://github.com/user-attachments/assets/448a28df-6b1a-47a5-b3a7-8b2c33e76823", thumbnail: "https://github.com/user-attachments/assets/448a28df-6b1a-47a5-b3a7-8b2c33e76823" },
    { original: "https://github.com/user-attachments/assets/68851d6a-aaa9-44f9-9051-213cddb89d19", thumbnail: "https://github.com/user-attachments/assets/68851d6a-aaa9-44f9-9051-213cddb89d19" },
    { original: "https://github.com/user-attachments/assets/eac12e41-fb0c-475f-8162-e60f3451fa12", thumbnail: "https://github.com/user-attachments/assets/eac12e41-fb0c-475f-8162-e60f3451fa12" },
    { original: "https://github.com/user-attachments/assets/40614f36-d626-4b46-9293-32d24180de0f", thumbnail: "https://github.com/user-attachments/assets/40614f36-d626-4b46-9293-32d24180de0f" },
    { original: "https://github.com/user-attachments/assets/a516f580-f45e-4e65-b4af-0e5db65f0947", thumbnail: "https://github.com/user-attachments/assets/a516f580-f45e-4e65-b4af-0e5db65f0947" },
    { original: "https://github.com/user-attachments/assets/7af51967-587e-40ea-907f-854a37611f1f", thumbnail: "https://github.com/user-attachments/assets/7af51967-587e-40ea-907f-854a37611f1f" },
    { original: "https://github.com/user-attachments/assets/309625c5-b512-481c-94e4-0bc255aeeb46", thumbnail: "https://github.com/user-attachments/assets/309625c5-b512-481c-94e4-0bc255aeeb46" },
    { original: "https://github.com/user-attachments/assets/d229ecc0-6c3f-4f5a-9da1-b1d7323d9c68", thumbnail: "https://github.com/user-attachments/assets/d229ecc0-6c3f-4f5a-9da1-b1d7323d9c68" },
    { original: "https://github.com/user-attachments/assets/744df123-2b63-4fa2-b228-aeda2ef2b340", thumbnail: "https://github.com/user-attachments/assets/744df123-2b63-4fa2-b228-aeda2ef2b340" },
    { original: "https://github.com/user-attachments/assets/90e763fa-1b94-448c-bed8-069fd68fc1ed", thumbnail: "https://github.com/user-attachments/assets/90e763fa-1b94-448c-bed8-069fd68fc1ed" },
    { original: "https://github.com/user-attachments/assets/01bb12a6-1a83-4424-b97e-48faff917205", thumbnail: "https://github.com/user-attachments/assets/01bb12a6-1a83-4424-b97e-48faff917205" },
    { original: "https://github.com/user-attachments/assets/e5b69ae4-8e91-4efb-ab56-94c547438477", thumbnail: "https://github.com/user-attachments/assets/e5b69ae4-8e91-4efb-ab56-94c547438477" },
    { original: "https://github.com/user-attachments/assets/140ceb0c-8bb2-4a0e-8946-3b55a0529d89", thumbnail: "https://github.com/user-attachments/assets/140ceb0c-8bb2-4a0e-8946-3b55a0529d89" },
];

export default function MothershipzetaGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
