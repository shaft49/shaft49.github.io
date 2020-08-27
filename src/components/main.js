import React from 'react'
import Sidebar from '../components/sidebar'
import Home from '../components/home'
import About from '../components/about'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Education from '../components/education'
import Achievements from '../components/achievements'

function Main() {
    return(
        <div id = "template-page">
            <div id = "container-wrap">
                <Sidebar></Sidebar>
                <div id = "template-main">
                <Home></Home>
                <About></About>
                <Experience></Experience>
                <Skills></Skills>
                <Education></Education>
                <Achievements></Achievements>
                </div>
            </div>
        </div>
    );
}
export default Main;