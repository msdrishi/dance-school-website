import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1 className="page-title">Our Dance Gallery</h1>
      <p className="section-description">
        Explore moments captured during performances, workshops, and events at Rhymth and Grace School.
      </p>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;