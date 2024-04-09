import { StyleSheet, View, Image, Text } from "react-native"
import { User } from "../../model/user.model"

export function UserMenu({ user }: { user: User }) {
    console.log(user?.photo)
    if (!user) {
        return null
    }
    return (
        <View style={styles.container}>
            {user.photo ? (
                <Image style={styles.image} source={{ uri: user.photo }} />
            ) : (
                <Image style={styles.image} source={require('../../../../assets/images/avatar.png')} />
            )
            }
            <Text style={styles.name}>{user.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    name: {

    }
})