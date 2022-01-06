import { Route, Routes, useLocation } from 'react-router';
import CardsSpinning from './components/CardsSpinning/CardsSpinning';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  let path = useLocation().pathname
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ url", path)
  return (
    <div className="App">
    <MainHeader/>
    
    <Routes>
        <Route path="/CardsSpinning" element={<CardsSpinning/>} />
        {/* <Route path="*" element={<CardsSpinning/>} /> */}
    </Routes>
    </div>
  );
}

export default App;
