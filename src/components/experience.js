import React from 'react';
import experience from '../info/experience.json';

const Experience = () => {
    return (
        <div>
            <section class="template-experience" data-section="experience">
				<div class="template-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Experience</span>
							<h2 class="template-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
				         <div class="timeline-centered">
                             {experience["Professional Experience"].map((item, index) => {
                                 return (
                                    <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					                    <div class="timeline-entry-inner">

					                       <div className={`timeline-icon color-${index + 1}`}>
					                          <i class="icon-pen2"></i>
					                       </div>

					                       <div class="timeline-label">
					                          <h2>
                                                <div style={{"marginBottom": "5px"}}><b>{item.Position}</b> at <a href={item["Comapny URL"]} target="_blank" rel="noopener noreferrer">{item["Company Name"]}</a></div>
                                                <div><span>{`(${item.Timeline.Start} - ${item.Timeline.End})`}</span></div>
                                              </h2>
                                              {item["Key Responsibilities"].map(entry => {
                                                  return (
                                                    <li className="experience" dangerouslySetInnerHTML={{__html:entry}}></li>
                                                  );
                                              })}
					                       </div>
					                    </div>
					                </article>
                                 )
                             })}
					         <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>
        </div>
    );
};

export default Experience;