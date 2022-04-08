import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Резюме'} span={'резюме'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Опыт работы'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2021 февраль - 2021 май'}
                        title={'Frontend Devoloper'}
                        subTitle={'UCO'}
                        text={'B2B сайт приложение на React'}
                    />
                    <ResumeItem 
                        year={'2021 февраль - 2021 май'} 
                        title={'Frontend Devoloper'}
                        subTitle={'WffKz'}
                        text={'Реальный опыт по верстке и по фронтенду. Интересные задачки'} 
                    />
                    <ResumeItem
                        year={'2021 январь - 2021 февраль'}
                        title={'Full Stack Developer'}
                        subTitle={'Zerone-technologies'}
                        text={'1 неделя для изучение Bitrix-24 дальше задачки по PHP, Фиксить баги по js на хостинге. В конце не понравился делать сайты готовым шаблоном и дальше некуда развиваться'}
                    />
                    <ResumeItem 
                        year={'2020 сентьябрь - 2021 лето'}
                        title={'Фрилансер'}
                        subTitle={'Заказы'}
                        text={'Делаю универские проекты на С#, MySQL. Делаю сайты по задачке. Был преподом для одного студента, по frontend dev'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Образование'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Сейчас'} 
                        title={'Курсы'}
                        subTitle={'You tube'}
                        text={'React with Dimitch или Samurai js топчик. Javascrpt mastery. And some indian guys). Udemy потом узнал что есть слив курсы)'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Университет'}
                        subTitle={'СДУ'}
                        text={'Бакалавр ВТиПО. Мои знакомые познакомили меня с фронтендом и мои путь начиналсяя с университета'} 
                    />
                    <ResumeItem 
                        year={'2007 - 2018'} 
                        title={'Школа'}
                        subTitle={'СШ им Амангельды'}
                        text={'Учился в обычной  школе. Был отличником, набрал 125 из 140 и поступил на грант'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume