import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexBox() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Card</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.cardText}>RED</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.cardText}>BLUE</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.cardText}>GREEN</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    container: {
        flexDirection: "row", // Arrange cards in a row
        justifyContent: "space-around", // Distribute space evenly
        alignItems: "center", // Center items vertically
    },
    card: {
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
    },
    cardOne: {
        backgroundColor: "red",
    },
    cardTwo: {
        backgroundColor: "blue",
    },
    cardThree: {
        backgroundColor: "green",
    },
    cardText: {
        color: "white",
        fontWeight: "bold",
    },
});
