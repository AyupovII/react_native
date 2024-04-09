import {
    Pressable,
    PressableProps,
    StyleSheet,
    View,
} from 'react-native';
import MenuIcon from '../../../../assets/icons/menu';
import { useState } from 'react';
import { Colors } from '../../../../shared/token';

export function MenuButton({ navigation, ...props }: PressableProps & { navigation: any }) {
    const [cliked, setCliked] = useState<boolean>(false);
    return (
        <Pressable 
        {...props} 
        onPressIn={() => setCliked(true)} 
        onPressOut={() => setCliked(false)}
        onPress={() => navigation.toggleDrawer()}
        >
            <View style={{ ...styles.button, backgroundColor: cliked ? Colors.violetDark : Colors.blackLight }}>
                <MenuIcon />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
    },
});
