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
      <View style={styles.View_3809_16420}>
        <View style={styles.View_3809_16421}>
          <Text style={styles.Text_3809_16421}>My dashboards</Text>
        </View>
        <View style={styles.View_3809_16422}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3809_16423}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3809_16342"))
            }
          >
            <View style={styles.View_3809_16424}>
              <View style={styles.View_3809_16425} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0ef0854-e4ef-432d-a0d9-77d267281947"
                }}
                style={styles.ImageBackground_3809_16426}
              />
            </View>
            <View style={styles.View_3809_16427}>
              <View style={styles.View_3809_16428}>
                <View style={styles.View_3809_16429}>
                  <Text style={styles.Text_3809_16429}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3809_16430}>
                  <Text style={styles.Text_3809_16430}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_3918_18766}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <TouchableOpacity
                  style={styles.TouchableOpacity_I3918_18766_3855_17664}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3832_16330")
                    )
                  }
                >
                  <View style={styles.View_I3918_18766_3855_17664_3832_15554}>
                    <View style={styles.View_I3918_18766_3855_17664_3832_15548}>
                      <View
                        style={styles.View_I3918_18766_3855_17664_3832_15544}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fcc7779-9b34-4529-acf4-908b7d0ba5a7"
                          }}
                          style={
                            styles.ImageBackground_I3918_18766_3855_17664_3832_15534
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0e5f7e6-2c79-4aad-add1-2bfeb805a6aa"
                          }}
                          style={
                            styles.ImageBackground_I3918_18766_3855_17664_3832_15538
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dbffeaa-f574-449f-be66-e059085bdb4d"
                        }}
                        style={
                          styles.ImageBackground_I3918_18766_3855_17664_3832_15541
                        }
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb23dd8-48d6-4a8a-be33-4269e145b63b"
                    }}
                    style={
                      styles.ImageBackground_I3918_18766_3855_17664_3832_15566
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={styles.View_3809_16431}>
            <View style={styles.View_3809_16432}>
              <View style={styles.View_3809_16433} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cbb7bdb-fad2-4a5e-827a-6efc9e6cd79d"
                }}
                style={styles.ImageBackground_3809_16434}
              />
            </View>
            <View style={styles.View_3809_16435}>
              <View style={styles.View_3809_16436}>
                <View style={styles.View_3809_16437}>
                  <Text style={styles.Text_3809_16437}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3809_16438}>
                  <Text style={styles.Text_3809_16438}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_3855_17703}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <TouchableOpacity
                  style={styles.TouchableOpacity_I3855_17703_3855_17664}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3832_16330")
                    )
                  }
                >
                  <View style={styles.View_I3855_17703_3855_17664_3832_15554}>
                    <View style={styles.View_I3855_17703_3855_17664_3832_15548}>
                      <View
                        style={styles.View_I3855_17703_3855_17664_3832_15544}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b2e3d43-6e2a-45f3-98ab-91b1285fc681"
                          }}
                          style={
                            styles.ImageBackground_I3855_17703_3855_17664_3832_15534
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f059d68-8144-49f6-934e-4490d77f083f"
                          }}
                          style={
                            styles.ImageBackground_I3855_17703_3855_17664_3832_15538
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0597b57d-c945-4a54-b78f-5d71dbf39686"
                        }}
                        style={
                          styles.ImageBackground_I3855_17703_3855_17664_3832_15541
                        }
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94fbfba-ea93-4e25-bf77-d3d1ace7587e"
                    }}
                    style={
                      styles.ImageBackground_I3855_17703_3855_17664_3832_15566
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.View_3809_16439}>
            <View style={styles.View_3809_16440}>
              <View style={styles.View_3809_16441} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/618d9861-0d46-4c57-aff8-a56b67315433"
                }}
                style={styles.ImageBackground_3809_16442}
              />
            </View>
            <View style={styles.View_3809_16443}>
              <View style={styles.View_3809_16444}>
                <View style={styles.View_3809_16445}>
                  <Text style={styles.Text_3809_16445}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3809_16446}>
                  <Text style={styles.Text_3809_16446}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_3855_17690}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <TouchableOpacity
                  style={styles.TouchableOpacity_I3855_17690_3855_17664}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3832_16330")
                    )
                  }
                >
                  <View style={styles.View_I3855_17690_3855_17664_3832_15554}>
                    <View style={styles.View_I3855_17690_3855_17664_3832_15548}>
                      <View
                        style={styles.View_I3855_17690_3855_17664_3832_15544}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c490a942-80e1-431e-859d-37109885ffa6"
                          }}
                          style={
                            styles.ImageBackground_I3855_17690_3855_17664_3832_15534
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34c47e3d-e9c6-4b5c-858f-a3deb66beb00"
                          }}
                          style={
                            styles.ImageBackground_I3855_17690_3855_17664_3832_15538
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/595c9afd-095d-4f7a-b1bc-acbb26c0b3a1"
                        }}
                        style={
                          styles.ImageBackground_I3855_17690_3855_17664_3832_15541
                        }
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0ef096c-a5bf-409c-804a-fe759d7fb28b"
                    }}
                    style={
                      styles.ImageBackground_I3855_17690_3855_17664_3832_15566
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.View_3811_17044}>
            <View style={styles.View_3811_17045}>
              <View style={styles.View_3811_17046} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3a7e1fa-0585-4831-8961-a80c3ffea037"
                }}
                style={styles.ImageBackground_3855_18576}
              />
            </View>
            <View style={styles.View_3811_17048}>
              <View style={styles.View_3811_17049}>
                <View style={styles.View_3811_17050}>
                  <Text style={styles.Text_3811_17050}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3811_17051}>
                  <Text style={styles.Text_3811_17051}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_3855_17677}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3832_16330")
                  )
                }
              >
                <TouchableOpacity
                  style={styles.TouchableOpacity_I3855_17677_3855_17664}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3832_16330")
                    )
                  }
                >
                  <View style={styles.View_I3855_17677_3855_17664_3832_15554}>
                    <View style={styles.View_I3855_17677_3855_17664_3832_15548}>
                      <View
                        style={styles.View_I3855_17677_3855_17664_3832_15544}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b60b63b-18c9-420b-84f3-dfa215be7193"
                          }}
                          style={
                            styles.ImageBackground_I3855_17677_3855_17664_3832_15534
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0886fcf-41f9-43da-ac10-a9c86211b2c3"
                          }}
                          style={
                            styles.ImageBackground_I3855_17677_3855_17664_3832_15538
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97d3a2f2-2cf6-40e4-b37d-a122ea244819"
                        }}
                        style={
                          styles.ImageBackground_I3855_17677_3855_17664_3832_15541
                        }
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff564e4c-b50a-4d07-bc3a-c08115a394af"
                    }}
                    style={
                      styles.ImageBackground_I3855_17677_3855_17664_3832_15566
                    }
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3811_16960}>
        <View style={styles.View_3811_16961}>
          <Text style={styles.Text_3811_16961}>
            Explore the dashboard gallery
          </Text>
        </View>
        <View style={styles.View_3811_16962}>
          <TouchableOpacity
            style={styles.TouchableOpacity_3811_16963}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3809_16212"))
            }
          >
            <View style={styles.View_3811_16964}>
              <View style={styles.View_3811_16965} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91830046-817a-4aab-8055-bdb49492856c"
                }}
                style={styles.ImageBackground_3855_18610}
              />
            </View>
            <View style={styles.View_3811_16967}>
              <View style={styles.View_3811_16968}>
                <View style={styles.View_3811_16969}>
                  <Text style={styles.Text_3811_16969}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3811_16970}>
                  <Text style={styles.Text_3811_16970}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_3811_16971}>
            <View style={styles.View_3811_16972}>
              <View style={styles.View_3811_16973} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0024c062-a3f2-4ac7-aaff-6d4a2b89fef9"
                }}
                style={styles.ImageBackground_3855_18611}
              />
            </View>
            <View style={styles.View_3811_16975}>
              <View style={styles.View_3811_16976}>
                <View style={styles.View_3811_16977}>
                  <Text style={styles.Text_3811_16977}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3811_16978}>
                  <Text style={styles.Text_3811_16978}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3811_16979}>
            <View style={styles.View_3811_16980}>
              <View style={styles.View_3811_16981} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e17d6ecc-334a-49dc-8495-c611b51e8352"
                }}
                style={styles.ImageBackground_3855_18612}
              />
            </View>
            <View style={styles.View_3811_16983}>
              <View style={styles.View_3811_16984}>
                <View style={styles.View_3811_16985}>
                  <Text style={styles.Text_3811_16985}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3811_16986}>
                  <Text style={styles.Text_3811_16986}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3811_16995}>
            <View style={styles.View_3811_16996}>
              <View style={styles.View_3811_16997} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/169abe33-f025-46e6-9586-810f6a373dd9"
                }}
                style={styles.ImageBackground_3855_18613}
              />
            </View>
            <View style={styles.View_3811_16999}>
              <View style={styles.View_3811_17000}>
                <View style={styles.View_3811_17001}>
                  <Text style={styles.Text_3811_17001}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3811_17002}>
                  <Text style={styles.Text_3811_17002}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3855_18577}>
          <View style={styles.View_3855_18578}>
            <View style={styles.View_3855_18579}>
              <View style={styles.View_3855_18580} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee5724e-1a00-43a0-91e9-517f544016d4"
                }}
                style={styles.ImageBackground_3855_18614}
              />
            </View>
            <View style={styles.View_3855_18582}>
              <View style={styles.View_3855_18583}>
                <View style={styles.View_3855_18584}>
                  <Text style={styles.Text_3855_18584}>
                    Food &amp; Drink Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18585}>
                  <Text style={styles.Text_3855_18585}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18586}>
            <View style={styles.View_3855_18587}>
              <View style={styles.View_3855_18588} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35ab58a3-776e-40ee-9297-db4311ff97f8"
                }}
                style={styles.ImageBackground_3855_18615}
              />
            </View>
            <View style={styles.View_3855_18590}>
              <View style={styles.View_3855_18591}>
                <View style={styles.View_3855_18592}>
                  <Text style={styles.Text_3855_18592}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18593}>
                  <Text style={styles.Text_3855_18593}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18602}>
            <View style={styles.View_3855_18603}>
              <View style={styles.View_3855_18604} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f96f8ef-207e-4e51-917a-615f733c9c17"
                }}
                style={styles.ImageBackground_3855_18605}
              />
            </View>
            <View style={styles.View_3855_18606}>
              <View style={styles.View_3855_18607}>
                <View style={styles.View_3855_18608}>
                  <Text style={styles.Text_3855_18608}>
                    Manufacturing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18609}>
                  <Text style={styles.Text_3855_18609}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3855_18594}>
            <View style={styles.View_3855_18595}>
              <View style={styles.View_3855_18596} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4943beaa-ace9-4b50-bcd5-a3bedc49cdcf"
                }}
                style={styles.ImageBackground_3855_18617}
              />
            </View>
            <View style={styles.View_3855_18598}>
              <View style={styles.View_3855_18599}>
                <View style={styles.View_3855_18600}>
                  <Text style={styles.Text_3855_18600}>
                    Marketing Dashboard
                  </Text>
                </View>
                <View style={styles.View_3855_18601}>
                  <Text style={styles.Text_3855_18601}>
                    Created by Vizavenue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3809_16447}>
        <View style={styles.View_3809_16448}>
          <View style={styles.View_3809_16449}>
            <View style={styles.View_3809_16450}>
              <Text style={styles.Text_3809_16450}>
                ✌️ Recommended dashboard
              </Text>
            </View>
            <View style={styles.View_3809_16451}>
              <Text style={styles.Text_3809_16451}>
                Here a few recommendations based on your industry and current
                Odoo Modules
              </Text>
            </View>
          </View>
          <View style={styles.View_5630_21038}>
            <TouchableOpacity
              style={styles.TouchableOpacity_3809_16452}
              onPress={() =>
                this.props.navigation.navigate(
                  getNavigationScreen("3760_16712")
                )
              }
            >
              <View style={styles.View_I3809_16452_3760_16711}>
                <Text style={styles.Text_I3809_16452_3760_16711}>Hide</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_5630_21027}>
              <TouchableOpacity
                style={styles.TouchableOpacity_5630_21067}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3760_16707")
                  )
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ad2d34a-8333-41e9-ad9b-a18f9b2d174c"
                  }}
                  style={styles.ImageBackground_I5630_21067_3760_16706}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_5630_21066}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("3760_16702")
                  )
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af0abae0-2c90-4c22-8d8d-65c31f71f646"
                  }}
                  style={styles.ImageBackground_I5630_21066_3760_16701}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View_3809_16453}>
          <View style={styles.View_3809_16454}>
            <View style={styles.View_3809_16455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c795100e-2811-47a7-848e-bc2fc67a9433"
                }}
                style={styles.ImageBackground_3809_16456}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d13e0fb8-8187-455b-a75e-64e0125542a2"
                }}
                style={styles.ImageBackground_3852_19462}
              />
            </View>
            <View style={styles.View_3809_16459}>
              <View style={styles.View_3809_16460}>
                <View style={styles.View_3809_16461}>
                  <View style={styles.View_3809_16462}>
                    <Text style={styles.Text_3809_16462}>
                      Marketing Dashboard
                    </Text>
                  </View>
                  <View style={styles.View_3809_16463}>
                    <Text style={styles.Text_3809_16463}>
                      Created by Vizavenue
                    </Text>
                  </View>
                </View>
                <View style={styles.View_3809_16464}>
                  <Text style={styles.Text_3809_16464}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor quis malesuada sed.
                  </Text>
                </View>
              </View>
              <View style={styles.View_3809_16465}>
                <View style={styles.View_3809_16466}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_3918_19254}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eebed899-71ae-4531-a39d-6b62935c281b"
                      }}
                      style={styles.ImageBackground_I3918_19254_3918_19226}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_5643_20956}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/109ef3d2-69d4-4f08-a3cd-d61956ebaefe"
                      }}
                      style={styles.ImageBackground_I5643_20956_3918_19226}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_5643_20959}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cd53a0c-aa25-4958-8747-46f54951cffb"
                      }}
                      style={styles.ImageBackground_I5643_20959_3918_19226}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_3847_18287}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3847_18283")
                    )
                  }
                >
                  <View style={styles.View_I3847_18287_3847_18280}>
                    <Text style={styles.Text_I3847_18287_3847_18280}>
                      Activate
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.View_3809_16474}>
            <View style={styles.View_3809_16475}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee6314b0-20e2-4b70-9753-b8945624292f"
                }}
                style={styles.ImageBackground_3809_16476}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0e926a4-3080-4559-9f2b-448762e7dba2"
                }}
                style={styles.ImageBackground_3809_16477}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea86f77d-6f1b-43cb-b1d1-3c45de857d47"
                }}
                style={styles.ImageBackground_3852_19463}
              />
            </View>
            <View style={styles.View_3809_16478}>
              <View style={styles.View_3809_16479}>
                <View style={styles.View_3809_16480}>
                  <View style={styles.View_3809_16481}>
                    <Text style={styles.Text_3809_16481}>
                      Marketing Dashboard
                    </Text>
                  </View>
                  <View style={styles.View_3809_16482}>
                    <Text style={styles.Text_3809_16482}>
                      Created by Vizavenue
                    </Text>
                  </View>
                </View>
                <View style={styles.View_3809_16483}>
                  <Text style={styles.Text_3809_16483}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor quis malesuada sed.
                  </Text>
                </View>
              </View>
              <View style={styles.View_3809_16484}>
                <View style={styles.View_3918_19258}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_3918_19260}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7edf08f-b801-451d-8dda-e6876d0d9f8c"
                      }}
                      style={styles.ImageBackground_I3918_19260_3918_19226}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_5643_20962}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13835690-5278-4ca5-960f-2d7f0eff3248"
                      }}
                      style={styles.ImageBackground_I5643_20962_3918_19226}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_3847_18289}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3847_18283")
                    )
                  }
                >
                  <View style={styles.View_I3847_18289_3847_18280}>
                    <Text style={styles.Text_I3847_18289_3847_18280}>
                      Activate
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.View_5630_21089}>
            <View style={styles.View_5630_21090}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f92503c-4096-44a4-90ac-26b028a9bcdb"
                }}
                style={styles.ImageBackground_5630_21091}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85011f47-b438-4485-8c1e-bcc5169baf68"
                }}
                style={styles.ImageBackground_5630_21092}
              />
            </View>
            <View style={styles.View_5630_21093}>
              <View style={styles.View_5630_21094}>
                <View style={styles.View_5630_21095}>
                  <View style={styles.View_5630_21096}>
                    <Text style={styles.Text_5630_21096}>
                      Marketing Dashboard
                    </Text>
                  </View>
                  <View style={styles.View_5630_21097}>
                    <Text style={styles.Text_5630_21097}>
                      Created by Vizavenue
                    </Text>
                  </View>
                </View>
                <View style={styles.View_5630_21098}>
                  <Text style={styles.Text_5630_21098}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempor quis malesuada sed.
                  </Text>
                </View>
              </View>
              <View style={styles.View_5630_21099}>
                <View style={styles.View_5630_21100}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_5630_21101}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("3918_19249")
                      )
                    }
                  >
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95a2bc4a-d408-46e6-a33a-bb7d55d4f869"
                      }}
                      style={styles.ImageBackground_I5630_21101_3918_19226}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_5630_21102}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("3847_18283")
                    )
                  }
                >
                  <View style={styles.View_I5630_21102_3847_18280}>
                    <Text style={styles.Text_I5630_21102_3847_18280}>
                      Activate
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3811_18962}>
        <View style={styles.View_I3811_18962_3772_14775}>
          <View style={styles.View_I3811_18962_6340_21442}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8b296bf-d35d-4216-9a33-8cb24a374c41"
              }}
              style={styles.ImageBackground_I3811_18962_6340_21443}
            />
            <View style={styles.View_I3811_18962_6340_21444}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/309192c5-d0b6-4d55-bf12-ca5b02b364a2"
                }}
                style={styles.ImageBackground_I3811_18962_6340_21445}
              />
              <View style={styles.View_I3811_18962_6340_21446} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I3811_18962_3811_18578}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("3760_16725"))
            }
          >
            <View style={styles.View_I3811_18962_3811_18578_3760_16721}>
              <View style={styles.View_I3811_18962_3811_18578_3760_16722}>
                <Text style={styles.Text_I3811_18962_3811_18578_3760_16722}>
                  Nightborn
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85156af5-9c85-46f6-a69b-b41e1ffa9562"
                }}
                style={styles.ImageBackground_I3811_18962_3811_18578_3760_16723}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73af886d-e23f-4777-b856-93929927465e"
              }}
              style={styles.ImageBackground_I3811_18962_3811_18578_3760_16724}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I3811_18962_3772_14778} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 252, 1)" },
  View_2: { height: hp("169%") },
  View_3809_16420: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16421: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3809_16421: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16422: {
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
  TouchableOpacity_3809_16423: {
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
  View_3809_16424: {
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
  View_3809_16425: {
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
  ImageBackground_3809_16426: {
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
  View_3809_16427: {
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
  View_3809_16428: {
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
  View_3809_16429: {
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
  Text_3809_16429: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16430: {
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
  Text_3809_16430: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3918_18766: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3918_18766_3855_17664: {
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
  View_I3918_18766_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3918_18766_3855_17664_3832_15548: {
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
  View_I3918_18766_3855_17664_3832_15544: {
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
  ImageBackground_I3918_18766_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3918_18766_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3918_18766_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3918_18766_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3809_16431: {
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
  View_3809_16432: {
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
  View_3809_16433: {
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
  ImageBackground_3809_16434: {
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
  View_3809_16435: {
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
  View_3809_16436: {
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
  View_3809_16437: {
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
  Text_3809_16437: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16438: {
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
  Text_3809_16438: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17703: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_17703_3855_17664: {
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
  View_I3855_17703_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_17703_3855_17664_3832_15548: {
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
  View_I3855_17703_3855_17664_3832_15544: {
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
  ImageBackground_I3855_17703_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17703_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_17703_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17703_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3809_16439: {
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
  View_3809_16440: {
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
  View_3809_16441: {
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
  ImageBackground_3809_16442: {
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
  View_3809_16443: {
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
  View_3809_16444: {
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
  View_3809_16445: {
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
  Text_3809_16445: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16446: {
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
  Text_3809_16446: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17690: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_17690_3855_17664: {
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
  View_I3855_17690_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_17690_3855_17664_3832_15548: {
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
  View_I3855_17690_3855_17664_3832_15544: {
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
  ImageBackground_I3855_17690_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17690_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_17690_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17690_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3811_17044: {
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
  View_3811_17045: {
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
  View_3811_17046: {
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
  ImageBackground_3855_18576: {
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
  View_3811_17048: {
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
  View_3811_17049: {
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
  View_3811_17050: {
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
  Text_3811_17050: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_17051: {
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
  Text_3811_17051: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_3855_17677: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(244, 246, 250, 1)"
  },
  TouchableOpacity_I3855_17677_3855_17664: {
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
  View_I3855_17677_3855_17664_3832_15554: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3855_17677_3855_17664_3832_15548: {
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
  View_I3855_17677_3855_17664_3832_15544: {
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
  ImageBackground_I3855_17677_3855_17664_3832_15534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17677_3855_17664_3832_15538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3855_17677_3855_17664_3832_15541: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3855_17677_3855_17664_3832_15566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_3811_16960: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3811_16961: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3811_16961: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16962: {
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
  TouchableOpacity_3811_16963: {
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
  View_3811_16964: {
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
  View_3811_16965: {
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
  ImageBackground_3855_18610: {
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
  View_3811_16967: {
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
  View_3811_16968: {
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
  View_3811_16969: {
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
  Text_3811_16969: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16970: {
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
  Text_3811_16970: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16971: {
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
  View_3811_16972: {
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
  View_3811_16973: {
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
  ImageBackground_3855_18611: {
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
  View_3811_16975: {
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
  View_3811_16976: {
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
  View_3811_16977: {
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
  Text_3811_16977: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16978: {
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
  Text_3811_16978: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16979: {
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
  View_3811_16980: {
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
  View_3811_16981: {
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
  ImageBackground_3855_18612: {
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
  View_3811_16983: {
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
  View_3811_16984: {
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
  View_3811_16985: {
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
  Text_3811_16985: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16986: {
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
  Text_3811_16986: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_16995: {
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
  View_3811_16996: {
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
  View_3811_16997: {
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
  ImageBackground_3855_18613: {
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
  View_3811_16999: {
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
  View_3811_17000: {
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
  View_3811_17001: {
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
  Text_3811_17001: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_17002: {
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
  Text_3811_17002: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18577: {
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
  View_3855_18578: {
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
  View_3855_18579: {
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
  View_3855_18580: {
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
  ImageBackground_3855_18614: {
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
  View_3855_18582: {
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
  View_3855_18583: {
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
  View_3855_18584: {
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
  Text_3855_18584: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18585: {
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
  Text_3855_18585: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18586: {
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
  View_3855_18587: {
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
  View_3855_18588: {
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
  ImageBackground_3855_18615: {
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
  View_3855_18590: {
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
  View_3855_18591: {
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
  View_3855_18592: {
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
  Text_3855_18592: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18593: {
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
  Text_3855_18593: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18602: {
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
  View_3855_18603: {
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
  View_3855_18604: {
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
  ImageBackground_3855_18605: {
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
  View_3855_18606: {
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
  View_3855_18607: {
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
  View_3855_18608: {
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
  Text_3855_18608: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18609: {
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
  Text_3855_18609: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18594: {
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
  View_3855_18595: {
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
  View_3855_18596: {
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
  ImageBackground_3855_18617: {
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
  View_3855_18598: {
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
  View_3855_18599: {
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
  View_3855_18600: {
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
  Text_3855_18600: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3855_18601: {
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
  Text_3855_18601: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16447: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16448: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16449: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16450: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3809_16450: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16451: {
    width: wp("34%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_3809_16451: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21038: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3809_16452: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.009999999776482582)"
  },
  View_I3809_16452_3760_16711: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I3809_16452_3760_16711: {
    color: "rgba(103, 114, 229, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21027: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_5630_21067: {
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5630_21067_3760_16706: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_5630_21066: {
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5630_21066_3760_16701: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3809_16453: {
    width: wp("134%"),
    minWidth: wp("134%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16454: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3809_16455: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_3809_16456: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3852_19462: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3809_16459: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16460: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16461: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16462: {
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
  Text_3809_16462: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16463: {
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
  Text_3809_16463: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16464: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3809_16464: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16465: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16466: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3918_19254: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I3918_19254_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_5643_20956: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I5643_20956_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_5643_20959: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I5643_20959_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_3847_18287: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 114, 229, 1)"
  },
  View_I3847_18287_3847_18280: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I3847_18287_3847_18280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16474: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3809_16475: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_3809_16476: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3809_16477: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_3852_19463: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6%"),
    resizeMode: "cover"
  },
  View_3809_16478: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16479: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16480: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3809_16481: {
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
  Text_3809_16481: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16482: {
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
  Text_3809_16482: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16483: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3809_16483: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3809_16484: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3918_19258: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_3918_19260: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I3918_19260_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_5643_20962: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I5643_20962_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_3847_18289: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 114, 229, 1)"
  },
  View_I3847_18289_3847_18280: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I3847_18289_3847_18280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21089: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5630_21090: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_5630_21091: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_5630_21092: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5630_21093: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5630_21094: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5630_21095: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5630_21096: {
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
  Text_5630_21096: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21097: {
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
  Text_5630_21097: {
    color: "rgba(143, 149, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21098: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_5630_21098: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5630_21099: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5630_21100: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_5630_21101: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 212, 119, 1)"
  },
  ImageBackground_I5630_21101_3918_19226: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_5630_21102: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 114, 229, 1)"
  },
  View_I5630_21102_3847_18280: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5630_21102_3847_18280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3811_18962: {
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
  View_I3811_18962_3772_14775: {
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
  View_I3811_18962_6340_21442: {
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
  ImageBackground_I3811_18962_6340_21443: {
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
  View_I3811_18962_6340_21444: {
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
  ImageBackground_I3811_18962_6340_21445: {
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
  View_I3811_18962_6340_21446: {
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
  TouchableOpacity_I3811_18962_3811_18578: {
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
  View_I3811_18962_3811_18578_3760_16721: {
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
  View_I3811_18962_3811_18578_3760_16722: {
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
  Text_I3811_18962_3811_18578_3760_16722: {
    color: "rgba(52, 50, 75, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3811_18962_3811_18578_3760_16723: {
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
  ImageBackground_I3811_18962_3811_18578_3760_16724: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_I3811_18962_3772_14778: {
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
