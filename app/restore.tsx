import { Image, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';
import { ErrorNatification } from '../shared/ErrorNatification/ErrorNatification';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Colors, Gaps } from '../shared/token';

export default function Restore() {
	const [error, setError] = useState<string | undefined>();
	const alert = () => {
		setError('Error');
	};
	return (
		<View style={styles.container}>
			<Text>Restore</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
	},

});
