import './ListaSuspensa.css'; 

const ListaSupensa = ({obrigatorio, label, itens, valor, aoAlterado })=> {
    
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio}
                value={valor}
                
                >
                <option value="" />

                {itens.map(item => {
                    return  <option key={item}> {item}</option>
                })}
                
                
            </select>
        </div>
    )
}

export default ListaSupensa