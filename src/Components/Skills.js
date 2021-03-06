import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Мои скиллы'} span={'мои скиллы'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5(PUG)'}
                            width={'79.9%'}
                            text={'79.9%'}
                        />
                        <ProgressBar 
                            title={'CSS3(SASS)'}
                            width={'69.9%'}
                            text={'69.9%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'69.9%'}
                            text={'69.9%'}
                        />
                        <ProgressBar 
                            title={'GIT'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'49.9%'}
                            text={'49.9%'}
                        />
                        <ProgressBar
                            title={'Redux'}
                            width={'49.9%'}
                            text={'49.9%'}
                        />
                        <ProgressBar
                            title={'Mobx'}
                            width={'49.9%'}
                            text={'49.9%'}
                        />
                        <ProgressBar
                            title={'AntDesign'}
                            width={'69.9%'}
                            text={'69.9%'}
                        />
                        <ProgressBar
                            title={'RestAPI'}
                            width={'69.9%'}
                            text={'69.9%'}
                        />
                        <ProgressBar
                            title={'MUI'}
                            width={'19.9%'}
                            text={'19.9%'}
                        />
                        <ProgressBar
                            title={'PHP'}
                            width={'15%'}
                            text={'15%'}
                        />
                        <ProgressBar 
                            title={'MySQL'}
                            width={'15%'}
                            text={'15%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;