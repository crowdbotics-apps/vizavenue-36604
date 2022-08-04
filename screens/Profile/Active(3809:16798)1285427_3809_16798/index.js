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
      <View style={styles.View_3832_15760}>
        <View style={styles.View_3811_17551}>
          <View style={styles.View_3855_17403}>
            <View style={styles.View_3855_17404}>
              <Text style={styles.Text_3855_17404}>User informations</Text>
            </View>
          </View>
          <View style={styles.View_3811_17573}>
            <View style={styles.View_3811_17552}>
              <View style={styles.View_3811_17554}>
                <View style={styles.View_I3811_17554_3441_10933}>
                  <View style={styles.View_I3811_17554_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3811_17554_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3811_17554_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Email
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3811_17554_3350_3750}>
                  <View style={styles.View_I3811_17554_3350_3750_3350_3739}>
                    <View style={styles.View_I3811_17554_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3811_17554_3350_3750_3350_3741}>
                        sebastien@vizavenue.be
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3811_17553}>
                <View style={styles.View_I3811_17553_3441_10933}>
                  <View style={styles.View_I3811_17553_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3811_17553_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3811_17553_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Company name
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3811_17553_3350_3750}>
                  <View style={styles.View_I3811_17553_3350_3750_3350_3739}>
                    <View style={styles.View_I3811_17553_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3811_17553_3350_3750_3350_3741}>
                        Vizavenue
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3811_17550}>
              <View style={styles.View_3811_17420}>
                <View style={styles.View_I3811_17420_3450_11490}>
                  <View style={styles.View_I3811_17420_3450_11490_3441_10898}>
                    <View
                      style={
                        styles.View_I3811_17420_3450_11490_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3811_17420_3450_11490_3441_10898_3441_10878
                        }
                      >
                        Your industry
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3811_17420_3350_4154}>
                  <View style={styles.View_I3811_17420_3350_4154_3350_4073}>
                    <View style={styles.View_I3811_17420_3350_4154_3350_4075}>
                      <Text style={styles.Text_I3811_17420_3350_4154_3350_4075}>
                        Manufacturing
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c353a57-0d23-4571-b4a0-717609270f34"
                    }}
                    style={
                      styles.ImageBackground_I3811_17420_3350_4154_3350_4077
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_20316}>
          <View style={styles.View_3855_20317}>
            <View style={styles.View_3855_20318}>
              <Text style={styles.Text_3855_20318}>Reset password</Text>
            </View>
          </View>
          <View style={styles.View_3855_20319}>
            <View style={styles.View_3855_20320}>
              <View style={styles.View_I3855_20320_3441_10933}>
                <View style={styles.View_I3855_20320_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_20320_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_20320_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Current password
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_20320_3350_3750}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3855_15780")
                  )
                }
              >
                <View style={styles.View_I3855_20320_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_20320_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_20320_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_3855_20321}>
              <View style={styles.View_I3855_20321_3441_10933}>
                <View style={styles.View_I3855_20321_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_20321_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_20321_3441_10933_3441_10898_3441_10878
                      }
                    >
                      New password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_20321_3350_3750}>
                <View style={styles.View_I3855_20321_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_20321_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_20321_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_20322}>
            <View style={styles.View_3855_20323}>
              <View style={styles.View_I3855_20323_3441_10933}>
                <View style={styles.View_I3855_20323_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_20323_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_20323_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Confirm new password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_20323_3350_3750}>
                <View style={styles.View_I3855_20323_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_20323_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_20323_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_19783}>
          <View style={styles.View_4619_20761}>
            <View style={styles.View_4619_20762}>
              <Text style={styles.Text_4619_20762}>Payment Method</Text>
            </View>
            <View style={styles.View_4619_20763}>
              <Text style={styles.Text_4619_20763}>(Only credit card)</Text>
            </View>
          </View>
          <View style={styles.View_3855_19785}>
            <View style={styles.View_3855_19786}>
              <View style={styles.View_3855_19787}>
                <View style={styles.View_I3855_19787_3441_10933}>
                  <View style={styles.View_I3855_19787_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_19787_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_19787_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Card number
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_19787_3350_3750}>
                  <View style={styles.View_I3855_19787_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_19787_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_19787_3350_3750_3350_3741}>
                        Insert card number
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_19788}>
                <View style={styles.View_I3855_19788_3450_15060}>
                  <View style={styles.View_I3855_19788_3450_15060_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_19788_3450_15060_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_19788_3450_15060_3441_10898_3441_10878
                        }
                      >
                        Country
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_19788_3416_14727}>
                  <View style={styles.View_I3855_19788_3416_14727_3416_14663}>
                    <View
                      style={
                        styles.View_I3855_19788_3416_14727_3416_14663_3416_8357
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_19788_3416_14727_3416_14663_3416_8358
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_19788_3416_14727_3416_14663_3416_8359
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_19788_3416_14727_3416_14663_3416_8360
                      }
                    />
                  </View>
                  <View style={styles.View_I3855_19788_3416_14727_3416_14664}>
                    <View style={styles.View_I3855_19788_3416_14727_3416_14666}>
                      <Text
                        style={styles.Text_I3855_19788_3416_14727_3416_14666}
                      >
                        Belgium
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f6eacca-c665-40fb-9591-9a982dfb0c9c"
                    }}
                    style={
                      styles.ImageBackground_I3855_19788_3416_14727_3416_14668
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_3855_19789}>
              <View style={styles.View_3855_19790}>
                <View style={styles.View_I3855_19790_3441_10933}>
                  <View style={styles.View_I3855_19790_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_19790_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_19790_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Valid until
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_19790_3350_3750}>
                  <View style={styles.View_I3855_19790_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_19790_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_19790_3350_3750_3350_3741}>
                        MM/AA
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_19791}>
                <View style={styles.View_I3855_19791_3441_10933}>
                  <View style={styles.View_I3855_19791_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_19791_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_19791_3441_10933_3441_10898_3441_10878
                        }
                      >
                        CVV
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_19791_3350_3750}>
                  <View style={styles.View_I3855_19791_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_19791_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_19791_3350_3750_3350_3741}>
                        Insert CVV
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_19792}>
          <View style={styles.View_3855_19793}>
            <Text style={styles.Text_3855_19793}>Choose your Odoo modules</Text>
          </View>
          <View style={styles.View_3855_19794}>
            <View style={styles.View_3855_19795}>
              <View style={styles.View_3855_19796}>
                <View style={styles.View_3855_19797}>
                  <View style={styles.View_3855_19798}>
                    <View style={styles.View_3855_19799}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0db43bc-73c3-4623-b090-430b385a87ca"
                        }}
                        style={styles.ImageBackground_3855_19800}
                      />
                    </View>
                    <View style={styles.View_3855_19801}>
                      <Text style={styles.Text_3855_19801}>Sales</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_19802}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/923071da-3931-40f0-827e-f409df85c738"
                      }}
                      style={styles.ImageBackground_I3855_19802_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b1001bf-9c49-478b-b2ba-dfef16c28956"
                      }}
                      style={styles.ImageBackground_I3855_19802_3777_15879}
                    />
                  </View>
                </View>
                <View style={styles.View_3855_19803}>
                  <View style={styles.View_3855_19804}>
                    <View style={styles.View_3855_19805}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aff4378d-295d-498f-996f-489babeb2b5b"
                        }}
                        style={styles.ImageBackground_3855_19806}
                      />
                    </View>
                    <View style={styles.View_3855_19807}>
                      <Text style={styles.Text_3855_19807}>Inventory</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_19808}>
              <View style={styles.View_3855_19809}>
                <View style={styles.View_3855_19810}>
                  <View style={styles.View_3855_19811}>
                    <View style={styles.View_3855_19812}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efa9e917-349d-4992-975d-8a652c0b3826"
                        }}
                        style={styles.ImageBackground_3855_19813}
                      />
                    </View>
                    <View style={styles.View_3855_19814}>
                      <Text style={styles.Text_3855_19814}>Accounting</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_3855_19815}>
                  <View style={styles.View_3855_19816}>
                    <View style={styles.View_3855_19817}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c62dfa1-aec2-4d92-93e3-2f1d72b4de5a"
                        }}
                        style={styles.ImageBackground_3855_19818}
                      />
                    </View>
                    <View style={styles.View_3855_19819}>
                      <Text style={styles.Text_3855_19819}>Purchase</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_19820}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5df58259-5201-4049-9af9-0ff21f9ae7a5"
                      }}
                      style={styles.ImageBackground_I3855_19820_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51cf4cf8-e95c-41ab-9ff1-ba26efafb8c4"
                      }}
                      style={styles.ImageBackground_I3855_19820_3777_15879}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_19821}>
              <View style={styles.View_3855_19822}>
                <View style={styles.View_3855_19823}>
                  <View style={styles.View_3855_19824}>
                    <View style={styles.View_3855_19825}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef44a8f-665f-4b53-a931-8a33f8b905b4"
                        }}
                        style={styles.ImageBackground_3855_19826}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c6b21b7-bdef-4ec1-835b-d1e617b2964f"
                        }}
                        style={styles.ImageBackground_3855_19827}
                      />
                    </View>
                  </View>
                  <View style={styles.View_3855_19831}>
                    <Text style={styles.Text_3855_19831}>Others</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_19096}>
        <View style={styles.View_3855_19097}>
          <View style={styles.View_3855_19098}>
            <Text style={styles.Text_3855_19098}>Dashboard history </Text>
          </View>
          <View style={styles.View_3855_19099}>
            <View style={styles.View_I3855_19099_3820_16855}>
              <View style={styles.View_I3855_19099_3820_16856}>
                <Text style={styles.Text_I3855_19099_3820_16856}>Active</Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19099_3820_16857}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3820_17430")
                  )
                }
              >
                <Text style={styles.Text_I3855_19099_3820_16857}>Expired</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.View_I3855_19099_3820_16861}>
              <View style={styles.View_I3855_19099_3820_16862} />
              <View style={styles.View_I3855_19099_3820_16863} />
            </View>
          </View>
        </View>
        <View style={styles.View_3855_19100}>
          <View style={styles.View_3855_19101}>
            <View style={styles.View_3855_19102}>
              <View style={styles.View_3855_19103}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51668585-2be4-4945-a50c-8f264a5d097c"
                  }}
                  style={styles.ImageBackground_3855_19104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b28e856a-586d-466f-ba5d-f538971f282e"
                  }}
                  style={styles.ImageBackground_3855_19105}
                />
              </View>
              <View style={styles.View_3855_19106}>
                <View style={styles.View_3855_19107}>
                  <Text style={styles.Text_3855_19107}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19108}>
                  <Text style={styles.Text_3855_19108}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19109}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19109_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19109_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19109_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19109_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a048476-ddb1-449e-b7df-911511ca88bc"
                        }}
                        style={
                          styles.ImageBackground_I3855_19109_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7862f86-7c1b-4026-ba77-a9c604cd91b2"
                        }}
                        style={
                          styles.ImageBackground_I3855_19109_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb39d7be-1b33-45ef-9fdd-63c10075ad87"
                      }}
                      style={
                        styles.ImageBackground_I3855_19109_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8259a60-3514-4711-8137-7cce091e46f8"
                  }}
                  style={
                    styles.ImageBackground_I3855_19109_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19110}>
            <View style={styles.View_3855_19111}>
              <View style={styles.View_3855_19112}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9ba3d27-7b85-4ef1-a46b-209d7ecd1e00"
                  }}
                  style={styles.ImageBackground_3855_19113}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28784050-8797-45cc-bf81-055c20f1bedc"
                  }}
                  style={styles.ImageBackground_3855_19114}
                />
              </View>
              <View style={styles.View_3855_19115}>
                <View style={styles.View_3855_19116}>
                  <Text style={styles.Text_3855_19116}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19117}>
                  <Text style={styles.Text_3855_19117}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19118}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19118_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19118_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19118_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19118_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fa515e3-287b-4639-b713-2c3d05186379"
                        }}
                        style={
                          styles.ImageBackground_I3855_19118_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81fb880e-4eb4-4bcd-ad0a-7c640e324a83"
                        }}
                        style={
                          styles.ImageBackground_I3855_19118_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0bc540d-7c1d-471c-9670-006d01d83b1d"
                      }}
                      style={
                        styles.ImageBackground_I3855_19118_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c81db20-4435-4371-a80e-e39c455230a3"
                  }}
                  style={
                    styles.ImageBackground_I3855_19118_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19119}>
            <View style={styles.View_3855_19120}>
              <View style={styles.View_3855_19121}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8efdf49d-49fc-4677-844f-7821e07b0928"
                  }}
                  style={styles.ImageBackground_3855_19122}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea8a9709-8c28-447f-b3fc-99bc666cdcc2"
                  }}
                  style={styles.ImageBackground_3855_19123}
                />
              </View>
              <View style={styles.View_3855_19124}>
                <View style={styles.View_3855_19125}>
                  <Text style={styles.Text_3855_19125}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19126}>
                  <Text style={styles.Text_3855_19126}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19127}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19127_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19127_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19127_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19127_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2261d6e-b1e5-4d57-895c-949fc3094b36"
                        }}
                        style={
                          styles.ImageBackground_I3855_19127_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cde91bb-11fc-48c8-8f7d-8e76c6959cfe"
                        }}
                        style={
                          styles.ImageBackground_I3855_19127_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb3a05bc-0cfd-4b50-8a36-ead8a7d453d4"
                      }}
                      style={
                        styles.ImageBackground_I3855_19127_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6675e106-30a0-41b2-8faa-2c405d07af7e"
                  }}
                  style={
                    styles.ImageBackground_I3855_19127_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19128}>
            <View style={styles.View_3855_19129}>
              <View style={styles.View_3855_19130}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/987b1d99-1405-4c8f-b2c7-39a926d0d466"
                  }}
                  style={styles.ImageBackground_3855_19131}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/263282c9-39bc-484e-b1aa-9c1d2cb42470"
                  }}
                  style={styles.ImageBackground_3855_19132}
                />
              </View>
              <View style={styles.View_3855_19133}>
                <View style={styles.View_3855_19134}>
                  <Text style={styles.Text_3855_19134}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19135}>
                  <Text style={styles.Text_3855_19135}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19136}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19136_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19136_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19136_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19136_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6911ff34-19ef-44c0-a4eb-994a330051e1"
                        }}
                        style={
                          styles.ImageBackground_I3855_19136_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a19dd37-0114-4fb5-ba24-25ed06598c87"
                        }}
                        style={
                          styles.ImageBackground_I3855_19136_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7d2a57e-d6c2-49a2-898c-37e8e1544b5f"
                      }}
                      style={
                        styles.ImageBackground_I3855_19136_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fabb620-0afd-4fab-9b09-35d47dafa35c"
                  }}
                  style={
                    styles.ImageBackground_I3855_19136_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19137}>
            <View style={styles.View_3855_19138}>
              <View style={styles.View_3855_19139}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1617446b-1084-4f6c-8b64-8f04acd1cccd"
                  }}
                  style={styles.ImageBackground_3855_19140}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e1f7c9-f9fd-46ae-95a6-f654d6de6bfc"
                  }}
                  style={styles.ImageBackground_3855_19141}
                />
              </View>
              <View style={styles.View_3855_19142}>
                <View style={styles.View_3855_19143}>
                  <Text style={styles.Text_3855_19143}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19144}>
                  <Text style={styles.Text_3855_19144}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19145}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19145_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19145_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19145_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19145_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3e8d61f-5014-4240-b037-f2efad14e4ec"
                        }}
                        style={
                          styles.ImageBackground_I3855_19145_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5733466a-9dc7-4f1a-8a3a-8fc25be123d2"
                        }}
                        style={
                          styles.ImageBackground_I3855_19145_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c1b4772-a5df-4e32-9b41-d05c4b18cf15"
                      }}
                      style={
                        styles.ImageBackground_I3855_19145_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2eb37c6a-720e-4f7d-9743-a541f0c2afe6"
                  }}
                  style={
                    styles.ImageBackground_I3855_19145_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19146}>
            <View style={styles.View_3855_19147}>
              <View style={styles.View_3855_19148}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcac1c9d-ee31-450d-b586-7932be93a57c"
                  }}
                  style={styles.ImageBackground_3855_19149}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cb1a454-ad14-4ffb-b77c-96798e8810a7"
                  }}
                  style={styles.ImageBackground_3855_19150}
                />
              </View>
              <View style={styles.View_3855_19151}>
                <View style={styles.View_3855_19152}>
                  <Text style={styles.Text_3855_19152}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19153}>
                  <Text style={styles.Text_3855_19153}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19154}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19154_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19154_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19154_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19154_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/673b89c7-0e64-42cc-9d86-b5dac44f1f44"
                        }}
                        style={
                          styles.ImageBackground_I3855_19154_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f4dbb0d-2a9b-49a0-99c1-1cd99f4ba58a"
                        }}
                        style={
                          styles.ImageBackground_I3855_19154_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fd2e8f0-fc06-4111-8992-97fcd8c31606"
                      }}
                      style={
                        styles.ImageBackground_I3855_19154_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b80dbcd3-eb76-4616-ab41-a1afed51f92e"
                  }}
                  style={
                    styles.ImageBackground_I3855_19154_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19155}>
            <View style={styles.View_3855_19156}>
              <View style={styles.View_3855_19157}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a30b5709-c7fd-4e9c-8e09-5c62f2485ea9"
                  }}
                  style={styles.ImageBackground_3855_19158}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d9e516e-18ec-421b-abe6-01624bc1fac0"
                  }}
                  style={styles.ImageBackground_3855_19159}
                />
              </View>
              <View style={styles.View_3855_19160}>
                <View style={styles.View_3855_19161}>
                  <Text style={styles.Text_3855_19161}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19162}>
                  <Text style={styles.Text_3855_19162}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19163}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19163_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19163_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19163_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19163_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/030823c8-7d78-42b1-b12b-5cb6dfb7aa6e"
                        }}
                        style={
                          styles.ImageBackground_I3855_19163_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17c3d171-616a-4059-aebb-245a1627982d"
                        }}
                        style={
                          styles.ImageBackground_I3855_19163_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92e1a05a-7962-4c77-96e9-4c53ef2ee011"
                      }}
                      style={
                        styles.ImageBackground_I3855_19163_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5f756d2-b973-4257-a0b5-5c234365f3bb"
                  }}
                  style={
                    styles.ImageBackground_I3855_19163_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19164}>
            <View style={styles.View_3855_19165}>
              <View style={styles.View_3855_19166}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cdac35b-5440-468c-88a9-79159655e3a9"
                  }}
                  style={styles.ImageBackground_3855_19167}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32c21862-d307-4871-941a-748b64f1b2f2"
                  }}
                  style={styles.ImageBackground_3855_19168}
                />
              </View>
              <View style={styles.View_3855_19169}>
                <View style={styles.View_3855_19170}>
                  <Text style={styles.Text_3855_19170}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19171}>
                  <Text style={styles.Text_3855_19171}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19172}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19172_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19172_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19172_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19172_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db5bd222-51e7-4d3a-8b4b-9960a2e203ea"
                        }}
                        style={
                          styles.ImageBackground_I3855_19172_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a38fd3b7-e293-4708-bffc-98087d34958c"
                        }}
                        style={
                          styles.ImageBackground_I3855_19172_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/164ea81f-b8e8-49ab-a674-783236ae2c32"
                      }}
                      style={
                        styles.ImageBackground_I3855_19172_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5a831ec-ad04-490d-ba88-88754acf8762"
                  }}
                  style={
                    styles.ImageBackground_I3855_19172_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_19358}>
        <View style={styles.View_I3855_19358_3772_14808}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19358_3772_14817}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3772_14725"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e3d09a8-8101-4d43-a62d-3cda9e356a34"
              }}
              style={styles.ImageBackground_I3855_19358_3772_14817_3772_14718}
            />
            <View style={styles.View_I3855_19358_3772_14817_3772_14719}>
              <Text style={styles.Text_I3855_19358_3772_14817_3772_14719}>
                Back to my workspace
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19358_3811_18884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3855_19358_3811_18884_3760_16721}>
              <View style={styles.View_I3855_19358_3811_18884_3760_16722}>
                <Text style={styles.Text_I3855_19358_3811_18884_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee9be21-4c88-4bfd-9a05-9457d9cd9651"
                }}
                style={styles.ImageBackground_I3855_19358_3811_18884_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/944ce6e4-db8b-4a7a-b92e-effb84974b39"
              }}
              style={styles.ImageBackground_I3855_19358_3811_18884_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3855_19358_3772_14811} />
      </View>
      <View style={styles.View_3918_19089}>
        <View style={styles.View_3918_19090}>
          <View style={styles.View_I3918_19090_3777_15619}>
            <View style={styles.View_I3918_19090_3777_15578}>
              <Text style={styles.Text_I3918_19090_3777_15578}>Profile</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I3918_19090_3777_15580}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_16208")
                )
              }
            >
              <Text style={styles.Text_I3918_19090_3777_15580}>Billing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_3918_19091} />
      </View>
      <View style={styles.View_3918_19113}>
        <Text style={styles.Text_3918_19113}>Profile</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_3855_17020}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3855_17029"))
        }
      >
        <View style={styles.View_I3855_17020_3855_16981}>
          <View style={styles.View_I3855_17020_3855_16982}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d319652d-f751-49eb-932c-0549238b07a0"
              }}
              style={styles.ImageBackground_I3855_17020_3855_16983}
            />
            <View style={styles.View_I3855_17020_3855_16984}>
              <Text style={styles.Text_I3855_17020_3855_16984}>Success</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee91c878-8d75-4bf5-b0d6-4b088dc20e28"
            }}
            style={styles.ImageBackground_I3855_17020_3855_16985}
          />
        </View>
        <View style={styles.View_I3855_17020_3855_16986}>
          <Text style={styles.Text_I3855_17020_3855_16986}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh at
            in purus scelerisque metus. Interdum non sit interdum mauris, id
            nulla sed neque.{" "}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("214%") },
  View_3832_15760: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("169%"),
    minHeight: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_17551: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_17403: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_17404: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3855_17404: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_17573: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_17552: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_17554: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17554_3441_10933: {
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
  View_I3811_17554_3441_10933_3441_10898: {
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
  View_I3811_17554_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_17554_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_17554_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_17554_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17554_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_17554_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_17553: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17553_3441_10933: {
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
  View_I3811_17553_3441_10933_3441_10898: {
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
  View_I3811_17553_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_17553_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_17553_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_17553_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17553_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_17553_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_17550: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_17420: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17420_3450_11490: {
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
  View_I3811_17420_3450_11490_3441_10898: {
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
  View_I3811_17420_3450_11490_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3811_17420_3450_11490_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3811_17420_3350_4154: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3811_17420_3350_4154_3350_4073: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3811_17420_3350_4154_3350_4075: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3811_17420_3350_4154_3350_4075: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3811_17420_3350_4154_3350_4077: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%")
  },
  View_3855_20316: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_20317: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_20318: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3855_20318: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_20319: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_20320: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20320_3441_10933: {
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
  View_I3855_20320_3441_10933_3441_10898: {
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
  View_I3855_20320_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_20320_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_20320_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_20320_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20320_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_20320_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_20321: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20321_3441_10933: {
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
  View_I3855_20321_3441_10933_3441_10898: {
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
  View_I3855_20321_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_20321_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_20321_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_20321_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20321_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_20321_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_20322: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_20323: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20323_3441_10933: {
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
  View_I3855_20323_3441_10933_3441_10898: {
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
  View_I3855_20323_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_20323_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_20323_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_20323_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_20323_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_20323_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19783: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4619_20761: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4619_20762: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4619_20762: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20763: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4619_20763: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19785: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19786: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19787: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19787_3441_10933: {
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
  View_I3855_19787_3441_10933_3441_10898: {
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
  View_I3855_19787_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19787_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19787_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_19787_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19787_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_19787_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19788: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19788_3450_15060: {
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
  View_I3855_19788_3450_15060_3441_10898: {
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
  View_I3855_19788_3450_15060_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19788_3450_15060_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19788_3416_14727: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_19788_3416_14727_3416_14663: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19788_3416_14727_3416_14663_3416_8357: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I3855_19788_3416_14727_3416_14663_3416_8358: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 22, 22, 1)"
  },
  View_I3855_19788_3416_14727_3416_14663_3416_8359: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 231, 103, 1)"
  },
  View_I3855_19788_3416_14727_3416_14663_3416_8360: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 63, 63, 1)"
  },
  View_I3855_19788_3416_14727_3416_14664: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19788_3416_14727_3416_14666: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_19788_3416_14727_3416_14666: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_19788_3416_14727_3416_14668: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%")
  },
  View_3855_19789: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19790: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19790_3441_10933: {
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
  View_I3855_19790_3441_10933_3441_10898: {
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
  View_I3855_19790_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19790_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19790_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_19790_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19790_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_19790_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19791: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19791_3441_10933: {
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
  View_I3855_19791_3441_10933_3441_10898: {
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
  View_I3855_19791_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19791_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19791_3350_3750: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I3855_19791_3350_3750_3350_3739: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19791_3350_3750_3350_3741: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3855_19791_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19792: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_19793: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3855_19793: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19794: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19795: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19796: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19797: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  View_3855_19798: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19799: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 162, 79, 1)"
  },
  ImageBackground_3855_19800: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_19801: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3855_19801: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19802: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3855_19802_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19802_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_19803: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  View_3855_19804: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19805: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(227, 84, 84, 1)"
  },
  ImageBackground_3855_19806: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_19807: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3855_19807: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19808: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19809: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19810: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  View_3855_19811: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19812: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 105, 167, 1)"
  },
  ImageBackground_3855_19813: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_19814: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3855_19814: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19815: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  View_3855_19816: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19817: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(79, 150, 234, 1)"
  },
  ImageBackground_3855_19818: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_19819: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3855_19819: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19820: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3855_19820_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19820_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_19821: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19822: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  View_3855_19823: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19824: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 114, 229, 1)"
  },
  View_3855_19825: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3855_19826: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3855_19827: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3855_19831: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3855_19831: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19096: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3855_19097: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19098: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3855_19098: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19099: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19099_3820_16855: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_19099_3820_16856: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19099_3820_16856: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19099_3820_16857: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I3855_19099_3820_16857: {
    color: "rgba(174, 173, 183, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19099_3820_16861: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I3855_19099_3820_16862: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 234, 240, 1)"
  },
  View_I3855_19099_3820_16863: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 50, 75, 1)"
  },
  View_3855_19100: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19101: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19102: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19103: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19104: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19106: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19107: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19107: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19108: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19108: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19109: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19109_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19109_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19109_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19109_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19109_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19109_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19109_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19109_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19110: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19111: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19112: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19113: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19114: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19115: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19116: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19116: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19117: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19117: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19118: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19118_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19118_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19118_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19118_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19118_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19118_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19118_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19118_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19119: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19120: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19121: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19122: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19123: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19124: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19125: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19125: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19126: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19126: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19127: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19127_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19127_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19127_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19127_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19127_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19127_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19127_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19127_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19128: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19129: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19130: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19133: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19134: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19134: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19135: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19135: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19136: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19136_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19136_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19136_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19136_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19136_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19136_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19136_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19136_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19137: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19138: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19139: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19140: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19141: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19142: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19143: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19143: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19144: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19144: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19145: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19145_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19145_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19145_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19145_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19145_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19145_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19145_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19145_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19146: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19147: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19148: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19149: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19150: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19151: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19152: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19152: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19153: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19153: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19154: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19154_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19154_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19154_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19154_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19154_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19154_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19154_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19154_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19155: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19156: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19157: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19158: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19159: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19160: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19161: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19161: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19162: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19162: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19163: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19163_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19163_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19163_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19163_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19163_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19163_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19163_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19163_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19164: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19165: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19166: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3855_19167: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3855_19168: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3855_19169: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3855_19170: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3855_19170: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19171: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3855_19171: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19172: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_19172_3855_17664: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3855_19172_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19172_3855_17664_3832_15548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19172_3855_17664_3832_15544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_19172_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19172_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19172_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19172_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19358: {
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
  View_I3855_19358_3772_14808: {
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
  TouchableOpacity_I3855_19358_3772_14817: {
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
  ImageBackground_I3855_19358_3772_14817_3772_14718: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3855_19358_3772_14817_3772_14719: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3855_19358_3772_14817_3772_14719: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19358_3811_18884: {
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
  View_I3855_19358_3811_18884_3760_16721: {
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
  View_I3855_19358_3811_18884_3760_16722: {
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
  Text_I3855_19358_3811_18884_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_19358_3811_18884_3760_16723: {
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
  ImageBackground_I3855_19358_3811_18884_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3855_19358_3772_14811: {
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
  View_3918_19089: {
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
  View_3918_19090: {
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
  View_I3918_19090_3777_15619: {
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
  View_I3918_19090_3777_15578: {
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
  Text_I3918_19090_3777_15578: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3918_19090_3777_15580: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3918_19090_3777_15580: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19091: {
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
  View_3918_19113: {
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
  Text_3918_19113: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17020: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("193%"),
    backgroundColor: "rgba(230, 244, 236, 1)"
  },
  View_I3855_17020_3855_16981: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3855_17020_3855_16982: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3855_17020_3855_16983: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3855_17020_3855_16984: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17020_3855_16984: {
    color: "rgba(46, 212, 119, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_17020_3855_16985: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I3855_17020_3855_16986: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I3855_17020_3855_16986: {
    color: "rgba(46, 212, 119, 1)",
    fontSize: 10,
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
