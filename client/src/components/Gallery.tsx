import React, { useState } from "react";

interface Image {
  id: string;
  url: string;
}

interface GalleryProps {
  id: string;
  bigImage: string;
  smallImages: Image[];
  onClick: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ id, bigImage, smallImages, onClick }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleBigImageClick = () => {
    if (selectedImage) {
      setSelectedImage(null);
      onClick();
    }
  };

  const handleSmallImageClick = (image: Image) => {
    if (selectedImage) {
      setSelectedImage(selectedImage);
      onClick();
    }
    setSelectedImage(image);
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[10px] w-full my-[30px]">
        <figure>
          <img
            className="rounded-[5px] sm:rounded-[5px] md:rounded-[10px] object-cover w-full h-[55vh]"
            src={selectedImage ? selectedImage.url : bigImage}
            alt=""
            onClick={handleBigImageClick}
          />
        </figure>
        <figure className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-[10px]">
          {smallImages.map((image: Image) => (
            <article key={image.id} onClick={() => handleSmallImageClick(image)}>
              <img
                className="rounded-[5px] sm:rounded-[5px] md:rounded-[10px] object-cover w-full h-[50px] sm:h-[150px] md:h-[26.5vh] cursor-pointer"
                src={selectedImage ? selectedImage.url : image.url}
                alt=""
              />
            </article>
          ))}
        </figure>
      </section>
    </>
  );
};

export default Gallery;
