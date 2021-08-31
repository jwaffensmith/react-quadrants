import ArtApi from "./components/ArtApi";
import ButtonSection from "./components/ButtonSection";
import CatApi from "./components/CatApi";
import KawaiiSection from "./components/KawaiiSection";




function App() {
    return (
    <div className="main">
        <ArtApi/>
        <CatApi/>
        <KawaiiSection/>
        <ButtonSection/>
    </div>
    );
}

export default App;