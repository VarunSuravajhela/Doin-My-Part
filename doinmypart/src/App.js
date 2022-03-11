import './App.css';
import "@fontsource/spicy-rice"
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiRecycleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdCompost } from "react-icons/md";


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
  const navigate = useNavigate();

  function homeClick() {
    navigate("/");
  }
  return (
    <div>
      <header className='mainHeader'>
      <MdCompost className="recycleLogo" onClick={homeClick}></MdCompost>
        Doin' My Part!
      <CgProfile className="profilePhoto"></CgProfile>
      </header>
      <div className='resultsDiv'>
        <h2 className='resultsH3'>Today, on this great day you helped </h2>
        <h3 className='resultsH2'>Compost 7 pieces of compostable waste which helped</h3>
        <div className="imgDiv">
          <img src="https://image.shutterstock.com/image-photo/five-young-cows-various-colours-260nw-1188691612.jpg"></img>
        </div>
        <h1 className='resultsH1'>Feed 5 cows!</h1>
        <h2 className='resultsH3'>Great job, keep up the great work and save the environemnt!!</h2>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  let [recItem, setRecItem] = useState("");

  let [compItem, setCompItem] = useState("");
  let [compList, setCompList] = useState([]);
  let [compAmt, setCompAmt] = useState("");
  let [compAmtList, setCompAmtList] = useState([]);
  let [compUnit, setCompUnit] = useState("");
  let [compUnitList, setCompUnitList] = useState([]);
  function submitClick() {
    navigate("/results");
  }
  function homeClick() {
    navigate("/");
  }
  function clickItemAction() {
    setCompList([...compList, compItem]);
    console.log(compList);
  }
  function clickAmtAction() {
    setCompAmtList([...compAmtList, compAmt]);
  }
  function clickUnitAction() {
    setCompUnitList([...compUnitList, compUnit]);
  }
  return (
    <div className="mainDiv">
      <header className='mainHeader'>
        <MdCompost className="recycleLogo" onClick={homeClick}></MdCompost>
        Doin' My Part!
        <CgProfile className="profilePhoto"></CgProfile>
      </header>

      <div className='envFactDiv'>
        <h1 className='envFact'>Environment Fact of the Day!</h1>
        <h2 className='envFactBody'>About 1/3 of landfill material is made up of packaging</h2>
      </div>

      <div className='itemEntryDiv'>
        <h1 className='itemEntryTitle'>How much have you composted today?</h1>

        <div className='itemAmtDiv'>
          <div className="bigDiv">
            <h2 className="itemEntry">Item: <input className='entryBox' onChange={(e) => setCompItem(e.target.value)}
              ></input><button className="calcButton" onClick={clickItemAction}>Add Item</button></h2>
            <h2 className="itemEntry">Amount: <input className='entryBox' onChange={(e) => setCompAmt(e.target.value)}
              ></input><button className="calcButton" onClick={clickAmtAction}>Add Amount</button></h2>
            <h2 className="itemEntry">Unit: <input className='entryBox' onChange={(e) => setCompUnit(e.target.value)}
              ></input><button className="calcButton" onClick={clickUnitAction}>Add Amount</button></h2>
          </div>
        </div>

        <h2 className="totalComp">Total Compost:</h2>
        <div className='itemList'>
            <h3 className="i">Item {compList.map(i => <ol>{i}</ol>)}</h3> 
            <h3 className="i">Amount {compAmtList.map(i => <ol>{i}</ol>)}</h3> 
            <h3 className="i">Unit {compUnitList.map(i => <ol>{i}</ol>)}</h3>
          </div>
        
      <div className='buttonDiv'>
        <button className='calcButton' onClick={submitClick}>Calculate your impact!</button>
      </div>
    </div>
    </div>
  );
}