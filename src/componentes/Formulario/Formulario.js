import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSupensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'



const Formulario = ({aoCadastrar, times, cadastrarTime}) => {
/*
Neste ponto vamos controlar o estado do componente através de useState
O React através da atribuição na const array abaixo irá armazenar em valor o dado passado através da função setValor
*/
   
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')
const [nomeTime, setNomeTime] = useState('')
const [corTime, setCorTime] = useState('')



//Esta constante aoSalvar recebe os dados dos campos do formulário
// e chama a função aoCadastrar que foi passada como props para o componente Formulário
// O evento.preventDefault() é utilizado para evitar que o formulário seja enviado e a página seja recarregada
// O evento é passado como parametro para a função aoSalvar
// O objeto colaborador é criado dentro do componente Formulario, na função aoSalvar:
const aoSalvar = (evento) => {
    evento.preventDefault();
    //Na função aoSalvar, você está criando um objeto JavaScript com as propriedades nome, cargo, imagem e time:
    aoCadastrar({
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
                    itens = {times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={ (evento) => {
                evento.preventDefault();
                cadastrarTime({
                    nome: nomeTime,
                    cor: corTime
                })


            }
            }>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    obrigatorio
                    label='Nome' 
                    placeholder='Digite o nome do time' 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}  
                    label='Cor' 
                    placeholder='Digite a cor do time.' 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />

                
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )


}

export default Formulario