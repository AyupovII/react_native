import {
    Pressable,
    PressableProps,
    StyleSheet,
    View,
} from 'react-native';
import MenuIcon from '../../../../assets/icons/menu';
import { useState } from 'react';
import { Colors } from '../../../../shared/token';
import CloseIcon from '../../../../assets/icons/close';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
    return (
        <Pressable
            onPress={() => navigation.closeDrawer()}
        >
            <View style={styles.button}>
                <CloseIcon />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        top: 20,
    },
});
