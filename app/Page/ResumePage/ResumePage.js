import React from 'react';


import styled from 'styled-components';
import MainSection from '../components/MainSection';
import GeneralHeader from '../components/GeneralHeader';
import { ContentTitle, GeneralContent } from '../components/ContentStyle';
import Flex from '../../../Components/Flex';
import FlexBlock from '../../../Components/FlexBlock';


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
    border-right: 1px solid #ccc3c3;
    color: #f99f6f;
`;

const Org = styled.span`
    font-style: italic;
`;

const ListBlock = styled.ol`
    list-style-type: square;
    li {
        &::marker {
            color: #f99f6f;
            font-size: 2rem;
        }
    }
`;

/* const FlexBlock = styled(Flex)`
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`; */

const SkillItems = styled(ListBlock)`
    li {
        padding: 2% 5%;
    }
`;

const CertBlock = styled(FlexBlock)`
    justify-content: space-between;
    p {
        padding: 1% 5%;
        font-size: 3rem;
        color: #f99f6f;
    }
    div {
        padding-right: 2%;
    }
`;



const ResumePage = () => {

    const expItems = [
        {
            title: 'Grade 2 Radiographer', 
            duration: '11/2020 - present', 
            org:'Horizon Imaging Clinic, Box Hill, VIC',
            intro: ['Prepare general X-Ray, OPG and CT', 'Assist in MRI and other services'],
        },
        {
            title: 'Student Radiographer', 
            duration: '07/2020 - 09/2020', 
            org:'St George Hospital, Kogarah, NSW',
            intro: ['Captured images using mobile equipment in ICU, emergency rooms, and patients\' bedsides', 'Use O-arm in theatre',
            'Able to do x-ray and CT for trauma patients', 'Created images using fluoroscopy to help physicians assess and diagnose patients',
            'Infection control'],
        },
        {
            title: 'Student Radiographer', 
            duration: '01/2020 - 04/2020', 
            org:'Bankstown Health Imaging, Bankstown, NSW',
            intro: ['Able to prepare for BA swallow, IV contrast, and Gastrografin', 'Able to use DEXA to create images'],
        },
        {
            title: 'Student Radiographer', 
            duration: '07/2019 - 09/2019', 
            org:'Bankstown Imaging - Healthcare Imaging Services, Bankstown, NSW',
            intro: ['Prepared and administered contrast materials and anesthetic for imaging procedures', 'Observe ultrasound',
            'Assist facet joint injection', 'Able to use different brands of general x-ray machine, CT machine, OPG machine, and familiar with different system including PACS and Visage',
            'Able to arrive and bill patients at reception'],
        },
        {
            title: 'Student Radiographer', 
            duration: '01/2019 - 02/2019', 
            org:'Fairfield Hospital, Prairiewood, NSW',
            intro: ['Created images using fluoroscopy during Barium swallow to help physicians assess patients', 
            'Practice C-arm machine in operation theatre', 'Operated x-ray and mobile imaging equipment in emergency department ICU, ED and wards',
            'Prepared contrast materials, anesthetic for imaging procedures', 'Exam post-operation patients', 'Apply infection control'],
        },
        {
            title: 'Student Radiographer', 
            duration: '11/2018 - 12/2018', 
            org:'I-MED Erina Central Coast, Erina, NSW',
            intro: ['Completed CT for Chest, Abdomen, and Brain', 'Bilingual translation', 'Familiar use wireless DR machine', 'Observed and created images of BMD'],
        },
        {
            title: 'Student Radiographer', 
            duration: '06/2018 - 07/2018', 
            org:'Alfred Imaging North Strathfield, Strathfield, NSW',
            intro: ['Minimised beam-restrictive exposure to patients and applied shielding strategies', 
            'Educated patients on aspects of the procedure, offered instructions and answered questions to reduce distress', 
            'Familiar using CR machine'],
        },

    ];

    return (
    <div>
        <MainSection>
                <GeneralHeader>
                    <h2>Resume</h2>
                </GeneralHeader>
                <GeneralContent>
                        <ContentTitle>Experience</ContentTitle>
                            <Timeline>                                                          
                                {
                                    expItems.map((expItem) => (
                                        
                                        <TimelineBlock>
                                            <h4>{expItem.title}</h4>
                                            <Duration>{expItem.duration}</Duration>
                                            <Org>{expItem.org}</Org>  
                                            <ListBlock key={expItems.duration}>
                                                {
                                                    expItem.intro.map((item) => <li>{item}</li>)
                                                }
                                            </ListBlock>
                                        </TimelineBlock>                                   
                                    ))
                                }                               
                            </Timeline>

                    
                        <ContentTitle>Skills</ContentTitle>
                            <FlexBlock>
                                <SkillItems>
                                    <li>X-ray</li> 
                                    <li>OPG</li>
                                    <li>Non-contrast CT</li>
                                    <li>C-arm, O-arm</li>
                                    <li>Materials prepare (BA, Gastrografin, Contrast)</li>
                                </SkillItems>
                                <SkillItems>                       
                                    <li>PACS</li>
                                    <li>Theatre</li>
                                    <li>Mobile</li>
                                    <li>Infection control</li>
                                    <li>Translation</li>
                                    <li>Bilingual (Mandarin and English)</li>
                                </SkillItems>
                            </FlexBlock>

                        <ContentTitle>Certificates</ContentTitle>
                            <CertBlock>
                                <div><p class="fa fa-medkit"></p>First Aid</div>
                                <div><p class="fa fa-heartbeat"></p>CPR</div>
                                <div><p class="fa fa-shield"></p>National Criminal Check</div>
                                <div><p class="fa fa-child"></p>Work with Children Check</div>
                            </CertBlock>
                </GeneralContent>
        </MainSection>
    </div>
    )
};

export default ResumePage;