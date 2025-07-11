import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/7286d995-56c2-45b0-9c2c-6e1d40147fe2", thumbnail: "https://github.com/user-attachments/assets/7286d995-56c2-45b0-9c2c-6e1d40147fe2" },
    { original: "https://github.com/user-attachments/assets/3fe39fb2-18c7-45e6-9e86-ab84765e34d5", thumbnail: "https://github.com/user-attachments/assets/3fe39fb2-18c7-45e6-9e86-ab84765e34d5" },
    { original: "https://github.com/user-attachments/assets/4bf930ac-a9e7-453d-adfa-da3da75a9b99", thumbnail: "https://github.com/user-attachments/assets/4bf930ac-a9e7-453d-adfa-da3da75a9b99" },
    { original: "https://github.com/user-attachments/assets/807a4bfd-7b9c-44a6-8178-e70453a1a535", thumbnail: "https://github.com/user-attachments/assets/807a4bfd-7b9c-44a6-8178-e70453a1a535" },
    { original: "https://github.com/user-attachments/assets/e890828d-1dff-426b-8975-231833b61ebc", thumbnail: "https://github.com/user-attachments/assets/e890828d-1dff-426b-8975-231833b61ebc" },
    { original: "https://github.com/user-attachments/assets/64d9536e-b6e8-4562-ad34-ef128f154439", thumbnail: "https://github.com/user-attachments/assets/64d9536e-b6e8-4562-ad34-ef128f154439" },
    { original: "https://github.com/user-attachments/assets/86fa0849-e2fe-4626-a8f7-a076e93aa18f", thumbnail: "https://github.com/user-attachments/assets/86fa0849-e2fe-4626-a8f7-a076e93aa18f" },
    { original: "https://github.com/user-attachments/assets/9fc6e0cf-63ab-48ce-8c52-da09ab07c131", thumbnail: "https://github.com/user-attachments/assets/9fc6e0cf-63ab-48ce-8c52-da09ab07c131" },
    { original: "https://github.com/user-attachments/assets/d779fe9c-3bdc-49b1-adb7-88e8f8bcafb3", thumbnail: "https://github.com/user-attachments/assets/d779fe9c-3bdc-49b1-adb7-88e8f8bcafb3" },
    { original: "https://github.com/user-attachments/assets/e54e3a99-5231-435b-a82f-ab6887119237", thumbnail: "https://github.com/user-attachments/assets/e54e3a99-5231-435b-a82f-ab6887119237" },
    { original: "https://github.com/user-attachments/assets/9b72f6c2-7527-4270-a057-eeda9f18c82d", thumbnail: "https://github.com/user-attachments/assets/9b72f6c2-7527-4270-a057-eeda9f18c82d" },
    { original: "https://github.com/user-attachments/assets/50a2c615-497d-4ef9-b758-157eaf914ca2", thumbnail: "https://github.com/user-attachments/assets/50a2c615-497d-4ef9-b758-157eaf914ca2" },
    { original: "https://github.com/user-attachments/assets/6997d3b8-03f7-4a97-a501-eef0ae6a6e57", thumbnail: "https://github.com/user-attachments/assets/6997d3b8-03f7-4a97-a501-eef0ae6a6e57" },
    { original: "https://github.com/user-attachments/assets/71d1903f-5655-4ec3-af29-2f05e34f7404", thumbnail: "https://github.com/user-attachments/assets/71d1903f-5655-4ec3-af29-2f05e34f7404" },
    { original: "https://github.com/user-attachments/assets/e96f5820-cc85-44b3-ab6b-d14e8d192ad6", thumbnail: "https://github.com/user-attachments/assets/e96f5820-cc85-44b3-ab6b-d14e8d192ad6" },
    { original: "https://github.com/user-attachments/assets/0bb50b84-3c80-4acd-a4bc-1ed4f0d12996", thumbnail: "https://github.com/user-attachments/assets/0bb50b84-3c80-4acd-a4bc-1ed4f0d12996" },
    { original: "https://github.com/user-attachments/assets/529811da-dfc5-4e6c-8a9a-cd3426f388a0", thumbnail: "https://github.com/user-attachments/assets/529811da-dfc5-4e6c-8a9a-cd3426f388a0" },
    { original: "https://github.com/user-attachments/assets/dbc447cc-0e75-4464-89a8-0701729b2ada", thumbnail: "https://github.com/user-attachments/assets/dbc447cc-0e75-4464-89a8-0701729b2ada" },
    { original: "https://github.com/user-attachments/assets/4425bd0b-7b1c-43f5-a18e-4ec04fc366ed", thumbnail: "https://github.com/user-attachments/assets/4425bd0b-7b1c-43f5-a18e-4ec04fc366ed" },
    { original: "https://github.com/user-attachments/assets/eb2fe489-0485-46cc-a2b5-e601901078d0", thumbnail: "https://github.com/user-attachments/assets/eb2fe489-0485-46cc-a2b5-e601901078d0" },
    { original: "https://github.com/user-attachments/assets/327fd4d3-e2f7-409b-b2d2-9ac7b37f631d", thumbnail: "https://github.com/user-attachments/assets/327fd4d3-e2f7-409b-b2d2-9ac7b37f631d" },
    { original: "https://github.com/user-attachments/assets/d45941e6-1c97-450b-99a7-f2d0108d6c3d", thumbnail: "https://github.com/user-attachments/assets/d45941e6-1c97-450b-99a7-f2d0108d6c3d" },
    { original: "https://github.com/user-attachments/assets/622415fe-583f-4c3a-936c-5b4642349f25", thumbnail: "https://github.com/user-attachments/assets/622415fe-583f-4c3a-936c-5b4642349f25" },
    { original: "https://github.com/user-attachments/assets/242a6127-5592-421e-aabc-270edc020c82", thumbnail: "https://github.com/user-attachments/assets/242a6127-5592-421e-aabc-270edc020c82" },
    { original: "https://github.com/user-attachments/assets/ef014cb6-561e-4358-88df-43baae544d3b", thumbnail: "https://github.com/user-attachments/assets/ef014cb6-561e-4358-88df-43baae544d3b" },
    { original: "https://github.com/user-attachments/assets/4a180086-52f1-4e59-9db1-5e1ebf5ba992", thumbnail: "https://github.com/user-attachments/assets/4a180086-52f1-4e59-9db1-5e1ebf5ba992" },
    { original: "https://github.com/user-attachments/assets/93dd8475-a2db-4d90-bc34-b855b23d38b4", thumbnail: "https://github.com/user-attachments/assets/93dd8475-a2db-4d90-bc34-b855b23d38b4" },
    { original: "https://github.com/user-attachments/assets/364a8c09-6f3f-4341-b7c2-6595308adcf1", thumbnail: "https://github.com/user-attachments/assets/364a8c09-6f3f-4341-b7c2-6595308adcf1" },
    { original: "https://github.com/user-attachments/assets/63fa9fff-434a-48ea-b99a-156bfcdfa757", thumbnail: "https://github.com/user-attachments/assets/63fa9fff-434a-48ea-b99a-156bfcdfa757" },
    { original: "https://github.com/user-attachments/assets/f7ec187a-209e-4c31-9ccd-b09e3be781d7", thumbnail: "https://github.com/user-attachments/assets/f7ec187a-209e-4c31-9ccd-b09e3be781d7" },
    { original: "https://github.com/user-attachments/assets/2315046e-5cad-4ce1-ba76-9f9846e771f5", thumbnail: "https://github.com/user-attachments/assets/2315046e-5cad-4ce1-ba76-9f9846e771f5" },
    { original: "https://github.com/user-attachments/assets/7944212b-d95c-4e87-8aea-4ec84b370fa2", thumbnail: "https://github.com/user-attachments/assets/7944212b-d95c-4e87-8aea-4ec84b370fa2" },
    { original: "https://github.com/user-attachments/assets/07a7f1b3-6ef1-4ea8-9f52-e863e67f42d4", thumbnail: "https://github.com/user-attachments/assets/07a7f1b3-6ef1-4ea8-9f52-e863e67f42d4" },
    { original: "https://github.com/user-attachments/assets/a3c1036e-0aa1-4312-9c8e-6dcf8419f859", thumbnail: "https://github.com/user-attachments/assets/a3c1036e-0aa1-4312-9c8e-6dcf8419f859" },
    { original: "https://github.com/user-attachments/assets/15d571d6-9f96-4439-91c3-fcd460ab9c14", thumbnail: "https://github.com/user-attachments/assets/15d571d6-9f96-4439-91c3-fcd460ab9c14" },
    { original: "https://github.com/user-attachments/assets/d85c123a-0f95-4097-b77c-d843f6321090", thumbnail: "https://github.com/user-attachments/assets/d85c123a-0f95-4097-b77c-d843f6321090" },
    { original: "https://github.com/user-attachments/assets/4144b2ff-5d85-4cff-bc2e-b02eac9e6ba1", thumbnail: "https://github.com/user-attachments/assets/4144b2ff-5d85-4cff-bc2e-b02eac9e6ba1" },
    { original: "https://github.com/user-attachments/assets/c649e800-33c8-4378-add5-927d196ce10c", thumbnail: "https://github.com/user-attachments/assets/c649e800-33c8-4378-add5-927d196ce10c" },
    { original: "https://github.com/user-attachments/assets/00c266a1-649e-406b-8e6f-12419ef61870", thumbnail: "https://github.com/user-attachments/assets/00c266a1-649e-406b-8e6f-12419ef61870" },
    { original: "https://github.com/user-attachments/assets/32c3c3c4-ea2a-4d83-9332-6636b688d30b", thumbnail: "https://github.com/user-attachments/assets/32c3c3c4-ea2a-4d83-9332-6636b688d30b" },
    { original: "https://github.com/user-attachments/assets/0ce88114-0c9c-4a17-be1a-050cd4fcff13", thumbnail: "https://github.com/user-attachments/assets/0ce88114-0c9c-4a17-be1a-050cd4fcff13" },
    { original: "https://github.com/user-attachments/assets/d78cce79-cfee-4fc8-bac7-789fb5b296ab", thumbnail: "https://github.com/user-attachments/assets/d78cce79-cfee-4fc8-bac7-789fb5b296ab" },
    { original: "https://github.com/user-attachments/assets/cda9c19b-b476-42eb-931e-204ec974881d", thumbnail: "https://github.com/user-attachments/assets/cda9c19b-b476-42eb-931e-204ec974881d" },
    { original: "https://github.com/user-attachments/assets/55c0df5f-3eae-4358-baad-f0636c30a5ab", thumbnail: "https://github.com/user-attachments/assets/55c0df5f-3eae-4358-baad-f0636c30a5ab" },
    { original: "https://github.com/user-attachments/assets/431d9935-27ac-46b0-8102-3365f0f13e8c", thumbnail: "https://github.com/user-attachments/assets/431d9935-27ac-46b0-8102-3365f0f13e8c" },
    { original: "https://github.com/user-attachments/assets/63ff9bc6-9d17-4092-95e8-96d54d7ab458", thumbnail: "https://github.com/user-attachments/assets/63ff9bc6-9d17-4092-95e8-96d54d7ab458" },
    { original: "https://github.com/user-attachments/assets/db5f50e3-ef5a-4ca0-aeba-dc468a765d7b", thumbnail: "https://github.com/user-attachments/assets/db5f50e3-ef5a-4ca0-aeba-dc468a765d7b" },
    { original: "https://github.com/user-attachments/assets/48eaad2f-1b97-4e85-8e29-e71415e5934e", thumbnail: "https://github.com/user-attachments/assets/48eaad2f-1b97-4e85-8e29-e71415e5934e" },
    { original: "https://github.com/user-attachments/assets/7a6650c4-4251-447f-8e2c-1ea2d2fb0abf", thumbnail: "https://github.com/user-attachments/assets/7a6650c4-4251-447f-8e2c-1ea2d2fb0abf" },
    { original: "https://github.com/user-attachments/assets/6fc47647-ec63-45aa-9a45-39788db2553b", thumbnail: "https://github.com/user-attachments/assets/6fc47647-ec63-45aa-9a45-39788db2553b" },
];

export default function OldworldbluesinteriorsGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
