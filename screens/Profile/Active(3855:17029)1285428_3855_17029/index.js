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
      <View style={styles.View_3855_17096}>
        <View style={styles.View_3855_17097}>
          <View style={styles.View_3855_17098}>
            <Text style={styles.Text_3855_17098}>Dashboard history </Text>
          </View>
          <View style={styles.View_3855_17099}>
            <View style={styles.View_I3855_17099_3820_16855}>
              <View style={styles.View_I3855_17099_3820_16856}>
                <Text style={styles.Text_I3855_17099_3820_16856}>Active</Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_17099_3820_16857}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3820_17430")
                  )
                }
              >
                <Text style={styles.Text_I3855_17099_3820_16857}>Expired</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.View_I3855_17099_3820_16861}>
              <View style={styles.View_I3855_17099_3820_16862} />
              <View style={styles.View_I3855_17099_3820_16863} />
            </View>
          </View>
        </View>
        <View style={styles.View_3855_17100}>
          <View style={styles.View_3855_17101}>
            <View style={styles.View_3855_17102}>
              <View style={styles.View_3855_18841}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f4ee36d-fbc0-4c56-8180-afd040f1ce81"
                  }}
                  style={styles.ImageBackground_3855_17103}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8da3100c-737c-44d5-b9c9-aad3ec80be11"
                  }}
                  style={styles.ImageBackground_3855_18842}
                />
              </View>
              <View style={styles.View_3855_17104}>
                <View style={styles.View_3855_17105}>
                  <Text style={styles.Text_3855_17105}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_17106}>
                  <Text style={styles.Text_3855_17106}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_17765}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_17765_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_17765_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_17765_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_17765_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b2b60f3-0d7f-4be3-bc59-ba09c88931d0"
                        }}
                        style={
                          styles.ImageBackground_I3855_17765_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/833ac71b-d8cb-48d8-a3b5-916c4868bd8b"
                        }}
                        style={
                          styles.ImageBackground_I3855_17765_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f90ecd0-8ba6-4ce2-a783-704c31ee810f"
                      }}
                      style={
                        styles.ImageBackground_I3855_17765_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13034321-9a74-4dd8-b0ae-00ad661c040b"
                  }}
                  style={
                    styles.ImageBackground_I3855_17765_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_18843}>
            <View style={styles.View_3855_18844}>
              <View style={styles.View_3855_18845}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3e57a5b-847d-4c42-bd67-32666166b2d7"
                  }}
                  style={styles.ImageBackground_3855_18846}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8b481e4-114f-4316-ade7-7aec9c8251f6"
                  }}
                  style={styles.ImageBackground_3855_19032}
                />
              </View>
              <View style={styles.View_3855_18848}>
                <View style={styles.View_3855_18849}>
                  <Text style={styles.Text_3855_18849}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18850}>
                  <Text style={styles.Text_3855_18850}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_18851}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_18851_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_18851_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_18851_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_18851_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69cbd113-bb63-4587-bda7-c50501659ba8"
                        }}
                        style={
                          styles.ImageBackground_I3855_18851_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eef09e60-b593-497e-9759-9e2dd235c312"
                        }}
                        style={
                          styles.ImageBackground_I3855_18851_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5315fee0-e44f-42c7-9163-07ad5cae9f78"
                      }}
                      style={
                        styles.ImageBackground_I3855_18851_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9a79158-0c92-4150-90f0-70d9fbc940df"
                  }}
                  style={
                    styles.ImageBackground_I3855_18851_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_18864}>
            <View style={styles.View_3855_18865}>
              <View style={styles.View_3855_18866}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26adb176-6f16-4632-adda-e873b773c27b"
                  }}
                  style={styles.ImageBackground_3855_18867}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/288cea2a-19c5-4df8-ba48-dc5573fd6668"
                  }}
                  style={styles.ImageBackground_3855_18868}
                />
              </View>
              <View style={styles.View_3855_18869}>
                <View style={styles.View_3855_18870}>
                  <Text style={styles.Text_3855_18870}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18871}>
                  <Text style={styles.Text_3855_18871}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_18872}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_18872_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_18872_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_18872_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_18872_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79b3c26f-33c1-440f-9d22-6a2642b50e1b"
                        }}
                        style={
                          styles.ImageBackground_I3855_18872_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90fd2f72-8e5a-4fc0-9e62-e3e71a7e0c9c"
                        }}
                        style={
                          styles.ImageBackground_I3855_18872_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40a71a6a-acdc-484a-ae75-df4bbcb2524c"
                      }}
                      style={
                        styles.ImageBackground_I3855_18872_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74e83366-c62f-4832-bff7-3d78e95f16fe"
                  }}
                  style={
                    styles.ImageBackground_I3855_18872_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19033}>
            <View style={styles.View_3855_19034}>
              <View style={styles.View_3855_19035}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/432204b7-3a2e-4fbe-978b-db451e576b7f"
                  }}
                  style={styles.ImageBackground_3855_19036}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21858796-536a-428b-a6e5-47aa04269d6a"
                  }}
                  style={styles.ImageBackground_3855_19037}
                />
              </View>
              <View style={styles.View_3855_19038}>
                <View style={styles.View_3855_19039}>
                  <Text style={styles.Text_3855_19039}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19040}>
                  <Text style={styles.Text_3855_19040}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19041}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19041_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19041_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19041_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19041_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d1489de-b879-493d-9178-65e604fb1304"
                        }}
                        style={
                          styles.ImageBackground_I3855_19041_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dc06d35-5e6c-4a0f-9c7d-261e6fa38916"
                        }}
                        style={
                          styles.ImageBackground_I3855_19041_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c0facec-498f-4c1a-9319-a219d5e6f76a"
                      }}
                      style={
                        styles.ImageBackground_I3855_19041_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba082425-afc5-41c8-b81c-ce2ef5a18374"
                  }}
                  style={
                    styles.ImageBackground_I3855_19041_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_18885}>
            <View style={styles.View_3855_18886}>
              <View style={styles.View_3855_18887}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb7fff7e-b9d3-49b8-ade8-82387e05d3f4"
                  }}
                  style={styles.ImageBackground_3855_18888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8d5e4a0-cbd0-4db5-9c17-36ba1f654d77"
                  }}
                  style={styles.ImageBackground_3855_18889}
                />
              </View>
              <View style={styles.View_3855_18890}>
                <View style={styles.View_3855_18891}>
                  <Text style={styles.Text_3855_18891}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18892}>
                  <Text style={styles.Text_3855_18892}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_18893}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_18893_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_18893_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_18893_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_18893_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/151e8638-1bc4-425e-bbae-3013a74e2f4c"
                        }}
                        style={
                          styles.ImageBackground_I3855_18893_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dff49b83-ab9a-4466-8395-cddd0eef5422"
                        }}
                        style={
                          styles.ImageBackground_I3855_18893_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/538259e4-be2a-49af-8974-af4e5cbe1635"
                      }}
                      style={
                        styles.ImageBackground_I3855_18893_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0dab391-9a1f-4ee8-8149-f3680d0aa9f8"
                  }}
                  style={
                    styles.ImageBackground_I3855_18893_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19054}>
            <View style={styles.View_3855_19055}>
              <View style={styles.View_3855_19056}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d25ba1-9545-4a83-8146-96b8dec0cea1"
                  }}
                  style={styles.ImageBackground_3855_19057}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8af1b1d7-5286-4630-82cd-adc42965d0f5"
                  }}
                  style={styles.ImageBackground_3855_19058}
                />
              </View>
              <View style={styles.View_3855_19059}>
                <View style={styles.View_3855_19060}>
                  <Text style={styles.Text_3855_19060}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19061}>
                  <Text style={styles.Text_3855_19061}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19062}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19062_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19062_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19062_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19062_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b14cc604-4607-495c-9b7d-bd4e270ec6b9"
                        }}
                        style={
                          styles.ImageBackground_I3855_19062_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6dff8c1-fcbb-4c75-b676-1e1c9d153ffd"
                        }}
                        style={
                          styles.ImageBackground_I3855_19062_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d88295b-7f6e-430c-bb30-ecb3c3d7b678"
                      }}
                      style={
                        styles.ImageBackground_I3855_19062_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d69893e4-a67b-4380-90fb-95a7062193ea"
                  }}
                  style={
                    styles.ImageBackground_I3855_19062_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_18906}>
            <View style={styles.View_3855_18907}>
              <View style={styles.View_3855_18908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aea091b-16bb-4562-adec-5e97c2d0864d"
                  }}
                  style={styles.ImageBackground_3855_18909}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef57e1ea-0390-40ab-a97a-d198c4332f92"
                  }}
                  style={styles.ImageBackground_3855_18910}
                />
              </View>
              <View style={styles.View_3855_18911}>
                <View style={styles.View_3855_18912}>
                  <Text style={styles.Text_3855_18912}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18913}>
                  <Text style={styles.Text_3855_18913}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_18914}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_18914_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_18914_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_18914_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_18914_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f31843a9-ef8d-4fa8-81c0-79e0f3efbe1c"
                        }}
                        style={
                          styles.ImageBackground_I3855_18914_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ad2c804-1061-4ce7-bef2-8e5aaf5babc5"
                        }}
                        style={
                          styles.ImageBackground_I3855_18914_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c60b3af9-6c9c-4905-b704-abaf9835e673"
                      }}
                      style={
                        styles.ImageBackground_I3855_18914_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/544a5be6-4f94-4e0d-a583-55b982df64cc"
                  }}
                  style={
                    styles.ImageBackground_I3855_18914_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.View_3855_19075}>
            <View style={styles.View_3855_19076}>
              <View style={styles.View_3855_19077}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b640157-6ee7-436d-84cd-f8244918b250"
                  }}
                  style={styles.ImageBackground_3855_19078}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcffd851-dff8-405e-a7b1-4777a316f25c"
                  }}
                  style={styles.ImageBackground_3855_19079}
                />
              </View>
              <View style={styles.View_3855_19080}>
                <View style={styles.View_3855_19081}>
                  <Text style={styles.Text_3855_19081}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_19082}>
                  <Text style={styles.Text_3855_19082}>
                    Active until 23 September 2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_3855_19083}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3832_16330")
                )
              }
            >
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_19083_3855_17664}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <View style={styles.View_I3855_19083_3855_17664_3832_15554}>
                  <View style={styles.View_I3855_19083_3855_17664_3832_15548}>
                    <View style={styles.View_I3855_19083_3855_17664_3832_15544}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c1d8409-a843-4f17-91e1-720b83ecafc8"
                        }}
                        style={
                          styles.ImageBackground_I3855_19083_3855_17664_3832_15534
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9e619d2-2836-41c0-a069-9739b60904aa"
                        }}
                        style={
                          styles.ImageBackground_I3855_19083_3855_17664_3832_15538
                        }
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60e422e3-6d12-4a6c-8f82-16b70711a155"
                      }}
                      style={
                        styles.ImageBackground_I3855_19083_3855_17664_3832_15541
                      }
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e06903fc-2c93-4975-9c9f-1a232104d608"
                  }}
                  style={
                    styles.ImageBackground_I3855_19083_3855_17664_3832_15566
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_17157}>
        <Text style={styles.Text_3855_17157}>Profile</Text>
      </View>
      <View style={styles.View_3855_17158}>
        <View style={styles.View_3855_19304}>
          <View style={styles.View_I3855_19304_3777_15619}>
            <View style={styles.View_I3855_19304_3777_15578}>
              <Text style={styles.Text_I3855_19304_3777_15578}>Profile</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I3855_19304_3777_15580}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3818_16208")
                )
              }
            >
              <Text style={styles.Text_I3855_19304_3777_15580}>Billing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_3855_17160} />
      </View>
      <View style={styles.View_3855_17410}>
        <View style={styles.View_3855_17411}>
          <View style={styles.View_3855_17412}>
            <View style={styles.View_3855_17413}>
              <Text style={styles.Text_3855_17413}>User informations</Text>
            </View>
          </View>
          <View style={styles.View_3855_17414}>
            <View style={styles.View_3855_17415}>
              <View style={styles.View_3855_17416}>
                <View style={styles.View_I3855_17416_3441_10933}>
                  <View style={styles.View_I3855_17416_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17416_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17416_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Email
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_I3855_17416_3350_3750}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3855_15780")
                    )
                  }
                >
                  <View style={styles.View_I3855_17416_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_17416_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_17416_3350_3750_3350_3741}>
                        Placeholder
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.View_3855_17417}>
                <View style={styles.View_I3855_17417_3441_10933}>
                  <View style={styles.View_I3855_17417_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17417_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17417_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Company name
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17417_3350_3750}>
                  <View style={styles.View_I3855_17417_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_17417_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_17417_3350_3750_3350_3741}>
                        Placeholder
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_17418}>
              <View style={styles.View_3855_17419}>
                <View style={styles.View_I3855_17419_3450_11490}>
                  <View style={styles.View_I3855_17419_3450_11490_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17419_3450_11490_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17419_3450_11490_3441_10898_3441_10878
                        }
                      >
                        Your industry
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17419_3350_4154}>
                  <View style={styles.View_I3855_17419_3350_4154_3350_4073}>
                    <View style={styles.View_I3855_17419_3350_4154_3350_4075}>
                      <Text style={styles.Text_I3855_17419_3350_4154_3350_4075}>
                        Placeholder
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6516e68c-3ba2-4735-bf18-4d0390519383"
                    }}
                    style={
                      styles.ImageBackground_I3855_17419_3350_4154_3350_4077
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_17420}>
          <View style={styles.View_3855_20311}>
            <View style={styles.View_3855_20312}>
              <Text style={styles.Text_3855_20312}>Reset password</Text>
            </View>
          </View>
          <View style={styles.View_3855_17422}>
            <View style={styles.View_3855_17423}>
              <View style={styles.View_I3855_17423_3441_10933}>
                <View style={styles.View_I3855_17423_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_17423_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_17423_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Current password
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_I3855_17423_3350_3750}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3855_15780")
                  )
                }
              >
                <View style={styles.View_I3855_17423_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_17423_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_17423_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_3855_17424}>
              <View style={styles.View_I3855_17424_3441_10933}>
                <View style={styles.View_I3855_17424_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_17424_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_17424_3441_10933_3441_10898_3441_10878
                      }
                    >
                      New password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_17424_3350_3750}>
                <View style={styles.View_I3855_17424_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_17424_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_17424_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_17425}>
            <View style={styles.View_3855_17426}>
              <View style={styles.View_I3855_17426_3441_10933}>
                <View style={styles.View_I3855_17426_3441_10933_3441_10898}>
                  <View
                    style={
                      styles.View_I3855_17426_3441_10933_3441_10898_3441_10878
                    }
                  >
                    <Text
                      style={
                        styles.Text_I3855_17426_3441_10933_3441_10898_3441_10878
                      }
                    >
                      Confirm new password
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I3855_17426_3350_3750}>
                <View style={styles.View_I3855_17426_3350_3750_3350_3739}>
                  <View style={styles.View_I3855_17426_3350_3750_3350_3741}>
                    <Text style={styles.Text_I3855_17426_3350_3750_3350_3741}>
                      Placeholder
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_17427}>
          <View style={styles.View_4619_20759}>
            <View style={styles.View_3855_17428}>
              <Text style={styles.Text_3855_17428}>Payment Method</Text>
            </View>
            <View style={styles.View_4619_20760}>
              <Text style={styles.Text_4619_20760}>(Only credit card)</Text>
            </View>
          </View>
          <View style={styles.View_3855_17429}>
            <View style={styles.View_3855_17430}>
              <View style={styles.View_3855_17431}>
                <View style={styles.View_I3855_17431_3441_10933}>
                  <View style={styles.View_I3855_17431_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17431_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17431_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Card number
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17431_3350_3750}>
                  <View style={styles.View_I3855_17431_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_17431_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_17431_3350_3750_3350_3741}>
                        Insert card number
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_17432}>
                <View style={styles.View_I3855_17432_3450_15060}>
                  <View style={styles.View_I3855_17432_3450_15060_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17432_3450_15060_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17432_3450_15060_3441_10898_3441_10878
                        }
                      >
                        Country
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17432_3416_14727}>
                  <View style={styles.View_I3855_17432_3416_14727_3416_14663}>
                    <View
                      style={
                        styles.View_I3855_17432_3416_14727_3416_14663_3416_8357
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_17432_3416_14727_3416_14663_3416_8358
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_17432_3416_14727_3416_14663_3416_8359
                      }
                    />
                    <View
                      style={
                        styles.View_I3855_17432_3416_14727_3416_14663_3416_8360
                      }
                    />
                  </View>
                  <View style={styles.View_I3855_17432_3416_14727_3416_14664}>
                    <View style={styles.View_I3855_17432_3416_14727_3416_14666}>
                      <Text
                        style={styles.Text_I3855_17432_3416_14727_3416_14666}
                      >
                        Belgium
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11b4b342-5fb9-4fee-bb6c-50fd2d94e189"
                    }}
                    style={
                      styles.ImageBackground_I3855_17432_3416_14727_3416_14668
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_3855_17433}>
              <View style={styles.View_3855_17434}>
                <View style={styles.View_I3855_17434_3441_10933}>
                  <View style={styles.View_I3855_17434_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17434_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17434_3441_10933_3441_10898_3441_10878
                        }
                      >
                        Valid until
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17434_3350_3750}>
                  <View style={styles.View_I3855_17434_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_17434_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_17434_3350_3750_3350_3741}>
                        MM/AA
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_3855_17435}>
                <View style={styles.View_I3855_17435_3441_10933}>
                  <View style={styles.View_I3855_17435_3441_10933_3441_10898}>
                    <View
                      style={
                        styles.View_I3855_17435_3441_10933_3441_10898_3441_10878
                      }
                    >
                      <Text
                        style={
                          styles.Text_I3855_17435_3441_10933_3441_10898_3441_10878
                        }
                      >
                        CVV
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I3855_17435_3350_3750}>
                  <View style={styles.View_I3855_17435_3350_3750_3350_3739}>
                    <View style={styles.View_I3855_17435_3350_3750_3350_3741}>
                      <Text style={styles.Text_I3855_17435_3350_3750_3350_3741}>
                        Insert CVV
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_17436}>
          <View style={styles.View_3855_17437}>
            <Text style={styles.Text_3855_17437}>Choose your Odoo modules</Text>
          </View>
          <View style={styles.View_3855_17438}>
            <View style={styles.View_3855_17439}>
              <View style={styles.View_3855_17440}>
                <View style={styles.View_3855_17441}>
                  <View style={styles.View_3855_17442}>
                    <View style={styles.View_3855_17443}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8940193a-fa94-4c2d-bf67-66aa53ce3f71"
                        }}
                        style={styles.ImageBackground_3855_17444}
                      />
                    </View>
                    <View style={styles.View_3855_17445}>
                      <Text style={styles.Text_3855_17445}>Sales</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_17446}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d2bd902-1e10-45c7-8856-b7b7d5c5d043"
                      }}
                      style={styles.ImageBackground_I3855_17446_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9822a0bf-ed77-4be7-887d-6f508824345f"
                      }}
                      style={styles.ImageBackground_I3855_17446_3777_15879}
                    />
                  </View>
                </View>
                <View style={styles.View_3855_17447}>
                  <View style={styles.View_3855_17448}>
                    <View style={styles.View_3855_17449}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13ba79a2-93f0-4821-9694-23c20cb3ae71"
                        }}
                        style={styles.ImageBackground_3855_17450}
                      />
                    </View>
                    <View style={styles.View_3855_17451}>
                      <Text style={styles.Text_3855_17451}>Inventory</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_17452}>
              <View style={styles.View_3855_17453}>
                <View style={styles.View_3855_17454}>
                  <View style={styles.View_3855_17455}>
                    <View style={styles.View_3855_17456}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59a9e0d9-60c2-48d1-ba77-374252c70d32"
                        }}
                        style={styles.ImageBackground_3855_17457}
                      />
                    </View>
                    <View style={styles.View_3855_17458}>
                      <Text style={styles.Text_3855_17458}>Accounting</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_3855_17459}>
                  <View style={styles.View_3855_17460}>
                    <View style={styles.View_3855_17461}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6712ec3b-cc64-4965-a55e-15550581d29b"
                        }}
                        style={styles.ImageBackground_3855_17462}
                      />
                    </View>
                    <View style={styles.View_3855_17463}>
                      <Text style={styles.Text_3855_17463}>Purchase</Text>
                    </View>
                  </View>
                  <View style={styles.View_3855_17464}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6b35951-e77d-4ec4-a8a5-6fd87ec442bf"
                      }}
                      style={styles.ImageBackground_I3855_17464_3777_15877}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6501879-6050-4f13-9913-b2050a7dbd98"
                      }}
                      style={styles.ImageBackground_I3855_17464_3777_15879}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_3855_17465}>
              <View style={styles.View_3855_17466}>
                <View style={styles.View_3855_17467}>
                  <View style={styles.View_3855_17468}>
                    <View style={styles.View_3855_17469}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2688e1fc-93b5-46e6-92c9-6372b6ec3b02"
                        }}
                        style={styles.ImageBackground_3855_17470}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4757b236-162e-4f1c-b57b-9af6a3c8001b"
                        }}
                        style={styles.ImageBackground_3855_17471}
                      />
                    </View>
                  </View>
                  <View style={styles.View_3855_17475}>
                    <Text style={styles.Text_3855_17475}>Others</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3855_19332}>
        <View style={styles.View_I3855_19332_3772_14808}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19332_3772_14817}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3772_14725"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e04b94-8916-42ec-a853-4c8126e4a724"
              }}
              style={styles.ImageBackground_I3855_19332_3772_14817_3772_14718}
            />
            <View style={styles.View_I3855_19332_3772_14817_3772_14719}>
              <Text style={styles.Text_I3855_19332_3772_14817_3772_14719}>
                Back to my workspace
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3855_19332_3811_18884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3855_19332_3811_18884_3760_16721}>
              <View style={styles.View_I3855_19332_3811_18884_3760_16722}>
                <Text style={styles.Text_I3855_19332_3811_18884_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6723527d-2ee1-4320-9f1f-b579befe80a7"
                }}
                style={styles.ImageBackground_I3855_19332_3811_18884_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcfbf267-289a-4248-854a-e93d75bfc8b2"
              }}
              style={styles.ImageBackground_I3855_19332_3811_18884_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3855_19332_3772_14811} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("214%") },
  View_3855_17096: {
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
  View_3855_17097: {
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
  View_3855_17098: {
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
  Text_3855_17098: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17099: {
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
  View_I3855_17099_3820_16855: {
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
  View_I3855_17099_3820_16856: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17099_3820_16856: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_17099_3820_16857: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I3855_17099_3820_16857: {
    color: "rgba(174, 173, 183, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17099_3820_16861: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I3855_17099_3820_16862: {
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
  View_I3855_17099_3820_16863: {
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
  View_3855_17100: {
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
  View_3855_17101: {
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
  View_3855_17102: {
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
  View_3855_18841: {
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
  ImageBackground_3855_17103: {
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
  ImageBackground_3855_18842: {
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
  View_3855_17104: {
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
  View_3855_17105: {
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
  Text_3855_17105: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17106: {
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
  Text_3855_17106: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17765: {
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
  TouchableOpacity_I3855_17765_3855_17664: {
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
  View_I3855_17765_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_17765_3855_17664_3832_15548: {
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
  View_I3855_17765_3855_17664_3832_15544: {
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
  ImageBackground_I3855_17765_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17765_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_17765_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17765_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_18843: {
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
  View_3855_18844: {
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
  View_3855_18845: {
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
  ImageBackground_3855_18846: {
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
  ImageBackground_3855_19032: {
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
  View_3855_18848: {
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
  View_3855_18849: {
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
  Text_3855_18849: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18850: {
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
  Text_3855_18850: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_18851: {
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
  TouchableOpacity_I3855_18851_3855_17664: {
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
  View_I3855_18851_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_18851_3855_17664_3832_15548: {
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
  View_I3855_18851_3855_17664_3832_15544: {
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
  ImageBackground_I3855_18851_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18851_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_18851_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18851_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_18864: {
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
  View_3855_18865: {
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
  View_3855_18866: {
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
  ImageBackground_3855_18867: {
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
  ImageBackground_3855_18868: {
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
  View_3855_18869: {
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
  View_3855_18870: {
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
  Text_3855_18870: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18871: {
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
  Text_3855_18871: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_18872: {
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
  TouchableOpacity_I3855_18872_3855_17664: {
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
  View_I3855_18872_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_18872_3855_17664_3832_15548: {
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
  View_I3855_18872_3855_17664_3832_15544: {
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
  ImageBackground_I3855_18872_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18872_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_18872_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18872_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19033: {
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
  View_3855_19034: {
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
  View_3855_19035: {
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
  ImageBackground_3855_19036: {
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
  ImageBackground_3855_19037: {
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
  View_3855_19038: {
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
  View_3855_19039: {
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
  Text_3855_19039: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19040: {
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
  Text_3855_19040: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19041: {
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
  TouchableOpacity_I3855_19041_3855_17664: {
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
  View_I3855_19041_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19041_3855_17664_3832_15548: {
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
  View_I3855_19041_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19041_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19041_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19041_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19041_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_18885: {
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
  View_3855_18886: {
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
  View_3855_18887: {
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
  ImageBackground_3855_18888: {
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
  ImageBackground_3855_18889: {
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
  View_3855_18890: {
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
  View_3855_18891: {
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
  Text_3855_18891: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18892: {
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
  Text_3855_18892: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_18893: {
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
  TouchableOpacity_I3855_18893_3855_17664: {
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
  View_I3855_18893_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_18893_3855_17664_3832_15548: {
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
  View_I3855_18893_3855_17664_3832_15544: {
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
  ImageBackground_I3855_18893_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18893_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_18893_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18893_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19054: {
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
  View_3855_19055: {
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
  View_3855_19056: {
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
  ImageBackground_3855_19057: {
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
  ImageBackground_3855_19058: {
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
  View_3855_19059: {
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
  View_3855_19060: {
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
  Text_3855_19060: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19061: {
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
  Text_3855_19061: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19062: {
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
  TouchableOpacity_I3855_19062_3855_17664: {
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
  View_I3855_19062_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19062_3855_17664_3832_15548: {
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
  View_I3855_19062_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19062_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19062_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19062_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19062_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_18906: {
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
  View_3855_18907: {
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
  View_3855_18908: {
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
  ImageBackground_3855_18909: {
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
  ImageBackground_3855_18910: {
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
  View_3855_18911: {
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
  View_3855_18912: {
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
  Text_3855_18912: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18913: {
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
  Text_3855_18913: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_18914: {
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
  TouchableOpacity_I3855_18914_3855_17664: {
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
  View_I3855_18914_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_18914_3855_17664_3832_15548: {
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
  View_I3855_18914_3855_17664_3832_15544: {
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
  ImageBackground_I3855_18914_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18914_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_18914_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_18914_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_19075: {
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
  View_3855_19076: {
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
  View_3855_19077: {
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
  ImageBackground_3855_19078: {
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
  ImageBackground_3855_19079: {
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
  View_3855_19080: {
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
  View_3855_19081: {
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
  Text_3855_19081: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19082: {
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
  Text_3855_19082: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_19083: {
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
  TouchableOpacity_I3855_19083_3855_17664: {
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
  View_I3855_19083_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_19083_3855_17664_3832_15548: {
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
  View_I3855_19083_3855_17664_3832_15544: {
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
  ImageBackground_I3855_19083_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19083_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_19083_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_19083_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3855_17157: {
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
  Text_3855_17157: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17158: {
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
  View_3855_19304: {
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
  View_I3855_19304_3777_15619: {
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
  View_I3855_19304_3777_15578: {
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
  Text_I3855_19304_3777_15578: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19304_3777_15580: {
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
  Text_I3855_19304_3777_15580: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17160: {
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
  View_3855_17410: {
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
  View_3855_17411: {
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
  View_3855_17412: {
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
  View_3855_17413: {
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
  Text_3855_17413: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17414: {
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
  View_3855_17415: {
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
  View_3855_17416: {
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
  View_I3855_17416_3441_10933: {
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
  View_I3855_17416_3441_10933_3441_10898: {
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
  View_I3855_17416_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17416_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_17416_3350_3750: {
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
  View_I3855_17416_3350_3750_3350_3739: {
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
  View_I3855_17416_3350_3750_3350_3741: {
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
  Text_I3855_17416_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17417: {
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
  View_I3855_17417_3441_10933: {
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
  View_I3855_17417_3441_10933_3441_10898: {
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
  View_I3855_17417_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17417_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17417_3350_3750: {
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
  View_I3855_17417_3350_3750_3350_3739: {
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
  View_I3855_17417_3350_3750_3350_3741: {
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
  Text_I3855_17417_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17418: {
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
  View_3855_17419: {
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
  View_I3855_17419_3450_11490: {
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
  View_I3855_17419_3450_11490_3441_10898: {
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
  View_I3855_17419_3450_11490_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17419_3450_11490_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17419_3350_4154: {
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
  View_I3855_17419_3350_4154_3350_4073: {
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
  View_I3855_17419_3350_4154_3350_4075: {
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
  Text_I3855_17419_3350_4154_3350_4075: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_17419_3350_4154_3350_4077: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%")
  },
  View_3855_17420: {
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
  View_3855_20311: {
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
  View_3855_20312: {
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
  Text_3855_20312: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17422: {
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
  View_3855_17423: {
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
  View_I3855_17423_3441_10933: {
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
  View_I3855_17423_3441_10933_3441_10898: {
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
  View_I3855_17423_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17423_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_17423_3350_3750: {
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
  View_I3855_17423_3350_3750_3350_3739: {
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
  View_I3855_17423_3350_3750_3350_3741: {
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
  Text_I3855_17423_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17424: {
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
  View_I3855_17424_3441_10933: {
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
  View_I3855_17424_3441_10933_3441_10898: {
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
  View_I3855_17424_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17424_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17424_3350_3750: {
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
  View_I3855_17424_3350_3750_3350_3739: {
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
  View_I3855_17424_3350_3750_3350_3741: {
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
  Text_I3855_17424_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17425: {
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
  View_3855_17426: {
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
  View_I3855_17426_3441_10933: {
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
  View_I3855_17426_3441_10933_3441_10898: {
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
  View_I3855_17426_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17426_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17426_3350_3750: {
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
  View_I3855_17426_3350_3750_3350_3739: {
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
  View_I3855_17426_3350_3750_3350_3741: {
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
  Text_I3855_17426_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17427: {
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
  View_4619_20759: {
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
  View_3855_17428: {
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
  Text_3855_17428: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4619_20760: {
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
  Text_4619_20760: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17429: {
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
  View_3855_17430: {
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
  View_3855_17431: {
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
  View_I3855_17431_3441_10933: {
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
  View_I3855_17431_3441_10933_3441_10898: {
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
  View_I3855_17431_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17431_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17431_3350_3750: {
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
  View_I3855_17431_3350_3750_3350_3739: {
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
  View_I3855_17431_3350_3750_3350_3741: {
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
  Text_I3855_17431_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17432: {
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
  View_I3855_17432_3450_15060: {
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
  View_I3855_17432_3450_15060_3441_10898: {
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
  View_I3855_17432_3450_15060_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17432_3450_15060_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17432_3416_14727: {
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
  View_I3855_17432_3416_14727_3416_14663: {
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
  View_I3855_17432_3416_14727_3416_14663_3416_8357: {
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
  View_I3855_17432_3416_14727_3416_14663_3416_8358: {
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
  View_I3855_17432_3416_14727_3416_14663_3416_8359: {
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
  View_I3855_17432_3416_14727_3416_14663_3416_8360: {
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
  View_I3855_17432_3416_14727_3416_14664: {
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
  View_I3855_17432_3416_14727_3416_14666: {
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
  Text_I3855_17432_3416_14727_3416_14666: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_17432_3416_14727_3416_14668: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%")
  },
  View_3855_17433: {
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
  View_3855_17434: {
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
  View_I3855_17434_3441_10933: {
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
  View_I3855_17434_3441_10933_3441_10898: {
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
  View_I3855_17434_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17434_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17434_3350_3750: {
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
  View_I3855_17434_3350_3750_3350_3739: {
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
  View_I3855_17434_3350_3750_3350_3741: {
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
  Text_I3855_17434_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17435: {
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
  View_I3855_17435_3441_10933: {
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
  View_I3855_17435_3441_10933_3441_10898: {
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
  View_I3855_17435_3441_10933_3441_10898_3441_10878: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I3855_17435_3441_10933_3441_10898_3441_10878: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3855_17435_3350_3750: {
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
  View_I3855_17435_3350_3750_3350_3739: {
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
  View_I3855_17435_3350_3750_3350_3741: {
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
  Text_I3855_17435_3350_3750_3350_3741: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17436: {
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
  View_3855_17437: {
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
  Text_3855_17437: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17438: {
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
  View_3855_17439: {
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
  View_3855_17440: {
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
  View_3855_17441: {
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
  View_3855_17442: {
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
  View_3855_17443: {
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
  ImageBackground_3855_17444: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_17445: {
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
  Text_3855_17445: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17446: {
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
  ImageBackground_I3855_17446_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_17446_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_17447: {
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
  View_3855_17448: {
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
  View_3855_17449: {
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
  ImageBackground_3855_17450: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_17451: {
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
  Text_3855_17451: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17452: {
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
  View_3855_17453: {
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
  View_3855_17454: {
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
  View_3855_17455: {
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
  View_3855_17456: {
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
  ImageBackground_3855_17457: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_17458: {
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
  Text_3855_17458: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17459: {
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
  View_3855_17460: {
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
  View_3855_17461: {
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
  ImageBackground_3855_17462: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_3855_17463: {
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
  Text_3855_17463: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_17464: {
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
  ImageBackground_I3855_17464_3777_15877: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3855_17464_3777_15879: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3855_17465: {
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
  View_3855_17466: {
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
  View_3855_17467: {
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
  View_3855_17468: {
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
  View_3855_17469: {
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
  ImageBackground_3855_17470: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3855_17471: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3855_17475: {
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
  Text_3855_17475: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_19332: {
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
  View_I3855_19332_3772_14808: {
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
  TouchableOpacity_I3855_19332_3772_14817: {
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
  ImageBackground_I3855_19332_3772_14817_3772_14718: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I3855_19332_3772_14817_3772_14719: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3855_19332_3772_14817_3772_14719: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I3855_19332_3811_18884: {
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
  View_I3855_19332_3811_18884_3760_16721: {
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
  View_I3855_19332_3811_18884_3760_16722: {
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
  Text_I3855_19332_3811_18884_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3855_19332_3811_18884_3760_16723: {
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
  ImageBackground_I3855_19332_3811_18884_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3855_19332_3772_14811: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(233, 234, 240, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
