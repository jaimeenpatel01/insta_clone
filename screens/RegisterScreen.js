import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmpassword] = useState("");
  const [login , setlogin] = useState("Sign Up")

  const instalogo =
    "https://logowik.com/content/uploads/images/606_instagram.jpg";
  
  const navigation = useNavigation();



  const sendrequest = () => {
    setlogin("loading ...")
    console.log(username, email, password, confirmPassword);
    axios
      .post("http://172.20.8.39:3000/api/register", {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        if(response.data.status == false){
          setlogin(response.data.msg);
        }
        else {
          setlogin("Account Created Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={{ uri: instalogo, height: 100, width: 100 }}></Image>
      </View>

      <View style={styles.wrapper}>
        <Input
          plachol={"Username"}
          keyword={"UserName"}
          textcontent={"emailAdress"}
          setvalue={setusername}
          textentry={false}
        ></Input>
        <Input
          plachol={"Email Address"}
          keyword={"Email Address"}
          textcontent={"Password"}
          textentry={false}
          setvalue={setemail}
        ></Input>
        <Input
          plachol={"Password"}
          textcontent={"Password"}
          textentry={true}
          setvalue={setpassword}
        ></Input>
        <Input
          plachol={"Confirm Password"}
          textcontent={"Password"}
          textentry={true}
          setvalue={setconfirmpassword}
        ></Input>

        <Pressable titleSize={20} style={styles.button} onPress={sendrequest}>
          <Text style={{ color: "white", fontSize: 20 }}>{login}</Text>
        </Pressable>

        <View style={styles.signupcontainer}>
          <Text>Already a User ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#6BB0f5" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 12,
  },
  logocontainer: {
    alignItems: "center",
    marginTop: 60,
  },
  wrapper: {
    marginTop: 20,
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
    marginTop: 10,
  },
  signupcontainer: {
    flexDirection: "row",

    justifyContent: "center",
    marginTop: 30,
  },
});
