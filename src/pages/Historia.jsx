import React from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import "../assets/css/reset.css";

function Historia() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', mt: 15, mb: 25}}>
          <Typography variant="h3" gutterBottom component="div" align="center">
            Nossa História
          </Typography>
          <Box>
            <Typography variant="body1" gutterBottom align="justify">
              A Loja de Games iniciou as atividades em agosto de 1995, com o objetivo de fornecer produtos de qualidade com ótimos preços e atendimento diferenciado. A loja possui ampla estrutura, o que facilita na prestação de serviços e atendimento ao cliente.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
              Na área comercial, os profissionais atuam a mais de 20 anos no ramo de games e acessórios. Durante esses anos traçou um caminho baseado na honestidade, respeito e dignidade, que é o ponto principal na relação com os parceiros e público.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
              Na área de atendimento, conta com uma equipe comprometida com a qualidade. Juntos estão prontos para atender as necessidades do cliente, sendo forte nesta área.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
              Seguindo este processo, a Loja de Games diversificou o seu portfólio de produtos passando a fornecer amplitude e aumentando sua equipe com a contratação de mais funcionários, consolidando assim a sua reputação de ser a melhor loja de games e acessórios da região.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Rodape></Rodape>
    </>
  );
};

export default Historia;
