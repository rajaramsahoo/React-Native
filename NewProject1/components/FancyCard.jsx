import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <View style={styles.mainCard}>
                <Text style={styles.headingText}>Trending Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.cardImage} />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React Native</Text>
                    <Text style={styles.cradLabel}>Mobile App Interface</Text>
                    <Text style={styles.cardDes}>React Native is an open-source framework that uses JavaScript and React to build mobile apps for iOS and Android</Text>
                    <Text style={styles.cardFooter}>TOO MUCH IMPORTANT</Text>

                </View>
            </View>
            <View style={styles.mainCard}>
                <Text style={styles.headingText}>Trending Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.cardImage} />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React Native</Text>
                    <Text style={styles.cradLabel}>Mobile App Interface</Text>
                    <Text style={styles.cardDes}>React Native is an open-source framework that uses JavaScript and React to build mobile apps for iOS and Android</Text>
                    <Text style={styles.cardFooter}>TOO MUCH IMPORTANT</Text>

                </View>
            </View>
            <View style={styles.mainCard}>
                <Text style={styles.headingText}>Trending Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.cardImage} />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React Native</Text>
                    <Text style={styles.cradLabel}>Mobile App Interface</Text>
                    <Text style={styles.cardDes}>React Native is an open-source framework that uses JavaScript and React to build mobile apps for iOS and Android</Text>
                    <Text style={styles.cardFooter}>TOO MUCH IMPORTANT</Text>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 8,
        color: "white",
        paddingTop: 8
    },
    mainCard: {
        backgroundColor: "black",
        marginTop:8,
        borderRadius:15
    },
    card: {
        width: 350,
        height: 180,
        borderRadius: 8,
        marginHorizontal: 30,
        marginVertical: 15
    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 4,

    },
    cardImage: {
        height: 180,
        marginBottom: 8
    },
    cardBody: {
        marginLeft: 18
    },
    cardTitle: {
        color: "white",
        fontSize: 18,
        marginTop: 6,
        marginBottom: 12
    },
    cradLabel: {
        color: "white",
        marginTop: 1,
        marginBottom: 12
    },
    cardDes: {
        color: "white",
        marginTop: 6,
        marginBottom: 12
    }, cardFooter: {
        color: "green",
        marginTop: 6,
        marginBottom: 12
    }
})
