import './Formulario.css'

import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSupensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

const aoSalvar = (evento) => {

    evento.preventDefault();
    console.log("Formulário foi submetido");
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto obrigatorio={true}  label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSupensa obrigatorio={true}  label='Time' itens = {times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )


}

export default Formulario