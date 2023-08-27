import Carousel from "./components/Carousel";
import image1 from "./assets/cat1.jpeg"
import image2 from "./assets/cat2.jpeg"
import image3 from "./assets/cat3.jpeg"

function App() {
    const images = [image1, image2, image3]
    return (
        <div className="App">
            <Carousel images={images}/>
        </div>
    );
}

export default App;
