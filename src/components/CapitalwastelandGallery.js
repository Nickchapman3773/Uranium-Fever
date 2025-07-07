import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/9a9020c5-a9ab-495a-befc-11d0f1ae27b6", thumbnail: "https://github.com/user-attachments/assets/9a9020c5-a9ab-495a-befc-11d0f1ae27b6" },
    { original: "https://github.com/user-attachments/assets/2e98287b-04db-4c6d-a35c-61c053210dba", thumbnail: "https://github.com/user-attachments/assets/2e98287b-04db-4c6d-a35c-61c053210dba" },
    { original: "https://github.com/user-attachments/assets/acd0f95a-b1b0-4271-a8cc-7d5b0df53dc8", thumbnail: "https://github.com/user-attachments/assets/acd0f95a-b1b0-4271-a8cc-7d5b0df53dc8" },
    { original: "https://github.com/user-attachments/assets/cc7eaf4d-6ea2-45f4-809e-0a770f76f4ad", thumbnail: "https://github.com/user-attachments/assets/cc7eaf4d-6ea2-45f4-809e-0a770f76f4ad" },
    { original: "https://github.com/user-attachments/assets/b0f670aa-599e-4000-973d-ea3f2237048a", thumbnail: "https://github.com/user-attachments/assets/b0f670aa-599e-4000-973d-ea3f2237048a" },
    { original: "https://github.com/user-attachments/assets/c8aa0d93-9dfb-49f9-ab5e-9a85eadd681d", thumbnail: "https://github.com/user-attachments/assets/c8aa0d93-9dfb-49f9-ab5e-9a85eadd681d" },
    { original: "https://github.com/user-attachments/assets/2808593a-8cff-4428-9af7-ae255aea09a1", thumbnail: "https://github.com/user-attachments/assets/2808593a-8cff-4428-9af7-ae255aea09a1" },
    { original: "https://github.com/user-attachments/assets/4c17788e-04f6-4119-a84f-59b824495ee5", thumbnail: "https://github.com/user-attachments/assets/4c17788e-04f6-4119-a84f-59b824495ee5" },
    { original: "https://github.com/user-attachments/assets/5dcd9d2f-e703-4e9c-b9dd-936ae34a5e70", thumbnail: "https://github.com/user-attachments/assets/5dcd9d2f-e703-4e9c-b9dd-936ae34a5e70" },
    { original: "https://github.com/user-attachments/assets/c1ba3fbe-08cc-43ab-af68-9a9a477ff23e", thumbnail: "https://github.com/user-attachments/assets/c1ba3fbe-08cc-43ab-af68-9a9a477ff23e" },
    { original: "https://github.com/user-attachments/assets/97e68fc3-cb35-4985-923e-0120f0e68cab", thumbnail: "https://github.com/user-attachments/assets/97e68fc3-cb35-4985-923e-0120f0e68cab" },
    { original: "https://github.com/user-attachments/assets/291ea148-807e-402a-bc95-70ac43d4f023", thumbnail: "https://github.com/user-attachments/assets/291ea148-807e-402a-bc95-70ac43d4f023" },
    { original: "https://github.com/user-attachments/assets/114695cc-29a6-406b-80d6-6791fce2cd34", thumbnail: "https://github.com/user-attachments/assets/114695cc-29a6-406b-80d6-6791fce2cd34" },
    { original: "https://github.com/user-attachments/assets/c712ca0f-4061-405a-a700-0355e2e37f87", thumbnail: "https://github.com/user-attachments/assets/c712ca0f-4061-405a-a700-0355e2e37f87" },
    { original: "https://github.com/user-attachments/assets/4ce631f4-f482-42f7-b180-eaf97057479f", thumbnail: "https://github.com/user-attachments/assets/4ce631f4-f482-42f7-b180-eaf97057479f" },
    { original: "https://github.com/user-attachments/assets/34a47e66-0d3c-4550-8a45-d140d63db7f8", thumbnail: "https://github.com/user-attachments/assets/34a47e66-0d3c-4550-8a45-d140d63db7f8" },
    { original: "https://github.com/user-attachments/assets/14896bb7-aaf8-4cf8-bb64-bf8d5ffb7169", thumbnail: "https://github.com/user-attachments/assets/14896bb7-aaf8-4cf8-bb64-bf8d5ffb7169" },
    { original: "https://github.com/user-attachments/assets/41a69b32-6a4b-4478-9f9e-8739d8798068", thumbnail: "https://github.com/user-attachments/assets/41a69b32-6a4b-4478-9f9e-8739d8798068" },
    { original: "https://github.com/user-attachments/assets/c9fd3107-2b89-44d5-91b5-f8f47ca13c7a", thumbnail: "https://github.com/user-attachments/assets/c9fd3107-2b89-44d5-91b5-f8f47ca13c7a" },
    { original: "https://github.com/user-attachments/assets/8abcf191-5942-444b-82a9-cff505b97d66", thumbnail: "https://github.com/user-attachments/assets/8abcf191-5942-444b-82a9-cff505b97d66" },
    { original: "https://github.com/user-attachments/assets/fc3e5be9-b310-4cc6-8903-a1bbf0042ec9", thumbnail: "https://github.com/user-attachments/assets/fc3e5be9-b310-4cc6-8903-a1bbf0042ec9" },
    { original: "https://github.com/user-attachments/assets/5f0abeae-6616-48d4-b754-78b4ada0bee4", thumbnail: "https://github.com/user-attachments/assets/5f0abeae-6616-48d4-b754-78b4ada0bee4" },
    { original: "https://github.com/user-attachments/assets/0961d4dc-6138-4931-ba55-e42f393d0ce5", thumbnail: "https://github.com/user-attachments/assets/0961d4dc-6138-4931-ba55-e42f393d0ce5" },
    { original: "https://github.com/user-attachments/assets/172e2893-75b5-499a-94b1-9cd174c04366", thumbnail: "https://github.com/user-attachments/assets/172e2893-75b5-499a-94b1-9cd174c04366" },
    { original: "https://github.com/user-attachments/assets/5af00468-8450-40c4-a157-a46de4f832ad", thumbnail: "https://github.com/user-attachments/assets/5af00468-8450-40c4-a157-a46de4f832ad" },
    { original: "https://github.com/user-attachments/assets/395280e0-0907-4c57-a2f2-6c4f0bb11114", thumbnail: "https://github.com/user-attachments/assets/395280e0-0907-4c57-a2f2-6c4f0bb11114" },
    { original: "https://github.com/user-attachments/assets/dd707754-60ac-4682-9f39-a7e8259e3102", thumbnail: "https://github.com/user-attachments/assets/dd707754-60ac-4682-9f39-a7e8259e3102" },
    { original: "https://github.com/user-attachments/assets/8d379a38-93db-4699-9d74-0b572bcd6514", thumbnail: "https://github.com/user-attachments/assets/8d379a38-93db-4699-9d74-0b572bcd6514" },
];

export default function CapitalwastelandGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
