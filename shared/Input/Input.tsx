import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Raduis } from '../token';
import { useState } from 'react';
import EyeOpenedIcon from '../../assets/icons/eye-opened';
import EyeClosedIcon from '../../assets/icons/eye-closed';

export function Input({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable onPress={() => setIsPasswordVisible((state) => !state)} style={styles.eyeIcon}>
					{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: Colors.violetDark,
		borderRadius: Raduis.r10,
		height: 58,
		paddingHorizontal: 26,
		fontSize: 16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
});
