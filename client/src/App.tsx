import './App.css';
import Container from './components/Container';
import Gallery from './components/Gallery';
import GalleryArr from './data/GalleryArr';

function App() {
  return (
    <div className="">
      <Container>
        {GalleryArr.map((gallery, index) => (
        <Gallery
          key={index}
          id={`gallery${index + 1}`}
          bigImage={gallery.bigImage}
          smallImages={gallery.images}
          onClick={() => {
            // Handle gallery click event
            console.log(`Gallery ${index + 1} clicked`);
          }}
        />
      ))}
      </Container>
    </div>
  );
}

export default App;
