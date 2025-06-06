import { useState } from 'react'
import Formulario from './componentes/Formulario/Formulario'
import Banner from './componentes/Banner/Banner'
import Time from './componentes/Time/Time'
import Rodape from './componentes/Rodape/Rodape'




function App() {

<<<<<<< HEAD
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

=======
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#D9F7E9' 
    }, 
    {
      nome: 'Front-End',
      cor: '#E8F8FF' 
    },
    {
      nome: 'Data Science',
      cor: '#F0F8E2' 
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8' 
    },
    {
      nome: 'UX e Design',
      cor: '#FAE9F5' 
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9' 
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF' 
    }, 
    
  ]);

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]
  const [colaboradores, setColaboradores] = useState(inicial)
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)

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

<<<<<<< HEAD
=======
function mudarCorDoTime(cor, nomeTime) {
    setTimes(times.map(time => {
        if(time.nome === nomeTime){
            time.cor = cor;
            
            
        }
        return time;
    }));
}

>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)
function deletarColaborador(colaborador) {
    console.log(`Deletar colaborador ${colaborador.nome}`)
}

//Formulário seta para o formulário usando props, o parametro aoCadastrar que chama a função que adiciona o colaborador na lista de colaboradores. A cada inclusão a lista é atualizada sendo que o formulario de app.js conectado com o componente formulário através de props sendo passado aoCadastrar
  return (
    <div className="App">
      <Banner />
      <Formulario 
          //times é o array de times que foi criado acima. É passado como props para o componente Formulário. No componente fomrulário está esperando um array times em props. 
          times={times.map(time => time.nome)} 
          //aoCadastrar é uma propos que chama uma função de adicionar o colaborador. 
          // Ao executar esta função vai adicionar o colaborador na lista de colaboradores.
          //Como é feita a ligação? O App.js passa a função adicionarColaborador para o Formulario.js via props, atravevés de aoCadastrar. O Formulario dentro de suas funcionalidades cria o objeto com os dados do usuário e chama props.aoCadastrar(objeto). O App.js recebe o objeto e atualiza o estado. aoCadastar fica conectardo ao formulário pela propss aoCadastrar. A medidada que o formulário atualiza o estado do objeto colaborador lá no fomrulário a função aqui no App.js que recebe um colaborador como parâmetro recebe este colaborador e faz suas funcionalidade. isto é administrado peloa React através do conceito de estado e props.
          aoCadastrar={adicionarColaborador}  
<<<<<<< HEAD
      />


      <section className='time'>
=======
          
      />


      <section className='times'>
        <h1>Minhar Organização</h1>
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)

          {times.map(time => <Time 
            key={time.nome} 
            //Aqui estou passando o time como props para o componente Time, que é um objeto com as propriedades nome, corPrimaria e corSecundaria
            time={time}
            //Abaixo estou passando os colaboradores mas filtrando por time, então no filter passamos uma arrow function com a variável colab como parâmetro (colab é uma representação de cada registro de colaboradores que o filter vai interagindo pois ele le todo o array colaboradores)que vai retornar os colaboradores filtrados com base no time
            colaboradoresTime={colaboradores.filter(colab => colab.time === time.nome)} 
            aoDeletar={deletarColaborador}
            //colaboradores={colaboradores.filter(colab => colab.time === time.nome)}
<<<<<<< HEAD
=======
            mudarCor={mudarCorDoTime}
>>>>>>> 2487590 (Curso Alura - React - Como os componentes funcionam. Aula 3. Como o react vê um componente. Criamos um input de cor para mudar a cor do Colaborador e do Time. Trabalhamos com o state para os Times, usamos as cores e o pacote Hex-to-RGBA para trabalhar com opacidade de cores e diferenciar a cor do time e colaborador.)
            
            />)}

      </section>
     <Rodape desenvolvedor={'Desenvolvido por Alura'}/>

    </div>
  );
}

export default App;
