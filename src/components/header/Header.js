import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header as AppHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const leftButton = this.props.leftButtonProfile ? (
			<Button transparent onPress={() => Actions.profile()}>
				<Icon name="person" style={{ color: 'black' }} />
			</Button>
		) : (
			<Button transparent onPress={() => Actions.pop()}>
				<Icon name="arrow-back" style={{ color: 'black' }} />
			</Button>
		);
		return (
			<AppHeader style={{ backgroundColor: 'yellow' }}>
				<Left>{leftButton}</Left>
				<Body>
					<Title style={{ color: 'black' }}>{this.props.title}</Title>
				</Body>
				<Right>
					<Button onPress={() => Actions.drawerOpen()} transparent>
						<Icon name="menu" style={{ color: 'black' }} />
					</Button>
				</Right>
			</AppHeader>
		);
	}
}

export default Header;
