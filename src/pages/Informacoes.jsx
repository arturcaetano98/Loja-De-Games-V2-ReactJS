import React from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import "../assets/css/reset.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Informacoes() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', mt: 15, mb: 30}}>
          <Typography variant="h3" gutterBottom component="div" align="center">
            Informações
          </Typography>
          <Box>
            <Typography variant="body1" gutterBottom align="justify">
              Vendas somente na nossa loja fisica.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
             Parcelamento de produtos em até 10x sem juros. Acima de 10x, juros de 1.99% A.M.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
            Aceitamos cartões de crédito das seguintes bandeiras: Visa, MasterCard, Maestro, Diners Club, AmericanExpress, Elo e Hipercard.
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
              Não aceitamos cheques...
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
              Para realizar o pagamento com cartões de débito, consulte condições pelo televendas...
            </Typography>
          </Box>
        </Box>
      </Container>
      <Rodape></Rodape>
    </>
  );
};

export default Informacoes;
