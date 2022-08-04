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
      <View style={styles.View_3809_16284}>
        <View style={styles.View_3809_16285}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3809_16286}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3809_16295"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4944bca8-7b53-4014-af20-6e7f73dd55f0"
              }}
              style={styles.ImageBackground_3809_16287}
            />
          </TouchableOpacity>
          <View style={styles.View_3809_16288}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c5a41a8-7ac8-433a-afd1-421cca906a1f"
              }}
              style={styles.ImageBackground_3809_16289}
            />
          </View>
        </View>
        <View style={styles.View_3809_16290}>
          <View style={styles.View_3809_16291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25082161-532d-4df8-88b9-05e574535a1e"
              }}
              style={styles.ImageBackground_3809_16292}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3809_16293}>
        <Text style={styles.Text_3809_16293}>
          With which ERP would you like to connect your dashboard?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3809_16294}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3760_17176"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c203e63-43eb-40dd-bda3-c677ef570129"
          }}
          style={styles.ImageBackground_I3809_16294_3760_17172}
        />
        <View style={styles.View_I3809_16294_3760_17173}>
          <Text style={styles.Text_I3809_16294_3760_17173}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_3918_19177}>
        <View style={styles.View_3918_19178}>
          <View style={styles.View_3918_19179}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee96cd68-7d4c-4bca-997a-bcd6c4142a6b"
              }}
              style={styles.ImageBackground_3918_19180}
            />
            <View style={styles.View_3918_19181}>
              <View style={styles.View_3918_19182}>
                <Text style={styles.Text_3918_19182}>Please login to Odoo</Text>
              </View>
              <View style={styles.View_3918_19183}>
                <Text style={styles.Text_3918_19183}>
                  To access your dashboard, please connect with your Odoo
                  credentials.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3918_19184}>
          <View style={styles.View_3918_19185}>
            <View style={styles.View_I3918_19185_3441_11433}>
              <View style={styles.View_I3918_19185_3441_11433_3441_10898}>
                <View
                  style={
                    styles.View_I3918_19185_3441_11433_3441_10898_3441_10878
                  }
                >
                  <Text
                    style={
                      styles.Text_I3918_19185_3441_11433_3441_10898_3441_10878
                    }
                  >
                    URL
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3918_19185_3350_4470}>
              <View style={styles.View_I3918_19185_3350_4470_3350_4335}>
                <View style={styles.View_I3918_19185_3350_4470_3350_4337}>
                  <Text style={styles.Text_I3918_19185_3350_4470_3350_4337}>
                    AZEFGREC6548
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3918_19186}>
            <View style={styles.View_I3918_19186_3441_11433}>
              <View style={styles.View_I3918_19186_3441_11433_3441_10898}>
                <View
                  style={
                    styles.View_I3918_19186_3441_11433_3441_10898_3441_10878
                  }
                >
                  <Text
                    style={
                      styles.Text_I3918_19186_3441_11433_3441_10898_3441_10878
                    }
                  >
                    User ID
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I3918_19186_3350_4470}>
              <View style={styles.View_I3918_19186_3350_4470_3350_4335}>
                <View style={styles.View_I3918_19186_3350_4470_3350_4337}>
                  <Text style={styles.Text_I3918_19186_3350_4470_3350_4337}>
                    AZEFGREC6548
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3918_19187}>
            <View style={styles.View_3918_19188}>
              <View style={styles.View_I3918_19188_3450_12422}>
                <View style={styles.View_I3918_19188_3450_12422_3441_10898}>
                  <View
                    style={
                      styles.View_I3918_19188_3450_12422_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3918_19188_3450_12422_3441_10898_3441_10878
                      }
                    >
                      Password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3918_19188_3413_9099}>
                <View style={styles.View_I3918_19188_3413_9099_3413_9069}>
                  <View style={styles.View_I3918_19188_3413_9099_3413_9071}>
                    <Text style={styles.Text_I3918_19188_3413_9099_3413_9071}>
                      insert your password
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da2b17f0-75a4-4142-9acb-bae13c556a8d"
                  }}
                  style={styles.ImageBackground_I3918_19188_3413_9099_3413_9072}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3918_19189}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3918_19190}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3916_22492"))
            }
          >
            <View style={styles.View_I3918_19190_3916_22491}>
              <Text style={styles.Text_I3918_19190_3916_22491}>Log in</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_3918_19191}>
            <Text style={styles.Text_3918_19191}>
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
  View_3809_16284: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16285: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3809_16286: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3809_16287: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_3809_16288: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3809_16289: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_3809_16290: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16291: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3809_16292: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_3809_16293: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_3809_16293: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3809_16294: {
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
  ImageBackground_I3809_16294_3760_17172: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3809_16294_3760_17173: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3809_16294_3760_17173: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19177: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3918_19178: {
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
  View_3918_19179: {
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
  ImageBackground_3918_19180: {
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
  View_3918_19181: {
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
  View_3918_19182: {
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
  Text_3918_19182: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19183: {
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
  Text_3918_19183: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19184: {
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
  View_3918_19185: {
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
  View_I3918_19185_3441_11433: {
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
  View_I3918_19185_3441_11433_3441_10898: {
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
  View_I3918_19185_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19185_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3918_19185_3350_4470: {
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
  View_I3918_19185_3350_4470_3350_4335: {
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
  View_I3918_19185_3350_4470_3350_4337: {
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
  Text_I3918_19185_3350_4470_3350_4337: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19186: {
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
  View_I3918_19186_3441_11433: {
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
  View_I3918_19186_3441_11433_3441_10898: {
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
  View_I3918_19186_3441_11433_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19186_3441_11433_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3918_19186_3350_4470: {
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
  View_I3918_19186_3350_4470_3350_4335: {
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
  View_I3918_19186_3350_4470_3350_4337: {
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
  Text_I3918_19186_3350_4470_3350_4337: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19187: {
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
  View_3918_19188: {
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
  View_I3918_19188_3450_12422: {
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
  View_I3918_19188_3450_12422_3441_10898: {
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
  View_I3918_19188_3450_12422_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19188_3450_12422_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3918_19188_3413_9099: {
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
  View_I3918_19188_3413_9099_3413_9069: {
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
  View_I3918_19188_3413_9099_3413_9071: {
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
  Text_I3918_19188_3413_9099_3413_9071: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3918_19188_3413_9099_3413_9072: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%")
  },
  View_3918_19189: {
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
  TouchableOpacity_3918_19190: {
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
  View_I3918_19190_3916_22491: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I3918_19190_3916_22491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19191: {
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
  Text_3918_19191: {
    color: "rgba(103, 114, 229, 1)",
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
