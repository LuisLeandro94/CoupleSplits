import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { auth } from '../../config/firebaseConfig';
import LoginView from './Login';

const Authentication = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	const MockLogin = () => {
		signInWithEmailAndPassword(auth, 'teste@gmail.com', 'teste123')
			.then((userCredential) => {
				setUser(userCredential.user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (utilizador) => {
			if (utilizador) {
				const uid = utilizador.uid;
				setUser(utilizador);
				// ...
			} else {
				setUser(null);
			}
		});
	}, []);

	if (!user) {
		return (
			// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			// 	<Text onPress={MockLogin}>Login</Text>
			// </View>
			<LoginView setUser={setUser} user={user} />
		);
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{console.log(user)}
			<Text>Welcome {user.email}</Text>
		</View>
	);
};

export default Authentication;
