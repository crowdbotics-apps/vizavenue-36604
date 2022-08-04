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
      <View style={styles.View_4543_21062}>
        <View style={styles.View_4543_21063}>
          <View style={styles.View_4543_21064}>
            <View style={styles.View_4543_21274}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9585c9c4-fd69-498f-bacf-6fbd3b22ab98"
                }}
                style={styles.ImageBackground_4543_21275}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d431a7d-aeb2-4e8e-aab7-dfde7a6b4177"
                }}
                style={styles.ImageBackground_4543_21276}
              />
              <View style={styles.View_4543_21277}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3d6f3ac-0037-4f64-bd4d-5cf7c5be1dbc"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19463}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed0d058d-7f05-4ddf-86da-6cd8976ec790"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19465}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46d3fe27-2e3e-4c14-8af2-0e4e149adbf9"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19459}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc406829-262e-4ece-84b0-fd1d14a1af84"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19409}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/703ff298-bfda-498a-9d41-44506b090f54"
                  }}
                  style={styles.ImageBackground_I4543_21277_4372_20586}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66e08725-69ca-4f38-898a-d419ee327113"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19410}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b481e47c-b68f-4d3b-b125-2f9f0daee517"
                  }}
                  style={styles.ImageBackground_I4543_21277_4240_19411}
                />
              </View>
            </View>
            <View style={styles.View_4543_21066}>
              <View style={styles.View_4543_21067}>
                <View style={styles.View_4543_21068}>
                  <Text style={styles.Text_4543_21068}>
                    Let’s create your account
                  </Text>
                </View>
                <View style={styles.View_4543_21069}>
                  <Text style={styles.Text_4543_21069}>
                    We are very happy to see you here! Let’s sign you up.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4543_21070}>
            <View style={styles.View_4543_21071}>
              <View style={styles.View_I4543_21071_3441_11433}>
                <View style={styles.View_I4543_21071_3441_11433_3441_10898}>
                  <View
                    style={
                      styles.View_I4543_21071_3441_11433_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I4543_21071_3441_11433_3441_10898_3441_10878
                      }
                    >
                      First name
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I4543_21071_3350_4470}>
                <View style={styles.View_I4543_21071_3350_4470_3350_4335}>
                  <View style={styles.View_I4543_21071_3350_4470_3350_4337}>
                    <Text style={styles.Text_I4543_21071_3350_4470_3350_4337}>
                      insert your first name
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4543_21072}>
              <View style={styles.View_I4543_21072_3441_11433}>
                <View style={styles.View_I4543_21072_3441_11433_3441_10898}>
                  <View
                    style={
                      styles.View_I4543_21072_3441_11433_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I4543_21072_3441_11433_3441_10898_3441_10878
                      }
                    >
                      Last name
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I4543_21072_3350_4470}>
                <View style={styles.View_I4543_21072_3350_4470_3350_4335}>
                  <View style={styles.View_I4543_21072_3350_4470_3350_4337}>
                    <Text style={styles.Text_I4543_21072_3350_4470_3350_4337}>
                      insert your first name
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4543_21073}>
          <TouchableOpacity
            style={styles.TouchableOpacity_4543_21074}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3916_22492"))
            }
          >
            <View style={styles.View_I4543_21074_3916_22491}>
              <Text style={styles.Text_I4543_21074_3916_22491}>Next</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_4606_21353}>
            <View style={styles.View_4543_21075}>
              <Text style={styles.Text_4543_21075}>
                Already have an account ?
              </Text>
            </View>
            <View style={styles.View_4606_21355}>
              <Text style={styles.Text_4606_21355}>Log in</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40f5383d-5b2d-4ccf-966c-c473f1df6632"
        }}
        style={styles.ImageBackground_4543_21076}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae2262ff-fcf4-4da9-a194-92b4b490b267"
        }}
        style={styles.ImageBackground_4543_21077}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("109%") },
  View_4543_21062: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4543_21063: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21064: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21274: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_4543_21275: {
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
  ImageBackground_4543_21276: {
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
  View_4543_21277: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I4543_21277_4240_19463: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  ImageBackground_I4543_21277_4240_19465: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I4543_21277_4240_19459: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I4543_21277_4240_19409: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I4543_21277_4372_20586: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I4543_21277_4240_19410: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I4543_21277_4240_19411: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_4543_21066: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21067: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21068: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4543_21068: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4543_21069: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_4543_21069: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4543_21070: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21071: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21071_3441_11433: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21071_3441_11433_3441_10898: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21071_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I4543_21071_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4543_21071_3350_4470: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I4543_21071_3350_4470_3350_4335: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21071_3350_4470_3350_4337: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I4543_21071_3350_4470_3350_4337: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4543_21072: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21072_3441_11433: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21072_3441_11433_3441_10898: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21072_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I4543_21072_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4543_21072_3350_4470: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I4543_21072_3350_4470_3350_4335: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4543_21072_3350_4470_3350_4337: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I4543_21072_3350_4470_3350_4337: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4543_21073: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_4543_21074: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 79, 255, 1)"
  },
  View_I4543_21074_3916_22491: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4543_21074_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21353: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4543_21075: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4543_21075: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21355: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4606_21355: {
    color: "rgba(29, 79, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4543_21076: {
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
  ImageBackground_4543_21077: {
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
