import React, { Component } from 'react';

import { StyleSheet, View, Image, StatusBar, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, SocialIcon, Button } from 'react-native-elements';
import { Kohana } from 'react-native-textinput-effects';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Spinner from 'react-native-loading-spinner-overlay';

import { changeValue, autenticarUsuario } from './loginActions';

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
		const logo = require('../../img/logo.png');
		const { email, senha } = this.props.login;
		let loginError = '';
		return (
			<View style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<StatusBar backgroundColor="green" barStyle="light-content" />
					<View style={styles.logo}>
						<Image source={logo} style={{ width: 200, height: 200 }} />
					</View>
					<View style={styles.form}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-around'
							}}
						>
							<SocialIcon style={{ flex: 1 }} title="Facebook" button type="facebook" />
							<SocialIcon
								style={{ flex: 1 }}
								title="Instagram"
								button
								type="instagram"
								underlayColor="gray"
							/>
						</View>
						<View style={{ flex: 2, flexDirection: 'column', paddingVertical: 10 }}>
							<Kohana
								value={email}
								onChangeText={(value) => this.props.changeValue('email', value)}
								style={{
									backgroundColor: '#f9f5ed',
									marginBottom: 10,
									borderColor: 'transparent',
									borderWidth: 0,
									borderRadius: 20
								}}
								label={'Login'}
								iconClass={FontAwesome}
								iconName={'user'}
								labelStyle={{ color: 'black' }}
								useNativeDriver
							/>
							<Kohana
								value={senha}
								onChangeText={(value) => this.props.changeValue('senha', value)}
								style={{
									backgroundColor: '#f9f5ed',
									borderColor: 'transparent',
									borderWidth: 0,
									borderRadius: 20
								}}
								label={'Senha'}
								iconClass={FontAwesome}
								iconName={'key'}
								labelStyle={{ color: 'black' }}
								useNativeDriver
								secureTextEntry
							/>
							{/* {loginError ? <Text style={styles.msgErro}>{loginError}</Text> : undefined} */}
						</View>
					</View>
					<View>
						<Button
							title="Entrar"
							onPress={() => alert(email)}
							buttonStyle={{
								height: 60,
								borderColor: 'transparent',
								borderWidth: 0,
								borderRadius: 20
							}}
						/>

						{/* <Spinner visible={this.props.isLoading} size="large" animation="slide" /> */}
					</View>
					
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({ login: state.loginReducer });

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			changeValue,
			autenticarUsuario
		},
		dispatch
	);
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	scrollView: {
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: 'yellow',
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	logo: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10
	},
	form: {
		flex: 2
	},
	bottom: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row'
	},
	viewBotoes: {
		height: 60,
		flex: 1,
		backgroundColor: 'black'
	},
	msgErro: {
		color: 'red',
		paddingBottom: 10
	}
});
