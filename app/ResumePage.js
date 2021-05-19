import React from 'react';

const ResumePage = () => (
    <div>
        <section class="resume__page">
            <div class="main">
                <div class="header--general">
                    <h2>Resume</h2>
                </div>
                <div class="container content--general">
                    <div class="row">
                        <div class="col-12">
                            <h2>Experience</h2>
                            <div class="timeline">
                                <div class="timeline__block">
                                    <h4 class="title">Grade 2 Radiographer</h4>
                                    <span class="duration">11/2020 - present</span>
                                    <span class="org">Horizon Imaging Clinic, Box Hill, VIC</span>
                                    <ol class="intro">
                                        <li>Prepare general X-Ray, OPG and CT</li>
                                        <li>Assist in MRI and other services</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">07/2020 - 09/2020</span>
                                    <span class="org">St George Hospital, Kogarah, NSW</span>
                                    <ol class="intro">
                                        <li>Captured images using mobile equipment
                                        in ICU, emergency rooms, and patients' bedsides</li>
                                        <li>Use O-arm in theatre</li>
                                        <li>Able to do x-ray and CT for trauma patients</li>
                                        <li>Created images using fluoroscopy to help 
                                        physicians assess and diagnose patients</li>
                                        <li>Infection control</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">01/2020 - 04/2020</span>
                                    <span class="org">Bankstown Health Imaging, Bankstown, NSW</span>
                                    <ol class="intro">
                                        <li>Able to prepare for BA swallow, IV contrast, and Gastrografin</li>
                                        <li>Able to use DEXA to create images</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">07/2019 - 09/2019</span>
                                    <span class="org">Bankstown Imaging - Healthcare Imaging Services, Bankstown, NSW</span>
                                    <ol class="intro">
                                        <li>Prepared and administered contrast materials and anesthetic for 
                                        imaging procedures</li>
                                        <li>Observe ultrasound</li>
                                        <li>Assist facet joint injection</li>
                                        <li>Able to use different brands of general x-ray machine,
                                        CT machine, OPG machine, and familiar with different system 
                                        including PACS and Visage</li>
                                        <li>Able to arrive and bill patients at reception</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">01/2019 - 02/2019</span>
                                    <span class="org">Fairfield Hospital, Prairiewood, NSW</span>
                                    <ol class="intro">
                                        <li>Created images using fluoroscopy during Barium swallow 
                                        to help physicians assess patients</li>
                                        <li>Practice C-arm machine in operation theatre</li>
                                        <li>Operated x-ray and mobile imaging equipment in 
                                        emergency department ICU, ED and wards</li>
                                        <li>Prepared contrast materials, anesthetic for imaging procedures</li>
                                        <li>Exam post-operation patients</li>
                                        <li>Apply infection control</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">11/2018 - 12/2018</span>
                                    <span class="org">I-MED Erina Central Coast, Erina, NSW</span>
                                    <ol class="intro">
                                        <li>Completed CT for Chest, Abdomen, and Brain</li>
                                        <li>Bilingual translation</li>
                                        <li>Familiar use wireless DR machine</li>
                                        <li>Observed and created images of BMD</li>
                                    </ol>
                                </div>
                                <div class="timeline__block">
                                    <h4 class="title">Student Radiographer</h4>
                                    <span class="duration">06/2018 - 07/2018</span>
                                    <span class="org">Alfred Imaging North Strathfield, Strathfield, NSW</span>
                                    <ol class="intro">
                                        <li>Minimised beam-restrictive exposure to patients and applied 
                                        shielding strategies</li>
                                        <li>Educated patients on aspects of the procedure, offered
                                        instructions and answered questions to reduce distress
                                        and enhance cooperation</li>
                                        <li>Familiar using CR machine</li>
                                    </ol>
                                </div>            
                            </div>
                        </div>
                    </div>

                    <div class="row margin-auto">
                        <div class="col-12">
                                <h2>Skills</h2>
                                    <div class="row">
                                        <ol class="skill__block col-md-6">
                                            <li>X-ray</li> 
                                            <li>OPG</li>
                                            <li>Non-contrast CT</li>
                                            <li>C-arm, O-arm</li>
                                            <li>Materials prepare (BA, Gastrografin, Contrast)</li>
                                        </ol>
                                        <ol class="skill__block col-md-6">                       
                                            <li>PACS</li>
                                            <li>Theatre</li>
                                            <li>Mobile</li>
                                            <li>Infection control</li>
                                            <li>Translation</li>
                                            <li>Bilingual (Mandarin and English)</li>
                                        </ol>
                                    </div>
                                <h2>Certificates</h2>
                                    <div class="cert__block row">
                                        <div class="col-sm-2"><p class="fa fa-medkit"></p>First Aid</div>
                                        <div class="col-sm-2"><p class="fa fa-heartbeat"></p>CPR</div>
                                        <div class="col-sm-4"><p class="fa fa-shield"></p>National Criminal Check</div>
                                        <div class="col-sm-4"><p class="fa fa-child"></p>Work with Children Check</div>
                                    </div>
                        </div> 
                    </div>     
                </div>
            </div>
        </section>
    </div>
);

export default ResumePage;