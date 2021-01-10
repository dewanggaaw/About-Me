import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    };
  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }

  render() {
    return (
      <View style={HomeStyle.Container}>
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <View style={[HomeStyle.bagianAtas]}>
              <Image
                source={{uri: this.state.image}}
                style={HomeStyle.HeroImage}
              />
              <View style={[HomeStyle.bioData]}>
                <Text style={[HomeStyle.namaOrang]}>Norman Reedus</Text>
                <Text style={[HomeStyle.jobPerson]}>
                  React Native Developer
                </Text>
                <View style={[HomeStyle.statusData]}>
                  <View style={[HomeStyle.articleStyle]}>
                    <Text style={{fontSize: 10, opacity: 0.6}}>Articles</Text>
                    <Text style={{fontSize: 20}}>34</Text>
                  </View>
                  <View style={[HomeStyle.articleStyle]}>
                    <Text style={{fontSize: 10, opacity: 0.6}}>Followers</Text>
                    <Text style={{fontSize: 20}}>980</Text>
                  </View>
                  <View style={[HomeStyle.articleStyle]}>
                    <Text style={{fontSize: 10, opacity: 0.6}}>Rating</Text>
                    <Text style={{fontSize: 20}}>34</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={HomeStyle.ButtonHeroContainer}>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView style={HomeStyle.midContainer}>
          <Text style={{fontSize: 20}}>Notable Works</Text>
          <Text style={{fontSize: 17, opacity: 0.4}}>
            Based on the popularity of articles
          </Text>
          <ScrollView horizontal style={HomeStyle.workExp}>
            <View style={HomeStyle.orbs}>
              <Image
                source={require('../../Assets/Images/forest.jpg')}
                style={HomeStyle.workImg}
              />
              <Text style={{opacity: 0.5}}>Nature</Text>
              <Text style={{fontSize: 17}}>
                Let us plant more trees {'\n'}from this year
              </Text>
            </View>
            <View style={HomeStyle.orbs}>
              <Image
                source={require('../../Assets/Images/travel.jpg')}
                style={HomeStyle.workImg}
              />
              <Text style={{opacity: 0.5}}>Travel</Text>
              <Text style={{fontSize: 17}}>
                These are the top {'\n'}places in world to visit
              </Text>
            </View>
            <View style={HomeStyle.orbs}>
              <Image
                source={require('../../Assets/Images/archi.jpg')}
                style={HomeStyle.workImg}
              />
              <Text style={{opacity: 0.5}}>Architecture</Text>
              <Text style={{fontSize: 17}}>
                Best design for your {'\n'}future house
              </Text>
            </View>
          </ScrollView>
          <View style={HomeStyle.lowerComponent}>
            <Text style={HomeStyle.feat}>Featured Article</Text>
            <Text style={{color: 'white'}}>
              Natural Mood regulation low or even {'\n'}absent in people with
              depression
            </Text>
          </View>
          <View style={HomeStyle.lowerComponent}>
            <Text style={HomeStyle.feat}>Featured Article</Text>
            <Text style={{color: 'white'}}>
              Natural Mood regulation low or even {'\n'}absent in people with
              depression
            </Text>
          </View>
          <View style={HomeStyle.lowerComponent}>
            <Text style={HomeStyle.feat}>Featured Article</Text>
            <Text style={{color: 'white'}}>
              Natural Mood regulation low or even {'\n'}absent in people with
              depression
            </Text>
          </View>
        </ScrollView>

        {/* <View style={HomeStyle.BottomContainer}>
          <TouchableOpacity
            onPress={() => this.changeImage()}
            activeOpacity={0.7}
            style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
            <Text style={{color: 'white'}}>Next Image</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

export default Home;
