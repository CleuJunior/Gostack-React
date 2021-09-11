import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api.js'

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App(){



    // UseState retorna uma array com 2 posiçoes
    // 1. Variável com o seu valor inicial => ["Desenvolvimento de APP", "Front-end Web"]
    // 2. Funçao para atualizarmos esse valor 


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        })

    }, [projects]);

    async function handleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`);

        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "React API"
        })

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />  

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    )
}

export default App;