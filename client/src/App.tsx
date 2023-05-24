import './App.css';

// components
import Container from './components/Container';
import Gallery from './components/Gallery';

// Array
import GalleryArr from './data/GalleryArr';

function App() {
  return (
    <>
      <Container>
        {GalleryArr.map((gallery, index) => (
          // Her indsættes "Gallery.tsx" Komponent
        <Gallery
          key={index}
          id={`gallery${index + 1}`}
          bigImage={gallery.bigImage}
          smallImages={gallery.images}
          onClick={() => {console.log(`Gallery ${index + 1} clicked`);}}
        />
      ))}
      </Container>
    </>
  );
}

export default App;
