import React from 'react';
import './ImageGallery.css';
import ImageItem from './ImageItem';

const ImageGallery = ({ images, onReorder, onSetFeature, selectedImageIndices, toggleImageSelection, onDelete, onDeleteAll }) => {
  const selectedImageCount = selectedImageIndices.length;

  const handleDeleteSelected = () => {
    selectedImageIndices.forEach((index) => {
      onDelete(index);
    });
    toggleImageSelection([]); // Clear the selected images
  };

  return (
    <div className="image-gallery">
      {/* <div className="header">
        <h1>Image Gallery</h1>
      </div> */}

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