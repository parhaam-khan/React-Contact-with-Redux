import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Addcontact from "./pages/Addcontact/Addcontact";
import Editcontact from "./pages/Editcontact/Editcontact";

const App = () => {
    return (  
        <div>
        <Router>
        <Header/>
        <div className="container">
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Addcontact/>}/>
            <Route path="/edit/:id" element={<Editcontact/>}/>
            </Routes>
        </div>
        </Router>
        <ToastContainer/>
        </div>
     );
}
 
export default App;