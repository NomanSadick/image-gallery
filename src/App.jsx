import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery";


import image1 from "./assets/images/image-1.webp";
import image2 from "./assets/images/image-2.webp";
import image3 from "./assets/images/image-3.webp";
import image4 from "./assets/images/image-4.webp";
import image5 from "./assets/images/image-5.webp";
import image6 from "./assets/images/image-6.webp";
import image7 from "./assets/images/image-7.webp";
import image8 from "./assets/images/image-8.webp";
import image9 from "./assets/images/image-9.webp";
import image10 from "./assets/images/image-10.jpeg";
import image11 from "./assets/images/image-11.jpeg";

function App() {
  const [images, setImages] = useState([
    { url: image11, featured: true },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
    { url: image9 },
    { url: image10 },
    { url: image1 }
  ]);

  const [selectedImageIndices, setSelectedImageIndices] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  

  const handleReorder = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setSelectedImageIndices((prevIndices) => prevIndices.filter((i) => i !== index));
  };

  const handleSetFeature = (index) => {
    const updatedImages = images.map((img, i) => ({
      ...img,
      featured: i === index,
    }));
    setImages(updatedImages);
  };

  const toggleImageSelection = (index) => {
    if (selectedImageIndices.includes(index)) {
      setSelectedImageIndices(selectedImageIndices.filter((i) => i !== index));
      setShowCheckbox(false);
    } else {
      setSelectedImageIndices([...selectedImageIndices, index]);
      setShowCheckbox(true);
    }
  };

  const handleDeleteAll = () => {
    const updatedImages = images.filter((_, index) => !selectedImageIndices.includes(index));
    setImages(updatedImages);
    setSelectedImageIndices([]);
    setShowCheckbox(false);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="title">
          {selectedImageIndices.length > 0 || showCheckbox ? (
            <div>
              {selectedImageIndices.length === 1 ? (
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedImageIndices.length > 0}
                    onChange={toggleImageSelection}
                  />
                  1 File Selected
                </div>
              ) : (
                <div className="delete-container checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedImageIndices.length > 0}
                    onChange={toggleImageSelection}
                  />
                  {selectedImageIndices.length} Files Selected
                </div>
              )}
            </div>
          ) : (
            "Gallery"
          )}
        </div>
        <div>
          {selectedImageIndices.length > 0 && (
            <div className="delete-container">
              <div className="delete-text delete-text--top-right" onClick={handleDeleteAll}>
                Delete Files
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border">

      </div>
      <ImageGallery
        images={images}
        onReorder={handleReorder}
        onDelete={handleDelete}
        onSetFeature={handleSetFeature}
        selectedImageIndices={selectedImageIndices}
        toggleImageSelection={toggleImageSelection}
        onDeleteAll={handleDeleteAll}
      />

    </div>
  );
}

export default App;
