import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
    const [loaded, error] = useFonts({
        'FiraSans-Regular': require("../assets/fonts/FiraSans-Regular.ttf"),
        "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf")
    })
    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error])
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null
    }
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    statusBarColor: Colors.black,
                    contentStyle:
                    {
                        backgroundColor: Colors.black,
                    },
                    headerShown: false
                }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="restore" options={{presentation: 'modal'}}/>
            </Stack>
        </SafeAreaProvider>

    )
}