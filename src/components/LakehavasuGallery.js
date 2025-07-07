import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/b91ad875-c2dd-4c5c-9455-e88b01504fba", thumbnail: "https://github.com/user-attachments/assets/b91ad875-c2dd-4c5c-9455-e88b01504fba" },
    { original: "https://github.com/user-attachments/assets/bb302f41-335a-43e1-afef-f8539909a723", thumbnail: "https://github.com/user-attachments/assets/bb302f41-335a-43e1-afef-f8539909a723" },
    { original: "https://github.com/user-attachments/assets/ef5611e5-4623-469f-8020-e27c16ab9dda", thumbnail: "https://github.com/user-attachments/assets/ef5611e5-4623-469f-8020-e27c16ab9dda" },
    { original: "https://github.com/user-attachments/assets/86f19344-ba20-4309-a97a-34816343838b", thumbnail: "https://github.com/user-attachments/assets/86f19344-ba20-4309-a97a-34816343838b" },
    { original: "https://github.com/user-attachments/assets/e38d7a68-15ed-427c-9ca2-1eec9e2a937e", thumbnail: "https://github.com/user-attachments/assets/e38d7a68-15ed-427c-9ca2-1eec9e2a937e" },
    { original: "https://github.com/user-attachments/assets/ef687c15-d6b7-40cd-8a08-670c0491ecb8", thumbnail: "https://github.com/user-attachments/assets/ef687c15-d6b7-40cd-8a08-670c0491ecb8" },
    { original: "https://github.com/user-attachments/assets/52259eb4-af94-4f52-9b3e-e21ad330eefc", thumbnail: "https://github.com/user-attachments/assets/52259eb4-af94-4f52-9b3e-e21ad330eefc" },
    { original: "https://github.com/user-attachments/assets/b0459593-0e64-4652-a00c-fe1d613a2100", thumbnail: "https://github.com/user-attachments/assets/b0459593-0e64-4652-a00c-fe1d613a2100" },
    { original: "https://github.com/user-attachments/assets/8c9495d6-39cf-4180-97ee-fd348d77bc80", thumbnail: "https://github.com/user-attachments/assets/8c9495d6-39cf-4180-97ee-fd348d77bc80" },
    { original: "https://github.com/user-attachments/assets/d3c6dcbf-a1d1-406e-8f39-87ed84705916", thumbnail: "https://github.com/user-attachments/assets/d3c6dcbf-a1d1-406e-8f39-87ed84705916" },
    { original: "https://github.com/user-attachments/assets/b81613a8-0fba-4b06-8735-7c30eca8a03c", thumbnail: "https://github.com/user-attachments/assets/b81613a8-0fba-4b06-8735-7c30eca8a03c" },
    { original: "https://github.com/user-attachments/assets/d5708daf-fd3c-4d71-91a8-587fd8efebf9", thumbnail: "https://github.com/user-attachments/assets/d5708daf-fd3c-4d71-91a8-587fd8efebf9" },
    { original: "https://github.com/user-attachments/assets/2abb5265-97ab-45e5-a527-f4427c6a2fa8", thumbnail: "https://github.com/user-attachments/assets/2abb5265-97ab-45e5-a527-f4427c6a2fa8" },
];

export default function LakehavasuGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
