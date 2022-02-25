import logo from './logo.svg';
import './App.css';
import "@fontsource/spicy-rice"

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

export default App;
