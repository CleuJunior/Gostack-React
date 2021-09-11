import React, { useState } from 'react';
import './App.css';
import backgroundImg from './assets/background.jpg';
import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App(){

    // UseState retorna uma array com 2 posiçoes
    // 1. Variável com o seu valor inicial => ["Desenvolvimento de APP", "Front-end Web"]
    // 2. Funçao para atualizarmos esse valor 


    const [projects, setProjects] = useState(["Desenvolvimento de APP", "Front-end Web"]);

    function handleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />  

            <img width={350} src={backgroundImg} /> 

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    )
}

export default App;