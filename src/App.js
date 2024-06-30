import { useState } from 'react'
import Formulario from './componentes/Formulario/Formulario'
import Banner from './componentes/Banner/Banner'
import Time from './componentes/Time/Time'
import Rodape from './componentes/Rodape/Rodape'




function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9' 
    }, 
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF' 
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2' 
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8' 
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5' 
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9' 
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF' 
    }, 
    
  ]

  
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    debugger
  /*Aqui neste ponto atualizado o array colaboradores utilizado para guardar o state.
    vamos colocar no array os colaboradores antigos usando a sintaxe  
    [...colaboradores, 
      e adicionar ao final um novo colaborador

     colaborador]
  */
      
     setColaboradores([...colaboradores, colaborador])


}

//Formulário seta para o formulário usando props, o parametro aoColaboradorCadastrado que chama a função que adiciona o colaborador na lista de colaboradores. A cada inclusão a lista é atualizada sendo o o formulario de app.js conectado com o componente formulário através de props sendo passado aoColaboradorCadastrado 
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        //Abaixo estou passando os colaboradores mas filtrando por time, então no filter passamos uma arrow function com a variável colab como parâmetro (colab é uma representação de cada registro de colaboradores que o filter vai interagindo pois ele le todo o array colaboradores)que vai retornar os colaboradores filtrados com base no time
        colaboradores={colaboradores.filter(colab => colab.time === time.nome)} 
        
        />)}
     <Rodape desenvolvedor={'Desenvolvido por Alura'}/>

    </div>
  );
}

export default App;
