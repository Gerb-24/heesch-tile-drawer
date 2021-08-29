import '../styles/Other.css';

function Other(props){

  const venvActivate = `venv/scripts/activate
cd code
python`

  const venvDeactivate = `cd ..
deactivate`

  function activateFunc(){
    navigator.clipboard.writeText(venvActivate);
  }

  function deactivateFunc(){
    navigator.clipboard.writeText(venvDeactivate);
  }


  return (
    <div className="other">
      <h3>
      Other useful things to copy
      </h3>
      <div className="other-copies">
        <div className="activate">
          <p> Use this to <b>activate</b> the virtual environment
           and cd into the code directory and start the <b>python shell</b> </p>
          <textarea className="venv-activate" readOnly value = {venvActivate}></textarea>
          <button className="btn btn-danger sm" onClick={activateFunc}>Copy Text</button>
        </div >
        <div className="deactivate">
        <p> Use this to cd out the code directory
         and <b>deactivate</b> the virtual environment</p>
          <textarea className="venv-deactivate" readOnly value = {venvDeactivate}></textarea>
          <button className="btn btn-danger sm" onClick={deactivateFunc}>Copy Text</button>
        </div >
      </div>

    </div>
  );
}
export default Other;
