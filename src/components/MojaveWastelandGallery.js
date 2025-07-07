// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [

  {
    original: 'https://github.com/user-attachments/assets/7bfee7b6-0d16-4df6-8859-ce817a59faf0',
    thumbnail: 'https://github.com/user-attachments/assets/7bfee7b6-0d16-4df6-8859-ce817a59faf0',
  },
  {
    original: 'https://github.com/user-attachments/assets/0b8ac930-ec64-4b6f-a136-e623b279b003',
    thumbnail: 'https://github.com/user-attachments/assets/0b8ac930-ec64-4b6f-a136-e623b279b003',
  },
  {
    original: 'https://github.com/user-attachments/assets/703dc7d8-9cda-428e-b337-50164162c036',
    thumbnail: 'https://github.com/user-attachments/assets/703dc7d8-9cda-428e-b337-50164162c036',
  },
  {
    original: 'https://github.com/user-attachments/assets/c3aa537d-dc88-4b50-9f80-ea7de866d665',
    thumbnail: 'https://github.com/user-attachments/assets/c3aa537d-dc88-4b50-9f80-ea7de866d665',
  },
  {
    original: 'https://github.com/user-attachments/assets/2a37f7d1-3217-4412-b5ba-51c5255881e4',
    thumbnail: 'https://github.com/user-attachments/assets/2a37f7d1-3217-4412-b5ba-51c5255881e4',
  },
  {
    original: 'https://github.com/user-attachments/assets/f7a725ea-df2a-4fda-a75f-5ff7b42f8b36',
    thumbnail: 'https://github.com/user-attachments/assets/f7a725ea-df2a-4fda-a75f-5ff7b42f8b36',
  },
  {
    original: 'https://github.com/user-attachments/assets/4e57d8d8-2211-4f90-9373-af20e1b3bb96',
    thumbnail: 'https://github.com/user-attachments/assets/4e57d8d8-2211-4f90-9373-af20e1b3bb96',
  },
  {
    original: 'https://github.com/user-attachments/assets/93cf4ceb-4f23-4ea6-8ba2-43f63f2d378c',
    thumbnail: 'https://github.com/user-attachments/assets/93cf4ceb-4f23-4ea6-8ba2-43f63f2d378c',
  },
  {
    original: 'https://github.com/user-attachments/assets/bc296930-92d9-47bf-bbde-8a0491fc2e0e',
    thumbnail: 'https://github.com/user-attachments/assets/bc296930-92d9-47bf-bbde-8a0491fc2e0e',
  },
  {
    original: 'https://github.com/user-attachments/assets/5821ecc6-4611-4152-ae63-aabfd1370a09',
    thumbnail: 'https://github.com/user-attachments/assets/5821ecc6-4611-4152-ae63-aabfd1370a09',
  },
  {
    original: 'https://github.com/user-attachments/assets/43b1c9a2-8f40-4338-a32a-8daa7079547f',
    thumbnail: 'https://github.com/user-attachments/assets/43b1c9a2-8f40-4338-a32a-8daa7079547f',
  },
  {
    original: 'https://github.com/user-attachments/assets/f098282a-e806-4db6-9137-33cf7c87cefa',
    thumbnail: 'https://github.com/user-attachments/assets/f098282a-e806-4db6-9137-33cf7c87cefa',
  },
  {
    original: 'https://github.com/user-attachments/assets/814350f6-abff-4a38-b02f-b8ec1c71f86b',
    thumbnail: 'https://github.com/user-attachments/assets/814350f6-abff-4a38-b02f-b8ec1c71f86b',
  },
  {
    original: 'https://github.com/user-attachments/assets/eb3e8b29-016b-49f8-9795-a32f7a732ec2',
    thumbnail: 'https://github.com/user-attachments/assets/eb3e8b29-016b-49f8-9795-a32f7a732ec2',
  },
  {
    original: 'https://github.com/user-attachments/assets/695fb53c-b3ad-4641-ab1d-ba9f9a56f8a4',
    thumbnail: 'https://github.com/user-attachments/assets/695fb53c-b3ad-4641-ab1d-ba9f9a56f8a4',
  },
  {
    original: 'https://github.com/user-attachments/assets/ff41f020-a0e8-4812-9d45-c2fb0a10752b',
    thumbnail: 'https://github.com/user-attachments/assets/ff41f020-a0e8-4812-9d45-c2fb0a10752b',
  },
  {
    original: 'https://github.com/user-attachments/assets/8edd0f52-6a4e-443f-be1d-9d8cb186d533',
    thumbnail: 'https://github.com/user-attachments/assets/8edd0f52-6a4e-443f-be1d-9d8cb186d533',
  },
  {
    original: 'https://github.com/user-attachments/assets/162dee19-c8dd-4899-b828-605b76240475',
    thumbnail: 'https://github.com/user-attachments/assets/162dee19-c8dd-4899-b828-605b76240475',
  },
  {
    original: 'https://github.com/user-attachments/assets/7bd8c02e-e2ef-4a3f-a6b5-2853ea2baa85',
    thumbnail: 'https://github.com/user-attachments/assets/7bd8c02e-e2ef-4a3f-a6b5-2853ea2baa85',
  },
  {
    original: 'https://github.com/user-attachments/assets/572b1f7a-bf2e-4a1f-929c-49d3fab6f4cd',
    thumbnail: 'https://github.com/user-attachments/assets/572b1f7a-bf2e-4a1f-929c-49d3fab6f4cd',
  },
  {
    original: 'https://github.com/user-attachments/assets/94a8a68d-cec4-4a66-b13e-aff6a01e28be',
    thumbnail: 'https://github.com/user-attachments/assets/94a8a68d-cec4-4a66-b13e-aff6a01e28be',
  }
];

export default function MojaveWastelandGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
    />;
}
