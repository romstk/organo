import { Fragment } from 'react';
import './Banner.css'

function Banner (){
    return (
        //JSX - > é como o React entende estes comandos visuais que parecem html, mas não são. Estas linhas o react vai fazer o append no DOM e transformar em html. É assim que o react trabalha
            <header className='banner'>
                <img src="/imagens/banner.png" alt="O Banner principal da página Organo"/>
            </header>
    )

}

export default Banner;