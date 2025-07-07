import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    { original: "https://github.com/user-attachments/assets/9ccbf05d-449b-4938-bc65-4ab1d2d47576", thumbnail: "https://github.com/user-attachments/assets/9ccbf05d-449b-4938-bc65-4ab1d2d47576" },
    { original: "https://github.com/user-attachments/assets/d0e35813-2bfc-4559-8cb9-44864aa033cc", thumbnail: "https://github.com/user-attachments/assets/d0e35813-2bfc-4559-8cb9-44864aa033cc" },
    { original: "https://github.com/user-attachments/assets/3a7e0279-4a61-430e-b820-ee54e2d727bc", thumbnail: "https://github.com/user-attachments/assets/3a7e0279-4a61-430e-b820-ee54e2d727bc" },
    { original: "https://github.com/user-attachments/assets/917a4360-e685-486c-a0e7-12369220f9fb", thumbnail: "https://github.com/user-attachments/assets/917a4360-e685-486c-a0e7-12369220f9fb" },
    { original: "https://github.com/user-attachments/assets/a38ed9e7-7c58-40d7-a4ea-7a814ac65399", thumbnail: "https://github.com/user-attachments/assets/a38ed9e7-7c58-40d7-a4ea-7a814ac65399" },
    { original: "https://github.com/user-attachments/assets/4f8b3551-c1e2-42f4-b07c-fe35e54f6165", thumbnail: "https://github.com/user-attachments/assets/4f8b3551-c1e2-42f4-b07c-fe35e54f6165" },
    { original: "https://github.com/user-attachments/assets/57b42c75-f04e-41b5-ae69-1107582f8b22", thumbnail: "https://github.com/user-attachments/assets/57b42c75-f04e-41b5-ae69-1107582f8b22" },
    { original: "https://github.com/user-attachments/assets/6216994e-7376-4982-af57-c7ea9f8a4cd9", thumbnail: "https://github.com/user-attachments/assets/6216994e-7376-4982-af57-c7ea9f8a4cd9" },
    { original: "https://github.com/user-attachments/assets/86519cb3-832c-42dc-a5f3-c887030d820f", thumbnail: "https://github.com/user-attachments/assets/86519cb3-832c-42dc-a5f3-c887030d820f" },
    { original: "https://github.com/user-attachments/assets/2a11c753-b039-455d-a677-8b1be30f14d8", thumbnail: "https://github.com/user-attachments/assets/2a11c753-b039-455d-a677-8b1be30f14d8" },
    { original: "https://github.com/user-attachments/assets/48ee9270-dddb-4914-8572-72a8b2ffdabf", thumbnail: "https://github.com/user-attachments/assets/48ee9270-dddb-4914-8572-72a8b2ffdabf" },
    { original: "https://github.com/user-attachments/assets/d41da594-6776-49d4-a40b-b5937a3cb949", thumbnail: "https://github.com/user-attachments/assets/d41da594-6776-49d4-a40b-b5937a3cb949" },
    { original: "https://github.com/user-attachments/assets/626e0a50-a2e6-4612-8a70-9ddfefa35604", thumbnail: "https://github.com/user-attachments/assets/626e0a50-a2e6-4612-8a70-9ddfefa35604" },
    { original: "https://github.com/user-attachments/assets/1cb62c87-54be-4e8f-9428-6ce4ed7e5ca8", thumbnail: "https://github.com/user-attachments/assets/1cb62c87-54be-4e8f-9428-6ce4ed7e5ca8" },
    { original: "https://github.com/user-attachments/assets/25e138ea-7b39-4cfb-a8bd-3f2a47fdc6e3", thumbnail: "https://github.com/user-attachments/assets/25e138ea-7b39-4cfb-a8bd-3f2a47fdc6e3" },
    { original: "https://github.com/user-attachments/assets/1dcbfbea-9603-46fe-a073-259165d3414a", thumbnail: "https://github.com/user-attachments/assets/1dcbfbea-9603-46fe-a073-259165d3414a" },
    { original: "https://github.com/user-attachments/assets/ec1590d9-52b7-4f1b-884e-0b5b973324dc", thumbnail: "https://github.com/user-attachments/assets/ec1590d9-52b7-4f1b-884e-0b5b973324dc" },
    { original: "https://github.com/user-attachments/assets/f2b20058-c3a9-43b2-804b-d407a26d8c6d", thumbnail: "https://github.com/user-attachments/assets/f2b20058-c3a9-43b2-804b-d407a26d8c6d" },
    { original: "https://github.com/user-attachments/assets/da1ddb8e-b2e3-4752-a612-d4c0d0087e8b", thumbnail: "https://github.com/user-attachments/assets/da1ddb8e-b2e3-4752-a612-d4c0d0087e8b" },
    { original: "https://github.com/user-attachments/assets/1e9fb66c-ec0f-4cee-8129-fed9e963d1c0", thumbnail: "https://github.com/user-attachments/assets/1e9fb66c-ec0f-4cee-8129-fed9e963d1c0" },
    { original: "https://github.com/user-attachments/assets/c36bcc7b-0a09-43c9-8c4c-fd4b83bd0197", thumbnail: "https://github.com/user-attachments/assets/c36bcc7b-0a09-43c9-8c4c-fd4b83bd0197" },
    { original: "https://github.com/user-attachments/assets/b6a36537-2b84-4815-89d6-4a62940f7a17", thumbnail: "https://github.com/user-attachments/assets/b6a36537-2b84-4815-89d6-4a62940f7a17" },
    { original: "https://github.com/user-attachments/assets/42efbe40-ab10-40f1-91da-c5714a888c2d", thumbnail: "https://github.com/user-attachments/assets/42efbe40-ab10-40f1-91da-c5714a888c2d" },
    { original: "https://github.com/user-attachments/assets/5997e6bd-2dc0-446b-8fa6-6dd460bb2dda", thumbnail: "https://github.com/user-attachments/assets/5997e6bd-2dc0-446b-8fa6-6dd460bb2dda" },
    { original: "https://github.com/user-attachments/assets/f2f2d33a-26bd-4313-8612-5700a3e5caaf", thumbnail: "https://github.com/user-attachments/assets/f2f2d33a-26bd-4313-8612-5700a3e5caaf" },
    { original: "https://github.com/user-attachments/assets/ee050663-271b-4f01-8002-76cc70ab6041", thumbnail: "https://github.com/user-attachments/assets/ee050663-271b-4f01-8002-76cc70ab6041" },
    { original: "https://github.com/user-attachments/assets/9f70ac81-648e-4e8a-8de5-0c04e6dfc0e0", thumbnail: "https://github.com/user-attachments/assets/9f70ac81-648e-4e8a-8de5-0c04e6dfc0e0" },
    { original: "https://github.com/user-attachments/assets/fb18110f-8462-474c-9fc2-70305e1e86e3", thumbnail: "https://github.com/user-attachments/assets/fb18110f-8462-474c-9fc2-70305e1e86e3" },
    { original: "https://github.com/user-attachments/assets/3208b857-57de-4a14-8ee6-bf1d40b2f21b", thumbnail: "https://github.com/user-attachments/assets/3208b857-57de-4a14-8ee6-bf1d40b2f21b" },
    { original: "https://github.com/user-attachments/assets/54b59bd9-c887-4c28-9bf2-f36fefa39020", thumbnail: "https://github.com/user-attachments/assets/54b59bd9-c887-4c28-9bf2-f36fefa39020" },
    { original: "https://github.com/user-attachments/assets/3c5e4d8b-35ba-497c-9c2a-065e3da2ff2c", thumbnail: "https://github.com/user-attachments/assets/3c5e4d8b-35ba-497c-9c2a-065e3da2ff2c" },
    { original: "https://github.com/user-attachments/assets/2e287370-8ea0-4064-9474-697756a2be05", thumbnail: "https://github.com/user-attachments/assets/2e287370-8ea0-4064-9474-697756a2be05" },
    { original: "https://github.com/user-attachments/assets/7e1bdd36-811c-4957-aea9-322041b34976", thumbnail: "https://github.com/user-attachments/assets/7e1bdd36-811c-4957-aea9-322041b34976" },
    { original: "https://github.com/user-attachments/assets/56f461a2-ac42-4efb-8d10-eb8336a180f5", thumbnail: "https://github.com/user-attachments/assets/56f461a2-ac42-4efb-8d10-eb8336a180f5" },
    { original: "https://github.com/user-attachments/assets/562ea342-2e4b-4497-9aae-780f9f44cdc0", thumbnail: "https://github.com/user-attachments/assets/562ea342-2e4b-4497-9aae-780f9f44cdc0" },
    { original: "https://github.com/user-attachments/assets/9b541127-fa5c-4024-bee8-9ac6087ff479", thumbnail: "https://github.com/user-attachments/assets/9b541127-fa5c-4024-bee8-9ac6087ff479" },
    { original: "https://github.com/user-attachments/assets/706d90b6-8749-4a07-8969-8c85fcdc630f", thumbnail: "https://github.com/user-attachments/assets/706d90b6-8749-4a07-8969-8c85fcdc630f" },
    { original: "https://github.com/user-attachments/assets/dc4f1149-6163-4123-8497-85989a5361d3", thumbnail: "https://github.com/user-attachments/assets/dc4f1149-6163-4123-8497-85989a5361d3" },
    { original: "https://github.com/user-attachments/assets/f455b360-5ec9-4874-b1af-71c4a8859d56", thumbnail: "https://github.com/user-attachments/assets/f455b360-5ec9-4874-b1af-71c4a8859d56" },
    { original: "https://github.com/user-attachments/assets/a0b4d749-a921-4484-884a-710a075908ec", thumbnail: "https://github.com/user-attachments/assets/a0b4d749-a921-4484-884a-710a075908ec" },
    { original: "https://github.com/user-attachments/assets/6d3d9cff-43a6-4173-a08a-e4badf1926a2", thumbnail: "https://github.com/user-attachments/assets/6d3d9cff-43a6-4173-a08a-e4badf1926a2" },
    { original: "https://github.com/user-attachments/assets/efa119a4-04b8-4287-b499-148dbec648aa", thumbnail: "https://github.com/user-attachments/assets/efa119a4-04b8-4287-b499-148dbec648aa" },
    { original: "https://github.com/user-attachments/assets/46e10a9b-3650-4e58-9d1b-ce9f25d49596", thumbnail: "https://github.com/user-attachments/assets/46e10a9b-3650-4e58-9d1b-ce9f25d49596" },
    { original: "https://github.com/user-attachments/assets/fcffceca-4ae1-44df-ae49-a4d2a551e7d4", thumbnail: "https://github.com/user-attachments/assets/fcffceca-4ae1-44df-ae49-a4d2a551e7d4" },
    { original: "https://github.com/user-attachments/assets/50203ebe-acd8-45a9-830b-f39658e0b4f9", thumbnail: "https://github.com/user-attachments/assets/50203ebe-acd8-45a9-830b-f39658e0b4f9" },
    { original: "https://github.com/user-attachments/assets/f9900382-f804-4c91-9bd4-f6a4ecdf80ec", thumbnail: "https://github.com/user-attachments/assets/f9900382-f804-4c91-9bd4-f6a4ecdf80ec" },
    { original: "https://github.com/user-attachments/assets/dd965f58-40a7-4132-acee-35c0efc238e6", thumbnail: "https://github.com/user-attachments/assets/dd965f58-40a7-4132-acee-35c0efc238e6" },
    { original: "https://github.com/user-attachments/assets/2cf8518f-708f-4bfb-85fe-e5a37a8574da", thumbnail: "https://github.com/user-attachments/assets/2cf8518f-708f-4bfb-85fe-e5a37a8574da" },
    { original: "https://github.com/user-attachments/assets/08869af5-84b8-4e26-87f3-5760ed7bbb83", thumbnail: "https://github.com/user-attachments/assets/08869af5-84b8-4e26-87f3-5760ed7bbb83" },
    { original: "https://github.com/user-attachments/assets/85b0a1bd-99c5-46eb-b105-ca7a6c73dad7", thumbnail: "https://github.com/user-attachments/assets/85b0a1bd-99c5-46eb-b105-ca7a6c73dad7" },
    { original: "https://github.com/user-attachments/assets/fd35cd8d-c312-449e-a863-b9527575885a", thumbnail: "https://github.com/user-attachments/assets/fd35cd8d-c312-449e-a863-b9527575885a" },
    { original: "https://github.com/user-attachments/assets/8405b722-fb1b-463a-aa89-7d8df518e58a", thumbnail: "https://github.com/user-attachments/assets/8405b722-fb1b-463a-aa89-7d8df518e58a" },
    { original: "https://github.com/user-attachments/assets/807cfbd8-b72e-4f56-9c86-ddec6f25f6a0", thumbnail: "https://github.com/user-attachments/assets/807cfbd8-b72e-4f56-9c86-ddec6f25f6a0" },
    { original: "https://github.com/user-attachments/assets/dffba620-c5c6-42c3-b88f-ada60da0a113", thumbnail: "https://github.com/user-attachments/assets/dffba620-c5c6-42c3-b88f-ada60da0a113" },
    { original: "https://github.com/user-attachments/assets/4eb53af1-b362-4fde-a475-f7e813cde809", thumbnail: "https://github.com/user-attachments/assets/4eb53af1-b362-4fde-a475-f7e813cde809" },
    { original: "https://github.com/user-attachments/assets/bde1724d-8c52-4489-afc5-2683208b5ed8", thumbnail: "https://github.com/user-attachments/assets/bde1724d-8c52-4489-afc5-2683208b5ed8" },
];

export default function CharactersGallery() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
  />;
}
