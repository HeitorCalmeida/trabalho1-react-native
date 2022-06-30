import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";

import icon from "../../assets/icons/icon.jpg"
import OlhoSenha from "../../assets/icons/OlhoSenha.png"
import NomeCliente from "../../assets/images/NomeCliente.png"
import Line from "../../assets/images/Line.png"
import Atalho from "../../assets/icons/Atalho.png"
import Token from "../../assets/icons/Token.png"
import Pix from "../../assets/icons/Pix.png"

export const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerLogin}>
                <TouchableOpacity>

                </TouchableOpacity>
                <Image source={icon} style={styles.logoutIcon} />
                <Text style={styles.title}>next</Text>
            </View>

            <View>

                <Image source={NomeCliente} style={styles.imagemCliente} />
                <Text style={styles.textNomeCliente}>CLIENTE SOBRENOME</Text>

                <View>
                    <Text style={styles.textSenhaHearder}>Senha</Text>
                    <TouchableOpacity>
                        <Image source={OlhoSenha} style={styles.imagemOlhoSenha} />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                />
                <Image source={Line} style={styles.imagemLinha} />

                <TouchableOpacity>
                    <Text style={styles.esqueceuSenha}>{'>'} Esqueceu sua senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => []}>
                    <View style={styles.botaoEntrar}>
                        <Text style={styles.textEntrar}>
                            ENTRAR
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View>
                <View style={styles.botoesContainer}>
                    <TouchableOpacity>
                        <View style={styles.botaoAtalho}>
                            <Image source={Atalho} style={styles.iconeAtalho} />
                            <Text>Atalhos</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.botaoToken}>
                            <Image source={Token} style={styles.iconeToken} />
                            <Text>Token</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.botaoPix}>
                            <Image source={Pix} style={styles.iconePix} />
                            <Text>Pix</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textVersao}>Versão 0.9</Text>
            </View>
        </View>
    )
}