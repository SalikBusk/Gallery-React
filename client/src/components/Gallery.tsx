import React, { useState } from "react";

interface Image {
  id: string;
  url: string;
}


// ------------ interface ------------//
// Her defineres et interface (grænseflade) ved navn "GalleryProps". 
//Dette interface beskriver typerne for egenskaberne, som forventes at blive sendt til Gallery-komponenten.
interface GalleryProps {
  id: string; // er en (string), der repræsenterer identifikatoren for galleriet.
  bigImage: string; //er en (string), der repræsenterer URL'en til det store billede i galleriet.
  smallImages: Image[]; // er et array af Image-objekter. Hvert Image-objekt har en id (streng) og en url (streng), der repræsenterer henholdsvis identifikatoren og URL'en for hvert lille billede i galleriet.
  onClick: () => void; //er en funktion uden argumenter (()) og uden returværdi (void). Denne funktion bliver kaldt, når der sker en klikhændelse i galleriet.
}

// ------------ Data Typer - noter ------------//
// En "streng" er en sekvens af tegn, såsom tekst eller symboler (billeder, ikoner, osv),
// "Image[]"" er en typeangivelse i TypeScript, som angiver at en variabel eller parameter forventes at være et array (en liste) af Image-objekter.
// "() => void" en funktion uden argumenter (()) og uden returværdi (void).



const Gallery: React.FC<GalleryProps> = ({
  // her indsættes interface 
  id,
  bigImage,
  smallImages,
  onClick,
}) => {

  // Opretter en tilstandsvariabel "selectedImage" ved hjælp af useState-hook'en. 
  //Variablen kan enten være af typen Image eller null. Den initielle værdi er sat til null.
  const [selectedImage, setSelectedImage] = useState<Image | null>(null); //"useState" er en hook-funktion i React, som bruges til at introducere tilstandshåndtering i en funktionskomponent.


  // Funktionen "handleBigImageClick" håndterer klikhændelsen på det store billede. 
  //Hvis der allerede er valgt et billede (selectedImage er sandt), bliver "selectedImage" 
  //nulstillet ved at kalde setSelectedImage med værdien null. 
  //Derefter kaldes onClick-funktionen, som er angivet i props.
  const handleBigImageClick = () => {
    if (selectedImage) {
      setSelectedImage(null);
      onClick();
    }
  };

  // Funktionen "handleSmallImageClick" håndterer klikhændelsen på små billeder. 
  //Hvis der allerede er valgt et billede og det klikkede billede har samme id som det 
  //valgte billede, bliver "selectedImage" nulstillet ved at kalde setSelectedImage med værdien null. 
  //Ellers bliver "selectedImage" sat til det klikkede billede ved at kalde setSelectedImage med værdien image.
  const handleSmallImageClick = (image: Image) => {
    if (selectedImage && selectedImage.id === image.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[10px] w-full my-[30px] overflow-hidden">
        {/* ===== store billede ===== */}
        <main className="h-[55vh]">
          <img
            className="rounded-[5px] object-cover w-full h-full"
            src={selectedImage ? selectedImage.url : bigImage}
            alt=""
            onClick={handleBigImageClick}
          />
        </main>
        {/* ===== små billeder ===== */}
        <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-[10px] h-[55vh]">
          {smallImages.map((image: Image) => (
            <img
              className="rounded-[5px] object-cover w-full h-[50px] sm:h-[150px] md:h-[26.9vh] xl:h-[27vh] cursor-pointer"
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
