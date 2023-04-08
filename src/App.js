import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import NotFount from "./pages/NotFound/NotFount";
import Layout from "./Layout/Layout";
import styles from './styles/style.scss';
import Gilroy from '../src/fonts/Gilroy/stylesheet.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Sales from "./pages/Sales/Sales";
import Delivery from "./pages/Delivery/Delivery";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/*" element={<NotFount/>}/>

        </Route>

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
