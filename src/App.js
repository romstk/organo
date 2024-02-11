import { useState } from 'react'
import Formulario from './componentes/Formulario/Formulario'
import Banner from './componentes/Banner/Banner'




function App() {

  const [colaboradores, setColaboradores] = useState([])



const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  /*Aqui neste ponto atualizado o array colaboradores utilizado para guardar o state.
    vamos colocar no array os colaboradores antigos usando a sinatxe  
    [...colaboradores, 
      e adicionar ao final um novo colaborador

     colaborador]
  */
      
     setColaboradores([...colaboradores, colaborador])


}

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
