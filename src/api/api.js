// Tudo que tem contato com relação ao servidor.

import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:5000"
});

// Busca generica. Fica mais especifica dentro do componente.
// Dados assincronos.
export const busca = async(url, setDados) => {
	const resposta = await api.get(url);
	setDados(resposta.data);
}