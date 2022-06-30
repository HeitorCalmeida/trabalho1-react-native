import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";

import BotaoMenu from "../../assets/icons/BotaoMenu.png"
import OlhoSenhaSaldo from "../../assets/icons/OlhoSenhaSaldo.png"
import Calendario from "../../assets/icons/Calendario.png"
import NotaExtrato from "../../assets/icons/NotaExtrato.png"
import Rosto from "../../assets/icons/Rosto.png"

export const Saldo = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLogin}>
                <Image source={BotaoMenu} style={styles.botaoMenu} />
                <Text style={styles.textHeader}>SALDO EXTRATO</Text>
            </View>
            <View style={styles.containerContas}>
                <Text style={styles.textContas}>CONTA-CORRENTE</Text>
                <Text style={styles.textContas}>POUPANÇA</Text>
            </View>
            <View style={styles.containerSaldoValor}>
                <Text style={styles.textSaldoAtual}>SALDO ATUAL</Text>
                <View>
                    <Text style={styles.textValorSaldo}>R$ ••••••</Text>
                    <TouchableOpacity>
                        <Image source={OlhoSenhaSaldo} style={styles.olhoSenha} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerExtrato}>
                <View style={styles.containerOpcoesExtrato}>
                    <Text style={styles.textOpcoesExtrato}>TODAS</Text>
                    <View style={styles.containerOpcoesExtrato2}>
                    </View>
                    <Text style={styles.textOpcoesExtrato}>ENTRADA</Text>
                    <Text style={styles.textOpcoesExtrato}>SAÍDA</Text>
                    <Text style={styles.textOpcoesExtrato}>FUTUROS</Text>
                </View>
                <View style={styles.botoesContainer}>
                    <View style={styles.botaoDias}>
                        <Text style={styles.textDias}>7 DIAS</Text>
                    </View>
                    <View style={styles.botaoDias1}>
                        <Text>15 DIAS</Text>
                    </View>
                    <View style={styles.botaoDias1}>
                        <Text>30 DIAS</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerCalendario}>
                        <Image source={Calendario} style={styles.iconCalendario} />
                        <Text style={styles.textCalendario}>OUTROS PERIODOS</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerExtratoEmergencia}>
                        <Image source={NotaExtrato} style={styles.iconExtrato}/>
                        <Text style={styles.textExtratoEmergencia}>VER EXTRATO DA GRANA DE EMERGÊNCIA</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containterMovimentacao}>
                        <Image source={Rosto} style={styles.imageRosto}/>
                        <Text style={styles.textMovimentacao}>Não tem movimentações na sua conta nesse período.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}