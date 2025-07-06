// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/img/gallery/1.webp',
    thumbnail: '/img/gallery/1.webp',
  },
  {
    original: '/img/gallery/2.webp',
    thumbnail: '/img/gallery/2.webp',
  },
  {
    original: '/img/gallery/3.webp',
    thumbnail: '/img/gallery/3.webp',
  },
  {
    original: '/img/gallery/4.webp',
    thumbnail: '/img/gallery/4.webp',
  },
  {
    original: '/img/gallery/5.webp',
    thumbnail: '/img/gallery/5.webp',
  },
  {
    original: '/img/gallery/6.webp',
    thumbnail: '/img/gallery/6.webp',
  },
  {
    original: '/img/gallery/7.webp',
    thumbnail: '/img/gallery/7.webp',
  },
  {
    original: '/img/gallery/8.webp',
    thumbnail: '/img/gallery/8.webp',
  }, 
  {
    original: '/img/gallery/9.webp',
    thumbnail: '/img/gallery/9.webp',
  },
  {
    original: '/img/gallery/10.webp',
    thumbnail: '/img/gallery/10.webp',
  },
  {
    original: '/img/gallery/11.webp',
    thumbnail: '/img/gallery/11.webp',
  },
  {
    original: '/img/gallery/12.webp',
    thumbnail: '/img/gallery/12.webp',
  },
  {
    original: '/img/gallery/13.webp',
    thumbnail: '/img/gallery/13.webp',
  },
  {
    original: '/img/gallery/14.webp',
    thumbnail: '/img/gallery/14.webp',
  },
  {
    original: '/img/gallery/15.webp',
    thumbnail: '/img/gallery/15.webp',
  },
  {
    original: '/img/gallery/16.webp',
    thumbnail: '/img/gallery/16.webp',
  }, 
  {
    original: '/img/gallery/17.webp',
    thumbnail: '/img/gallery/17.webp',
  },
  {
    original: '/img/gallery/18.webp',
    thumbnail: '/img/gallery/18.webp',
  },
  {
    original: '/img/gallery/19.webp',
    thumbnail: '/img/gallery/19.webp',
  },
  {
    original: '/img/gallery/20.webp',
    thumbnail: '/img/gallery/20.webp',
  },
  {
    original: '/img/gallery/21.webp',
    thumbnail: '/img/gallery/21.webp',
  },
  {
    original: '/img/gallery/22.webp',
    thumbnail: '/img/gallery/22.webp',
  },
  {
    original: '/img/gallery/23.webp',
    thumbnail: '/img/gallery/23.webp',
  },
  {
    original: '/img/gallery/24.webp',
    thumbnail: '/img/gallery/24.webp',
  },
];

export default function ImageGalleryComponent() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
    />;
}
