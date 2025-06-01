import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = ({time, colaboradoresTime, aoDeletar}) => {
    return (
            
            //O Time é retornado e neste primeiro ponto o cabeçlho do card é criado com o nome do time e a cor primária.
            colaboradoresTime.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={ {borderColor:time.corPrimaria} }>{time.nome}</h3>
            {/*Aqui mapeando os times crio cada colaborador propriamente dito retornando um map com cada um deles e suas propriedades*/}
            <div className='colaboradores'>
                {colaboradoresTime.map((colaborador, indice) => 
                    {
                        return <Colaborador 
                            corDeFundo = {colaborador.corPrimaria}
                            key={indice} 
                            nome ={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
                            aoDeletar={aoDeletar}/>
                    }
                )}
            </div>
            
        </section>
    )
    
}

export default Time