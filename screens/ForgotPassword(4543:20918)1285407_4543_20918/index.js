import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_4543_20919}>
        <View style={styles.View_4543_20920}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68dd4745-8c49-4d40-8346-08c45af2d9ae"
            }}
            style={styles.ImageBackground_4543_20921}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd33b688-a552-487e-95a8-07a846fb3a01"
            }}
            style={styles.ImageBackground_4543_20922}
          />
          <View style={styles.View_4543_20923}>
            <View style={styles.View_4543_20924}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb4c21ba-57ce-4ab2-b88c-acfc368361e9"
                }}
                style={styles.ImageBackground_4543_20925}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cac5f642-76ac-4bfa-a918-12891ff79ee3"
                }}
                style={styles.ImageBackground_4543_20926}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76a4ad86-a5a2-4ce0-aaa4-59805c2baf42"
                }}
                style={styles.ImageBackground_4543_20927}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67f33bd1-ca7d-4972-b99f-832e3936516a"
                }}
                style={styles.ImageBackground_4543_20928}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff4a0908-6939-4294-8b08-43e71743ca8b"
                }}
                style={styles.ImageBackground_4543_20929}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/975bb001-dfa7-4a22-bd84-b898f1b9f3f3"
                }}
                style={styles.ImageBackground_4543_20930}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3925130c-a604-4a42-91ec-0486f8625a4f"
                }}
                style={styles.ImageBackground_4543_20931}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4543_20934}>
          <View style={styles.View_4543_20935}>
            <View style={styles.View_4543_20936}>
              <View style={styles.View_4543_20937}>
                <Text style={styles.Text_4543_20937}>Check your mailbox !</Text>
              </View>
              <View style={styles.View_4543_20938}>
                <Text style={styles.Text_4543_20938}>
                  An email has been sent with your new password.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_4543_20939}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("3916_22492"))
          }
        >
          <View style={styles.View_I4543_20939_3916_22491}>
            <Text style={styles.Text_I4543_20939_3916_22491}>
              Go to mailbox
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e71123bd-e0fe-4b21-9731-d2db4891a002"
        }}
        style={styles.ImageBackground_4543_20940}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1c07695-ea24-492b-a75b-0e1af87f69d9"
        }}
        style={styles.ImageBackground_4543_20941}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("109%") },
  View_4543_20919: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4543_20920: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("10%")
  },
  ImageBackground_4543_20921: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4543_20922: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4543_20923: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4543_20924: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_4543_20925: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_4543_20926: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4543_20927: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4543_20928: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4543_20929: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4543_20930: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4543_20931: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4543_20934: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_20935: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_20936: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_20937: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4543_20937: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4543_20938: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_4543_20938: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4543_20939: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("44%"),
    backgroundColor: "rgba(29, 79, 255, 1)"
  },
  View_I4543_20939_3916_22491: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4543_20939_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4543_20940: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("17%")
  },
  ImageBackground_4543_20941: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("68%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
