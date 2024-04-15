import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { useSetAtom, useAtom } from "jotai";
import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CoursesIcon from "../../../../assets/menu/courses";
import ProfileIcon from "../../../../assets/menu/profile";
import { LogOutAtom } from "../../../../entities/auth/model/auth.state";
import { CloseDrawer } from "../../../../entities/layout/ui/CloseDrawer/CloseDrawer";
import { MenuItem } from "../../../../entities/layout/ui/MenuItem/MenuItem";
import { loadProfileAtom } from "../../../../entities/user/model/user.state";
import { UserMenu } from "./user/ui/UserMenu/UserMenu";
import { CustomLink } from "../../../../shared/CustomLink/CustomLink";

const MENU = [
    {
        path: 'profile',
        text: 'Профиль',
        icon: <ProfileIcon />
    },
    {
        path: 'index',
        text: 'Курсы',
        icon: <CoursesIcon />
    },

]
export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(LogOutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom)
    console.log(111111, profile);
    useEffect(() => {
        loadProfile()
    }, [])
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <UserMenu user={profile?.profile?.profile ?? profile?.profile} />
                {
                    MENU.map((item) => (
                        <MenuItem
                            key={item.path}
                            {...item}
                            drawer={props}
                        />
                    ))
                }
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