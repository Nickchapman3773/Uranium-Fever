import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/0e151b65-58c1-4c16-a6f4-1f2712a82a82", thumbnail: "https://github.com/user-attachments/assets/0e151b65-58c1-4c16-a6f4-1f2712a82a82" },
    { original: "https://github.com/user-attachments/assets/9d0a4962-985e-426a-b422-625eeef055f6", thumbnail: "https://github.com/user-attachments/assets/9d0a4962-985e-426a-b422-625eeef055f6" },
    { original: "https://github.com/user-attachments/assets/9f5bb617-355c-4bac-baf4-febd7f8e02e4", thumbnail: "https://github.com/user-attachments/assets/9f5bb617-355c-4bac-baf4-febd7f8e02e4" },
    { original: "https://github.com/user-attachments/assets/261409c0-8ebb-4b24-8567-8d808ca6b59c", thumbnail: "https://github.com/user-attachments/assets/261409c0-8ebb-4b24-8567-8d808ca6b59c" },
    { original: "https://github.com/user-attachments/assets/60196878-98fa-4614-b212-c5adae21e892", thumbnail: "https://github.com/user-attachments/assets/60196878-98fa-4614-b212-c5adae21e892" },
    { original: "https://github.com/user-attachments/assets/43b66543-6da3-4e6e-91cd-b277de74bdef", thumbnail: "https://github.com/user-attachments/assets/43b66543-6da3-4e6e-91cd-b277de74bdef" },
    { original: "https://github.com/user-attachments/assets/9c0ca15e-bbe3-4588-bd33-c71065cc16b4", thumbnail: "https://github.com/user-attachments/assets/9c0ca15e-bbe3-4588-bd33-c71065cc16b4" },
    { original: "https://github.com/user-attachments/assets/9e048eb2-23e1-4348-9192-baad0e799c1a", thumbnail: "https://github.com/user-attachments/assets/9e048eb2-23e1-4348-9192-baad0e799c1a" },
    { original: "https://github.com/user-attachments/assets/d0eb6fd8-52af-4498-afdb-65680ad5b700", thumbnail: "https://github.com/user-attachments/assets/d0eb6fd8-52af-4498-afdb-65680ad5b700" },
    { original: "https://github.com/user-attachments/assets/afa93559-a0b5-4089-94d7-93d05c5f2582", thumbnail: "https://github.com/user-attachments/assets/afa93559-a0b5-4089-94d7-93d05c5f2582" },
    { original: "https://github.com/user-attachments/assets/d178063a-7edf-4726-bf72-589cabed9f22", thumbnail: "https://github.com/user-attachments/assets/d178063a-7edf-4726-bf72-589cabed9f22" },
    { original: "https://github.com/user-attachments/assets/e9fbbd6c-36d1-4516-a26c-8f12ca35a843", thumbnail: "https://github.com/user-attachments/assets/e9fbbd6c-36d1-4516-a26c-8f12ca35a843" },
    { original: "https://github.com/user-attachments/assets/8251e79c-8410-44e5-b305-d6625ac1ea77", thumbnail: "https://github.com/user-attachments/assets/8251e79c-8410-44e5-b305-d6625ac1ea77" },
    { original: "https://github.com/user-attachments/assets/3fa479d1-5edd-4a7d-b364-813b39e8a1d9", thumbnail: "https://github.com/user-attachments/assets/3fa479d1-5edd-4a7d-b364-813b39e8a1d9" },
    { original: "https://github.com/user-attachments/assets/a801e5ef-b49e-47c8-90d4-161afb6d3506", thumbnail: "https://github.com/user-attachments/assets/a801e5ef-b49e-47c8-90d4-161afb6d3506" },
    { original: "https://github.com/user-attachments/assets/5c0177d6-72d2-4bf4-90e6-309e4b88a59c", thumbnail: "https://github.com/user-attachments/assets/5c0177d6-72d2-4bf4-90e6-309e4b88a59c" },
    { original: "https://github.com/user-attachments/assets/18e8c2f0-5a4d-47d7-b4d3-15f433dd53d7", thumbnail: "https://github.com/user-attachments/assets/18e8c2f0-5a4d-47d7-b4d3-15f433dd53d7" },
    { original: "https://github.com/user-attachments/assets/3890d54f-cc84-4279-90a7-237e6a58f66b", thumbnail: "https://github.com/user-attachments/assets/3890d54f-cc84-4279-90a7-237e6a58f66b" },
    { original: "https://github.com/user-attachments/assets/73543b52-b0d1-464c-9b3b-a638bb4263fe", thumbnail: "https://github.com/user-attachments/assets/73543b52-b0d1-464c-9b3b-a638bb4263fe" },
];

export default function DeadmoneyinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
