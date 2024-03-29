import { useAtomValue, useSetAtom } from "jotai";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { LogOutAtom, authAtom } from "../../entities/auth/model/auth.state";
import { router, useRootNavigationState } from "expo-router";
import { Button } from "../../shared/Button/Button";
export default function MyCourse() {
    const logOut = useSetAtom(LogOutAtom);

    return (
        <View>
            <Text style={{ color: 'red' }}>index</Text>
            <Button text="Выйти" onPress={logOut} />
        </View>
    );
}