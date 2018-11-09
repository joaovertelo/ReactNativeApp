import React, { Component } from 'react';

import { StyleSheet, View, Image, StatusBar, TouchableHighlight, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Icon } from 'react-native-elements';
import { RkTextInput, RkButton } from 'react-native-ui-kitten';

import Spinner from 'react-native-loading-spinner-overlay';

// import { changeValue, autenticarUsuario } from './loginActions';

class Login extends Component {
	constructor(props) {
		super(props);
		this._autenticarUsuario = this._autenticarUsuario.bind(this);
		this.state = {};
	}

	componentDidMount() {
		//this._autenticarUsuario();
	}

	_autenticarUsuario() {
		let { email, senha } = this.props.login;
		email = 'joaovertelo@gmail.com';
		senha = '123456';
		this.props.autenticarUsuario({ email, senha });
	}

	render() {
		return (
			<View>
				<Text>ola</Text>
			</View>
		);
	}
}

export default Login;

const styles = StyleSheet.create({
	scrollView: {
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		padding: 20,
		justifyContent: 'center',
		alignContent: 'center'
	},
	logo: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10
	},
	form: {
		flex: 5
	},
	bottom: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row'
	},
	viewBotoes: {
		flexDirection: 'row'
	},
	viewBotoesSociais: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	botoes: {
		flex: 1,
		height: 60
	},
	botoesSocial: {
		width: 70
	},
	msgErro: {
		color: 'red',
		paddingBottom: 10
	}
});
