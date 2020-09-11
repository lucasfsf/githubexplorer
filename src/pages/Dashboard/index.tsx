// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/19551442?s=460&v=4"
            alt="Lucas Fonseca"
          />
          <div>
            <strong>lucasfsf/nhenganduu</strong>
            <p>App to teach native brazilian language and culture.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/19551442?s=460&v=4"
            alt="Lucas Fonseca"
          />
          <div>
            <strong>lucasfsf/nhenganduu</strong>
            <p>App to teach native brazilian language and culture.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/19551442?s=460&v=4"
            alt="Lucas Fonseca"
          />
          <div>
            <strong>lucasfsf/nhenganduu</strong>
            <p>App to teach native brazilian language and culture.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
