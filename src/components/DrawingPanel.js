import { useState } from "react";

import Row from "./Row";
import ButtonGroup from "./ButtonGroup";
import Description from "./Description";

import '../styles/DrawingPanel.css';

function DrawingPanel(){
  /* Grid is an array of arrays in which we store the status of all the pixels
  In Row we will pass a row of these.
  */
  const { height, width } = { height: 12, width: 12};
  const emptyArr = new Array(width).fill("empty");
  const emptyGrid = new Array(height).fill(emptyArr)

  const [ grid, setGrid ] = useState(emptyGrid);
  const [selectionType, setSelectionType] = useState("shape"); // This can be Shape and Priority.

  const shapeArr = [];
  const priorArr = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++){
      if (grid[i][j] === "shape"){
        shapeArr.push([j, height - (i + 1)])
      }

      else if (grid[i][j] === "priority"){
        priorArr.push([j, height - (i + 1)])
      }
    }
  }

  const orderedShapeObj = {};
  for (let i = 0; i < height; i++){
    let filteredArr = shapeArr.filter(coord => coord[0] === i)
    if (filteredArr.length !== 0){
      orderedShapeObj[i] = filteredArr.sort(function(a, b){return a[1]-b[1]})
    }
  }

  const outputText = `from squareshapes import Square, Polyomino
from main import main_func
tile = Polyomino(
\t[
\t\t${Object.keys(orderedShapeObj).map(
        (index) => {
          let colArr = orderedShapeObj[index];
          return (
            `${ colArr.map(coord =>
            `Square(${2*coord[0]}, ${2*coord[1]}),`
            ).join(' ')}`
          )}
        ).join('\n\t\t')
        }
\t],
\tpriority = [
\t\t${priorArr.map(coord => `Square(${2*coord[0]},${2*coord[1]}),`).join('\n\t\t')}
\t]
)
main_func(tile)
exit()`

  function textCopy(){
    navigator.clipboard.writeText(outputText);
  }



  function gridChance(row_, col_){
    let newGrid = [];
    for ( let i = 0; i < height; i++  ){
      newGrid.push([...grid[i]])
    }
    newGrid[row_][col_] = selectionType;
    setGrid(newGrid);
  }

  let rows = [];
  for ( let i = 0; i < height; i++  ){
    rows.push(<Row gridChance = {gridChance} rowVal = {i} key = {i} rowSettings = { grid[i] } width = {width} />)
  }

  function createEmptyGrid(){
    setGrid(emptyGrid)
  }

  return (
    <div className="drawing-panel">
      <div className="desciption-area">
        <Description/>
      </div>
      <div className="input-area">
        <h3>
        Input Field
        </h3>
        <ButtonGroup setSelectionType = {setSelectionType}/>
        <div className="drawing-grid">
          {rows}
        </div>
        <button type="button" onClick={createEmptyGrid} class="btn btn-secondary">New Clean Grid</button>
      </div>
      <div className="output-area">
        <h3>
        Output Field
        </h3>
        <div className="output-flex">
          <textarea className="output-field" readOnly value = {outputText}></textarea>
          <button className="btn btn-danger sm" onClick={textCopy}>Copy Text</button>
        </div>

      </div>
    </div>
  );
}

export default DrawingPanel;
