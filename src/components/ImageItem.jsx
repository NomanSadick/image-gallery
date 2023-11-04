import React from 'react';

const ImageItem = ({ image, index, onReorder, onDelete, onSetFeature, selected, onSelect }) => {
  const imageUrl = image.url;

  const handleImageSelect = () => {
    onSelect(index);
  };

  return (
    <div
      key={index}
      className={`image-item ${image.featured ? 'featured' : ''} ${selected ? 'selected' : ''}`}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('index', index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const fromIndex = e.dataTransfer.getData('index');
        const toIndex = index;
        onReorder(fromIndex, toIndex);
      }
      }
    >
      <input type="checkbox" checked={selected} onChange={handleImageSelect} />
      <div className="image-content">
        <img src={imageUrl} alt={`Image ${index}`} />
      </div>
    </div>
  );
};

export default ImageItem;

