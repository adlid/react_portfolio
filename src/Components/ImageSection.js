import React from 'react'
import styled from 'styled-components';
import resume from '../img/about-img.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Я <span>Бакдаулет</span></h4>
                <p className="paragraph">
                    Учусь в 4-ом курсе КАЗНУ. На данный момент в пойсках работы на должности strong junior+ frontend developer.
                    Работал в Веб-студиях.В основные обязанности входил верстка сайтов и лендингов, написание скриптов на JS.
                    Сейчас работаю в компаний UCO. Занимаюсь разработкой B2B приложений.
                    Развиваю навыки необходимые frontend разработчику.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p  >Имя</p>
                        <p className="m-bt">Возраст</p>
                        <p>Национальность </p>
                        <p>Языки </p>
                        <p className="m-bt" >Адрес</p>
                      
                    </div>
                    <div className="info">
                        <p>: Азимбекулы Бакдаулет</p>
                        <p>: 21</p>
                        <p>: казах </p>
                        <p>: Казахский, русский, англиский </p>
                        <p>: Алматы</p>
                        
                    </div>
                </div>
               {/* }} <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
                .m-bt{
                    padding-top: 1.6rem;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;