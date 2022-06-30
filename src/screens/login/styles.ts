import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01ff5f',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    headerLogin: {
        flexDirection: "row",
        width: "100%",
    },
    logoutIcon: {
        width: "6.7%",
        height: 23,
        tintColor: '#000'
    },
    title: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: "39%",
        width: "90%"
    },
    imagemCliente: {
        width: 100,
        height: 100,
        marginTop: 40,
        alignSelf: "center"
    },
    textNomeCliente: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: "center"
    },
    senhaOlho: {
        flexDirection: "row",
        width: "100%",
    },
    textSenhaHearder: {
        color: '#1C1C1C',
        fontSize: 18,
        fontWeight: "300",
        marginTop: 30,
    },
    imagemOlhoSenha: {
        width: "9%",
        height: 23,
        marginLeft: '90%',
        marginTop: '-6.5%'
    },
    input: {
        padding: Platform.OS === 'ios' ? 15 : 10,
    },
    imagemLinha: {
        width: 350,
        alignSelf: "center",
    },
    esqueceuSenha: {
        textAlign: "right",
        marginTop: 33,
        marginBottom: 33,
        color: '#363636',
        fontSize: 12,
        fontWeight: 'bold'
    },
    botaoEntrar: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: "5%",
        alignItems: "flex-start",
        marginLeft: -15,
        marginRight: -13
    },
    textEntrar: {
        color: '#fff',
        marginLeft: "42%",
    },
    botoesContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    botaoAtalho: {
        backgroundColor: '#01ff5f',
        borderColor: '#696969',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        padding: "2%",
        alignItems: "center",
        marginTop: 180,
        width: 100,
    },
    iconeAtalho: {
        width: 23,
        height: 25,
    },
    botaoToken: {
        backgroundColor: '#01ff5f',
        borderColor: '#696969',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        padding: "2%",
        alignItems: "center",
        marginTop: 180,
        width: 100,
        margin: 25
    },
    iconeToken: {
        width: 35,
        height: 26,
    },
    botaoPix: {
        backgroundColor: '#01ff5f',
        borderColor: '#696969',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        padding: "2%",
        alignItems: "center",
        marginTop: 180,
        width: 100,
        
    },
    iconePix: {
        width: 15,
        height: 26,
    },
    textVersao: {
        textAlign: "right",
        color: '#696969'
    }
})