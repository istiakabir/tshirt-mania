import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReviews from './components/OrderReviews/OrderReviews';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order-review' element={<OrderReviews></OrderReviews>}></Route>
      </Routes>
    </div>
  );
}

export default App;
