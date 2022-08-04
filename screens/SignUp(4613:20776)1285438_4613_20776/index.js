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
      <View style={styles.View_4613_20777}>
        <View style={styles.View_4613_20778}>
          <View style={styles.View_4613_20779}>
            <View style={styles.View_4613_20823}>
              <View style={styles.View_4613_20780}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0734a412-18b5-4a67-a23d-0a5f0886572a"
                  }}
                  style={styles.ImageBackground_4613_20781}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d52a226e-62d6-42b4-9246-e165a8241d6f"
                  }}
                  style={styles.ImageBackground_4613_20782}
                />
                <View style={styles.View_4613_20783}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/596a494e-5dab-4787-9dce-78044e56b04d"
                    }}
                    style={styles.ImageBackground_4613_20784}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12bec05e-17e4-488d-80d9-c50f717f25d3"
                    }}
                    style={styles.ImageBackground_4613_20785}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97407945-833e-41ed-b56c-a806b283a55c"
                    }}
                    style={styles.ImageBackground_4613_20786}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db3a44be-ba19-4ea2-a7ae-6a72bf2f145c"
                    }}
                    style={styles.ImageBackground_4613_20787}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/503c46eb-fe8d-454b-a7ff-88813315b03d"
                    }}
                    style={styles.ImageBackground_4613_20788}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a992a7ee-5343-422c-97ca-27558e535874"
                    }}
                    style={styles.ImageBackground_4613_20789}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68eebefd-a13a-43e0-8266-263c175a7008"
                    }}
                    style={styles.ImageBackground_4613_20790}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fb4abf0-0ef5-4686-86ed-f32b4fccb680"
                }}
                style={styles.ImageBackground_4613_20824}
              />
            </View>
            <View style={styles.View_4613_20795}>
              <View style={styles.View_4613_20796}>
                <Text style={styles.Text_4613_20796}>
                  What’s your company name ?
                </Text>
              </View>
              <View style={styles.View_4613_20797}>
                <Text style={styles.Text_4613_20797}>
                  Your company name will serve to name your workspace
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4613_20798}>
            <View style={styles.View_4613_20799}>
              <View style={styles.View_I4613_20799_3441_11433}>
                <View style={styles.View_I4613_20799_3441_11433_3441_10898}>
                  <View
                    style={
                      styles.View_I4613_20799_3441_11433_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I4613_20799_3441_11433_3441_10898_3441_10878
                      }
                    >
                      Your company name
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I4613_20799_3350_4470}>
                <View style={styles.View_I4613_20799_3350_4470_3350_4335}>
                  <View style={styles.View_I4613_20799_3350_4470_3350_4337}>
                    <Text style={styles.Text_I4613_20799_3350_4470_3350_4337}>
                      Enter comapny name
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_4613_20800}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("3838_15747"))
          }
        >
          <TouchableOpacity
            style={styles.TouchableOpacity_4613_20801}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3916_22492"))
            }
          >
            <View style={styles.View_I4613_20801_3916_22491}>
              <Text style={styles.Text_I4613_20801_3916_22491}>
                Start using Vizavenue
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23dc9f06-e379-4c44-acdd-6d4e35574828"
        }}
        style={styles.ImageBackground_4613_20802}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cf5101f-302c-4091-93bd-d285eb3809bb"
        }}
        style={styles.ImageBackground_4613_20803}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("109%") },
  View_4613_20777: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4613_20778: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4613_20779: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4613_20823: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4613_20780: {
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
  ImageBackground_4613_20781: {
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
  ImageBackground_4613_20782: {
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
  View_4613_20783: {
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
  ImageBackground_4613_20784: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_4613_20785: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4613_20786: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4613_20787: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4613_20788: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4613_20789: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4613_20790: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4613_20824: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("-3%")
  },
  View_4613_20795: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4613_20796: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4613_20796: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4613_20797: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_4613_20797: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4613_20798: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4613_20799: {
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
  View_I4613_20799_3441_11433: {
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
  View_I4613_20799_3441_11433_3441_10898: {
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
  View_I4613_20799_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I4613_20799_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4613_20799_3350_4470: {
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
  View_I4613_20799_3350_4470_3350_4335: {
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
  View_I4613_20799_3350_4470_3350_4337: {
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
  Text_I4613_20799_3350_4470_3350_4337: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4613_20800: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_4613_20801: {
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
  View_I4613_20801_3916_22491: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4613_20801_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4613_20802: {
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
  ImageBackground_4613_20803: {
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
