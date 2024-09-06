import './App.css';
import Draggable from 'react-draggable';

function App() {
  return (
    <div className="App">

      <div className="container m-2">

        <div className="row m-2">
          <div className="col-md-6">
            <Draggable>
              <div className='dragable p-2' >I can be dragged anywhere</div>
            </Draggable>
          </div>
          <div className="col-md-6">
            <Draggable axis="x">
              <div className='dragable p-2' >I can be dragged horizontally (x axis) only</div>
            </Draggable>
          </div>


          <div className="row my-2">
            <div className="col-md-6">

              <Draggable>
                <div className="dragable">
                  <strong className="cursor"><div className="btn btn-secondary w-75 mx-4 my-2">Drag here</div></strong>
                  <div style={{ overflow: 'scroll' }}>
                    <div style={{ background: 'yellow' }}>
                      I have long scrollable content with a handle
                      {'\n' + Array(40).fill('x').join('\n')}
                    </div>
                  </div>
                </div>
              </Draggable>

            </div>
            <div className="col-md-6">

              <Draggable cancel="strong">
                <div className="dragable">
                  <strong className="no-cursor"><div className="btn btn-secondary w-75 mx-4 my-2">Can't Drag here</div></strong>
                  <div>Dragging here works</div>
                </div>
              </Draggable>
            </div>
          </div>

        </div>

      </div>
    </div >
  );
}

export default App;
