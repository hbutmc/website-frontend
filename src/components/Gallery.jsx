import React from 'react';
import { Image } from 'antd';
import styles from './Gallery.module.css';

const Gallery = () => {
  const images = [
    {
      src: '/images/gallery1.png',
      alt: '教学楼',
      title: '教学楼',
      description: '完美还原的校园教学楼!'
    },
    {
      src: '/images/gallery2.png',
      alt: '图书馆',
      title: '图书馆',
      description: '1:1比例的图书馆'
    },
    {
      src: '/images/gallery3.png',
      alt: '操场',
      title: '操场',
      description: '很大的操场区域'
    }
  ];

  
  return (
    <div className={styles.galleryContainer}>
      <h1>项目画廊</h1>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              height={200}
              width={350}
              loading="lazy"
            />
            <div className={styles.galleryCaption}>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
