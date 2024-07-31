import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";
import opps from "./components/oops.png"

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      //if this satisfies change the bg color as the css provided
        <div className="refresh" style={{ backgroundColor: "rgb(232, 199, 229)" }}>
          <h2 className="NTL">No Tours Left</h2>
          <img className="oops" src={opps} alt={"OOPS"}></img>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
