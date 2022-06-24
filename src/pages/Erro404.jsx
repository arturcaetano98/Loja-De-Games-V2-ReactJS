import React from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import "../assets/css/reset.css";

function Erro404() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', mt: 15, mb: 25}}>
          <Typography variant="h3" gutterBottom component="div" align="center">
            Erro 404
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Erro404;
