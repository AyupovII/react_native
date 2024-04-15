import { DrawerContentComponentProps, DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types"
import React from "react"
import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native"
import { Colors, Fonts, Gaps } from "../../../../shared/token"

interface MenuItemProps {
    drawer: DrawerContentComponentProps
    icon: React.ReactNode
    text: string
    path: string
}
export function MenuItem({ drawer, icon, text, path, ...props }: MenuItemProps & PressableProps) {
    const [clicked, setCliked] = React.useState<boolean>(false)
    const isActive = drawer.state.routes[drawer.state.index].name === path;
    return (
        <Pressable
            {...props}
            onPress={() => drawer.navigation.navigate(path)}
            onPressIn={() => setCliked(true)}
            onPressOut={() => setCliked(false)}
        >
            <View style={{ 
                ...styles.menu, 
                backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
                borderColor: isActive ? Colors.primary : Colors.black
                }}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: Gaps.g20,
        alignItems: 'center',
        borderRightWidth: 5,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    }
})