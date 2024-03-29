import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ErrorNatificationProps } from './ErrorNatification.props';
import { useEffect, useState } from 'react';
import { Colors, Fonts } from '../token';

export function ErrorNatification({ error }: ErrorNatificationProps) {
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        if (!error) {
            return;
        }
        setIsShow(true);
        const timerId = setTimeout(() => {
            setIsShow(false);
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [error]);

    if (!isShow) {
        return <></>;
    }
    return (
        <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: 14,
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.red,
        padding: 15,
    },
    errorText: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: 'center',
		fontFamily: 'FiraSans',
    },
});
