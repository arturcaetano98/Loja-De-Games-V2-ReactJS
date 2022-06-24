import React from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import "../assets/css/reset.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// O Link do Material UI possui conflito com o Link do React Router DOM.
// Use "component={RouterLink}" na tag link para evitar o conflito.
import { Link as RouterLink } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { busca } from "../api/api.js";

const theme = createTheme({
    palette: {
      primary: {
        light: "#2c2c2c",
        main: "#9c5cda",
        dark: "#6a2ea8",
        contrastText: "#ffffff",
      }
    },
    linkContato: "#ffffff",
    preco: "#ff0000",
    precoParcelado: "#2c2c2c",
    descricaoResumida: "#2c2c2c",
    tituloDescricao: "#6a2ea8"
  });


function Localizacao() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', mt: 15, mb: 25}}>
            <Typography variant="h3" gutterBottom component="div" align="center">
              Nosso Endereço
            </Typography>
            <Box>
              <Typography variant="body1" gutterBottom align="justify">
                Estamos localizados no coração da cidade de São Paulo...
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                Endereço: Rua Santa Ifigênia, 15 - República, São Paulo - SP, 01207-000
              </Typography>

              <Button variant="contained" size="large" style={theme.palette.primary}>
                <Link underline="none" color={theme.linkContato} href="https://www.google.com/maps/@-23.5414736,-46.637077,18z?hl=pt-BR" target="_blank">Clique aqui para conferir no mapa</Link>
              </Button> 
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Rodape></Rodape>
    </>
  );
};

export default Localizacao;
