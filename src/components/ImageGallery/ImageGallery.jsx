import React from 'react';
import './ImageGallery.css';
import ImageItem from '../ImageItem/ImageItem';

const ImageGallery = ({ images, onReorder, onSetFeature, selectedImageIndices, toggleImageSelection }) => {


  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem
          key={index}
          image={image}
          index={index}
          onReorder={onReorder}
          onSetFeature={onSetFeature}
          selected={selectedImageIndices.includes(index)}
          onSelect={toggleImageSelection}
        />
      ))}
    </div>
  );
};

export default ImageGallery;