import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../../shared/token";
import { CustomLink } from "../../../../shared/CustomLink/CustomLink";
import { CloseDrawer } from "../CloseDrawer/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { LogOutAtom } from "../../../auth/model/auth.state";
import { loadProfileAtom } from "../../../user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../user/ui/UserMenu/UserMenu";

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(LogOutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom)
    console.log(profile);
    useEffect(() => {
        loadProfile()
    }, [])
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <UserMenu user={profile?.profile?.profile} />
            </View>
            <View style={styles.footer}>
                <CustomLink text="Выход" href="/login" onPress={() => logout()} />
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/logo.png')}
                    resizeMode="contain" />
            </View>


        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        flex: 1,

    },
    footer: {
        gap: 50,
        marginBottom: 40,
        alignItems: 'center',
    },
    logo: {
        width: 160,
    }
})