import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/50f9e973-cbc3-49b6-8703-d4e33cebc246", thumbnail: "https://github.com/user-attachments/assets/50f9e973-cbc3-49b6-8703-d4e33cebc246" },
    { original: "https://github.com/user-attachments/assets/515aa9f5-fa50-4168-9f13-bc0e9da068d9", thumbnail: "https://github.com/user-attachments/assets/515aa9f5-fa50-4168-9f13-bc0e9da068d9" },
    { original: "https://github.com/user-attachments/assets/1dc71f60-f70b-4e9b-a2c3-a3b083e9ca45", thumbnail: "https://github.com/user-attachments/assets/1dc71f60-f70b-4e9b-a2c3-a3b083e9ca45" },
    { original: "https://github.com/user-attachments/assets/4b175d22-214a-49cb-99e5-053931999f17", thumbnail: "https://github.com/user-attachments/assets/4b175d22-214a-49cb-99e5-053931999f17" },
    { original: "https://github.com/user-attachments/assets/5b4a2762-6a03-49c0-9f28-b8a2892564b5", thumbnail: "https://github.com/user-attachments/assets/5b4a2762-6a03-49c0-9f28-b8a2892564b5" },
    { original: "https://github.com/user-attachments/assets/f564d758-556f-4a03-ac7e-1ad0abafce0d", thumbnail: "https://github.com/user-attachments/assets/f564d758-556f-4a03-ac7e-1ad0abafce0d" },
    { original: "https://github.com/user-attachments/assets/ba0dd74e-76ba-4bfc-9619-d1b3249fa036", thumbnail: "https://github.com/user-attachments/assets/ba0dd74e-76ba-4bfc-9619-d1b3249fa036" },
    { original: "https://github.com/user-attachments/assets/b59980a0-6ae4-4c02-ba69-d3acdb8d10bd", thumbnail: "https://github.com/user-attachments/assets/b59980a0-6ae4-4c02-ba69-d3acdb8d10bd" },
    { original: "https://github.com/user-attachments/assets/8d82acb1-6cbd-40ac-85fd-8f91d843c3fa", thumbnail: "https://github.com/user-attachments/assets/8d82acb1-6cbd-40ac-85fd-8f91d843c3fa" },
    { original: "https://github.com/user-attachments/assets/ec243a75-d415-473d-bbd8-f14ea4f3143c", thumbnail: "https://github.com/user-attachments/assets/ec243a75-d415-473d-bbd8-f14ea4f3143c" },
    { original: "https://github.com/user-attachments/assets/ad8f8407-7445-48fe-b251-bb77f3314dd4", thumbnail: "https://github.com/user-attachments/assets/ad8f8407-7445-48fe-b251-bb77f3314dd4" },
    { original: "https://github.com/user-attachments/assets/4e88d33c-80ed-4339-bcf1-ad591f2f2d98", thumbnail: "https://github.com/user-attachments/assets/4e88d33c-80ed-4339-bcf1-ad591f2f2d98" },
    { original: "https://github.com/user-attachments/assets/1ffb0fcc-c4bc-470a-b094-45ea75ea5755", thumbnail: "https://github.com/user-attachments/assets/1ffb0fcc-c4bc-470a-b094-45ea75ea5755" },
    { original: "https://github.com/user-attachments/assets/d7f04ab4-2829-4487-b7e6-b1be9a7c6ca0", thumbnail: "https://github.com/user-attachments/assets/d7f04ab4-2829-4487-b7e6-b1be9a7c6ca0" },
    { original: "https://github.com/user-attachments/assets/85a9154b-3637-45cb-b7c3-4395a6c4bc04", thumbnail: "https://github.com/user-attachments/assets/85a9154b-3637-45cb-b7c3-4395a6c4bc04" },
    { original: "https://github.com/user-attachments/assets/523300bb-723b-4d1e-8584-cace343b57c3", thumbnail: "https://github.com/user-attachments/assets/523300bb-723b-4d1e-8584-cace343b57c3" },
];

export default function ZiontrailGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
