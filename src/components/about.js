import React from 'react';
import about from '../info/about.json';

const About = () => {
    return (
        <div>
        <section className="template-about" data-section="about">
        <div className="template-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="template-heading">Who Am I?</h2>
                    {about.About.map(section => {
                        if(section.section.includes('side')){return;}
                        return (
                            section.description.map(entry => {
                                return (
                                    <p className="about" dangerouslySetInnerHTML={{__html: entry}}></p>
                                );
                            })
                        )
                    })}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    );
};

export default About;