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
                            width={'59.9%'}
                            text={'59.9%'}
                        />
                        <ProgressBar 
                            title={'CSS3(SASS)'}
                            width={'69.9%'}
                            text={'69.9%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'55.9%'}
                            text={'55.9%'}
                        />
                        <ProgressBar 
                            title={'PHP'}
                            width={'15%'}
                            text={'15%'}
                        />
                        <ProgressBar 
                            title={'GIT'}
                            width={'16%'}
                            text={'16%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'39.9%'}
                            text={'39.9%'}
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