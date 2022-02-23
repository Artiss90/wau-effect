import { Route, Routes, useLocation } from 'react-router';
import CartsSpinning from './components/CartsSpinning/CartsSpinning';
import MainHeader from './components/MainHeader/MainHeader';
import NeomorphicForm from './components/NeomorphicForm/NeomorphicForm';

function App() {
  let path = useLocation().pathname;
  return (
    <div className="App">
      <MainHeader />

      <Routes>
        <Route path="/CartsSpinning" element={<CartsSpinning />} />
        <Route path="/NeomorphicForm" element={<NeomorphicForm />} />
      </Routes>
    </div>
  );
}

export default App;
