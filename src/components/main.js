import React from 'react'
import Sidebar from '../components/sidebar'
import Home from '../components/home'
import About from '../components/about'
import Experience from '../components/experience'

function Main() {
    return(
        <div id = "template-page">
            <div id = "container-wrap">
                <Sidebar></Sidebar>
                <div id = "template-main">
                <Home></Home>
                <About></About>
                <Experience></Experience>
                </div>
            </div>
        </div>
    );
}
export default Main;