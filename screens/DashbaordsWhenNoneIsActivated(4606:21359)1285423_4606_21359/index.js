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
      <View style={styles.View_4606_21360}>
        <View style={styles.View_I4606_21360_3772_14775}>
          <View style={styles.View_I4606_21360_6340_21442}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/734ba25d-981e-4401-a99c-7c2dacf5c6ae"
              }}
              style={styles.ImageBackground_I4606_21360_6340_21443}
            />
            <View style={styles.View_I4606_21360_6340_21444}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbda62d7-0a08-46b9-8f24-1699cc7cc60d"
                }}
                style={styles.ImageBackground_I4606_21360_6340_21445}
              />
              <View style={styles.View_I4606_21360_6340_21446} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I4606_21360_3811_18578}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I4606_21360_3811_18578_3760_16721}>
              <View style={styles.View_I4606_21360_3811_18578_3760_16722}>
                <Text style={styles.Text_I4606_21360_3811_18578_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a56075e-9a83-4384-9d45-0360cdedc35f"
                }}
                style={styles.ImageBackground_I4606_21360_3811_18578_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad2b17d5-a0b5-46f8-85b2-49fd64d8eaab"
              }}
              style={styles.ImageBackground_I4606_21360_3811_18578_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I4606_21360_3772_14778} />
      </View>
      <View style={styles.View_4606_21475}>
        <View style={styles.View_4606_21476}>
          <Text style={styles.Text_4606_21476}>Browse all dashboards</Text>
        </View>
        <View style={styles.View_4606_21477}>
          <TouchableOpacity
            style={styles.TouchableOpacity_4606_21478}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3809_16212"))
            }
          >
            <View style={styles.View_4606_21479}>
              <View style={styles.View_4606_21480} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf1cbdb-acbb-44f3-ac76-d9624523ac62"
                }}
                style={styles.ImageBackground_4606_21481}
              />
            </View>
            <View style={styles.View_4606_21482}>
              <View style={styles.View_4606_21483}>
                <View style={styles.View_4606_21484}>
                  <Text style={styles.Text_4606_21484}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21485}>
                  <Text style={styles.Text_4606_21485}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_4606_21486}>
            <View style={styles.View_4606_21487}>
              <View style={styles.View_4606_21488} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84516463-c066-4dbc-bb41-8862ff3a8cc8"
                }}
                style={styles.ImageBackground_4606_21489}
              />
            </View>
            <View style={styles.View_4606_21490}>
              <View style={styles.View_4606_21491}>
                <View style={styles.View_4606_21492}>
                  <Text style={styles.Text_4606_21492}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21493}>
                  <Text style={styles.Text_4606_21493}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4606_21494}>
            <View style={styles.View_4606_21495}>
              <View style={styles.View_4606_21496} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1f540aa-b812-431b-9494-b72e9e95171d"
                }}
                style={styles.ImageBackground_4606_21497}
              />
            </View>
            <View style={styles.View_4606_21498}>
              <View style={styles.View_4606_21499}>
                <View style={styles.View_4606_21500}>
                  <Text style={styles.Text_4606_21500}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21501}>
                  <Text style={styles.Text_4606_21501}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4606_21502}>
            <View style={styles.View_4606_21503}>
              <View style={styles.View_4606_21504} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77391329-2bad-45ec-b4a6-804123957e79"
                }}
                style={styles.ImageBackground_4606_21505}
              />
            </View>
            <View style={styles.View_4606_21506}>
              <View style={styles.View_4606_21507}>
                <View style={styles.View_4606_21508}>
                  <Text style={styles.Text_4606_21508}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21509}>
                  <Text style={styles.Text_4606_21509}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4606_21510}>
          <View style={styles.View_4606_21511}>
            <View style={styles.View_4606_21512}>
              <View style={styles.View_4606_21513} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89433eee-789a-4b55-9d45-a3d38d3638d0"
                }}
                style={styles.ImageBackground_4606_21514}
              />
            </View>
            <View style={styles.View_4606_21515}>
              <View style={styles.View_4606_21516}>
                <View style={styles.View_4606_21517}>
                  <Text style={styles.Text_4606_21517}>
                    Food &amp; Drink Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21518}>
                  <Text style={styles.Text_4606_21518}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4606_21519}>
            <View style={styles.View_4606_21520}>
              <View style={styles.View_4606_21521} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b7c955c-b428-45ab-b712-f5ff7779abcd"
                }}
                style={styles.ImageBackground_4606_21522}
              />
            </View>
            <View style={styles.View_4606_21523}>
              <View style={styles.View_4606_21524}>
                <View style={styles.View_4606_21525}>
                  <Text style={styles.Text_4606_21525}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21526}>
                  <Text style={styles.Text_4606_21526}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4606_21527}>
            <View style={styles.View_4606_21528}>
              <View style={styles.View_4606_21529} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7da57a2-6697-4624-9b27-e212773a7f61"
                }}
                style={styles.ImageBackground_4606_21530}
              />
            </View>
            <View style={styles.View_4606_21531}>
              <View style={styles.View_4606_21532}>
                <View style={styles.View_4606_21533}>
                  <Text style={styles.Text_4606_21533}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21534}>
                  <Text style={styles.Text_4606_21534}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4606_21535}>
            <View style={styles.View_4606_21536}>
              <View style={styles.View_4606_21537} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1875d672-422f-4fe5-bc67-1a234d45441c"
                }}
                style={styles.ImageBackground_4606_21538}
              />
            </View>
            <View style={styles.View_4606_21539}>
              <View style={styles.View_4606_21540}>
                <View style={styles.View_4606_21541}>
                  <Text style={styles.Text_4606_21541}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_4606_21542}>
                  <Text style={styles.Text_4606_21542}>
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
  View_4606_21360: {
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
  View_I4606_21360_3772_14775: {
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
  View_I4606_21360_6340_21442: {
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
  ImageBackground_I4606_21360_6340_21443: {
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
  View_I4606_21360_6340_21444: {
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
  ImageBackground_I4606_21360_6340_21445: {
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
  View_I4606_21360_6340_21446: {
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
  TouchableOpacity_I4606_21360_3811_18578: {
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
  View_I4606_21360_3811_18578_3760_16721: {
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
  View_I4606_21360_3811_18578_3760_16722: {
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
  Text_I4606_21360_3811_18578_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I4606_21360_3811_18578_3760_16723: {
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
  ImageBackground_I4606_21360_3811_18578_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I4606_21360_3772_14778: {
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
  View_4606_21475: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4606_21476: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_4606_21476: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21477: {
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
  TouchableOpacity_4606_21478: {
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
  View_4606_21479: {
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
  View_4606_21480: {
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
  ImageBackground_4606_21481: {
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
  View_4606_21482: {
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
  View_4606_21483: {
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
  View_4606_21484: {
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
  Text_4606_21484: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21485: {
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
  Text_4606_21485: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21486: {
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
  View_4606_21487: {
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
  View_4606_21488: {
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
  ImageBackground_4606_21489: {
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
  View_4606_21490: {
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
  View_4606_21491: {
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
  View_4606_21492: {
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
  Text_4606_21492: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21493: {
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
  Text_4606_21493: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21494: {
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
  View_4606_21495: {
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
  View_4606_21496: {
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
  ImageBackground_4606_21497: {
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
  View_4606_21498: {
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
  View_4606_21499: {
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
  View_4606_21500: {
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
  Text_4606_21500: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21501: {
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
  Text_4606_21501: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21502: {
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
  View_4606_21503: {
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
  View_4606_21504: {
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
  ImageBackground_4606_21505: {
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
  View_4606_21506: {
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
  View_4606_21507: {
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
  View_4606_21508: {
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
  Text_4606_21508: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21509: {
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
  Text_4606_21509: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21510: {
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
  View_4606_21511: {
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
  View_4606_21512: {
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
  View_4606_21513: {
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
  ImageBackground_4606_21514: {
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
  View_4606_21515: {
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
  View_4606_21516: {
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
  View_4606_21517: {
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
  Text_4606_21517: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21518: {
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
  Text_4606_21518: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21519: {
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
  View_4606_21520: {
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
  View_4606_21521: {
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
  ImageBackground_4606_21522: {
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
  View_4606_21523: {
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
  View_4606_21524: {
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
  View_4606_21525: {
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
  Text_4606_21525: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21526: {
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
  Text_4606_21526: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21527: {
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
  View_4606_21528: {
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
  View_4606_21529: {
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
  ImageBackground_4606_21530: {
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
  View_4606_21531: {
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
  View_4606_21532: {
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
  View_4606_21533: {
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
  Text_4606_21533: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21534: {
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
  Text_4606_21534: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21535: {
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
  View_4606_21536: {
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
  View_4606_21537: {
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
  ImageBackground_4606_21538: {
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
  View_4606_21539: {
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
  View_4606_21540: {
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
  View_4606_21541: {
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
  Text_4606_21541: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4606_21542: {
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
  Text_4606_21542: {
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
