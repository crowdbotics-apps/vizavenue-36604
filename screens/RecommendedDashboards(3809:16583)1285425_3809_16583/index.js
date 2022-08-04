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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97d543c9-d545-481e-ab7a-ed6e199ecd64"
        }}
        style={styles.ImageBackground_3809_16584}
      />
      <View style={styles.View_3809_16585}>
        <View style={styles.View_3809_16586}>
          <View style={styles.View_3809_16587}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc55f19d-393f-408b-84b5-c1b1c68a37cf"
              }}
              style={styles.ImageBackground_4538_20584}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad0b69ec-88a2-4498-9319-ba6dcbec79cd"
              }}
              style={styles.ImageBackground_3809_16588}
            />
            <View style={styles.View_4538_20574}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7197b38-e709-4515-9335-7c2b511a6aa9"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19463}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbd44ba8-bf0a-4b89-8d42-01bee6b6c95c"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19465}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b926425a-35e3-4655-98e1-828e3a0dce64"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19459}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e4ccf4f-b865-403a-a241-a1d103bb2434"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19409}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a87ed81-b4cf-4e30-b58d-6c5173571cf5"
                }}
                style={styles.ImageBackground_I4538_20574_4372_20586}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9ca9cb6-85cc-47d7-b197-7fac41524345"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19410}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e52d77b-01e5-49b3-a1ec-de20bba50e28"
                }}
                style={styles.ImageBackground_I4538_20574_4240_19411}
              />
            </View>
          </View>
          <View style={styles.View_3809_16590}>
            <View style={styles.View_3809_16591}>
              <View style={styles.View_3809_16592}>
                <Text style={styles.Text_3809_16592}>
                  Welcome in your Vizavenue workspace
                </Text>
              </View>
              <View style={styles.View_3809_16593}>
                <Text style={styles.Text_3809_16593}>
                  You are one step closer to setup your first dashboard !
                  Discover the recommended dashboards we have in shop just for
                  you or browse our entire gallery
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_3918_18797}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3916_22492"))
            }
          >
            <View style={styles.View_I3918_18797_3916_22491}>
              <Text style={styles.Text_I3918_18797_3916_22491}>
                Enter the dashboard gallery and recommendations
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_3809_16584: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3809_16585: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3809_16586: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16587: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_4538_20584: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3809_16588: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4538_20574: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I4538_20574_4240_19463: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  ImageBackground_I4538_20574_4240_19465: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_I4538_20574_4240_19459: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  ImageBackground_I4538_20574_4240_19409: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I4538_20574_4372_20586: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  ImageBackground_I4538_20574_4240_19410: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  ImageBackground_I4538_20574_4240_19411: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%")
  },
  View_3809_16590: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16591: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16592: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_3809_16592: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16593: {
    width: wp("33%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3809_16593: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3918_18797: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(29, 79, 255, 1)"
  },
  View_I3918_18797_3916_22491: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3918_18797_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
