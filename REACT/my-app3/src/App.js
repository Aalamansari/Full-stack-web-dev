import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from './hello-world'
import Home    from './home'
import User from "./User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='hello-world' element={<Hello/>} />
          <Route path='home' element={<Home/>} />
        </Routes>
        <User/>
      </BrowserRouter>
    </div>
  );
}

export default App;
