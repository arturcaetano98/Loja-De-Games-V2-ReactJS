import React, { useState, useEffect } from "react";
import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";

import "../assets/css/reset.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

// Aqui será feita a conexão com a API para exibir os projetos do Portfolio.
// O Link do Material UI possui conflito com o Link do React Router DOM.
// Use "component={RouterLink}" na tag link para evitar o conflito.
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";

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


function Produto() {

  let { id } = useParams(); // Mesmo nome chamado dentro do "/produto:id".

  // Indicar ao react qual é o estado inicial da aplicação com "useState"
  const [produto, setProduto] = useState([]);


  let LinkProduto = "/lista/"+id;
  let LinkVideo = produto?.linkVideoProduto;

  useEffect(() => {
    // Deve ser colocado dentro do useEffect para evitar recursão durante as atualizações de pagina (estado da aplicação).
    // Isso travaria o navegador.
    busca(LinkProduto, setProduto);
  }, []); // Array de dependencia.



  const exibeProduto = () => {
    return(
      <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', mt: 15, mb: 15}}>
            <Typography variant="h2" gutterBottom component="div" align="center">
              {produto?.tituloProduto}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img width="480" height="360" src={produto?.imagemProduto} />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom align="justify">
                  Preço: 
                  <Typography sx={{ fontWeight: "bold" }} variant="h4" gutterBottom align="justify"  color={theme.preco}>
                  R$ {produto?.precoProduto}
                  </Typography>
                </Typography>
                <Typography variant="h6" gutterBottom align="justify" color={theme.precoParcelado}>
                  Ou Parcelado em até 10x de R$ {produto?.precoParcelaProduto} Sem Juros
                </Typography>
                <Typography variant="body1" gutterBottom align="justify" color={theme.descricaoResumida}>
                  {produto?.descricaoResumida1}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify" color={theme.descricaoResumida}>
                  {produto?.descricaoResumida2}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify" color={theme.descricaoResumida}>
                  {produto?.descricaoResumida3}
                </Typography>
                <Button variant="contained" size="large" style={theme.palette.primary}>
                  <Link component={RouterLink} underline="none" color={theme.linkContato} to="/contato">Contato</Link>
                </Button>
              </Grid>
            </Grid>
            <Box>
              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                {produto?.tituloDescricao1}
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                {produto?.descricaoProduto1}
              </Typography>

              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                {produto?.tituloDescricao2}
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                {produto?.descricaoProduto2}
              </Typography>

              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                {produto?.tituloDescricao3}
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                {produto?.descricaoProduto3}
              </Typography>

              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                {produto?.tituloDescricao4}
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                {produto?.descricaoProduto4}
              </Typography>

              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                Especificações Técnicas:
              </Typography>
              <Typography variant="body1" gutterBottom align="justify">
                <p>{produto?.especificacao1}</p>
                <p>{produto?.especificacao2}</p>
                <p>{produto?.especificacao3}</p>
                <p>{produto?.especificacao4}</p>
                <p>{produto?.especificacao5}</p>
              </Typography>

              <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom component="div" align="justify" color={theme.tituloDescricao}>
                Vídeo:
              </Typography>
              <Typography variant="body1" gutterBottom align="center">
                <iframe class="video-anuncio" width="560" height="315" src={LinkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Typography>
              
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
      </>
    );
  };

  return (
    <>
      <Cabecalho></Cabecalho>
      {exibeProduto()}
      <Rodape></Rodape>
    </>
  );
};

export default Produto;


