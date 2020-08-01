import React from 'react';

const Sidebar = () => {
    const info = {
        fullname: 'Md Shafiul Islam',
        firstname: 'Md Shafiul ',
        lastname: 'Islam'
    };

    return (
        <div>
        <div>
          <nav href="#navbar" className="js-template-nav-toggle template-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="template-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="template-logo"><a href="index.html"><span className="sidebar-firstname">{info.firstname}</span><span className="sidebar-lastname">{info.lastname}</span></a></h1>
            </div>
            <nav id="template-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  {/* <li><a href="#projects" data-nav-section="projects">Projects</a></li> */}
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#achievemts" data-nav-section="achievements">Achievements</a></li>
                  {/* <li><a href="#contact" data-nav-section="contact">Contact</a></li> */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="template-footer">
              <div className="some-links">
                {/* <a className="some-link" href="mailto:trifiasco@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail some-icon"/></a> */}
                <a className="some-link" href="https://www.linkedin.com/in/md-shafiul-islam-a34587107/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2 some-icon"/></a>
                <a className="some-link" href="https://github.com/shaft49" target="_blank" rel="noopener noreferrer"><i className="icon-github some-icon"/></a>
                <a className="some-link" href="https://stackoverflow.com/users/5187318/md-shafiul-islam" target="_blank" rel="noopener noreferrer"><i className="icon-stackoverflow some-icon"/></a>
              </div>
            </nav>
          </aside>
        </div>
      </div>

    );
}

export default Sidebar;