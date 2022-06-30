import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
    },
    headerLogin: {
        flexDirection: "row",
        width: "100%",
    },
    textHeader: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: "23%",
        width: "90%"
    },
    botaoMenu: {
        width: 35,
        height: 20,
        marginLeft: 20
    },
    textContas: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: "23%",
        width: "90%"
    },
    containerContas: {
        paddingTop: 50,
        paddingBottom: 50,
        flexDirection: "row",
        width: "50%",
    },
    containerSaldoValor: {
        flex: 1,
        backgroundColor: '#363636',
        paddingLeft: 15,
        paddingTop: 15
    },
    textSaldoAtual: {
        color: '#A9A9A9',
        fontWeight: "bold"
    },
    textValorSaldo: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 30,
        paddingTop: 10
    },
    olhoSenha: {
        width: 30,
        height: 15,
        marginTop: "-5.1%",
        marginLeft: 350
    },
    containerExtrato: {
        flex: 6,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15
    },
    containerOpcoesExtrato: {
        flexDirection: "row",
        paddingTop: 12,
        paddingBottom: 8,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#A9A9A9'
    },
    containerOpcoesExtrato2: {
        width: "20%",
        borderBottomWidth: 3,
        marginTop: 30,
        marginBottom: -9,
        marginLeft: -115
    },
    textOpcoesExtrato: {
        fontSize: 10,
        fontWeight: "bold",
        marginRight: 72,
        marginLeft: 10
    },
    linhaExtrato: {
        width: "10%"
    },
    botoesContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    botaoDias: {
        backgroundColor: '#000',
        borderColor: '#696969',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        padding: 10,
        margin: 9
    },
    botaoDias1: {
        borderColor: '#696969',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        padding: 10,
        margin: 9
    },
    textDias: {
        color: '#fff'
    },
    iconCalendario: {
        width: 25,
        height: 28,
        marginLeft: 95,
    },
    containerCalendario: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        padding: "3%",
        borderBottomColor: '#A9A9A9'
    },
    textCalendario: {
        fontWeight: "bold",
        textAlign: "justify",
        marginTop: 5,
        marginLeft: 10,
    },
    containerExtratoEmergencia: {

        flexDirection: "row",
        padding: "3%",
        alignSelf: "center"
    },
    iconExtrato: {
        width: 30,
        height: 34
    },
    textExtratoEmergencia: {
        fontWeight: "bold",
        textAlign: "justify",
        marginTop: 5,
        marginLeft: 10,
    },
    containterMovimentacao: {
        flex: -1,
        marginLeft: -15,
        marginRight: -15,
        backgroundColor: '#EFEFEF',
    },
    textMovimentacao: {
        padding: 145,
        marginLeft: -125,
        marginRight: -125,
        marginTop: -100,
        textAlign: "center",
        fontSize: 20
    },
    imageRosto: {
        width: 60,
        height: 50,
        alignSelf: "center",
        marginTop: 50
    }

})