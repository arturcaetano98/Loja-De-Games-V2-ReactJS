import React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Logo from "../../assets/img/logogen.png";
import "../../assets/css/rodape.css";

function Rodape(){
	return(
		<>
			<Container maxWidth="sm">
				<Typography align="center">
		            <p>Loja de Games - Consoles, Jogos e Acessorios...</p>
					<p>Rua Santa Ifigênia, 15 - Loja ABC / Centro - SP Tel: (11) 9856-3345</p>
					<p>Preços sujeitos a alterações sem aviso prévio.</p>
					<p>Para pagamentos no cartão de crédito, consulte as condições acima de 10x.</p>
					<p>Não aceitamos cheques.</p>
					<p>Não efetuamos vendas pelo site, apenas em nossa loja.</p>
					<p>© COPYRIGHT TODOS OS DIREITOS RESERVADOS</p>
				</Typography>
				<Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', mt: 2}}>
					<img src={Logo} className="imagem-logo"/>
				</Box>
        	</Container>
    	</>
			
	);
}

//src={`${logo}?w=161&fit=crop&auto=format`} srcSet={`${img}?w=161&fit=crop&auto=format&dpr=2 2x`}
export default Rodape;