import React from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
//import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './components/header/Header';
import Login from './modules/login/Login';
// import LoginCadastro from './modules/login/LoginCadastro';
// import MenuDrawer from './menu/MenuDrawer';
// import DrawerContent from './components/drawer/DrawerContent';
// import Inicio from './modules/inicio/Inicio';
// import Profile from './modules/profile/Profile';
// import NovoGrupo from './modules/grupo/novoGrupo';

export default (props) => (
	<Router>
		<Stack key="root" navBar={Header}>
			<Scene key="login" component={Login} title="Login" hideNavBar />
			{/* <Scene key="loginCadastro" component={LoginCadastro} title="Cadastrar Usuário" hideNavBar />
			<Drawer
				hideNavBar
				key="drawer"
				contentComponent={DrawerContent}
				drawerIcon={<Icon name="bars" size={30} />}
				drawerWidth={300}
			>
				<Scene key="inicio" component={Inicio} title="Início" />
				<Scene key="novoGrupo" component={NovoGrupo} title="Novo Grupo" hideNavBar />
				<Scene key="profile" component={Profile} title="Perfil" />
			</Drawer> */}
		</Stack>
	</Router>
);
