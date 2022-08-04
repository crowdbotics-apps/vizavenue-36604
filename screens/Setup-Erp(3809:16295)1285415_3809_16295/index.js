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
      <View style={styles.View_6341_22102}>
        <View style={styles.View_3809_16319}>
          <Text style={styles.Text_3809_16319}>
            With which ERP would you like to connect your dashboard?
          </Text>
        </View>
        <View style={styles.View_6341_22101}>
          <View style={styles.View_6341_22096}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f5b298b-e18c-4bfa-aa9b-a115b7dd038f"
              }}
              style={styles.ImageBackground_6341_22100}
            />
            <View style={styles.View_6341_22108}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d6c0e0b-e975-49bf-951f-fd91e403c7a4"
                }}
                style={styles.ImageBackground_I6341_22108_3777_15877}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db4b2888-a1bf-4c05-804e-5866394dea6c"
                }}
                style={styles.ImageBackground_I6341_22108_3777_15879}
              />
            </View>
          </View>
          <View style={styles.View_6341_22090}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14069edd-e96e-433f-a2e0-2bc1b2d30135"
              }}
              style={styles.ImageBackground_6341_22087}
            />
            <View style={styles.View_6341_22088}>
              <View style={styles.View_6341_22089}>
                <Text style={styles.Text_6341_22089}>COMING SOON</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_6341_22091}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/697043af-5c34-4b9a-bb5a-fbd003d484c8"
              }}
              style={styles.ImageBackground_6341_22095}
            />
            <View style={styles.View_6341_22093}>
              <View style={styles.View_6341_22094}>
                <Text style={styles.Text_6341_22094}>COMING SOON</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3809_16320}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3760_17176"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/664d78f9-a17b-41cb-8aaf-852d2ad5f873"
          }}
          style={styles.ImageBackground_I3809_16320_3760_17172}
        />
        <View style={styles.View_I3809_16320_3760_17173}>
          <Text style={styles.Text_I3809_16320_3760_17173}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3811_16868}>
        <View style={styles.View_3811_16869}>
          <View style={styles.View_3811_16870}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceebf851-63bb-4546-8b7e-a1b9baa734fe"
              }}
              style={styles.ImageBackground_3811_16871}
            />
            <View style={styles.View_3811_16872}>
              <View style={styles.View_3811_16873}>
                <Text style={styles.Text_3811_16873}>Please login to Odoo</Text>
              </View>
              <View style={styles.View_3811_16874}>
                <Text style={styles.Text_3811_16874}>
                  To access your dashboard, please connect with your Odoo
                  credentials.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3811_16875}>
          <View style={styles.View_3811_16876}>
            <View style={styles.View_I3811_16876_3441_11433}>
              <View style={styles.View_I3811_16876_3441_11433_3441_10898}>
                <View
                  style={
                    styles.View_I3811_16876_3441_11433_3441_10898_3441_10878
                  }
                >
                  <Text
                    style={
                      styles.Text_I3811_16876_3441_11433_3441_10898_3441_10878
                    }
                  >
                    URL
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3811_16876_3350_4470}>
              <View style={styles.View_I3811_16876_3350_4470_3350_4335}>
                <View style={styles.View_I3811_16876_3350_4470_3350_4337}>
                  <Text style={styles.Text_I3811_16876_3350_4470_3350_4337}>
                    AZEFGREC6548
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3811_16877}>
            <View style={styles.View_I3811_16877_3441_11433}>
              <View style={styles.View_I3811_16877_3441_11433_3441_10898}>
                <View
                  style={
                    styles.View_I3811_16877_3441_11433_3441_10898_3441_10878
                  }
                >
                  <Text
                    style={
                      styles.Text_I3811_16877_3441_11433_3441_10898_3441_10878
                    }
                  >
                    User ID
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3811_16877_3350_4470}>
              <View style={styles.View_I3811_16877_3350_4470_3350_4335}>
                <View style={styles.View_I3811_16877_3350_4470_3350_4337}>
                  <Text style={styles.Text_I3811_16877_3350_4470_3350_4337}>
                    AZEFGREC6548
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3811_16878}>
            <View style={styles.View_3811_16879}>
              <View style={styles.View_I3811_16879_3450_12422}>
                <View style={styles.View_I3811_16879_3450_12422_3441_10898}>
                  <View
                    style={
                      styles.View_I3811_16879_3450_12422_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3811_16879_3450_12422_3441_10898_3441_10878
                      }
                    >
                      Password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3811_16879_3413_9099}>
                <View style={styles.View_I3811_16879_3413_9099_3413_9069}>
                  <View style={styles.View_I3811_16879_3413_9099_3413_9071}>
                    <Text style={styles.Text_I3811_16879_3413_9099_3413_9071}>
                      insert your password
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e1eb0a2-eadd-41dc-be4e-932d8c535fdd"
                  }}
                  style={styles.ImageBackground_I3811_16879_3413_9099_3413_9072}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3811_16880}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3918_19165}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3916_22492"))
            }
          >
            <View style={styles.View_I3918_19165_3916_22491}>
              <Text style={styles.Text_I3918_19165_3916_22491}>Connect</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_3811_16882}>
            <Text style={styles.Text_3811_16882}>
              Where can I find my credentials?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("109%") },
  View_6341_22102: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16319: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3809_16319: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6341_22101: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6341_22096: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6341_22100: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_6341_22108: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I6341_22108_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I6341_22108_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6341_22090: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6341_22087: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_6341_22088: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    backgroundColor: "rgba(251, 191, 39, 1)"
  },
  View_6341_22089: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_6341_22089: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6341_22091: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_6341_22095: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_6341_22093: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    backgroundColor: "rgba(251, 191, 39, 1)"
  },
  View_6341_22094: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_6341_22094: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3809_16320: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  ImageBackground_I3809_16320_3760_17172: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3809_16320_3760_17173: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3809_16320_3760_17173: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16868: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3811_16869: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_16870: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3811_16871: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3811_16872: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_16873: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3811_16873: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16874: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3811_16874: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16875: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_16876: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16876_3441_11433: {
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
  View_I3811_16876_3441_11433_3441_10898: {
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
  View_I3811_16876_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_16876_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_16876_3350_4470: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_16876_3350_4470_3350_4335: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16876_3350_4470_3350_4337: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_16876_3350_4470_3350_4337: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16877: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16877_3441_11433: {
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
  View_I3811_16877_3441_11433_3441_10898: {
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
  View_I3811_16877_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_16877_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_16877_3350_4470: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_16877_3350_4470_3350_4335: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16877_3350_4470_3350_4337: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_16877_3350_4470_3350_4337: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16878: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_16879: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16879_3450_12422: {
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
  View_I3811_16879_3450_12422_3441_10898: {
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
  View_I3811_16879_3450_12422_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_16879_3450_12422_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_16879_3413_9099: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_16879_3413_9099_3413_9069: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_16879_3413_9099_3413_9071: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_16879_3413_9099_3413_9071: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3811_16879_3413_9099_3413_9072: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%")
  },
  View_3811_16880: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3918_19165: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 79, 255, 1)"
  },
  View_I3918_19165_3916_22491: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3918_19165_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16882: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_3811_16882: {
    color: "rgba(29, 79, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
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
