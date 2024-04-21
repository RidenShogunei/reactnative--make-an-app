import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen() {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const getDataAndVerify = async () => {
      const value = await AsyncStorage.getItem("@looked_key");

      if (value == "false") {
        setShow(false);
      }
    };

    getDataAndVerify();
  }, [navigation]);

  const storeData = async (value) => {
    setShow(false);
    try {
      await AsyncStorage.setItem("@looked_key", value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* 使用Modal组件创建卡片样式的提示框 */}
      <Modal visible={show} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text>你好,欢迎来到本软件,需要说明的有以下几点:</Text>
          <Text>1.本软件的文件系统是和本人的网站联动的,同时账号系统也是</Text>
          <Text>2.本人的网站地址是:https://chenjinxu.top</Text>
          <Text>3.本提示只会在您第一次打开本软件时自动展示</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="我已看过"
              onPress={() => {
                storeData("false");
              }}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.helpIcon} onPress={() => setShow(true)}>
        <Icon name="question-circle" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  helpIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  buttonContainer: {
    alignSelf: "center",
  },
});

export default HomeScreen;
