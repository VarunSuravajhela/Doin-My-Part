import logo from './logo.svg';
import './App.css';
import "@fontsource/spicy-rice"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
function Result() {
  return (
    <div>
      <header className='mainHeader'>Doin' My Part!</header>
      <div className='resultsDiv'>
        <h2 className='resultsH3'>Today, on this great day you helped </h2>
        <h3 className='resultsH2'>Recycle 2 pounds of plastic waste which turned into</h3>
        <div className="imgDiv">
          <img src="https://lazyenvironmentalist.com/wp-content/uploads/Buoy-Bottle-Recycled-Ocean-Plastic-Reusable-Water-Bottle.jpg"></img>
        </div>
        <h1 className='resultsH1'>4 reusable water bottles!!!</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <header className='mainHeader'>Doin' My Part!</header>
      <div className='envFactDiv'>
        <h1 className='envFact'>Environment Fact of the Day!</h1>
        <h2 className='envFactBody'>About 1/3 of landfill material is made up of packaging</h2>
      </div>
      <div className='itemEntryDiv'>
        <h1 className='itemEntryTitle'>How much have you recycled today?</h1>
        <h2 className="itemEntry">Item: </h2>
      </div>
      <div className='itemEntryDiv'>
        <h1 className='itemEntryTitle'>How much have you composted today?</h1>
        <h2 className="itemEntry">Item: </h2>
      </div>
      <div className='buttonDiv'>
        <button className='calcButton'>Calculate your impact!</button>
      </div>
    </div>
  );
}

