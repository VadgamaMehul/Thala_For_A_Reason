import "./App.css";
import Dhoni from "./Ms_Dhoni.jpg"
import Mobil from "./Mobile.jpg"
import CoverPhoto from "./Componate/Form";

function App() {
  return (
    <div className="App">
      {/* <FullSizePhoto/> */}
      <CoverPhoto desktopImage={Dhoni} mobileImage={Mobil}/>
    </div>
  );
}

export default App;
