import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
    const [page, setPage] = useState ('AboutMe')

    function displayPage() {
        if (page === "AboutMe") {
            return <AboutMe/>
        }
        else if (page === "ContactMe") {
            return <ContactMe/>
        }
        else if (page === "Project") {
            return <Project/>
        }
    }

    function handleChange(page) {
        setPage (page)
    }

    return (
        <div className="main">
            <Header/>

            <Navigation page = {page} handleChange = {handleChange}/>
            {displayPage()}
            <Footer/>
        </div>
    )
}

export default App;
