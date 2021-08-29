import Pixel from "./Pixel";
import '../styles/Row.css';

function Row(props){
  const {gridChance, rowVal, rowSettings, width} = props;

  let pixels = [];
  for ( let i = 0; i < width; i++  ){
    pixels.push(<Pixel gridChance = {gridChance} pixRow = {rowVal} pixCol = {i} key={i} pixSets = { rowSettings[i] } />)
  }
  return (
    <div className="row">
    {pixels}
    </div>
  );
}

export default Row;
