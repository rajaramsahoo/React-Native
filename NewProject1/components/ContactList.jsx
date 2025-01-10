import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const demoArray = [
        {
            uid: "1",
            name: "Alice Johnson",
            status: "Active",
            imageUrl: "https://via.placeholder.com/150/0000FF/808080?Text=Alice",
        },
        {
            uid: "2",
            name: "Bob Smith",
            status: "Inactive",
            imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Bob",
        },
        {
            uid: "3",
            name: "Charlie Brown",
            status: "Pending",
            imageUrl: "https://via.placeholder.com/150/FFFF00/000000?Text=Charlie",
        },
        {
            uid: "4",
            name: "Diana Prince",
            status: "Active",
            imageUrl: "https://via.placeholder.com/150/00FF00/000000?Text=Diana",
        },
        {
            uid: "5",
            name: "Edward Cullen",
            status: "Blocked",
            imageUrl: "https://via.placeholder.com/150/FF69B4/000000?Text=Edward",
        },
        {
            uid: "6",
            name: "Fiona Gallagher",
            status: "Pending",
            imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?Text=Fiona",
        },
        {
            uid: "7",
            name: "George Bailey",
            status: "Inactive",
            imageUrl: "https://via.placeholder.com/150/008080/FFFFFF?Text=George",
        },
        {
            uid: "8",
            name: "Hannah Montana",
            status: "Active",
            imageUrl: "https://via.placeholder.com/150/FFA500/000000?Text=Hannah",
        },
        {
            uid: "9",
            name: "Ian Somerhalder",
            status: "Blocked",
            imageUrl: "https://via.placeholder.com/150/4B0082/FFFFFF?Text=Ian",
        },
        {
            uid: "10",
            name: "Jessica Pearson",
            status: "Active",
            imageUrl: "https://via.placeholder.com/150/00CED1/000000?Text=Jessica",
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {
                    demoArray.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={styles.userCard} >
                            <Image
                                style={styles.userImg}
                                source={{
                                    uri: imageUrl
                                }} />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>

                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
        color: "#333945",
        marginBottom:10
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 8
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        paddingTop: 8,
        backgroundColor: "#7B8788"
    },
    userImg: {
        height: 80,
        width: 80,
        marginBottom: 8,
        borderRadius: 80 / 2,
        marginRight: 18,

    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#EAF0F1"
    },
    userStatus: {
        fontSize: 16,

    }
})