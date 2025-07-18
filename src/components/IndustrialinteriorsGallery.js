import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/5c585aa2-1ae8-4086-b0df-f3b3718a509f", thumbnail: "https://github.com/user-attachments/assets/5c585aa2-1ae8-4086-b0df-f3b3718a509f" },
    { original: "https://github.com/user-attachments/assets/950405b2-2569-4e01-9704-96e5cfb45fd9", thumbnail: "https://github.com/user-attachments/assets/950405b2-2569-4e01-9704-96e5cfb45fd9" },
    { original: "https://github.com/user-attachments/assets/57ad1313-6dcc-4f90-b9e4-a8d300e9d921", thumbnail: "https://github.com/user-attachments/assets/57ad1313-6dcc-4f90-b9e4-a8d300e9d921" },
    { original: "https://github.com/user-attachments/assets/aae9190e-2e21-4cf3-b0f7-2f39e91da8c4", thumbnail: "https://github.com/user-attachments/assets/aae9190e-2e21-4cf3-b0f7-2f39e91da8c4" },
    { original: "https://github.com/user-attachments/assets/61807818-93ab-40ca-b777-84eb3149fcc6", thumbnail: "https://github.com/user-attachments/assets/61807818-93ab-40ca-b777-84eb3149fcc6" },
    { original: "https://github.com/user-attachments/assets/7a2979d5-0a67-485a-b958-aed90f96c51c", thumbnail: "https://github.com/user-attachments/assets/7a2979d5-0a67-485a-b958-aed90f96c51c" },
    { original: "https://github.com/user-attachments/assets/52c1f2fd-7efc-4cbc-a2fb-1e7248039b73", thumbnail: "https://github.com/user-attachments/assets/52c1f2fd-7efc-4cbc-a2fb-1e7248039b73" },
    { original: "https://github.com/user-attachments/assets/9a71d74b-5142-4d2a-86f6-725022821970", thumbnail: "https://github.com/user-attachments/assets/9a71d74b-5142-4d2a-86f6-725022821970" },
    { original: "https://github.com/user-attachments/assets/2d67fcd7-892d-42b1-80d4-8b343d485217", thumbnail: "https://github.com/user-attachments/assets/2d67fcd7-892d-42b1-80d4-8b343d485217" },
    { original: "https://github.com/user-attachments/assets/0e2a1f10-f6af-4f7c-ba38-2514757ca5a3", thumbnail: "https://github.com/user-attachments/assets/0e2a1f10-f6af-4f7c-ba38-2514757ca5a3" },
    { original: "https://github.com/user-attachments/assets/df6960f8-f825-4ff6-970a-0a0e29f326cb", thumbnail: "https://github.com/user-attachments/assets/df6960f8-f825-4ff6-970a-0a0e29f326cb" },
    { original: "https://github.com/user-attachments/assets/c5436119-5d1a-400a-a32e-8ec09f9aa5db", thumbnail: "https://github.com/user-attachments/assets/c5436119-5d1a-400a-a32e-8ec09f9aa5db" },
    { original: "https://github.com/user-attachments/assets/75e30ed6-f2e6-4bb1-a862-878822cf849b", thumbnail: "https://github.com/user-attachments/assets/75e30ed6-f2e6-4bb1-a862-878822cf849b" },
    { original: "https://github.com/user-attachments/assets/471a9d8f-f921-408b-8472-2c4d916fcac3", thumbnail: "https://github.com/user-attachments/assets/471a9d8f-f921-408b-8472-2c4d916fcac3" },
    { original: "https://github.com/user-attachments/assets/c6633fd3-b627-4a8c-85e4-f193707b1127", thumbnail: "https://github.com/user-attachments/assets/c6633fd3-b627-4a8c-85e4-f193707b1127" },
    { original: "https://github.com/user-attachments/assets/01fe677b-6843-48fb-8522-3344977a1dab", thumbnail: "https://github.com/user-attachments/assets/01fe677b-6843-48fb-8522-3344977a1dab" },
    { original: "https://github.com/user-attachments/assets/40d5a7fd-3826-4ce6-901c-08aaa8202d27", thumbnail: "https://github.com/user-attachments/assets/40d5a7fd-3826-4ce6-901c-08aaa8202d27" },
    { original: "https://github.com/user-attachments/assets/4e485ed9-1ccb-47b1-b4cb-ba84d5336b95", thumbnail: "https://github.com/user-attachments/assets/4e485ed9-1ccb-47b1-b4cb-ba84d5336b95" },
    { original: "https://github.com/user-attachments/assets/f40efa81-c99d-4be2-b5da-2fdfb9a28aca", thumbnail: "https://github.com/user-attachments/assets/f40efa81-c99d-4be2-b5da-2fdfb9a28aca" },
    { original: "https://github.com/user-attachments/assets/212f6030-774c-4737-be60-3c43cc091ed5", thumbnail: "https://github.com/user-attachments/assets/212f6030-774c-4737-be60-3c43cc091ed5" },
    { original: "https://github.com/user-attachments/assets/19cf0461-e448-4020-8f24-eef28e7408d7", thumbnail: "https://github.com/user-attachments/assets/19cf0461-e448-4020-8f24-eef28e7408d7" },
    { original: "https://github.com/user-attachments/assets/066115d1-793b-45c0-851b-804fed7b8215", thumbnail: "https://github.com/user-attachments/assets/066115d1-793b-45c0-851b-804fed7b8215" },
    { original: "https://github.com/user-attachments/assets/bb83225f-8950-4cc9-9742-9527e633af06", thumbnail: "https://github.com/user-attachments/assets/bb83225f-8950-4cc9-9742-9527e633af06" },
    { original: "https://github.com/user-attachments/assets/f727aa7e-d585-40e8-95af-2ef0ae9cc38a", thumbnail: "https://github.com/user-attachments/assets/f727aa7e-d585-40e8-95af-2ef0ae9cc38a" },
    { original: "https://github.com/user-attachments/assets/3c068df8-8063-4213-a3a7-3223a1d1f471", thumbnail: "https://github.com/user-attachments/assets/3c068df8-8063-4213-a3a7-3223a1d1f471" },
];

export default function IndustrialinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
