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
      <View style={styles.View_3820_17845}>
        <Text style={styles.Text_3820_17845}>Billing</Text>
      </View>
      <View style={styles.View_3820_17850}>
        <View style={styles.View_3820_17851}>
          <Text style={styles.Text_3820_17851}>Next invoice date</Text>
        </View>
        <View style={styles.View_3820_17852}>
          <Text style={styles.Text_3820_17852}>26 November 2021</Text>
        </View>
      </View>
      <View style={styles.View_3820_17853}>
        <View style={styles.View_3820_17854}>
          <Text style={styles.Text_3820_17854}>Monthly Invoice total</Text>
        </View>
        <View style={styles.View_3820_17855}>
          <Text style={styles.Text_3820_17855}>120€ </Text>
        </View>
      </View>
      <View style={styles.View_3820_17856}>
        <View style={styles.View_3820_17857}>
          <Text style={styles.Text_3820_17857}>Total Dashboards</Text>
        </View>
        <View style={styles.View_3820_17858}>
          <Text style={styles.Text_3820_17858}>4</Text>
        </View>
      </View>
      <View style={styles.View_3820_17860}>
        <View style={styles.View_3820_17861}>
          <View style={styles.View_3820_17862}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/433a68ac-59ff-473e-a31f-ca940d7161e3"
              }}
              style={styles.ImageBackground_3820_17863}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6f019cf-feec-4a57-b15f-4edf905852a2"
              }}
              style={styles.ImageBackground_3820_17880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fccb89d-34eb-4e3b-ad7d-8f6fc096eb82"
              }}
              style={styles.ImageBackground_3820_17897}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4e13cd9-f473-4ea1-860c-33159ba75110"
              }}
              style={styles.ImageBackground_3820_17914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b61e1c2-4dfd-442d-8451-5f5fe3e67ab8"
              }}
              style={styles.ImageBackground_3820_17931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6bce9d3-a342-4e65-8bb4-b356678761ec"
              }}
              style={styles.ImageBackground_3820_17948}
            />
          </View>
        </View>
        <View style={styles.View_3820_17965}>
          <View style={styles.View_3820_17966}>
            <Text style={styles.Text_3820_17966}>Have a nice</Text>
          </View>
          <View style={styles.View_3820_17967}>
            <Text style={styles.Text_3820_17967}>WEEKEND 🏝 </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_15754}>
        <View style={styles.View_I3855_15754_3772_14808}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_15754_3772_14817}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3772_14725"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f433e1f-5caa-4caf-8a1f-2e7cff4d2200"
              }}
              style={styles.ImageBackground_I3855_15754_3772_14817_3772_14718}
            />
            <View style={styles.View_I3855_15754_3772_14817_3772_14719}>
              <Text style={styles.Text_I3855_15754_3772_14817_3772_14719}>
                Back to my workspace
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_15754_3811_18884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3855_15754_3811_18884_3760_16721}>
              <View style={styles.View_I3855_15754_3811_18884_3760_16722}>
                <Text style={styles.Text_I3855_15754_3811_18884_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0740ae4e-27e0-4931-a306-21c22f0f43ee"
                }}
                style={styles.ImageBackground_I3855_15754_3811_18884_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cbc75ca-c994-44d6-bf6b-ec9e76086aea"
              }}
              style={styles.ImageBackground_I3855_15754_3811_18884_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3855_15754_3772_14811} />
      </View>
      <View style={styles.View_3918_19077}>
        <View style={styles.View_3918_19078}>
          <View style={styles.View_I3918_19078_3777_15624}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I3918_19078_3777_15603}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3855_17029")
                )
              }
            >
              <Text style={styles.Text_I3918_19078_3777_15603}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.View_I3918_19078_3777_15604}>
              <Text style={styles.Text_I3918_19078_3777_15604}>Billing</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3918_19079} />
      </View>
      <View style={styles.View_4619_20773}>
        <View style={styles.View_4619_20774}>
          <Text style={styles.Text_4619_20774}>Invoices</Text>
        </View>
        <View style={styles.View_4619_20775}>
          <View style={styles.View_4619_20776}>
            <View style={styles.View_4619_20777}>
              <View style={styles.View_4619_20778}>
                <Text style={styles.Text_4619_20778}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20779}>
                <Text style={styles.Text_4619_20779}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20780}>
              <View style={styles.View_4619_20781}>
                <Text style={styles.Text_4619_20781}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20782}>
                <Text style={styles.Text_4619_20782}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20783}>
              <View style={styles.View_4619_20784}>
                <Text style={styles.Text_4619_20784}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20785}>
                <Text style={styles.Text_4619_20785}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20786}>
              <View style={styles.View_I4619_20786_3504_15900}>
                <Text style={styles.Text_I4619_20786_3504_15900}>Pending</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20787}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20787_3818_15434}>
                <Text style={styles.Text_I4619_20787_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1780c043-b5c9-45b1-98d3-1875bd2dfcf2"
                }}
                style={styles.ImageBackground_I4619_20787_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20788}>
            <View style={styles.View_4619_20789}>
              <View style={styles.View_4619_20790}>
                <Text style={styles.Text_4619_20790}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20791}>
                <Text style={styles.Text_4619_20791}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20792}>
              <View style={styles.View_4619_20793}>
                <Text style={styles.Text_4619_20793}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20794}>
                <Text style={styles.Text_4619_20794}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20795}>
              <View style={styles.View_4619_20796}>
                <Text style={styles.Text_4619_20796}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20797}>
                <Text style={styles.Text_4619_20797}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20798}>
              <View style={styles.View_I4619_20798_3504_15900}>
                <Text style={styles.Text_I4619_20798_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20799}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20799_3818_15434}>
                <Text style={styles.Text_I4619_20799_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed830e0d-35a8-43b7-a9d9-3ecc48f6ef58"
                }}
                style={styles.ImageBackground_I4619_20799_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20800}>
            <View style={styles.View_4619_20801}>
              <View style={styles.View_4619_20802}>
                <Text style={styles.Text_4619_20802}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20803}>
                <Text style={styles.Text_4619_20803}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20804}>
              <View style={styles.View_4619_20805}>
                <Text style={styles.Text_4619_20805}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20806}>
                <Text style={styles.Text_4619_20806}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20807}>
              <View style={styles.View_4619_20808}>
                <Text style={styles.Text_4619_20808}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20809}>
                <Text style={styles.Text_4619_20809}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20810}>
              <View style={styles.View_I4619_20810_3504_15900}>
                <Text style={styles.Text_I4619_20810_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20811}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20811_3818_15434}>
                <Text style={styles.Text_I4619_20811_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/580c1e3d-65c6-4df6-8c0d-feff2e15ab00"
                }}
                style={styles.ImageBackground_I4619_20811_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20812}>
            <View style={styles.View_4619_20813}>
              <View style={styles.View_4619_20814}>
                <Text style={styles.Text_4619_20814}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20815}>
                <Text style={styles.Text_4619_20815}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20816}>
              <View style={styles.View_4619_20817}>
                <Text style={styles.Text_4619_20817}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20818}>
                <Text style={styles.Text_4619_20818}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20819}>
              <View style={styles.View_4619_20820}>
                <Text style={styles.Text_4619_20820}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20821}>
                <Text style={styles.Text_4619_20821}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20822}>
              <View style={styles.View_I4619_20822_3504_15900}>
                <Text style={styles.Text_I4619_20822_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20823}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20823_3818_15434}>
                <Text style={styles.Text_I4619_20823_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8f9f587-6f2a-41c1-90bd-3fd7273758ca"
                }}
                style={styles.ImageBackground_I4619_20823_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20824}>
            <View style={styles.View_4619_20825}>
              <View style={styles.View_4619_20826}>
                <Text style={styles.Text_4619_20826}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20827}>
                <Text style={styles.Text_4619_20827}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20828}>
              <View style={styles.View_4619_20829}>
                <Text style={styles.Text_4619_20829}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20830}>
                <Text style={styles.Text_4619_20830}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20831}>
              <View style={styles.View_4619_20832}>
                <Text style={styles.Text_4619_20832}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20833}>
                <Text style={styles.Text_4619_20833}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20834}>
              <View style={styles.View_I4619_20834_3504_15900}>
                <Text style={styles.Text_I4619_20834_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20835}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20835_3818_15434}>
                <Text style={styles.Text_I4619_20835_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716068f9-cb95-4001-bc04-54f20bee4cd6"
                }}
                style={styles.ImageBackground_I4619_20835_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20836}>
            <View style={styles.View_4619_20837}>
              <View style={styles.View_4619_20838}>
                <Text style={styles.Text_4619_20838}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20839}>
                <Text style={styles.Text_4619_20839}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20840}>
              <View style={styles.View_4619_20841}>
                <Text style={styles.Text_4619_20841}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20842}>
                <Text style={styles.Text_4619_20842}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20843}>
              <View style={styles.View_4619_20844}>
                <Text style={styles.Text_4619_20844}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20845}>
                <Text style={styles.Text_4619_20845}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20846}>
              <View style={styles.View_I4619_20846_3504_15900}>
                <Text style={styles.Text_I4619_20846_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20847}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20847_3818_15434}>
                <Text style={styles.Text_I4619_20847_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55926088-f748-45e2-ac0a-aeb80e9aedb5"
                }}
                style={styles.ImageBackground_I4619_20847_3818_15435}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_4619_20848}>
            <View style={styles.View_4619_20849}>
              <View style={styles.View_4619_20850}>
                <Text style={styles.Text_4619_20850}>Charged on</Text>
              </View>
              <View style={styles.View_4619_20851}>
                <Text style={styles.Text_4619_20851}>25 October 2021</Text>
              </View>
            </View>
            <View style={styles.View_4619_20852}>
              <View style={styles.View_4619_20853}>
                <Text style={styles.Text_4619_20853}>Invoice total</Text>
              </View>
              <View style={styles.View_4619_20854}>
                <Text style={styles.Text_4619_20854}>120€</Text>
              </View>
            </View>
            <View style={styles.View_4619_20855}>
              <View style={styles.View_4619_20856}>
                <Text style={styles.Text_4619_20856}>Total dashboards</Text>
              </View>
              <View style={styles.View_4619_20857}>
                <Text style={styles.Text_4619_20857}>4</Text>
              </View>
            </View>
            <View style={styles.View_4619_20858}>
              <View style={styles.View_I4619_20858_3504_15900}>
                <Text style={styles.Text_I4619_20858_3504_15900}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_4619_20859}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_15442")
                )
              }
            >
              <View style={styles.View_I4619_20859_3818_15434}>
                <Text style={styles.Text_I4619_20859_3818_15434}>
                  View invoice
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff2169f7-909e-4e85-831f-71279ea78eb6"
                }}
                style={styles.ImageBackground_I4619_20859_3818_15435}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("138%") },
  View_3820_17845: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_3820_17845: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17850: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3820_17851: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3820_17851: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17852: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_3820_17852: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17853: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("32%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3820_17854: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3820_17854: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17855: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_3820_17855: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17856: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("32%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3820_17857: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3820_17857: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17858: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_3820_17858: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17860: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("32%"),
    backgroundColor: "rgba(103, 114, 229, 1)",
    overflow: "hidden"
  },
  View_3820_17861: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("-10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3820_17862: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3820_17863: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3820_17880: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3820_17897: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3820_17914: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3820_17931: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3820_17948: {
    width: wp("46%"),
    height: hp("5%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3820_17965: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3820_17966: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3820_17966: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3820_17967: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3820_17967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15754: {
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
  View_I3855_15754_3772_14808: {
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
  TouchableOpacity_I3855_15754_3772_14817: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  ImageBackground_I3855_15754_3772_14817_3772_14718: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3855_15754_3772_14817_3772_14719: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3855_15754_3772_14817_3772_14719: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_15754_3811_18884: {
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
  View_I3855_15754_3811_18884_3760_16721: {
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
  View_I3855_15754_3811_18884_3760_16722: {
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
  Text_I3855_15754_3811_18884_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_15754_3811_18884_3760_16723: {
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
  ImageBackground_I3855_15754_3811_18884_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3855_15754_3772_14811: {
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
  View_3918_19077: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3918_19078: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 238, 252, 1)"
  },
  View_I3918_19078_3777_15624: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I3918_19078_3777_15603: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19078_3777_15603: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3918_19078_3777_15604: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19078_3777_15604: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19079: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(225, 227, 250, 1)"
  },
  View_4619_20773: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4619_20774: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_4619_20774: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20775: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20776: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20777: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20778: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20778: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20779: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20779: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20780: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20781: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20781: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20782: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20782: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20783: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20784: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20784: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20785: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20785: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20786: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(253, 224, 224, 1)"
  },
  View_I4619_20786_3504_15900: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20786_3504_15900: {
    color: "rgba(244, 99, 99, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20787: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20787_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20787_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20787_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20788: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20789: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20790: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20790: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20791: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20791: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20792: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20793: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20793: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20794: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20794: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20795: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20796: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20796: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20797: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20797: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20798: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20798_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20798_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20799: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20799_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20799_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20799_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20800: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20801: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20802: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20802: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20803: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20803: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20804: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20805: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20805: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20806: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20806: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20807: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20808: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20808: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20809: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20809: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20810: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20810_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20810_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20811: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20811_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20811_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20811_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20812: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20813: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20814: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20814: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20815: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20815: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20816: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20817: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20817: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20818: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20818: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20819: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20820: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20820: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20821: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20821: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20822: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20822_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20822_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20823: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20823_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20823_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20823_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20824: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20825: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20826: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20826: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20827: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20827: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20828: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20829: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20829: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20830: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20830: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20831: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20832: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20832: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20833: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20833: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20834: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20834_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20834_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20835: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20835_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20835_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20835_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20836: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20837: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20838: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20838: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20839: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20839: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20840: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20841: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20841: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20842: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20843: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20844: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20844: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20845: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20845: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20846: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20846_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20846_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20847: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20847_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20847_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20847_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_4619_20848: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20849: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20850: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20850: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20851: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20851: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20852: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20853: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20853: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20854: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20854: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20855: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20856: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4619_20856: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20857: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4619_20857: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20858: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(223, 249, 230, 1)"
  },
  View_I4619_20858_3504_15900: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20858_3504_15900: {
    color: "rgba(95, 224, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4619_20859: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I4619_20859_3818_15434: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4619_20859_3818_15434: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4619_20859_3818_15435: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
