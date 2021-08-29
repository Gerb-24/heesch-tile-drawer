import '../styles/Pixel.css';

function Pixel(props){
  const {gridChance, pixRow, pixCol, pixSets} = props;

  let bgColor = undefined;
  if (pixSets === "empty"){
    bgColor = "#fff";
  }
  else if(pixSets === "shape"){
    bgColor = "#0275d8";
  }
  else if(pixSets === "priority"){
    bgColor = "#5cb85c";
  }


  return (
    <div className="pixel"
     onClick={ () =>
      {
        gridChance( pixRow, pixCol )
      }}
    style={{backgroundColor: bgColor}}
   >
    </div>
  );
}
export default Pixel;
