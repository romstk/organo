import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


const Time = ({time, colaboradoresTime, aoDeletar, mudarCor}) => {
    return (
            //O Time é retornado e neste primeiro ponto o cabeçlho do card é criado com o nome do time e a cor primária.
            colaboradoresTime.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input value={time.cor} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, time.id)} />
            <h3 style={ {borderColor:time.cor} }>{time.nome}</h3>
            {/*Aqui mapeando os times crio cada colaborador propriamente dito retornando um map com cada um deles e suas propriedades*/}
            <div className='colaboradores'>
                {colaboradoresTime.map((colaborador, indice) => 
                    {
                        return <Colaborador 
                            key={indice} 
                            corDeFundo = {time.cor}
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}/>
                    }
                )}
            </div>
            
        </section>
    )
    
}

export default Time