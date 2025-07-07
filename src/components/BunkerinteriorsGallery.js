import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/f1227ff1-38e8-415e-9889-0c32f5c497fb", thumbnail: "https://github.com/user-attachments/assets/f1227ff1-38e8-415e-9889-0c32f5c497fb" },
    { original: "https://github.com/user-attachments/assets/71edb327-dd6b-4f02-b6e5-83f94cc40164", thumbnail: "https://github.com/user-attachments/assets/71edb327-dd6b-4f02-b6e5-83f94cc40164" },
    { original: "https://github.com/user-attachments/assets/2d3b557e-ad03-47df-8826-0d96b83d4902", thumbnail: "https://github.com/user-attachments/assets/2d3b557e-ad03-47df-8826-0d96b83d4902" },
    { original: "https://github.com/user-attachments/assets/feb15929-430e-4dd4-8351-2e1c877aa784", thumbnail: "https://github.com/user-attachments/assets/feb15929-430e-4dd4-8351-2e1c877aa784" },
    { original: "https://github.com/user-attachments/assets/7ecc99d6-fecb-40a9-8b5d-faa433ccc557", thumbnail: "https://github.com/user-attachments/assets/7ecc99d6-fecb-40a9-8b5d-faa433ccc557" },
    { original: "https://github.com/user-attachments/assets/ad40cc9e-6c7c-4d99-b7c9-cec3f0feb62f", thumbnail: "https://github.com/user-attachments/assets/ad40cc9e-6c7c-4d99-b7c9-cec3f0feb62f" },
    { original: "https://github.com/user-attachments/assets/21c5751c-5f79-4946-a571-3e7c197a72bf", thumbnail: "https://github.com/user-attachments/assets/21c5751c-5f79-4946-a571-3e7c197a72bf" },
    { original: "https://github.com/user-attachments/assets/a591c642-185f-4fdd-8ce9-08855273952f", thumbnail: "https://github.com/user-attachments/assets/a591c642-185f-4fdd-8ce9-08855273952f" },
    { original: "https://github.com/user-attachments/assets/10e6292b-96cb-432a-b9fc-6e786d1d915c", thumbnail: "https://github.com/user-attachments/assets/10e6292b-96cb-432a-b9fc-6e786d1d915c" },
    { original: "https://github.com/user-attachments/assets/9819077a-202b-49f1-8061-4a9f2231c2c6", thumbnail: "https://github.com/user-attachments/assets/9819077a-202b-49f1-8061-4a9f2231c2c6" },
    { original: "https://github.com/user-attachments/assets/118d2381-df00-49f5-8071-6ed8b06b3bc9", thumbnail: "https://github.com/user-attachments/assets/118d2381-df00-49f5-8071-6ed8b06b3bc9" },
    { original: "https://github.com/user-attachments/assets/ef27183c-390b-431e-9290-a5a83352ae34", thumbnail: "https://github.com/user-attachments/assets/ef27183c-390b-431e-9290-a5a83352ae34" },
    { original: "https://github.com/user-attachments/assets/d9e4170c-62e1-426d-aa71-a4987fd7ca77", thumbnail: "https://github.com/user-attachments/assets/d9e4170c-62e1-426d-aa71-a4987fd7ca77" },
    { original: "https://github.com/user-attachments/assets/1a1d6792-be1b-4226-86cf-d2e531445cfe", thumbnail: "https://github.com/user-attachments/assets/1a1d6792-be1b-4226-86cf-d2e531445cfe" },
    { original: "https://github.com/user-attachments/assets/87ffd41a-f73c-44fd-bb35-41b47fee6378", thumbnail: "https://github.com/user-attachments/assets/87ffd41a-f73c-44fd-bb35-41b47fee6378" },
    { original: "https://github.com/user-attachments/assets/9336114f-b2b9-491b-ab32-af95f79c877c", thumbnail: "https://github.com/user-attachments/assets/9336114f-b2b9-491b-ab32-af95f79c877c" },
    { original: "https://github.com/user-attachments/assets/0f2b0d57-8625-4efc-85a4-5c1c771dba6c", thumbnail: "https://github.com/user-attachments/assets/0f2b0d57-8625-4efc-85a4-5c1c771dba6c" },
    { original: "https://github.com/user-attachments/assets/e4476ddf-8219-479e-bdc0-36ceff663803", thumbnail: "https://github.com/user-attachments/assets/e4476ddf-8219-479e-bdc0-36ceff663803" },
    { original: "https://github.com/user-attachments/assets/5e0a138f-11d4-4f74-83d0-7753f831b6c9", thumbnail: "https://github.com/user-attachments/assets/5e0a138f-11d4-4f74-83d0-7753f831b6c9" },
    { original: "https://github.com/user-attachments/assets/70997c2c-3410-4b27-9d94-16be3bf76f4a", thumbnail: "https://github.com/user-attachments/assets/70997c2c-3410-4b27-9d94-16be3bf76f4a" },
    { original: "https://github.com/user-attachments/assets/615c50b9-08b4-4a01-bb14-acb4a225f5e5", thumbnail: "https://github.com/user-attachments/assets/615c50b9-08b4-4a01-bb14-acb4a225f5e5" },
    { original: "https://github.com/user-attachments/assets/16671671-715b-4d4b-b1ee-c6cb474728a1", thumbnail: "https://github.com/user-attachments/assets/16671671-715b-4d4b-b1ee-c6cb474728a1" },
    { original: "https://github.com/user-attachments/assets/36712d18-021d-4ee8-81ad-cf1a5e32c1a5", thumbnail: "https://github.com/user-attachments/assets/36712d18-021d-4ee8-81ad-cf1a5e32c1a5" },
    { original: "https://github.com/user-attachments/assets/a117b675-dbd3-4b89-9be3-56eb1db842a3", thumbnail: "https://github.com/user-attachments/assets/a117b675-dbd3-4b89-9be3-56eb1db842a3" },
    { original: "https://github.com/user-attachments/assets/d4c943fc-a125-47dc-b233-da7891135870", thumbnail: "https://github.com/user-attachments/assets/d4c943fc-a125-47dc-b233-da7891135870" },
    { original: "https://github.com/user-attachments/assets/5703890b-e122-40c9-8a49-6f685e806e8a", thumbnail: "https://github.com/user-attachments/assets/5703890b-e122-40c9-8a49-6f685e806e8a" },
    { original: "https://github.com/user-attachments/assets/e409c161-12e3-4a79-ab3d-193f4a3207a9", thumbnail: "https://github.com/user-attachments/assets/e409c161-12e3-4a79-ab3d-193f4a3207a9" },
    { original: "https://github.com/user-attachments/assets/39c74bac-7cab-413b-bfe5-3f378b250257", thumbnail: "https://github.com/user-attachments/assets/39c74bac-7cab-413b-bfe5-3f378b250257" },
];

export default function BunkerinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
