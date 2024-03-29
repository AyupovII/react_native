import { Image, StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import { ErrorNatification } from '../shared/ErrorNatification/ErrorNatification';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Colors, Gaps } from '../shared/token';
import { Link, router } from 'expo-router';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';

export default function App() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string | undefined>();
	const [password, setPassword] = useState<string | undefined>();
	const [{access_token, isLoading, error}, login] = useAtom(loginAtom)
	const submit = () => {
		if(!email) {
			 setLocalError("Не введен email")
			 return;
		}
		if (!password) {
			 setLocalError("Не введен пароль")
			 return;
		}
		login({email, password})
	};

	useEffect(() => {
		if(error) {
			setLocalError(error)
		}
	},[error])

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)')
		}
	},[access_token])

		///Vasia@pupkin.ru

	return (
		<View style={styles.container}>
			<ErrorNatification error={localError} />
			<View style={styles.content}>
				<Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={setEmail}/>
					<Input placeholder="Пароль" isPassword onChangeText={setPassword} />
					<Button text="Войти" onPress={submit} isLoading={isLoading} />
				</View>
				<CustomLink href={'/restore'} text='Восстановить пароль'/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.black,
	},
	content: {
		gap: Gaps.g50,
		alignItems: 'center',
	},
	form: {
		padding: 55,
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	logo: {
		width: 220,
	},
});
