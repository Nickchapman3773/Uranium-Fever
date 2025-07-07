import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/5ff4c6be-3352-46dd-81f9-e54e80ee0003", thumbnail: "https://github.com/user-attachments/assets/5ff4c6be-3352-46dd-81f9-e54e80ee0003" },
    { original: "https://github.com/user-attachments/assets/d2ec93ca-cc21-4e70-bc2b-f4388abd9381", thumbnail: "https://github.com/user-attachments/assets/d2ec93ca-cc21-4e70-bc2b-f4388abd9381" },
    { original: "https://github.com/user-attachments/assets/a0d1b5f5-9a08-4fee-96f2-9dda2d1133f2", thumbnail: "https://github.com/user-attachments/assets/a0d1b5f5-9a08-4fee-96f2-9dda2d1133f2" },
    { original: "https://github.com/user-attachments/assets/f8671668-7126-44fd-91a9-41e9237d6f02", thumbnail: "https://github.com/user-attachments/assets/f8671668-7126-44fd-91a9-41e9237d6f02" },
    { original: "https://github.com/user-attachments/assets/958bd7f8-0460-44ac-87ca-706b50bcd7dc", thumbnail: "https://github.com/user-attachments/assets/958bd7f8-0460-44ac-87ca-706b50bcd7dc" },
    { original: "https://github.com/user-attachments/assets/f5e4146f-ed58-49ae-80e9-08614ae6fe27", thumbnail: "https://github.com/user-attachments/assets/f5e4146f-ed58-49ae-80e9-08614ae6fe27" },
    { original: "https://github.com/user-attachments/assets/f1eb7f94-9aad-42d3-aba5-d9207782fae4", thumbnail: "https://github.com/user-attachments/assets/f1eb7f94-9aad-42d3-aba5-d9207782fae4" },
    { original: "https://github.com/user-attachments/assets/76558890-3c06-464f-a735-cd85cae34894", thumbnail: "https://github.com/user-attachments/assets/76558890-3c06-464f-a735-cd85cae34894" },
    { original: "https://github.com/user-attachments/assets/44f334df-5876-49e9-bb84-8be728f2f40e", thumbnail: "https://github.com/user-attachments/assets/44f334df-5876-49e9-bb84-8be728f2f40e" },
    { original: "https://github.com/user-attachments/assets/75e8e2d0-0011-4191-a893-1c8ac59c9460", thumbnail: "https://github.com/user-attachments/assets/75e8e2d0-0011-4191-a893-1c8ac59c9460" },
    { original: "https://github.com/user-attachments/assets/3e724351-94fa-4eeb-99ad-bb24d66dc6bb", thumbnail: "https://github.com/user-attachments/assets/3e724351-94fa-4eeb-99ad-bb24d66dc6bb" },
    { original: "https://github.com/user-attachments/assets/ee85ac78-3135-4044-ab9e-79de196d5d56", thumbnail: "https://github.com/user-attachments/assets/ee85ac78-3135-4044-ab9e-79de196d5d56" },
    { original: "https://github.com/user-attachments/assets/ffcfa95a-a2b4-4303-99d2-348919e2b73a", thumbnail: "https://github.com/user-attachments/assets/ffcfa95a-a2b4-4303-99d2-348919e2b73a" },
    { original: "https://github.com/user-attachments/assets/02f991b9-5f80-446c-a8d1-f7b96be09b4e", thumbnail: "https://github.com/user-attachments/assets/02f991b9-5f80-446c-a8d1-f7b96be09b4e" },
    { original: "https://github.com/user-attachments/assets/92a0fd05-3025-4630-9b91-650277b897d1", thumbnail: "https://github.com/user-attachments/assets/92a0fd05-3025-4630-9b91-650277b897d1" },
    { original: "https://github.com/user-attachments/assets/3c6a48d3-6378-46ef-90f8-cd9527fb26cb", thumbnail: "https://github.com/user-attachments/assets/3c6a48d3-6378-46ef-90f8-cd9527fb26cb" },
    { original: "https://github.com/user-attachments/assets/34fae3e3-c00f-4496-97f3-f4dbe9e870c5", thumbnail: "https://github.com/user-attachments/assets/34fae3e3-c00f-4496-97f3-f4dbe9e870c5" },
    { original: "https://github.com/user-attachments/assets/da1d8415-0769-4b09-b7ad-7e5a02ad25a8", thumbnail: "https://github.com/user-attachments/assets/da1d8415-0769-4b09-b7ad-7e5a02ad25a8" },
];

export default function LonesomeroadGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
