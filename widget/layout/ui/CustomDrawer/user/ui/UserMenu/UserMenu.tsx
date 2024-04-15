import { StyleSheet, View, Text } from "react-native"
import { User } from "../../../../../../../entities/user/model/user.model"
import { Colors, Gaps } from "../../../../../../../shared/token"
import { Avatar } from "../../../../../../../entities/user/ui/Avatar/Avatar"

export function UserMenu({ user }: { user: User }) {
    console.log(2222,user?.photo)
    if (!user) {
        return null
    }
    return (
        <View style={styles.container}>
            <Avatar image={user.photo ?? null} />
            <Text style={styles.name}>{user.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
        marginBottom: 40
    },
    name: {
        color: Colors.white

    }
})