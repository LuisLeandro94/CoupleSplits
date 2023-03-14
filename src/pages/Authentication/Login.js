import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../config/firebaseConfig';

const LoginView = ({ user, setUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const Login = async () => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);

			setUser(result.user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				padding: 40,
				alignItems: 'center',
				width: '100%',
			}}>
			<TextInput
				style={{
					width: '100%',
					marginVertical: 10,
					backgroundColor: '#cecece',
				}}
				mode='flat'
				label='E-Mail'
				onChangeText={(text) => setEmail(text)}
				selectionColor='teal'
				activeUnderlineColor='teal'></TextInput>
			<TextInput
				style={{
					width: '100%',
					marginVertical: 10,
					backgroundColor: '#cecece',
				}}
				mode='flat'
				label='Password'
				onChangeText={(text) => setPassword(text)}
				selectionColor='teal'
				activeUnderlineColor='teal'
				autoCapitalize='none'></TextInput>
			<Button
				style={{ marginVertical: 20, borderRadius: 5, backgroundColor: 'teal' }}
				mode='contained'
				onPress={Login}>
				Sign In
			</Button>
		</View>
	);
};

export default LoginView;
