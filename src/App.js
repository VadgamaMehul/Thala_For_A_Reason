// import CoverPhoto from "./Componate/CoverPhoto";
// import FullSizePhoto from "./Componate/FullSizePhoto";
import Dhoni from "./Ms_Dhoni.jpg"
import Mobil from "./Mobile.jpg"
import CoverPhoto from "./Componate/Form";

function App() {
  return (
    <div className="App">
      <CoverPhoto desktopImage={Dhoni} mobileImage={Mobil}/>
    </div>
  );
}

export default App;
