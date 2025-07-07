import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/76817002-11be-4675-8909-a4fd1ca874b1", thumbnail: "https://github.com/user-attachments/assets/76817002-11be-4675-8909-a4fd1ca874b1" },
    { original: "https://github.com/user-attachments/assets/dddea598-9006-4f91-960f-28f911d1d2b3", thumbnail: "https://github.com/user-attachments/assets/dddea598-9006-4f91-960f-28f911d1d2b3" },
    { original: "https://github.com/user-attachments/assets/6e708c99-2b0d-4f2d-8928-432ad66effc8", thumbnail: "https://github.com/user-attachments/assets/6e708c99-2b0d-4f2d-8928-432ad66effc8" },
    { original: "https://github.com/user-attachments/assets/5d6a9dd0-fd62-4679-82fb-6939c0bd43e2", thumbnail: "https://github.com/user-attachments/assets/5d6a9dd0-fd62-4679-82fb-6939c0bd43e2" },
    { original: "https://github.com/user-attachments/assets/af97e67c-27fa-467c-8971-414312cdc99b", thumbnail: "https://github.com/user-attachments/assets/af97e67c-27fa-467c-8971-414312cdc99b" },
    { original: "https://github.com/user-attachments/assets/66f37ccb-776e-4f0a-bdc6-938382bf55cb", thumbnail: "https://github.com/user-attachments/assets/66f37ccb-776e-4f0a-bdc6-938382bf55cb" },
    { original: "https://github.com/user-attachments/assets/2b2cfc63-5d7a-4426-8cfc-e1f39d8764fa", thumbnail: "https://github.com/user-attachments/assets/2b2cfc63-5d7a-4426-8cfc-e1f39d8764fa" },
    { original: "https://github.com/user-attachments/assets/b2315cc7-61f5-4f79-9860-010924fd937a", thumbnail: "https://github.com/user-attachments/assets/b2315cc7-61f5-4f79-9860-010924fd937a" },
    { original: "https://github.com/user-attachments/assets/07d29483-6a7d-4859-a1e3-8236e1f12c48", thumbnail: "https://github.com/user-attachments/assets/07d29483-6a7d-4859-a1e3-8236e1f12c48" },
    { original: "https://github.com/user-attachments/assets/30a678d0-40bc-45a6-bc6a-77e8512a8e87", thumbnail: "https://github.com/user-attachments/assets/30a678d0-40bc-45a6-bc6a-77e8512a8e87" },
    { original: "https://github.com/user-attachments/assets/8687291e-f3f1-4311-9d99-74b24e8609e7", thumbnail: "https://github.com/user-attachments/assets/8687291e-f3f1-4311-9d99-74b24e8609e7" },
    { original: "https://github.com/user-attachments/assets/9c32892d-bc0f-499f-9dfe-761bbf6a539a", thumbnail: "https://github.com/user-attachments/assets/9c32892d-bc0f-499f-9dfe-761bbf6a539a" },
    { original: "https://github.com/user-attachments/assets/c52eeb2a-e067-459f-b71c-ccc9e9d95330", thumbnail: "https://github.com/user-attachments/assets/c52eeb2a-e067-459f-b71c-ccc9e9d95330" },
    { original: "https://github.com/user-attachments/assets/bf071990-a213-4ebf-aeae-c8902f654bcf", thumbnail: "https://github.com/user-attachments/assets/bf071990-a213-4ebf-aeae-c8902f654bcf" },
    { original: "https://github.com/user-attachments/assets/d73ee5f9-e603-49df-8852-a1b4dcc63db7", thumbnail: "https://github.com/user-attachments/assets/d73ee5f9-e603-49df-8852-a1b4dcc63db7" },
    { original: "https://github.com/user-attachments/assets/0bc0a8c4-933d-4716-b1d1-1048d7c8304d", thumbnail: "https://github.com/user-attachments/assets/0bc0a8c4-933d-4716-b1d1-1048d7c8304d" },
    { original: "https://github.com/user-attachments/assets/43cbe580-db04-41be-9c81-c3cc56791cce", thumbnail: "https://github.com/user-attachments/assets/43cbe580-db04-41be-9c81-c3cc56791cce" },
    { original: "https://github.com/user-attachments/assets/ece7422f-f488-45cc-9309-d622412748f1", thumbnail: "https://github.com/user-attachments/assets/ece7422f-f488-45cc-9309-d622412748f1" },
    { original: "https://github.com/user-attachments/assets/a625ec51-d9bf-4ece-b6eb-d78bbc8f0200", thumbnail: "https://github.com/user-attachments/assets/a625ec51-d9bf-4ece-b6eb-d78bbc8f0200" },
    { original: "https://github.com/user-attachments/assets/ce71f78a-350f-4ece-a96d-79f3f2ab0ad5", thumbnail: "https://github.com/user-attachments/assets/ce71f78a-350f-4ece-a96d-79f3f2ab0ad5" },
    { original: "https://github.com/user-attachments/assets/e54862dc-ef46-418b-9d5c-15e59878e654", thumbnail: "https://github.com/user-attachments/assets/e54862dc-ef46-418b-9d5c-15e59878e654" },
    { original: "https://github.com/user-attachments/assets/baa81f02-6f47-4cd9-b7ad-71eadb56a75b", thumbnail: "https://github.com/user-attachments/assets/baa81f02-6f47-4cd9-b7ad-71eadb56a75b" },
    { original: "https://github.com/user-attachments/assets/68a64871-a909-49e0-bd45-b73583fb954c", thumbnail: "https://github.com/user-attachments/assets/68a64871-a909-49e0-bd45-b73583fb954c" },
    { original: "https://github.com/user-attachments/assets/fd6f3345-3594-46bd-8e77-cca129cf6fd9", thumbnail: "https://github.com/user-attachments/assets/fd6f3345-3594-46bd-8e77-cca129cf6fd9" },
    { original: "https://github.com/user-attachments/assets/e0055125-adff-46e9-9623-b489a57fc942", thumbnail: "https://github.com/user-attachments/assets/e0055125-adff-46e9-9623-b489a57fc942" },
    { original: "https://github.com/user-attachments/assets/4bda9a24-4f3d-4958-b050-50cfdddeaad7", thumbnail: "https://github.com/user-attachments/assets/4bda9a24-4f3d-4958-b050-50cfdddeaad7" },
    { original: "https://github.com/user-attachments/assets/5dfcee77-6b40-4d3b-b66c-05f19642e714", thumbnail: "https://github.com/user-attachments/assets/5dfcee77-6b40-4d3b-b66c-05f19642e714" },
    { original: "https://github.com/user-attachments/assets/b724c78a-c235-451a-bc9d-72b359d60869", thumbnail: "https://github.com/user-attachments/assets/b724c78a-c235-451a-bc9d-72b359d60869" },
    { original: "https://github.com/user-attachments/assets/0cbb3683-f876-40d5-aef6-8f89088ec4ba", thumbnail: "https://github.com/user-attachments/assets/0cbb3683-f876-40d5-aef6-8f89088ec4ba" },
    { original: "https://github.com/user-attachments/assets/57b6dc79-618d-4e3d-802f-490b692d177f", thumbnail: "https://github.com/user-attachments/assets/57b6dc79-618d-4e3d-802f-490b692d177f" },
    { original: "https://github.com/user-attachments/assets/b603fe6c-aab3-449f-9435-f129dd01d218", thumbnail: "https://github.com/user-attachments/assets/b603fe6c-aab3-449f-9435-f129dd01d218" },
    { original: "https://github.com/user-attachments/assets/a77c0108-e582-4830-be84-13b835c2513b", thumbnail: "https://github.com/user-attachments/assets/a77c0108-e582-4830-be84-13b835c2513b" },
    { original: "https://github.com/user-attachments/assets/9889362f-d783-4c45-8f28-414288a1333b", thumbnail: "https://github.com/user-attachments/assets/9889362f-d783-4c45-8f28-414288a1333b" },
    { original: "https://github.com/user-attachments/assets/03dda65a-f751-4069-aa4e-2d1faae2c82b", thumbnail: "https://github.com/user-attachments/assets/03dda65a-f751-4069-aa4e-2d1faae2c82b" },
    { original: "https://github.com/user-attachments/assets/c5b15221-d681-455a-a9f0-69663b4da086", thumbnail: "https://github.com/user-attachments/assets/c5b15221-d681-455a-a9f0-69663b4da086" },
    { original: "https://github.com/user-attachments/assets/b55e1e88-4e3f-4bbe-90f4-67a2d1b1ced1", thumbnail: "https://github.com/user-attachments/assets/b55e1e88-4e3f-4bbe-90f4-67a2d1b1ced1" },
    { original: "https://github.com/user-attachments/assets/2f2a9490-fef2-4dd7-aca0-7b0d3684b7ef", thumbnail: "https://github.com/user-attachments/assets/2f2a9490-fef2-4dd7-aca0-7b0d3684b7ef" },
    { original: "https://github.com/user-attachments/assets/cdf75bf6-0315-4d60-b59a-3239254572e1", thumbnail: "https://github.com/user-attachments/assets/cdf75bf6-0315-4d60-b59a-3239254572e1" },
    { original: "https://github.com/user-attachments/assets/8d1eb443-203b-4e4f-a6c4-2a4519618a77", thumbnail: "https://github.com/user-attachments/assets/8d1eb443-203b-4e4f-a6c4-2a4519618a77" },
    { original: "https://github.com/user-attachments/assets/9473d35b-7bea-4fae-a9d1-cbbbcd78fdc1", thumbnail: "https://github.com/user-attachments/assets/9473d35b-7bea-4fae-a9d1-cbbbcd78fdc1" },
];

export default function ArmorGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
