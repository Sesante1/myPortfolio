import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const photos = [
  {
    id: 1,
    src: "/images/photo1.jpg",
    title: "Photo Title",
    subtitle: "Photo Subtitle",
  },
  {
    id: 2,
    src: "/images/photo2.jpg",
    title: "Photo Title",
    subtitle: "Photo Subtitle",
  },
  {
    id: 3,
    src: "/images/photo3.jpg",
    title: "Photo Title",
    subtitle: "Photo Subtitle",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Main slider */}
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video"
          onTouchStart={}
          onTouchEnd={}
        >
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-item">
                <img src={photo.src} alt={photo.title} />
                <h3>{photo.title}</h3>
                <p>{photo.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
