import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@GithubExplorer:repositories',
        );

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            /* esse return serve para evitar q o código continue
            executando se cair nessa condição */
            return
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            // limpar o imput
            setNewRepo('');
            // limpar o erro após a busca de um repositório
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositório');
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            {/* se for truthy (!!) o inputError  */}
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome deo repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/*(condicional) se a variável inputError está
            preenchida eu coloco o <Error> na tela*/}
            { inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
}

export default Dashboard;