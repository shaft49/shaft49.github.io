import React from 'react'
import Sidebar from '../components/sidebar'
import Home from '../components/home'

function Main() {
    return(
        <div id = "template-page">
            <div id = "container-wrap">
                <Sidebar></Sidebar>
                <div id = "template-main">
                <Home></Home>
                </div>
            </div>
        </div>
    );
}
export default Main;