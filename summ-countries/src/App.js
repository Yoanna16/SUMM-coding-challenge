import React from "react";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <>
    <Header />
    <Filter/>
    <Countries />
    </>
  );
}

export default App;
