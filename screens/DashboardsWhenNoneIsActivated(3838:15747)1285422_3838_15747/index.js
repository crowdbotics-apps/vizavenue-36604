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
      <View style={styles.View_3838_15901}>
        <View style={styles.View_I3838_15901_3772_14775}>
          <View style={styles.View_I3838_15901_6340_21442}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/772c85f4-a093-4ff3-94dc-ecf65321c6bb"
              }}
              style={styles.ImageBackground_I3838_15901_6340_21443}
            />
            <View style={styles.View_I3838_15901_6340_21444}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/725e6141-4cc1-4f99-966b-9b160986c219"
                }}
                style={styles.ImageBackground_I3838_15901_6340_21445}
              />
              <View style={styles.View_I3838_15901_6340_21446} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3838_15901_3811_18578}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3838_15901_3811_18578_3760_16721}>
              <View style={styles.View_I3838_15901_3811_18578_3760_16722}>
                <Text style={styles.Text_I3838_15901_3811_18578_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bb193f6-f806-47a5-86cd-08d3e9f4fb8b"
                }}
                style={styles.ImageBackground_I3838_15901_3811_18578_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0e15c34-aedc-4160-af6c-67869672d790"
              }}
              style={styles.ImageBackground_I3838_15901_3811_18578_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3838_15901_3772_14778} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3971_18840}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3820_17757"))
        }
      >
        <View style={styles.View_3971_18841}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f604491-f54e-4b42-8b35-880b1bf7589a"
            }}
            style={styles.ImageBackground_3971_18842}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad5e49f3-1ab0-4ec6-915a-adf41f3de4e6"
            }}
            style={styles.ImageBackground_3971_18859}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a302c708-a125-410c-be25-b9ce9fbbdf3c"
            }}
            style={styles.ImageBackground_3971_18876}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf0dd6e-041a-4df3-9e12-49fd1116114b"
            }}
            style={styles.ImageBackground_3971_18893}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8901ac91-436e-494e-800e-55344800bed4"
            }}
            style={styles.ImageBackground_3971_18910}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0b50139-a039-49b2-96d4-660de90dc61a"
            }}
            style={styles.ImageBackground_3971_18927}
          />
        </View>
        <View style={styles.View_3971_18944}>
          <View style={styles.View_3971_18945}>
            <View style={styles.View_3971_18946}>
              <View style={styles.View_3971_18947}>
                <View style={styles.View_3971_18948}>
                  <Text style={styles.Text_3971_18948}>
                    Tell us about yourself and your company for personalized
                    dashboards recommendations
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_3971_18949}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("4606_21359")
                  )
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dddbae3-4e7d-4ec4-bbdf-9a27d82c4970"
                  }}
                  style={styles.ImageBackground_3971_18950}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.View_3971_18951}>
              <Text style={styles.Text_3971_18951}>
                Let us know your industry, your Odoo modules and we’ll recommend
                dashboards just for you and your business.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_3971_18952}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("4543_21092"))
            }
          >
            <View style={styles.View_I3971_18952_3461_14916}>
              <View style={styles.View_I3971_18952_3455_15913}>
                <Text style={styles.Text_I3971_18952_3455_15913}>
                  Let’s complete my profile
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb5901b-4fde-4644-9384-38220daeaeed"
                }}
                style={styles.ImageBackground_I3971_18952_3479_16418}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5588acec-731b-4bab-9690-c5cada201e65"
          }}
          style={styles.ImageBackground_3971_18956}
        />
      </TouchableOpacity>
      <View style={styles.View_3855_18773}>
        <View style={styles.View_3855_18774}>
          <Text style={styles.Text_3855_18774}>Browse all dashboards</Text>
        </View>
        <View style={styles.View_3855_18775}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3855_18776}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3809_16212"))
            }
          >
            <View style={styles.View_3855_18777}>
              <View style={styles.View_3855_18778} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca08c49c-10c2-40f0-b455-a38b10183d34"
                }}
                style={styles.ImageBackground_3855_18779}
              />
            </View>
            <View style={styles.View_3855_18780}>
              <View style={styles.View_3855_18781}>
                <View style={styles.View_3855_18782}>
                  <Text style={styles.Text_3855_18782}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18783}>
                  <Text style={styles.Text_3855_18783}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_3855_18784}>
            <View style={styles.View_3855_18785}>
              <View style={styles.View_3855_18786} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aad27d25-ea49-4b91-89c0-16c9cf7ce341"
                }}
                style={styles.ImageBackground_3855_18787}
              />
            </View>
            <View style={styles.View_3855_18788}>
              <View style={styles.View_3855_18789}>
                <View style={styles.View_3855_18790}>
                  <Text style={styles.Text_3855_18790}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18791}>
                  <Text style={styles.Text_3855_18791}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18792}>
            <View style={styles.View_3855_18793}>
              <View style={styles.View_3855_18794} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d001ad5-c1f1-4ef5-b7f1-fc77c2c9fb81"
                }}
                style={styles.ImageBackground_3855_18795}
              />
            </View>
            <View style={styles.View_3855_18796}>
              <View style={styles.View_3855_18797}>
                <View style={styles.View_3855_18798}>
                  <Text style={styles.Text_3855_18798}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18799}>
                  <Text style={styles.Text_3855_18799}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18800}>
            <View style={styles.View_3855_18801}>
              <View style={styles.View_3855_18802} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4048ec20-0c1a-455e-a135-6663272f375b"
                }}
                style={styles.ImageBackground_3855_18803}
              />
            </View>
            <View style={styles.View_3855_18804}>
              <View style={styles.View_3855_18805}>
                <View style={styles.View_3855_18806}>
                  <Text style={styles.Text_3855_18806}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18807}>
                  <Text style={styles.Text_3855_18807}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_18808}>
          <View style={styles.View_3855_18809}>
            <View style={styles.View_3855_18810}>
              <View style={styles.View_3855_18811} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e354464-1231-4da9-a4ec-898e2092516d"
                }}
                style={styles.ImageBackground_3855_18812}
              />
            </View>
            <View style={styles.View_3855_18813}>
              <View style={styles.View_3855_18814}>
                <View style={styles.View_3855_18815}>
                  <Text style={styles.Text_3855_18815}>
                    Food &amp; Drink Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18816}>
                  <Text style={styles.Text_3855_18816}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18817}>
            <View style={styles.View_3855_18818}>
              <View style={styles.View_3855_18819} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ec17704-6c0c-44b9-8b0e-ab32e049ef00"
                }}
                style={styles.ImageBackground_3855_18820}
              />
            </View>
            <View style={styles.View_3855_18821}>
              <View style={styles.View_3855_18822}>
                <View style={styles.View_3855_18823}>
                  <Text style={styles.Text_3855_18823}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18824}>
                  <Text style={styles.Text_3855_18824}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18825}>
            <View style={styles.View_3855_18826}>
              <View style={styles.View_3855_18827} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5169751a-e8c9-43c8-9ee8-97984f1d03fa"
                }}
                style={styles.ImageBackground_3855_18828}
              />
            </View>
            <View style={styles.View_3855_18829}>
              <View style={styles.View_3855_18830}>
                <View style={styles.View_3855_18831}>
                  <Text style={styles.Text_3855_18831}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18832}>
                  <Text style={styles.Text_3855_18832}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18833}>
            <View style={styles.View_3855_18834}>
              <View style={styles.View_3855_18835} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8cf1007-65dd-4217-9901-c621e16692b0"
                }}
                style={styles.ImageBackground_3855_18836}
              />
            </View>
            <View style={styles.View_3855_18837}>
              <View style={styles.View_3855_18838}>
                <View style={styles.View_3855_18839}>
                  <Text style={styles.Text_3855_18839}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18840}>
                  <Text style={styles.Text_3855_18840}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("123%") },
  View_3838_15901: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3838_15901_3772_14775: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3838_15901_6340_21442: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3838_15901_6340_21443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3838_15901_6340_21444: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I3838_15901_6340_21445: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3838_15901_6340_21446: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 50, 75, 1)"
  },
  TouchableOpacity_I3838_15901_3811_18578: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3838_15901_3811_18578_3760_16721: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3838_15901_3811_18578_3760_16722: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3838_15901_3811_18578_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3838_15901_3811_18578_3760_16723: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I3838_15901_3811_18578_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3838_15901_3772_14778: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(233, 234, 240, 1)"
  },
  TouchableOpacity_3971_18840: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(103, 114, 229, 1)",
    overflow: "hidden"
  },
  View_3971_18841: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3971_18842: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3971_18859: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3971_18876: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3971_18893: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3971_18910: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3971_18927: {
    width: wp("95%"),
    height: hp("11%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3971_18944: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3971_18945: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3971_18946: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3971_18947: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3971_18948: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3971_18948: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3971_18949: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 227, 250, 1)"
  },
  ImageBackground_3971_18950: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3971_18951: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_3971_18951: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3971_18952: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I3971_18952_3461_14916: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3971_18952_3455_15913: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3971_18952_3455_15913: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3971_18952_3479_16418: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_3971_18956: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("6%")
  },
  View_3855_18773: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18774: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3855_18774: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18775: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3855_18776: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18777: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18778: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18779: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18780: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18781: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18782: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18782: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18783: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18783: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18784: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18785: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18786: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18787: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18788: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18789: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18790: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18790: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18791: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18791: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18792: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18793: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18794: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18795: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18796: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18797: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18798: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18798: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18799: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18799: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18800: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18801: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18802: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18803: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18804: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18805: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18806: {
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
  Text_3855_18806: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18807: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18807: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18808: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18809: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18810: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18811: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18812: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18813: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18814: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18815: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18815: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18816: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18816: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18817: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18818: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18819: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18820: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18821: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18822: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18823: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18823: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18824: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18824: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18825: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18826: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18827: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18828: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18829: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18830: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18831: {
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
  Text_3855_18831: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18832: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18832: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18833: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3855_18834: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_18835: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3855_18836: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_18837: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_18838: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_18839: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_18839: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18840: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_18840: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
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
