import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./Pages/Home"
import React from "react";

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          {/*
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
  	      <Route path="github" element={<Github />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
