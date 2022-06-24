import React from "react";

import "../../assets/css/reset.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

// O Link do Material UI possui conflito com o Link do React Router DOM.
// Use "component={RouterLink}" na tag link para evitar o conflito.
import { Link as RouterLink } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        light: "#2c2c2c",
        main: "#000000",
        dark: "#9c5cda",
        contrastText:  "#ffffff"
      }
    },
    fonte: "#ffffff"
  });

function Cabecalho(){

	<Button variant="contained" size="large" style={theme.palette.primary}>
                    <Link underline="none" color={theme.linkContato} href="mailto:arturcaetano@hotmail.com">Contato</Link>
                  </Button>


	
	return(
	<>
		<ThemeProvider theme={theme}>
		    <Box sx={{ flexGrow: 1 }}>
		      <AppBar position="static">
		        <Toolbar>
			        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
			       		<Link component={RouterLink} to="/" underline="none" color={theme.fonte}>Loja de Games</Link>
			        </Typography>
				        <Button variant="contained" size="large" style={theme.palette.primary}><Link component={RouterLink} to="/historia" underline="none" color={theme.fonte}>História</Link></Button>
				        <Button variant="contained" size="large" style={theme.palette.primary}><Link component={RouterLink} to="/contato" underline="none" color={theme.fonte}>Contato</Link></Button>
				        <Button variant="contained" size="large" style={theme.palette.primary}><Link component={RouterLink} to="/localizacao" underline="none" color={theme.fonte}>Localização</Link></Button>
				        <Button variant="contained" size="large" style={theme.palette.primary}><Link component={RouterLink} to="/informacoes" underline="none" color={theme.fonte}>Informações</Link></Button>
		        </Toolbar>
		      </AppBar>
		    </Box>
		</ThemeProvider>
	</>
	);
}

export default Cabecalho;