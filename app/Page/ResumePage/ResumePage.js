import React from 'react';
import { Row, Col } from 'react-bootstrap';

import styled from 'styled-components';
import MainSection from '../components/MainSection';
import GeneralHeader from '../components/GeneralHeader';
import { ContentTitle, GeneralContent } from '../components/ContentStyle';


const Timeline = styled.div`
    border-left: solid 2px #e9e7e7;
    padding: 2% 0px;
    width: 80%;
`;

const TimelineBlock = styled.div`
    padding: 2% 5%;
    background-color: rgba(245, 227, 63, 0.267);
    position: relative;
    border-left: solid 2px #e9e7e7;
    margin: 30px;
    width: 100%;
    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);  
    }
    &:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        border: solid 5px #e9e7e7;
        position: absolute;
        top: 35px;
        left: -37px;
        z-index: 5;
    }
    &:after {
        content: "";
        display: inline-block;
        background-color: #e9e7e7;
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 10px;
        top: 39px;
        left: -30px;
        z-index: 4;
    }
    span {
        padding: 2px 5px;
    }
`;

const Duration = styled.span`
    border-right: 1px solid #e9e7e7;
    color: #f99f6f;
`;

const SkillBlock = styled.ol`
    list-style-type: square;
    li {
        padding: 2% 5%;
        &::marker {
            color: #f99f6f;
            font-size: 2rem;
        }
    }
`;

const CertBlock = styled.div`
    p {
        padding: 1% 5%;
        font-size: 3rem;
        color: #f99f6f;
    }
    div {
        padding-right: 2%;
    }
`;



const ResumePage = () => (
    <div>
        <MainSection>
                <GeneralHeader>
                    <h2>Resume</h2>
                </GeneralHeader>
                <GeneralContent>
                        <ContentTitle>Experience</ContentTitle>
                            <Timeline>
                                <TimelineBlock>
                                    <h4 class="title">Grade 2 Radiographer</h4>
                                    <Duration>11/2020 - present</Duration>
                                    <span class="org">Horizon Imaging Clinic, Box Hill, VIC</span>
                                    <ol class="intro">
                                        <li>Prepare general X-Ray, OPG and CT</li>
                                        <li>Assist in MRI and other services</li>
                                    </ol>
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>07/2020 - 09/2020</Duration>
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
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>01/2020 - 04/2020</Duration>
                                    <span class="org">Bankstown Health Imaging, Bankstown, NSW</span>
                                    <ol class="intro">
                                        <li>Able to prepare for BA swallow, IV contrast, and Gastrografin</li>
                                        <li>Able to use DEXA to create images</li>
                                    </ol>
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>07/2019 - 09/2019</Duration>
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
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>01/2019 - 02/2019</Duration>
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
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>11/2018 - 12/2018</Duration>
                                    <span class="org">I-MED Erina Central Coast, Erina, NSW</span>
                                    <ol class="intro">
                                        <li>Completed CT for Chest, Abdomen, and Brain</li>
                                        <li>Bilingual translation</li>
                                        <li>Familiar use wireless DR machine</li>
                                        <li>Observed and created images of BMD</li>
                                    </ol>
                                </TimelineBlock>
                                <TimelineBlock>
                                    <h4 class="title">Student Radiographer</h4>
                                    <Duration>06/2018 - 07/2018</Duration>
                                    <span class="org">Alfred Imaging North Strathfield, Strathfield, NSW</span>
                                    <ol class="intro">
                                        <li>Minimised beam-restrictive exposure to patients and applied 
                                        shielding strategies</li>
                                        <li>Educated patients on aspects of the procedure, offered
                                        instructions and answered questions to reduce distress
                                        and enhance cooperation</li>
                                        <li>Familiar using CR machine</li>
                                    </ol>
                                </TimelineBlock>            
                        </Timeline>

                    
                        <ContentTitle>Skills</ContentTitle>
                            <Row>
                                <Col md={6}>
                                    <SkillBlock>
                                        <li>X-ray</li> 
                                        <li>OPG</li>
                                        <li>Non-contrast CT</li>
                                        <li>C-arm, O-arm</li>
                                        <li>Materials prepare (BA, Gastrografin, Contrast)</li>
                                    </SkillBlock>
                                </Col>
                                <Col md={6}>
                                    <SkillBlock>                       
                                        <li>PACS</li>
                                        <li>Theatre</li>
                                        <li>Mobile</li>
                                        <li>Infection control</li>
                                        <li>Translation</li>
                                        <li>Bilingual (Mandarin and English)</li>
                                    </SkillBlock>
                                </Col>
                            </Row>
                        <ContentTitle>Certificates</ContentTitle>
                            <Row>
                                <CertBlock>
                                    <Col sm={2}><p class="fa fa-medkit"></p>First Aid</Col>
                                    <Col sm={2}><p class="fa fa-heartbeat"></p>CPR</Col>
                                    <Col sm={4}><p class="fa fa-shield"></p>National Criminal Check</Col>
                                    <Col sm={4}><p class="fa fa-child"></p>Work with Children Check</Col>
                                </CertBlock>
                            </Row> 
                </GeneralContent>
        </MainSection>
    </div>
);

export default ResumePage;