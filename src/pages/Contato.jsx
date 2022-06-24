import React from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import "../assets/css/reset.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
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

function Contato() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', mt: 15, mb: 25}}>
            <Typography variant="h3" gutterBottom component="div" align="center">
              Contato
            </Typography>
            <Box>
              <Typography variant="body1" gutterBottom align="justify">
                Número televendas: (11) 9856-3345
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
               Horário de atendimento por televendas: De segunda à sexta das 9h00 às 18h00. Aos sábados e feriados : 11h00 as 16h30.
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
              Ao custo de uma ligação para São Paulo. Cobranças adicionais podem ser geradas...
              </Typography>
              <Typography variant="body1" gutterBottom align="center">
                <Box sx={{ fontWeight: 'bold', mt: 5}}>Entre em contato conosco:</Box>
              </Typography>
            </Box>
            <Container maxWidth="sm">
              <Box component="form" autoComplete="off" sx={{'& .MuiTextField-root': { m: 1, width: '100%' } }}>
                <div>
                  <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  />
                  <TextField
                  required
                  id="outlined-required"
                  label="Assunto"
                  />
                  <TextField
                  required
                  id="outlined-textarea"
                  label="Texto"
                  placeholder="Digite seu texto de email"
                  multiline
                  />
                  <Button variant="contained" size="large" style={theme.palette.primary}>
                    <Link underline="none" color={theme.linkContato} href="mailto:arturcaetano@hotmail.com">Contato</Link>
                  </Button>
                </div>
              </Box>
            </Container>
          </Box>
        </Container>
      </ThemeProvider>
      <Rodape></Rodape>
    </>
  );
};

export default Contato;
