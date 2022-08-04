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
      <View style={styles.View_3855_15781}>
        <View style={styles.View_3855_15782}>
          <View style={styles.View_3855_16140}>
            <View style={styles.View_3855_16141}>
              <Text style={styles.Text_3855_16141}>User informations</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_17607}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3855_17605")
                )
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a588bd4-fa95-4db0-bb68-df7b54dcc1dd"
                }}
                style={styles.ImageBackground_I3855_17607_3855_17599}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_15784}>
            <View style={styles.View_3855_15785}>
              <View style={styles.View_3855_15786}>
                <View style={styles.View_I3855_15786_3441_10933}>
                  <View style={styles.View_I3855_15786_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15786_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15786_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Email
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15786_3350_3750}>
                  <View style={styles.View_I3855_15786_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_15786_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_15786_3350_3750_3350_3741}>
                        sebastien@vizavenue.be
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_15787}>
                <View style={styles.View_I3855_15787_3441_10933}>
                  <View style={styles.View_I3855_15787_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15787_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15787_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Company name
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15787_3350_3750}>
                  <View style={styles.View_I3855_15787_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_15787_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_15787_3350_3750_3350_3741}>
                        Vizavenue
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_15788}>
              <View style={styles.View_3855_15789}>
                <View style={styles.View_I3855_15789_3450_11490}>
                  <View style={styles.View_I3855_15789_3450_11490_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15789_3450_11490_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15789_3450_11490_3441_10898_3441_10878
                        }
                      >
                        Your industry
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15789_3350_4154}>
                  <View style={styles.View_I3855_15789_3350_4154_3350_4073}>
                    <View style={styles.View_I3855_15789_3350_4154_3350_4075}>
                      <Text style={styles.Text_I3855_15789_3350_4154_3350_4075}>
                        Manufacturing
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23faafa5-d2b4-4061-b6e1-e0b1fc874a05"
                    }}
                    style={
                      styles.ImageBackground_I3855_15789_3350_4154_3350_4077
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_15790}>
          <View style={styles.View_3855_15791}>
            <View style={styles.View_3855_15792}>
              <Text style={styles.Text_3855_15792}>Reset password</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_17610}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3855_17605")
                )
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eae7bd3-d2e2-47c7-a7b0-c582148cb829"
                }}
                style={styles.ImageBackground_I3855_17610_3855_17599}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_15794}>
            <View style={styles.View_3855_15795}>
              <View style={styles.View_I3855_15795_3441_10933}>
                <View style={styles.View_I3855_15795_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_15795_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_15795_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Current password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_15795_3350_3750}>
                <View style={styles.View_I3855_15795_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_15795_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_15795_3350_3750_3350_3741}>
                      123456789
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_15796}>
              <View style={styles.View_I3855_15796_3441_10933}>
                <View style={styles.View_I3855_15796_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_15796_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_15796_3441_10933_3441_10898_3441_10878
                      }
                    >
                      New password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_15796_3350_3750}>
                <View style={styles.View_I3855_15796_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_15796_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_15796_3350_3750_3350_3741}>
                      987654321
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_15797}>
            <View style={styles.View_3855_15798}>
              <View style={styles.View_I3855_15798_3441_10933}>
                <View style={styles.View_I3855_15798_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_15798_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_15798_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Confirm new password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_15798_3350_3750}>
                <View style={styles.View_I3855_15798_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_15798_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_15798_3350_3750_3350_3741}>
                      987654321
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_15799}>
          <View style={styles.View_4619_20764}>
            <View style={styles.View_4619_20765}>
              <Text style={styles.Text_4619_20765}>Payment Method</Text>
            </View>
            <View style={styles.View_4619_20766}>
              <Text style={styles.Text_4619_20766}>(Only credit card)</Text>
            </View>
          </View>
          <View style={styles.View_3855_15801}>
            <View style={styles.View_3855_15802}>
              <View style={styles.View_3855_15803}>
                <View style={styles.View_I3855_15803_3441_10933}>
                  <View style={styles.View_I3855_15803_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15803_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15803_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Card number
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15803_3350_3750}>
                  <View style={styles.View_I3855_15803_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_15803_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_15803_3350_3750_3350_3741}>
                        Insert card number
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_15804}>
                <View style={styles.View_I3855_15804_3450_15060}>
                  <View style={styles.View_I3855_15804_3450_15060_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15804_3450_15060_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15804_3450_15060_3441_10898_3441_10878
                        }
                      >
                        Country
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15804_3416_14727}>
                  <View style={styles.View_I3855_15804_3416_14727_3416_14663}>
                    <View
                      style={
                        styles.View_I3855_15804_3416_14727_3416_14663_3416_8357
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_15804_3416_14727_3416_14663_3416_8358
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_15804_3416_14727_3416_14663_3416_8359
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_15804_3416_14727_3416_14663_3416_8360
                      }
                    />
                  </View>
                  <View style={styles.View_I3855_15804_3416_14727_3416_14664}>
                    <View style={styles.View_I3855_15804_3416_14727_3416_14666}>
                      <Text
                        style={styles.Text_I3855_15804_3416_14727_3416_14666}
                      >
                        Belgium
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6a95295-ad7d-49a2-902b-b75652071c8c"
                    }}
                    style={
                      styles.ImageBackground_I3855_15804_3416_14727_3416_14668
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_3855_15805}>
              <View style={styles.View_3855_15806}>
                <View style={styles.View_I3855_15806_3441_10933}>
                  <View style={styles.View_I3855_15806_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15806_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15806_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Valid until
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15806_3350_3750}>
                  <View style={styles.View_I3855_15806_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_15806_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_15806_3350_3750_3350_3741}>
                        MM/AA
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_15807}>
                <View style={styles.View_I3855_15807_3441_10933}>
                  <View style={styles.View_I3855_15807_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_15807_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_15807_3441_10933_3441_10898_3441_10878
                        }
                      >
                        CVV
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_15807_3350_3750}>
                  <View style={styles.View_I3855_15807_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_15807_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_15807_3350_3750_3350_3741}>
                        Insert CVV
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_15808}>
          <View style={styles.View_3855_15809}>
            <Text style={styles.Text_3855_15809}>Choose your Odoo modules</Text>
          </View>
          <View style={styles.View_3855_15810}>
            <View style={styles.View_3855_15811}>
              <View style={styles.View_3855_15812}>
                <View style={styles.View_3855_15813}>
                  <View style={styles.View_3855_15814}>
                    <View style={styles.View_3855_15815}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/008f0679-856a-4f68-a395-74ba04365d47"
                        }}
                        style={styles.ImageBackground_3855_15816}
                      />
                    </View>
                    <View style={styles.View_3855_15817}>
                      <Text style={styles.Text_3855_15817}>Sales</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_15818}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b402a3d3-e08f-407f-8bfb-0b99ec99c260"
                      }}
                      style={styles.ImageBackground_I3855_15818_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b77787ed-17a8-418c-8c40-fb538d5fbf5d"
                      }}
                      style={styles.ImageBackground_I3855_15818_3777_15879}
                    />
                  </View>
                </View>
                <View style={styles.View_3855_15819}>
                  <View style={styles.View_3855_15820}>
                    <View style={styles.View_3855_15821}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dfe31e1-c443-42eb-aeda-c0d669785c51"
                        }}
                        style={styles.ImageBackground_3855_15822}
                      />
                    </View>
                    <View style={styles.View_3855_15823}>
                      <Text style={styles.Text_3855_15823}>Inventory</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_15824}>
              <View style={styles.View_3855_15825}>
                <View style={styles.View_3855_15826}>
                  <View style={styles.View_3855_15827}>
                    <View style={styles.View_3855_15828}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6db313b-a901-4e16-ad1f-5ac6f4ce01e7"
                        }}
                        style={styles.ImageBackground_3855_15829}
                      />
                    </View>
                    <View style={styles.View_3855_15830}>
                      <Text style={styles.Text_3855_15830}>Accounting</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_3855_15831}>
                  <View style={styles.View_3855_15832}>
                    <View style={styles.View_3855_15833}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/550fbe8a-efc0-46c6-9485-926509b892a9"
                        }}
                        style={styles.ImageBackground_3855_15834}
                      />
                    </View>
                    <View style={styles.View_3855_15835}>
                      <Text style={styles.Text_3855_15835}>Purchase</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_15836}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44059051-3965-480c-967e-850b697a1556"
                      }}
                      style={styles.ImageBackground_I3855_15836_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f209de61-5b01-47b9-840a-8a805b6eca3d"
                      }}
                      style={styles.ImageBackground_I3855_15836_3777_15879}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_15837}>
              <View style={styles.View_3855_15838}>
                <View style={styles.View_3855_15839}>
                  <View style={styles.View_3855_15840}>
                    <View style={styles.View_3855_15841}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/699334ab-4526-4c39-a219-49c6b33e58a8"
                        }}
                        style={styles.ImageBackground_3855_15842}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55a39de3-6f7a-49c5-99e0-5157f5fc2352"
                        }}
                        style={styles.ImageBackground_3855_15843}
                      />
                    </View>
                  </View>
                  <View style={styles.View_3855_15847}>
                    <Text style={styles.Text_3855_15847}>Others</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_19371}>
        <View style={styles.View_I3855_19371_3772_14808}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19371_3772_14817}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3772_14725"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f69161bc-ce02-49cc-a6f8-82c42842ac31"
              }}
              style={styles.ImageBackground_I3855_19371_3772_14817_3772_14718}
            />
            <View style={styles.View_I3855_19371_3772_14817_3772_14719}>
              <Text style={styles.Text_I3855_19371_3772_14817_3772_14719}>
                Back to my workspace
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19371_3811_18884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3855_19371_3811_18884_3760_16721}>
              <View style={styles.View_I3855_19371_3811_18884_3760_16722}>
                <Text style={styles.Text_I3855_19371_3811_18884_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32226001-71cc-4ea0-ae0a-382d2e6cb571"
                }}
                style={styles.ImageBackground_I3855_19371_3811_18884_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89c6fbce-9838-457d-af4e-e6d61efd16b9"
              }}
              style={styles.ImageBackground_I3855_19371_3811_18884_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3855_19371_3772_14811} />
      </View>
      <View style={styles.View_3855_19448}>
        <View style={styles.View_3855_19449}>
          <View style={styles.View_3855_19450}>
            <Text style={styles.Text_3855_19450}>Dashboard history </Text>
          </View>
          <View style={styles.View_3855_19451}>
            <View style={styles.View_I3855_19451_3820_16855}>
              <View style={styles.View_I3855_19451_3820_16856}>
                <Text style={styles.Text_I3855_19451_3820_16856}>Active</Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19451_3820_16857}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3820_17430")
                  )
                }
              >
                <Text style={styles.Text_I3855_19451_3820_16857}>Expired</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.View_I3855_19451_3820_16861}>
              <View style={styles.View_I3855_19451_3820_16862} />
              <View style={styles.View_I3855_19451_3820_16863} />
            </View>
          </View>
        </View>
        <View style={styles.View_3855_19452}>
          <View style={styles.View_3855_19453}>
            <View style={styles.View_3855_19454}>
              <View style={styles.View_3855_19455}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/183eb675-bc88-4003-afe9-b6e13eecd535"
                  }}
                  style={styles.ImageBackground_3855_19456}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ea8311d-ebad-4218-b96c-407a24c90ce1"
                  }}
                  style={styles.ImageBackground_3855_19457}
                />
              </View>
              <View style={styles.View_3855_19458}>
                <View style={styles.View_3855_19459}>
                  <Text style={styles.Text_3855_19459}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19460}>
                  <Text style={styles.Text_3855_19460}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19461}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19461_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19461_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19461_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19461_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7272bfb5-7ee2-4973-b2d8-b1ff012548e8"
                        }}
                        style={
                          styles.ImageBackground_I3855_19461_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cf762a1-a84c-4b6c-af20-fbb5e82250ad"
                        }}
                        style={
                          styles.ImageBackground_I3855_19461_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/173e5ab9-a007-48f6-9fc0-504a04ef321d"
                      }}
                      style={
                        styles.ImageBackground_I3855_19461_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da0a13d4-bb80-455d-8a76-778a5f888197"
                  }}
                  style={
                    styles.ImageBackground_I3855_19461_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19462}>
            <View style={styles.View_3855_19463}>
              <View style={styles.View_3855_19464}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06a18423-26e0-4822-9642-c567f19ff8af"
                  }}
                  style={styles.ImageBackground_3855_19465}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82a0d9f1-aee0-4ab6-bb6f-3ddb4fa6d85b"
                  }}
                  style={styles.ImageBackground_3855_19466}
                />
              </View>
              <View style={styles.View_3855_19467}>
                <View style={styles.View_3855_19468}>
                  <Text style={styles.Text_3855_19468}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19469}>
                  <Text style={styles.Text_3855_19469}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19470}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19470_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19470_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19470_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19470_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0a67856-31a7-45bc-ae2d-a55cbf0548c9"
                        }}
                        style={
                          styles.ImageBackground_I3855_19470_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e323d512-2782-4dc9-9a85-cf6074acf583"
                        }}
                        style={
                          styles.ImageBackground_I3855_19470_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98edb675-31e8-4e1e-ad76-491df2b028fa"
                      }}
                      style={
                        styles.ImageBackground_I3855_19470_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96e5ff6e-2d32-47f9-8221-9f4d41956979"
                  }}
                  style={
                    styles.ImageBackground_I3855_19470_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19471}>
            <View style={styles.View_3855_19472}>
              <View style={styles.View_3855_19473}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14e400c4-1ce6-4c9d-8c56-2ab4e05bf234"
                  }}
                  style={styles.ImageBackground_3855_19474}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/366a3f23-aee7-4d6a-82a4-40711bf10d35"
                  }}
                  style={styles.ImageBackground_3855_19475}
                />
              </View>
              <View style={styles.View_3855_19476}>
                <View style={styles.View_3855_19477}>
                  <Text style={styles.Text_3855_19477}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19478}>
                  <Text style={styles.Text_3855_19478}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19479}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19479_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19479_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19479_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19479_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef8ad0f9-7388-45f1-bf66-021baefc6b52"
                        }}
                        style={
                          styles.ImageBackground_I3855_19479_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fe056f5-4784-4314-9882-a7b2ad2fab04"
                        }}
                        style={
                          styles.ImageBackground_I3855_19479_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/573c35e3-8398-4205-93ed-eef3d6cb2db1"
                      }}
                      style={
                        styles.ImageBackground_I3855_19479_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dfb4f9c-f0ba-44e1-9cf3-74c5f06244ff"
                  }}
                  style={
                    styles.ImageBackground_I3855_19479_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19480}>
            <View style={styles.View_3855_19481}>
              <View style={styles.View_3855_19482}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3f9871a-ddba-4258-b423-3eb08f0c7c3f"
                  }}
                  style={styles.ImageBackground_3855_19483}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9e69442-d7cc-4aec-84b7-4ed13f03a828"
                  }}
                  style={styles.ImageBackground_3855_19484}
                />
              </View>
              <View style={styles.View_3855_19485}>
                <View style={styles.View_3855_19486}>
                  <Text style={styles.Text_3855_19486}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19487}>
                  <Text style={styles.Text_3855_19487}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19488}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19488_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19488_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19488_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19488_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/463d781e-2922-4a1c-a849-6b6ee909e72e"
                        }}
                        style={
                          styles.ImageBackground_I3855_19488_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83c4c3e2-2b07-439b-ae8c-6ade1fa9c34f"
                        }}
                        style={
                          styles.ImageBackground_I3855_19488_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0521e3f-3d70-4b96-befc-624c09650ea1"
                      }}
                      style={
                        styles.ImageBackground_I3855_19488_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99ec2072-3381-4271-a095-0184ce2f91f0"
                  }}
                  style={
                    styles.ImageBackground_I3855_19488_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19489}>
            <View style={styles.View_3855_19490}>
              <View style={styles.View_3855_19491}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d758adc8-c8e3-4ddc-9742-a4d93ba6742b"
                  }}
                  style={styles.ImageBackground_3855_19492}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c5f352d-84b7-4fd6-9019-a31796eea767"
                  }}
                  style={styles.ImageBackground_3855_19493}
                />
              </View>
              <View style={styles.View_3855_19494}>
                <View style={styles.View_3855_19495}>
                  <Text style={styles.Text_3855_19495}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19496}>
                  <Text style={styles.Text_3855_19496}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19497}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19497_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19497_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19497_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19497_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75945315-b103-4985-aece-2962630c629b"
                        }}
                        style={
                          styles.ImageBackground_I3855_19497_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdccafe0-55ca-4286-9a23-937f30fd2a8a"
                        }}
                        style={
                          styles.ImageBackground_I3855_19497_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8515082-a504-4396-a537-1dc70cc98381"
                      }}
                      style={
                        styles.ImageBackground_I3855_19497_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38d91a3c-3d16-42ed-9430-8f9b7d8ca66f"
                  }}
                  style={
                    styles.ImageBackground_I3855_19497_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19498}>
            <View style={styles.View_3855_19499}>
              <View style={styles.View_3855_19500}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d089fe5-82a8-44f0-9b84-3425ce513fa1"
                  }}
                  style={styles.ImageBackground_3855_19501}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18b20fa1-b160-4b4c-9b73-e02cee28e320"
                  }}
                  style={styles.ImageBackground_3855_19502}
                />
              </View>
              <View style={styles.View_3855_19503}>
                <View style={styles.View_3855_19504}>
                  <Text style={styles.Text_3855_19504}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19505}>
                  <Text style={styles.Text_3855_19505}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19506}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19506_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19506_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19506_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19506_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfeb0866-5f60-409c-b3ed-6eb3bfa12671"
                        }}
                        style={
                          styles.ImageBackground_I3855_19506_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91791df9-3f09-4013-ba24-53546cc5c11c"
                        }}
                        style={
                          styles.ImageBackground_I3855_19506_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/000693a5-4a5f-4f88-ab51-1ac4b8544a83"
                      }}
                      style={
                        styles.ImageBackground_I3855_19506_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a14217d5-bf69-47e4-8ffe-1ae45b46a4de"
                  }}
                  style={
                    styles.ImageBackground_I3855_19506_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19507}>
            <View style={styles.View_3855_19508}>
              <View style={styles.View_3855_19509}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/419a80c1-2bc5-4a64-96f1-8b9e39fa09f1"
                  }}
                  style={styles.ImageBackground_3855_19510}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06802a87-fa8c-4f55-8eba-7c070aef1beb"
                  }}
                  style={styles.ImageBackground_3855_19511}
                />
              </View>
              <View style={styles.View_3855_19512}>
                <View style={styles.View_3855_19513}>
                  <Text style={styles.Text_3855_19513}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19514}>
                  <Text style={styles.Text_3855_19514}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19515}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19515_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19515_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19515_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19515_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/545c0aa3-0cb9-43e5-b1f4-08165227bbf6"
                        }}
                        style={
                          styles.ImageBackground_I3855_19515_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93bad0d-2d1f-4304-854b-b978efe6f369"
                        }}
                        style={
                          styles.ImageBackground_I3855_19515_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21de8a9f-b953-4059-ab76-205311688704"
                      }}
                      style={
                        styles.ImageBackground_I3855_19515_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd14b49b-c03e-4759-a5c0-64aba3425f3e"
                  }}
                  style={
                    styles.ImageBackground_I3855_19515_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19516}>
            <View style={styles.View_3855_19517}>
              <View style={styles.View_3855_19518}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5edb7da7-7095-44d0-951e-763e1d08114f"
                  }}
                  style={styles.ImageBackground_3855_19519}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e46ff94-c1e8-468d-8fe3-a726439df677"
                  }}
                  style={styles.ImageBackground_3855_19520}
                />
              </View>
              <View style={styles.View_3855_19521}>
                <View style={styles.View_3855_19522}>
                  <Text style={styles.Text_3855_19522}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19523}>
                  <Text style={styles.Text_3855_19523}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19524}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19524_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19524_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19524_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19524_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1de19071-8cac-45ea-a6f9-9ae8913fdf02"
                        }}
                        style={
                          styles.ImageBackground_I3855_19524_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33ed793a-d396-4fad-bb32-2eb4667326ef"
                        }}
                        style={
                          styles.ImageBackground_I3855_19524_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/195ce0a7-0183-4bf6-acd7-2afd0c353b6e"
                      }}
                      style={
                        styles.ImageBackground_I3855_19524_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/981703df-1556-447a-9fef-bd1d1bdcd553"
                  }}
                  style={
                    styles.ImageBackground_I3855_19524_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_3918_19095}>
        <View style={styles.View_3918_19096}>
          <View style={styles.View_I3918_19096_3777_15619}>
            <View style={styles.View_I3918_19096_3777_15578}>
              <Text style={styles.Text_I3918_19096_3777_15578}>Profile</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I3918_19096_3777_15580}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_16208")
                )
              }
            >
              <Text style={styles.Text_I3918_19096_3777_15580}>Billing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_3918_19097} />
      </View>
      <View style={styles.View_3918_19114}>
        <Text style={styles.Text_3918_19114}>Profile</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("214%") },
  View_3855_15781: {
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
  View_3855_15782: {
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
  View_3855_16140: {
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
  View_3855_16141: {
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
  Text_3855_16141: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17607: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 224, 131, 1)"
  },
  ImageBackground_I3855_17607_3855_17599: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_3855_15784: {
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
  View_3855_15785: {
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
  View_3855_15786: {
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
  View_I3855_15786_3441_10933: {
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
  View_I3855_15786_3441_10933_3441_10898: {
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
  View_I3855_15786_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15786_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15786_3350_3750: {
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
  View_I3855_15786_3350_3750_3350_3739: {
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
  View_I3855_15786_3350_3750_3350_3741: {
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
  Text_I3855_15786_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15787: {
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
  View_I3855_15787_3441_10933: {
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
  View_I3855_15787_3441_10933_3441_10898: {
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
  View_I3855_15787_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15787_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15787_3350_3750: {
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
  View_I3855_15787_3350_3750_3350_3739: {
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
  View_I3855_15787_3350_3750_3350_3741: {
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
  Text_I3855_15787_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15788: {
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
  View_3855_15789: {
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
  View_I3855_15789_3450_11490: {
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
  View_I3855_15789_3450_11490_3441_10898: {
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
  View_I3855_15789_3450_11490_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15789_3450_11490_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15789_3350_4154: {
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
  View_I3855_15789_3350_4154_3350_4073: {
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
  View_I3855_15789_3350_4154_3350_4075: {
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
  Text_I3855_15789_3350_4154_3350_4075: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_15789_3350_4154_3350_4077: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%")
  },
  View_3855_15790: {
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
  View_3855_15791: {
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
  View_3855_15792: {
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
  Text_3855_15792: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17610: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 224, 131, 1)"
  },
  ImageBackground_I3855_17610_3855_17599: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_3855_15794: {
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
  View_3855_15795: {
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
  View_I3855_15795_3441_10933: {
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
  View_I3855_15795_3441_10933_3441_10898: {
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
  View_I3855_15795_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15795_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15795_3350_3750: {
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
  View_I3855_15795_3350_3750_3350_3739: {
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
  View_I3855_15795_3350_3750_3350_3741: {
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
  Text_I3855_15795_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15796: {
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
  View_I3855_15796_3441_10933: {
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
  View_I3855_15796_3441_10933_3441_10898: {
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
  View_I3855_15796_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15796_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15796_3350_3750: {
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
  View_I3855_15796_3350_3750_3350_3739: {
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
  View_I3855_15796_3350_3750_3350_3741: {
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
  Text_I3855_15796_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15797: {
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
  View_3855_15798: {
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
  View_I3855_15798_3441_10933: {
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
  View_I3855_15798_3441_10933_3441_10898: {
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
  View_I3855_15798_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15798_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15798_3350_3750: {
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
  View_I3855_15798_3350_3750_3350_3739: {
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
  View_I3855_15798_3350_3750_3350_3741: {
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
  Text_I3855_15798_3350_3750_3350_3741: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15799: {
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
  View_4619_20764: {
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
  View_4619_20765: {
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
  Text_4619_20765: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20766: {
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
  Text_4619_20766: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15801: {
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
  View_3855_15802: {
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
  View_3855_15803: {
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
  View_I3855_15803_3441_10933: {
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
  View_I3855_15803_3441_10933_3441_10898: {
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
  View_I3855_15803_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15803_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15803_3350_3750: {
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
  View_I3855_15803_3350_3750_3350_3739: {
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
  View_I3855_15803_3350_3750_3350_3741: {
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
  Text_I3855_15803_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15804: {
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
  View_I3855_15804_3450_15060: {
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
  View_I3855_15804_3450_15060_3441_10898: {
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
  View_I3855_15804_3450_15060_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15804_3450_15060_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15804_3416_14727: {
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
  View_I3855_15804_3416_14727_3416_14663: {
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
  View_I3855_15804_3416_14727_3416_14663_3416_8357: {
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
  View_I3855_15804_3416_14727_3416_14663_3416_8358: {
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
  View_I3855_15804_3416_14727_3416_14663_3416_8359: {
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
  View_I3855_15804_3416_14727_3416_14663_3416_8360: {
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
  View_I3855_15804_3416_14727_3416_14664: {
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
  View_I3855_15804_3416_14727_3416_14666: {
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
  Text_I3855_15804_3416_14727_3416_14666: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_15804_3416_14727_3416_14668: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%")
  },
  View_3855_15805: {
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
  View_3855_15806: {
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
  View_I3855_15806_3441_10933: {
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
  View_I3855_15806_3441_10933_3441_10898: {
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
  View_I3855_15806_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15806_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15806_3350_3750: {
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
  View_I3855_15806_3350_3750_3350_3739: {
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
  View_I3855_15806_3350_3750_3350_3741: {
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
  Text_I3855_15806_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15807: {
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
  View_I3855_15807_3441_10933: {
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
  View_I3855_15807_3441_10933_3441_10898: {
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
  View_I3855_15807_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_15807_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_15807_3350_3750: {
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
  View_I3855_15807_3350_3750_3350_3739: {
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
  View_I3855_15807_3350_3750_3350_3741: {
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
  Text_I3855_15807_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15808: {
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
  View_3855_15809: {
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
  Text_3855_15809: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15810: {
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
  View_3855_15811: {
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
  View_3855_15812: {
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
  View_3855_15813: {
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
  View_3855_15814: {
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
  View_3855_15815: {
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
  ImageBackground_3855_15816: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_15817: {
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
  Text_3855_15817: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15818: {
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
  ImageBackground_I3855_15818_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_15818_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_15819: {
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
  View_3855_15820: {
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
  View_3855_15821: {
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
  ImageBackground_3855_15822: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_15823: {
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
  Text_3855_15823: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15824: {
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
  View_3855_15825: {
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
  View_3855_15826: {
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
  View_3855_15827: {
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
  View_3855_15828: {
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
  ImageBackground_3855_15829: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_15830: {
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
  Text_3855_15830: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15831: {
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
  View_3855_15832: {
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
  View_3855_15833: {
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
  ImageBackground_3855_15834: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_15835: {
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
  Text_3855_15835: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_15836: {
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
  ImageBackground_I3855_15836_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_15836_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_15837: {
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
  View_3855_15838: {
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
  View_3855_15839: {
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
  View_3855_15840: {
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
  View_3855_15841: {
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
  ImageBackground_3855_15842: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3855_15843: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3855_15847: {
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
  Text_3855_15847: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19371: {
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
  View_I3855_19371_3772_14808: {
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
  TouchableOpacity_I3855_19371_3772_14817: {
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
  ImageBackground_I3855_19371_3772_14817_3772_14718: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3855_19371_3772_14817_3772_14719: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3855_19371_3772_14817_3772_14719: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19371_3811_18884: {
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
  View_I3855_19371_3811_18884_3760_16721: {
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
  View_I3855_19371_3811_18884_3760_16722: {
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
  Text_I3855_19371_3811_18884_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_19371_3811_18884_3760_16723: {
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
  ImageBackground_I3855_19371_3811_18884_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3855_19371_3772_14811: {
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
  View_3855_19448: {
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
  View_3855_19449: {
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
  View_3855_19450: {
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
  Text_3855_19450: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19451: {
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
  View_I3855_19451_3820_16855: {
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
  View_I3855_19451_3820_16856: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I3855_19451_3820_16856: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19451_3820_16857: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I3855_19451_3820_16857: {
    color: "rgba(174, 173, 183, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_19451_3820_16861: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I3855_19451_3820_16862: {
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
  View_I3855_19451_3820_16863: {
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
  View_3855_19452: {
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
  View_3855_19453: {
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
  View_3855_19454: {
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
  View_3855_19455: {
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
  ImageBackground_3855_19456: {
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
  ImageBackground_3855_19457: {
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
  View_3855_19458: {
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
  View_3855_19459: {
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
  Text_3855_19459: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19460: {
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
  Text_3855_19460: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19461: {
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
  TouchableOpacity_I3855_19461_3855_17664: {
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
  View_I3855_19461_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19461_3855_17664_3832_15548: {
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
  View_I3855_19461_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19461_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19461_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19461_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19461_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19462: {
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
  View_3855_19463: {
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
  View_3855_19464: {
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
  ImageBackground_3855_19465: {
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
  ImageBackground_3855_19466: {
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
  View_3855_19467: {
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
  View_3855_19468: {
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
  Text_3855_19468: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19469: {
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
  Text_3855_19469: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19470: {
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
  TouchableOpacity_I3855_19470_3855_17664: {
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
  View_I3855_19470_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19470_3855_17664_3832_15548: {
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
  View_I3855_19470_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19470_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19470_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19470_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19470_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19471: {
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
  View_3855_19472: {
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
  View_3855_19473: {
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
  ImageBackground_3855_19474: {
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
  ImageBackground_3855_19475: {
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
  View_3855_19476: {
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
  View_3855_19477: {
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
  Text_3855_19477: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19478: {
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
  Text_3855_19478: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19479: {
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
  TouchableOpacity_I3855_19479_3855_17664: {
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
  View_I3855_19479_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19479_3855_17664_3832_15548: {
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
  View_I3855_19479_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19479_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19479_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19479_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19479_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19480: {
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
  View_3855_19481: {
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
  View_3855_19482: {
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
  ImageBackground_3855_19483: {
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
  ImageBackground_3855_19484: {
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
  View_3855_19485: {
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
  View_3855_19486: {
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
  Text_3855_19486: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19487: {
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
  Text_3855_19487: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19488: {
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
  TouchableOpacity_I3855_19488_3855_17664: {
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
  View_I3855_19488_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19488_3855_17664_3832_15548: {
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
  View_I3855_19488_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19488_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19488_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19488_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19488_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19489: {
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
  View_3855_19490: {
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
  View_3855_19491: {
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
  ImageBackground_3855_19492: {
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
  ImageBackground_3855_19493: {
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
  View_3855_19494: {
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
  View_3855_19495: {
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
  Text_3855_19495: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19496: {
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
  Text_3855_19496: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19497: {
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
  TouchableOpacity_I3855_19497_3855_17664: {
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
  View_I3855_19497_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19497_3855_17664_3832_15548: {
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
  View_I3855_19497_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19497_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19497_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19497_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19497_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19498: {
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
  View_3855_19499: {
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
  View_3855_19500: {
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
  ImageBackground_3855_19501: {
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
  ImageBackground_3855_19502: {
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
  View_3855_19503: {
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
  View_3855_19504: {
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
  Text_3855_19504: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19505: {
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
  Text_3855_19505: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19506: {
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
  TouchableOpacity_I3855_19506_3855_17664: {
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
  View_I3855_19506_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19506_3855_17664_3832_15548: {
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
  View_I3855_19506_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19506_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19506_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19506_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19506_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19507: {
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
  View_3855_19508: {
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
  View_3855_19509: {
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
  ImageBackground_3855_19510: {
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
  ImageBackground_3855_19511: {
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
  View_3855_19512: {
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
  View_3855_19513: {
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
  Text_3855_19513: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19514: {
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
  Text_3855_19514: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19515: {
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
  TouchableOpacity_I3855_19515_3855_17664: {
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
  View_I3855_19515_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19515_3855_17664_3832_15548: {
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
  View_I3855_19515_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19515_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19515_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19515_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19515_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19516: {
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
  View_3855_19517: {
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
  View_3855_19518: {
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
  ImageBackground_3855_19519: {
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
  ImageBackground_3855_19520: {
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
  View_3855_19521: {
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
  View_3855_19522: {
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
  Text_3855_19522: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19523: {
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
  Text_3855_19523: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19524: {
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
  TouchableOpacity_I3855_19524_3855_17664: {
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
  View_I3855_19524_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19524_3855_17664_3832_15548: {
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
  View_I3855_19524_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19524_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19524_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19524_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19524_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3918_19095: {
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
  View_3918_19096: {
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
  View_I3918_19096_3777_15619: {
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
  View_I3918_19096_3777_15578: {
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
  Text_I3918_19096_3777_15578: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3918_19096_3777_15580: {
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
  Text_I3918_19096_3777_15580: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3918_19097: {
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
  View_3918_19114: {
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
  Text_3918_19114: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 26,
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
