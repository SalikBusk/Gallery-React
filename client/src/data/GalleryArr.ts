import bigImage from '../assets/Tuttu-kang.jpg';
import smallImage from '../assets/Tuttu-2-kang.jpg';
import smallImage1 from '../assets/ptarmigan-in-a-summer-coat-photo-aqqa-r-asvid-visit-greenland.webp';
import smallImage2 from '../assets/Musk-ox.jpg';
import smallImage3 from '../assets/Musk-ox.jpeg';

interface Image {
  id: string;
  url: string;
}

const GalleryArr: { bigImage: string; images: Image[] }[] = [
  {
    bigImage: bigImage,
    images: [
      {
        id: "1",
        url: smallImage,
      },
      {
        id: "2",
        url: smallImage1,
      },
      {
        id: "3",
        url: smallImage2,
      },
      {
        id: "4",
        url: smallImage3,
      },
    ],
  },
];

export default GalleryArr;
