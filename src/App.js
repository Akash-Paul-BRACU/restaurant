import React from "react"
import { BrowserRouter } from "react-router-dom";
import './App.css';
import MainComponent from "./Components/Header/MainComponent";
import myStore from "./Redux/Store";
import {Provider} from "react-redux"
function App() {
  //console.log("App.js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
      <BrowserRouter>
     <MainComponent></MainComponent>
     </BrowserRouter>
      </Provider>
     
    

    </div>
  );
}

export default App;
