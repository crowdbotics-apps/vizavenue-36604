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
      <View style={styles.View_5714_21037}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5714_21037_3811_18191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("3811_18200"))
          }
        >
          <View style={styles.View_I5714_21037_3811_18192}>
            <View style={styles.View_I5714_21037_3811_18193}>
              <Text style={styles.Text_I5714_21037_3811_18193}>Profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/430f0ddd-8f37-4b0d-9838-ad75c0749304"
              }}
              style={styles.ImageBackground_I5714_21037_3811_18194}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5714_21038}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("4543_20595"))
        }
      >
        <TouchableOpacity
          style={styles.TouchableOpacity_I5714_21038_3811_18191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("3811_18200"))
          }
        >
          <View style={styles.View_I5714_21038_3811_18192}>
            <View style={styles.View_I5714_21038_3811_18193}>
              <Text style={styles.Text_I5714_21038_3811_18193}>Log out</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ff8d3f7-a42f-4d61-aa8b-1d4fec1bb883"
              }}
              style={styles.ImageBackground_I5714_21038_3811_18194}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_5714_21037: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I5714_21037_3811_18191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5714_21037_3811_18192: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5714_21037_3811_18193: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5714_21037_3811_18193: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I5714_21037_3811_18194: {
    width: wp("3%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  TouchableOpacity_5714_21038: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I5714_21038_3811_18191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5714_21038_3811_18192: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5714_21038_3811_18193: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5714_21038_3811_18193: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I5714_21038_3811_18194: {
    width: wp("3%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
