import './App.css';
import {Header} from "./components/Header";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {MovieDetail} from "./views/MovieDetail";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
