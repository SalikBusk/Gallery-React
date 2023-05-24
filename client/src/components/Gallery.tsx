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

const Gallery: React.FC<GalleryProps> = ({
  id,
  bigImage,
  smallImages,
  onClick,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleBigImageClick = () => {
    if (selectedImage) {
      setSelectedImage(null);
      onClick();
    }
  };

  const handleSmallImageClick = (image: Image) => {
    if (selectedImage && selectedImage.id === image.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[10px] w-full my-[30px]">
        <main className="h-[55vh]">
          <img
            className="rounded-[5px] object-cover w-full h-full"
            src={selectedImage ? selectedImage.url : bigImage}
            alt=""
            onClick={handleBigImageClick}
          />
        </main>
        <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-[10px] h-[55vh]">
          {smallImages.map((image: Image) => (
            <img
              className="rounded-[5px] object-cover w-full h-[50px] sm:h-[150px] md:h-[26vh] cursor-pointer" //størrelsen på billedet skal opdateret - så de har samme størrelse på den store
              key={image.id}
              onClick={() => handleSmallImageClick(image)}
              src={
                selectedImage && selectedImage.id === image.id
                  ? bigImage
                  : image.url
              }
              alt=""
            />
          ))}
        </main>
      </section>
    </>
  );
};

export default Gallery;
