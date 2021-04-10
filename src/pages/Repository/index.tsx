import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/50329855?v=4" alt="marlon" />
                    <div>
                        <strong>Marlon</strong>
                        <p>description do repository</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>54545</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>5445</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>545</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="dsdsd">
                    <div>
                        <strong>asdasd</strong>
                        <p>asdasdasd</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    )
}

export default Repository;
