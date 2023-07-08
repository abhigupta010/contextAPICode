import React,{useState} from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";
function App() {
  const [text,setText]=useState('');
  return (
    <div className="App">
        <MyContext.Provider value={{text,setText}}>
          <MyComponent/>
        </MyContext.Provider>
    </div>
  );
}

export default App;
