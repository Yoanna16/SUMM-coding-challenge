import React from "react";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
       <Header />
       <Routes>
       <Route exact path='/' element={<Countries/>}/>
       <Route path='/:name' element={<Country />}/>
     </Routes>
      </>
    </Router>
  );
}

export default App;
