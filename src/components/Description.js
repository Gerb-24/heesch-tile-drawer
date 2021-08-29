function Description() {
  return (
    <>
    <h3>
      Description
    </h3>
    <p>
      With this website you can draw tiles on the grid in the Input tab. This will automatically output the code for the tile in the Output tab.
    </p>
    <p>
      There are two different squares that you can place
    </p>
    <ol>
      <li>
      The <b>shape</b> (blue) squares are for creating the tile.
      </li>
      <li>
      The <b>priority</b> (green) squares are for creating priority squares. When we compute the first corona around the tile, the code will need to check all the surrounding squares. Since some squares have less options than others, the code will run faster when we prioritize these squares.
      </li>
      <li>
      With <b>remove</b> you can remove the squares you have drawn incorrectly.
      </li>
    </ol>

    </>
  );
}

export default Description;
