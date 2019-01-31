import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Modal,
    ScrollView
} from 'react-native';
import style from '../../styles/style';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../components/Header/Header';

export default class SelectDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [

                { id: "1", name: "Dr.Sudesh Agravat", position: "Psychiatrist", image: "https://bootdey.com/img/Content/avatar/avatar1.png", about1: "Colombo General Hospital", about2:"Experience - 5 years", about3:"Contact - 0715645234" },
                { id: "2", name: "Dr.Mahesh Silva", position: "Physician", image: "https://bootdey.com/img/Content/avatar/avatar6.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "3", name: "Dr.Anoma Perera", position: "Physician", image: "https://bootdey.com/img/Content/avatar/avatar5.png", about: `Lorem </br> ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.` },
                { id: "4", name: "Dr.Rukhaiya Buhari", position: "VOG", image: "https://bootdey.com/img/Content/avatar/avatar3.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "5", name: "Dr.Dilan Manathunga", position: "Cardiologist", image: "https://bootdey.com/img/Content/avatar/avatar2.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "6", name: "Dr.Kasun Jayaweera", position: "Dermatologist", image: "https://bootdey.com/img/Content/avatar/avatar1.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "6", name: "Dr.Sanath De Silva", position: "Eye Specialist", image: "https://bootdey.com/img/Content/avatar/avatar4.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "7", name: "Dr.Janaka Kuruwita", position: "Dentist", image: "https://bootdey.com/img/Content/avatar/avatar7.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
            ]
        };
    }

    clickEventListener = (item) => {
        this.setState({ userSelected: item }, () => {
            this.setModalVisible(true);
        });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    pickdateHandler = () => {
        this.props.navigation.navigate('PickDateApp')
    }

    render() {
        const { parent, headText, drpView, drpDown, buttonStyle, signupTxt, iconView, iconimg } = style
        return (


            <View style={styles.container}>

                <CustomHeader
                    title="Select Doctor"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <FlatList
                    style={styles.userList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.position}>{item.position}</Text>

                                    {/* <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>*/}
                                    <TouchableOpacity style={styles.followButton} >
                                        <Text style={styles.followButtonText}>select</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <ScrollView contentContainerStyle={styles.modalInfo}>
                                    <Image style={styles.image} source={{ uri: this.state.userSelected.image }} />
                                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                                    <Text style={styles.position}>{this.state.userSelected.position}</Text>
                                    <Text style={styles.about}>{this.state.userSelected.about1}</Text>
                                    <Text style={styles.about}>{this.state.userSelected.about2}</Text>

                                    <Text style={styles.about}>{this.state.userSelected.about3}</Text>
                                </ScrollView>
                            </View>
                            <View style={styles.popupButtons}>
                                <TouchableOpacity onPress={() => { this.setModalVisible(false) }} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* <View style={iconView}> */}
                <TouchableOpacity onPress={this.pickdateHandler}>
                    <Icon name='md-arrow-dropright-circle' size={40} style={iconimg} />
                </TouchableOpacity>
                {/* </View> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    header: {
        backgroundColor: "#00CED1",
        height: 200
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
        flex: 1,
    },
    detailContent: {
        top: 80,
        height: 500,
        width: Dimensions.get('screen').width - 90,
        marginHorizontal: 30,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff"
    },
    userList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },



    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row'
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    about: {
        marginHorizontal: 10
    },

    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height: 250,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}); 
