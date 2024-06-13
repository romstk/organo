import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSupensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'



const Formulario = (props) => {



/*
Neste ponto vamos controlar o estado do componente através de useState
O React através da atribuição na const array abaixo irá armazenar em valor o dado passado através da função setValor
*/
   
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')



//Esta constante aoSalvar recebe os dados dos campos do
const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
        nome, 
        cargo, 
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')

}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome' 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}  
                    label='Cargo' 
                    placeholder='Digite seu cargo' 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSupensa 
                    obrigatorio={true}
                    label='Time' 
                    itens = {props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )


}

export default Formulario