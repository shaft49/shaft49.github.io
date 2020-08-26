import React, {useState} from 'react';
import skills from '../info/skills.json';

const Skills = () => {
	var temp = skills["Technical Skills"];
	console.log(temp);
	skills["Technical Skills"].map(item => {
		console.log(item);
	})
    const temp1 = {
        width: `${75}%`,
    };
    const temp2 = {
        width: `${60}%`,
    }
    return (
        <div>
            <section class="template-skills" data-section="skills">
				<div class="template-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							{/* <span class="heading-meta">My Specialty</span> */}
							<h2 class="template-heading animate-box">My Skills</h2>
						</div>
					</div>
					<div class="row">
						<div>
							{skills["Technical Skills"].map((division, index) => {
								return (
									<>
										<h3 class="col-md-12 animate-box skill-subheading" data-animate-effect="fadeInLeft">{division["division"]}</h3>
										<div>
											{division.items.map(item => {
												return (
												<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
													<div class="progress-wrap">
														<h3 className="skill-label">{item.name}</h3>
														<div class="progress">
															 <div className={`progress-bar color-${index + 1}`} role="progressbar" aria-valuenow={item.level}
															  aria-valuemin="0" aria-valuemax="100" style={{"width" : `${item.level}%`}}>
															<span>{item.level}</span>
															  </div>
														</div>
													</div>
												</div>
												)
											})}
										</div>
										
									</>
								)
							})}
						</div>
					</div>
				</div>
			</section>
        </div>
    );
};

export default Skills;