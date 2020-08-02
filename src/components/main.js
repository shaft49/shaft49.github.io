import React from 'react'
import Sidebar from '../components/sidebar'
import Home from '../components/home'
import About from '../components/about'

function Main() {
    return(
        <div id = "template-page">
            <div id = "container-wrap">
                <Sidebar></Sidebar>
                <div id = "template-main">
                <Home></Home>
                <About></About>
                </div>
            </div>
        </div>
    );
}
export default Main;