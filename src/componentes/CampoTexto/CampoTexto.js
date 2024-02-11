import './CampoTexto.css'

const CampoTexto = (props)=> {

    //Campo texto recebe através de props as propriedades atribuídas em formulário. 
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )

}

export default CampoTexto