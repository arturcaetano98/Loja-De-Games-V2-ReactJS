import React, { useState, useEffect } from "react";

import "../assets/css/reset.css";

import Cabecalho from "../components/cabecalho/index.jsx";
import Rodape from "../components/rodape/index.jsx";
import BarraLateral from "../components/barra-lateral/index.jsx";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


function Xbox() {

  const listaProdutoCategoria = [];

  // Indicar ao react qual é o estado inicial da aplicação com "useState"
  const [itemLista, setItemLista] = useState([]);

  // Usado na filtragem de preço
  const [preco, setPreco] = useState(0);

  // Indica o numero de itens por pagina.
  const [itemsPorPagina, setItemsPorPagina] = useState(6);

  // Indica em que pagina você está da exibição.
  const [paginaAtual, setPaginaAtual] = useState(0);

  const ordenacaoPreco = (event) => {

    setPreco(event.target.value);

    // Ordena por menor preço
    if(event.target.value === 10){
      itemLista.sort(function(a, b){
        if(a.precoProduto < b.precoProduto){
          return -1;
        }
        return 0;
      });
    }

    // Ordena por maior preço
    if(event.target.value === 20){
      itemLista.sort(function(a, b){
        if(a.precoProduto > b.precoProduto){
          return -1;
        }
        return 0;
      });
    }
  };

  // Usado para alterar a quantidade de itens exibidos por página.
  const alteraNumeroLista = (event) => {
    setItemsPorPagina(Number(event.target.value));
  }

    // Realiza a filtragem da lista completa adicionando apenas os items referentes a sua categoria.
  itemLista?.map((produto) => {
    if(produto?.categoriaProduto === 7){
      listaProdutoCategoria?.push(produto); // A filtragem funciona perfeitamente desse jeito.
    }
    return listaProdutoCategoria;
  });

  // Divide o total de itens pelo numero de paginas.
  const paginas = Math.ceil(listaProdutoCategoria?.length / itemsPorPagina); // Math.ceil arredonda o número para "cima"...

  // Gera o índice inicial da lista a ser exibida na página.
  const inicioIndice = paginaAtual * itemsPorPagina;

   // Gera o índice final da lista a ser exibida na página.
  const fimIndice = inicioIndice + itemsPorPagina;

  // Realiza a separação dos itens por página. Salva a separação do "itemLista" no "itensAtual";
  const itensAtual = listaProdutoCategoria?.slice(inicioIndice, fimIndice);

  // O "ConstroiLista" deve funcionar com o "itensAtual" ao invés do "itemLista".
  const ConstroiListaXbox = () => itensAtual?.map((itemDaLista, key) => {

    return(
      <>
      <ThemeProvider theme={theme}>
        <Grid item xs={2} sm={3} md={4}>
          <Card sx={{ maxWidth: 300 }} key={itemDaLista?.id}>
            <CardMedia
              component="img"
              height="140"
              image={itemDaLista?.imagemProduto}
              alt="#" />
            <Link component={RouterLink} underline="none" style={theme.palette.main} to={`/produto/${itemDaLista?.id}`}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {itemDaLista?.tituloProduto}
                </Typography>
                <Typography variant="body2" color={theme.descricaoResumida}>
                 {itemDaLista?.descricaoResumida1} - {itemDaLista?.descricaoResumida2} - {itemDaLista?.descricaoResumida3}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography sx={{ fontWeight: "bold" }} variant="h6" component="div" color={theme.palette.primary.dark}>
                  Preço: R${itemDaLista?.precoProduto}
                </Typography>
              </CardActions>
            </Link>
          </Card>
        </Grid>
      </ThemeProvider>
      </>
    )
  });

  // Cria o componente de paginação passando o número da página para o "setPaginaAtual".
  const PaginacaoListaXbox = () => {
    return(
      <>
        <Stack spacing={2}>
          <Pagination hidePrevButton hideNextButton count={paginas} onChange={(evento, pagina) => {
            setPaginaAtual(Number(pagina)-1); // O -1 serve para sincronizar o Id lista com Id da página.
          }}/>
        </Stack>
      </>
    );
  }

  useEffect(() => {
    // Deve ser colocado dentro do useEffect para evitar recursão durante as atualizações de pagina (estado da aplicação).
    // Isso travaria o navegador.
    busca("/lista", setItemLista);
  }, []); // Array de dependencia.

  return (
    <>
      <Cabecalho></Cabecalho>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', mt: 15, mb: 10 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <BarraLateral></BarraLateral>
                </Grid>
                <Grid item xs={9}>
                  <Box sx={{ Width: "100%", display: "inline", ml: "50%"}}>
                    <FormControl sx={{ minWidth: 180, mb: 5, ml: 5 }}>
                        <InputLabel id="demo-simple-select-label" >Exibição</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Ordenação"
                          onChange={alteraNumeroLista}
                          autoWidth="true">
                          <MenuItem value={6}>6 por página</MenuItem>
                          <MenuItem value={9}>9 por página</MenuItem>
                          <MenuItem value={12}>12 por página</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ minWidth: 120, mb: 5, ml: 5 }}>
                        <InputLabel id="demo-simple-select-label">Preço</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Preço"
                          onChange={ordenacaoPreco}
                          autoWidth="true">
                          <MenuItem value={10}>Menor Preço</MenuItem>
                          <MenuItem value={20}>Maior Preço</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  <Box sx={{ width: '100%', mb: 10 }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        {ConstroiListaXbox()}
                    </Grid>
                  </Box>
                </Grid>
                <Grid container justifyContent="center">
                   {PaginacaoListaXbox()}
                </Grid>
              </Grid>
          </Box>
        </Container>
      <Rodape></Rodape>
    </>
  );
};

export default Xbox;
