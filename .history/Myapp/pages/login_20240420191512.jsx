// Login.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // 这里应该进行登录的逻辑处理
    // 如果登录成功，可以导航到其他界面
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
  
    <View style={styles.buttonContainer}>
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.spacingView}/>
      <Button title="Register" onPress={() => navigation.navigate('register')}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 },
  buttonContainer: {
    justifyContent: 'center',
  },
  spacingView: {
    height: 20, // 调整这个值可以改变按钮之间的距离
  }
});
Login.navigationOptions = {
    headerTitle: '你的标题',
    headerStyle: {
      backgroundColor: #,    // 例如设置背景色
    },
    headerTintColor: '#fff',            // 这将更改您头部标题和按钮的颜色
    headerTitleStyle: {
      fontWeight: 'bold'                // 设置标题样式
    },
  };
export default Login;