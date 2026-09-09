'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <Image
          src={images[activeIndex]}
          alt={`${alt} view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.mainImage}
          priority
        />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.thumbnailWrapper} ${activeIndex === index ? styles.active : ''}`}
              aria-label={`View image ${index + 1}`}
              aria-current={activeIndex === index}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                sizes="100px"
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
