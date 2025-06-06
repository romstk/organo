import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
<<<<<<< HEAD

const Time = ({time, colaboradoresTime, aoDeletar}) => {
    return (
            
            //O Time é retornado e neste primeiro ponto o cabeçlho do card é criado com o nome do time e a cor primária.
            colaboradoresTime.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={ {borderColor:time.corPrimaria} }>{time.nome}</h3>
=======
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradoresTime, aoDeletar, mudarCor}) => {
    return (
            //O Time é retornado e neste primeiro ponto o cabeçlho do card é criado com o nome do time e a cor primária.
            colaboradoresTime.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input value={time.cor} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, time.nome)} />
            <h3 style={ {borderColor:time.cor} }>{time.nome}</h3>
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)
            {/*Aqui mapeando os times crio cada colaborador propriamente dito retornando um map com cada um deles e suas propriedades*/}
            <div className='colaboradores'>
                {colaboradoresTime.map((colaborador, indice) => 
                    {
                        return <Colaborador 
<<<<<<< HEAD
                            corDeFundo = {colaborador.corPrimaria}
=======
                            corDeFundo = {time.cor}
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)
                            key={indice} 
                            nome ={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
<<<<<<< HEAD
                            aoDeletar={aoDeletar}/>
=======
                            aoDeletar={aoDeletar}
                            />
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)
                    }
                )}
            </div>
            
        </section>
    )
    
}

export default Time