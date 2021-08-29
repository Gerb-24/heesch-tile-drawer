import DrawingPanel from "./DrawingPanel";
import Other from "./Other";
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="title-area">
        <h1>
          Heesch Tile Drawer
        </h1>
        <small> By Umaroth-24 </small>
      </div>
      <DrawingPanel/>
      <Other/>
    </div>
  );
}

export default App;
