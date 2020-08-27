import React from 'react';
import education from '../info/education.json';

const Education = () => {
    return (
        <div>
            <section class="template-education" data-section="education">
				<div class="template-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							{/* <span class="heading-meta">Education</span> */}
							<h2 class="template-heading animate-box">Education</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    {education.Education.map((item, index) => {
                                        return (
                                            <div class="panel panel-default">
									            <div class="panel-heading" role="tab" id={`heading${index + 1}`}>
									                <h4 class="panel-title">
									                    <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${index + 1}`} aria-expanded="true" aria-controls={`collapse${index + 1}`}>{item.Degree}
									                    </a>
									                </h4>
									            </div>
									            <div id={`collapse${index + 1}`} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={`heading${index + 1}`}>
									                 <div class="panel-body">
													 	<div>
															<h5>
																<b>{item.Institution}</b>
																<span style={{float: "right", fontStyle:'italic'}}>{item.Timeline.Start} - {item.Timeline.End}</span>
															</h5>
															
														</div>
									                    <div class="row">
                                                            {item.Activities.map(activity => {
                                                                return (
                                                                    <div class="col-md-6">
                                                                        <li className="education" dangerouslySetInnerHTML={{__html: activity}}></li>
                                                                    </div>
                                                                )
                                                            })}
										              	</div>
									                 </div>
									            </div>
									        </div>
                                        );
                                    })}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    );
};

export default Education;