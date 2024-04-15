import { useMediaLibraryPermissions, PermissionStatus, MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import UploadIcon from "../../assets/icons/upload";
import { Colors, Fonts, Gaps, Raduis } from "../token";
import FormData from "form-data"
import axios, { AxiosError } from "axios";
import { FILE_API } from "../api";
import { UploadResponse } from "./ImageUploader.interface";

interface ImageUploaderProps {
    onUpload: (uri: string) => void
    onError: (error: string) => void
}

export function ImageUploader({ onUpload, onError }: ImageUploaderProps) {
    const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();

    const upload = async () => {
        const permissionGranted = await varifyMediaPermissions()
        if (!permissionGranted) {
            onError('Недостаточно прав')
            return;
        }
        const asset = await pickImage()
        if (!asset) {
            onError("Не выбрано изображение")
            return;
        }
        const uploadedUrl = await uploadToServer(asset.uri ?? '', asset.fileName ?? 'test')
        if (!uploadedUrl) {
            onError("Не удалось загрузить изображение")
            return
        }
        onUpload(uploadedUrl)
    }

    const varifyMediaPermissions = async () => {
        if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
            const res = await requestLibraryPermission()
            return res.granted
        }
        if (libraryPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert('Недостаточно прав для доступа к фото')
            return false
        }
        return true
    }

    const pickImage = async () => {

        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        })
        if (!result.assets) {
            return null
        }
        // await uploadToServer(result.assets[0].uri, result.assets[0].fileName ?? '')
        // onUpload(result.assets[0].uri)
        return result.assets[0]
    }

    const uploadToServer = async (uri: string, name: string) => {
        const formData = new FormData()
        formData.append("files", {
            uri,
            name,
            type: "image/jpeg"
        })
        try {
            console.log(FILE_API.uploadImage);
            const res = await axios.post(FILE_API.uploadImage, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            console.log(222222222, res)
            return res.data.urls.original
        }
        catch (e) {
            if (e instanceof AxiosError) {
                console.log(e)
            }
            return null
        }

    }

    return (
        <Pressable onPress={upload}>
            <View style={styles.container}>
                <UploadIcon />
                <Text style={styles.text}>Загрузить изображение</Text>
            </View>
        </Pressable>)
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g8,
        backgroundColor: Colors.violetDark,
        borderRadius: Raduis.r10,
        paddingHorizontal: 20,
        paddingVertical: 17,
        alignItems: 'center'
    },
    text: {
        fontSize: Fonts.f14,
        fontFamily: Fonts.regular,
        color: Colors.white
    }
})