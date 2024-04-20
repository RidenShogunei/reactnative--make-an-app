// Login.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api/login'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async() => {
    try {
        const result = await api.login(username, password);
        console.log("登录的结果", result)
        if (result.data && result.data !== 'fail') {
          message.success("登陆成功!!")
          setIsAuthenticated(true); 
          localStorage.setItem('uid', result.data)
          navigate('/home')
        } else {
          message.error("登录失败，账户名或密码错误")
        }
      } catch (error) {
        console.log('登录失败:', error);
        message.error("登录失败，发生了一些错误，稍后再试")
      }

  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder=" Password"
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
export default Login;