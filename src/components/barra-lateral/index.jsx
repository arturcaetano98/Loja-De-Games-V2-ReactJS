import React from "react";

import "../../assets/css/reset.css";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';
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
        dark: "#000000",
        contrastText: "#ffffff",
      }
    }
  });

function BarraLateral(){
	return (
	<>
	<ThemeProvider theme={theme}>
	    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
	      <nav aria-label="main folders">
	        <List>
	        	<ListItem disablePadding>
		           <ListItemButton>
		              <Link component={RouterLink} underline="none" to="/ps4"><Typography>Console Playstation 4</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/ps4/j"><Typography>Jogos Playstation 4</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/ps4/a"><Typography>Acessórios Playstation 4</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		           <ListItemButton>
		              <Link component={RouterLink} underline="none" to="/switch"><Typography>Console Switch</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/switch/j"><Typography>Jogos Switch</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/switch/a"><Typography>Acessórios Switch</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		           <ListItemButton>
		              <Link component={RouterLink} underline="none" to="/xbox"><Typography>Console Xbox One</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/xbox/j"><Typography>Jogos Xbox One</Typography></Link>
		            </ListItemButton>
		          </ListItem>

		          <ListItem disablePadding>
		            <ListItemButton>
		            	<Link component={RouterLink} underline="none" to="/xbox/a"><Typography>Acessórios Xbox One</Typography></Link>
		            </ListItemButton>
		          </ListItem>
	        </List>
	      </nav>
	    </Box>
	</ThemeProvider>
	</>
  );

}

export default BarraLateral;