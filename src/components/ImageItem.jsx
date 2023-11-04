import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, index, onReorder, selected, onSelect, images, setImages }) => {
  const imageUrl = image.url;

  const handleImageSelect = () => {
    onSelect(index);
    const updatedImages = images.map((img, i) => ({
      ...img,
      featured: i === index,
    }));
    setImages(updatedImages);
  };

  return (
    <div
      key={index}
      className={`image-item ${image.featured ? 'featured' : ''} ${selected ? 'selected' : ''} ${index === 0 ? 'first-image' : ''}`}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('index', index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const fromIndex = e.dataTransfer.getData('index');
        const toIndex = index;
        onReorder(fromIndex, toIndex);
      }
      }
      onClick={handleImageSelect}
    >
      <input type="checkbox" checked={selected} onChange={handleImageSelect} />
      <div className="image-content">
        <img src={imageUrl} alt={`Image ${index}`} />
      </div>
    </div>
  );
};

export default ImageItem;
