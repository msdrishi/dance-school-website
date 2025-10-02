import React from 'react';

const GalleryGrid = () => {
  const galleryImages = [
    { id: 1, src: "/images/gallery1.jpg", alt: "Bharatanatyam Performance" },
    { id: 2, src: "/images/gallery2.jpg", alt: "Kathakali Performance" },
    { id: 3, src: "/images/gallery3.jpg", alt: "Kuchipudi Performance" },
    { id: 4, src: "/images/gallery4.jpg", alt: "Annual Day Celebration" },
    { id: 5, src: "/images/gallery5.jpg", alt: "Group Dance Performance" },
    { id: 6, src: "/images/gallery6.jpg", alt: "Dance Workshop" }
  ];

  return (
    <div className="gallery-grid">
      {galleryImages.map(image => (
        <div className="gallery-item" key={image.id}>
          <img src={image.src} alt={image.alt} />
          <div className="gallery-caption">{image.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;