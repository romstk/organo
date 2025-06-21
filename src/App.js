import { useState } from 'react'
import Formulario from './componentes/Formulario/Formulario'
import Banner from './componentes/Banner/Banner'
import Time from './componentes/Time/Time'
import Rodape from './componentes/Rodape/Rodape'
import { v4 as uuidv4 } from 'uuid';


function App() {

const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9' 
    }, 
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF' 
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2' 
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8' 
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5' 
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9' 
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF' 
    }, 
    
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]
const [colaboradores, setColaboradores] = useState(inicial)

const adicionarColaborador = (colaborador) => {
    
  /*debugger

  /*Aqui neste ponto atualizado o array colaboradores utilizado para guardar o state.
    vamos colocar no array os colaboradores antigos usando a sintaxe  
    [...colaboradores, 
      e adicionar ao final um novo colaborador

     colaborador]
  */

     setColaboradores([...colaboradores, colaborador])
}

function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
        if(time.id === id){
            time.cor = cor;
        }
        return time;
    }));
}


function deletarColaborador(id) {
    //Aqui estou utilizando o filter para filtrar os colaboradores que não são iguais ao colaborador que foi passado como parâmetro. 
    //O filter retorna um novo array com os colaboradores que não são iguais ao colaborador que foi passado como parâmetro.
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
}

function cadastrarTime(novoTime) {
  //Aquie estou setantdo os times já existentes e adicionando um novo time com o id gerado pelo uuidv4()
  //O novo time é um objeto com as propriedades nome e cor, que são passadas como parâmetro para a função cadastrarTime
  //O setTimes atualiza o estado dos times com o novo time adicionado
  setTimes([...times, {... novoTime, id: uuidv4()}])
}


//Formulário seta para o formulário usando props, o parametro aoCadastrar que chama a função que adiciona o colaborador na lista de colaboradores. A cada inclusão a lista é atualizada sendo que o formulario de app.js conectado com o componente formulário através de props sendo passado aoCadastrar
  return (
    <div className="App">
      <Banner />
      <Formulario 
          cadastrarTime={cadastrarTime}
          //times é o array de times que foi criado acima. É passado como props para o componente Formulário. No componente fomrulário está esperando um array times em props. 
          times={times.map(time => time.nome)} 
          //aoCadastrar é uma propos que chama uma função de adicionar o colaborador. 
          // Ao executar esta função vai adicionar o colaborador na lista de colaboradores.
          //Como é feita a ligação? O App.js passa a função adicionarColaborador para o Formulario.js via props, atravevés de aoCadastrar. O Formulario dentro de suas funcionalidades cria o objeto com os dados do usuário e chama props.aoCadastrar(objeto). O App.js recebe o objeto e atualiza o estado. aoCadastar fica conectardo ao formulário pela propss aoCadastrar. A medidada que o formulário atualiza o estado do objeto colaborador lá no fomrulário a função aqui no App.js que recebe um colaborador como parâmetro recebe este colaborador e faz suas funcionalidade. isto é administrado peloa React através do conceito de estado e props.
          aoCadastrar={adicionarColaborador}  

      />



      <section className='times'>
        <h1>Minhar Organização</h1>
          {times.map(time => <Time 
            key={time.nome} 
            //Aqui estou passando o time como props para o componente Time, que é um objeto com as propriedades nome, corPrimaria e corSecundaria
            time={time}
            //Abaixo estou passando os colaboradores mas filtrando por time, então no filter passamos uma arrow function com a variável colab como parâmetro (colab é uma representação de cada registro de colaboradores que o filter vai interagindo pois ele le todo o array colaboradores)que vai retornar os colaboradores filtrados com base no time
            colaboradoresTime={colaboradores.filter(colab => colab.time === time.nome)} 
            aoDeletar={deletarColaborador}
            //colaboradores={colaboradores.filter(colab => colab.time === time.nome)}
            mudarCor={mudarCorDoTime}
            
            />)}

      </section>
     <Rodape desenvolvedor={'Desenvolvido por Alura'}/>

    </div>
  );
}

export default App;
