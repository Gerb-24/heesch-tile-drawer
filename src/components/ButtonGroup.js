import '../styles/ButtonGroup.css';

function ButtonGroup(props){
  const {setSelectionType} = props;


  return (
    <div className="ButtonGroup">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked/>
        <label
          className="btn btn-outline-primary sm"
          onClick = {() => setSelectionType("shape")}
          htmlFor="btnradio1">
          Square
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio" id="btnradio2"
          autoComplete="off"/>
        <label
          className="btn btn-outline-success sm"
          onClick = {() => setSelectionType("priority")}
          htmlFor="btnradio2">
          Priority
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"/>
        <label
          className="btn btn-outline-dark sm"
          onClick = {() => setSelectionType("empty")}
          htmlFor="btnradio3">
          Remove
        </label>
      </div>
    </div>
  );
}
export default ButtonGroup;
