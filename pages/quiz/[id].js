import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

QuizDaGaleraPage.propTypes = {
  dbExterno: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const [projectName, gitHubUser] = id.split('___');

  const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
