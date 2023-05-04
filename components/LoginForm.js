import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "./Input";
import axios from "axios";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [login , setlogin] = useState("Login");

  const navigation = useNavigation();

  const sendrequest = () => {
    setlogin("loading ...")
    console.log(username, password);
    axios
      .post("http://172.20.8.39:3000/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if(response.data.status == false){
          setlogin(response.data.msg);
        }
        else {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.wrapper}>
      <Input
        plachol={"Phone Number , Username or email"}
        keyword={"email-address"}
        textcontent={"emailAdress"}
        setvalue={setusername}
        textentry={false}
      ></Input>
      <Input
        plachol={"Password"}
        textcontent={"Password"}
        textentry={true}
        setvalue={setpassword}
      ></Input>

      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#6BB0f5" }}>Forgot Password ?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button} onPress={sendrequest}>
        <Text style={{ color: "white", fontSize: 20 }}>{login}</Text>
      </Pressable>

      <View style={styles.signupcontainer}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#6BB0f5" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputfield: {
    borderRadius: 4,
    // padding : ,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  signupcontainer: {
    flexDirection: "row",

    justifyContent: "center",
    marginTop: 50,
  },
});
