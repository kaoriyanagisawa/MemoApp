import { View, Text, StyleSheet } from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Meom App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>


                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>



            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end',
    },
    headerInner: {
        alignItems:'center'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle: {
        margin: 8,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    }

})



export default Index
