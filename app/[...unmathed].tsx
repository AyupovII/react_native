import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import { CustomLink } from "../shared/CustomLink/CustomLink";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts, Gaps } from "../shared/token";

export default function Unmatched() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/images/unmatched.png')} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>Ооо... что-то пошло не так. Попробуйте вернуться на главный экран</Text>
                <CustomLink href={'/'} text='На главный экран' />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 55,
    },
    content: {
        alignItems: 'center',
        gap: Gaps.g50
    },
    image: {
        width: 204,
        height: 282,
    },
    text:{
        color: Colors.white,
        fontSize: Fonts.f18,
        textAlign: 'center',
        fontFamily: Fonts.regular,
    }
})