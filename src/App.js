import React from "react";
import Header from "./Header";
import './App.css';
import SideNav from "./SideNav";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{ display: "flex" }}>
          <SideNav />
          <Main/>
        </div>
    </div>
  );
}

export default App;
