import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';

const BASE_ACTION = 'LOGIN/';

export const CHANGE_VALUE = BASE_ACTION + 'CHANGE_VALUE';
export const CADASTRA_USUARIO_SUCESSO = BASE_ACTION + 'CADASTRA_USUARIO_SUCESSO';
export const CADASTRA_USUARIO_ERRO = BASE_ACTION + 'CADASTRA_USUARIO_ERRO';
export const AUTENTICAR_USUARIO = BASE_ACTION + 'AUTENTICAR_USUARIO';
export const LOGIN_SUCESSO = BASE_ACTION + 'LOGIN_SUCESSO';
export const LOGIN_ERROR = BASE_ACTION + 'LOGIN_ERROR';

export function changeValue(name, value) {
	console.log
	return {
		type: CHANGE_VALUE,
		name: name,
		payload: value
	};
}

export function cadastraUsuario(login) {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(login.email, login.senha)
			.then((user) => {
				let emailCrypt = b64.encode(login.email);
				alert(emailCrypt);
				firebase
					.database()
					.ref('/usuario/' + emailCrypt)
					.push({ nome: login.nome })
					.then((value) => cadastroUsuarioSucesso(login, dispatch));
			})
			.catch((error) => cadastroUsuarioErro(error, dispatch));
	};
}

function cadastroUsuarioSucesso(login, dispatch) {
	dispatch({
		type: CADASTRA_USUARIO_SUCESSO,
		payload: login
	});
	Actions.login();
	alert(login.nome + ' cadastrado com sucesso');
}

function cadastroUsuarioErro(error, dispatch) {
	dispatch({
		type: CADASTRA_USUARIO_ERRO
	});
	Actions.inicio();
}

export const autenticarUsuario = ({ email, senha }) => {
	return (dispatch) => {
		dispatch(setLoading(true));

		firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((value) => loginSucesso(dispatch))
			.catch((error) => loginErro(error, dispatch));

		dispatch(setLoading(false));
	};
};

const loginSucesso = (dispatch) => {
	dispatch({
		type: LOGIN_SUCESSO
	});
	Actions.inicio();
};

const loginErro = (error, dispatch) => {
	dispatch({
		type: LOGIN_ERROR,
		payload: error.message
	});
	Actions.inicio();
};
