import './App.css';
import Home from './components/home'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Test1 from "./components/test1";
import Test2 from "./components/test2";
import Submit from "./components/submit";
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import {Fab} from "@mui/material";
import {QuestionAnswer} from "@mui/icons-material";


function App() {

    function chatHandler() {
        alert("Chat is unavailable at the moment.")
    }

    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/test1" element={<Test1/>}/>
                    <Route path="/test2" element={<Test2/>}/>
                    <Route path="/submit" element={<Submit/>}/>
                </Routes>
                <Footer/>
                <Link to="#">
                    <Fab style={{
                        display:"flex",
                        marginLeft:"90%",
                        backgroundColor:"#17A571",
                        fontSize:"large",
                        bottom:40,
                        position:"fixed"}} onClick={chatHandler}>
                        <QuestionAnswer/>
                    </Fab>
                </Link>
            </BrowserRouter>
        </div>
    );
}

export default App;
