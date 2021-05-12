import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet,FlatList, Text, Button, View, onPress, Image, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView,useSafeArea } from 'react-native-safe-area-context';
import {styles} from '../components/styles'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const CustomData = require('../files/userData.json');
import { LinearGradient } from 'expo-linear-gradient';
// import {useFonts} from 'expo-font';


 const margin = 10
 const colors ={
   grey: '#F4F4F4',
   blue: '#54b3ea',
 }

const Item = ({ social }) => (
<Pressable onPress={{}} style={styles.item}>
  <Text style={styles.title}>{social}</Text>
</Pressable>
);

function HomeScreen({navigation}) {
  const insets = useSafeArea();

  // const [loaded] = useFonts({
  //   SFRegular: require('../assets/fonts/SF/SF-Compact-Text-Regular.otf'),
  // });
  //
  // if (!loaded) {
  //   return null;
  // }

  const renderItem = ({ item }) => (
    <Item social={item.social} />
  );

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaProvider style={[styles.safeAreaViewStyle]}>
    <LinearGradient
      colors={['#78FFC6', '#AC9EFF']}
      style={[styles.background, {height: '100%'}]}
      >
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={[styles.scrollView, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <View style={[styles.header, styles.section]}>
        <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={require('../files/profilePic.png')} />
      </View>
      <View style={[styles.section]}>
        <Text style={styles.name}>{CustomData[0].name}</Text>
      </View>
      <View style={[styles.bio, styles.section]}>
        <Text style={[styles.bioText]}>{CustomData[0].bio}</Text>
      </View>
      <View style={[styles.video, styles.section]}>

          <Video
            ref={video}
            style={{width: 250, height: 140.625, borderRadius: 7}}
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          <Pressable onPress={() => navigation.navigate('MyModal')}
          style={{ width: 250, height: 140.625, marginTop: -140.625}}>
          <View
          style={{backgroundColor: 'rgba(160, 160, 160, 0.4)', width: '100%', borderRadius: 7, height: '100%'}}>
            <Button onPress={() => navigation.navigate('MyModal')} title="" style={{width: '100%', backgroundColor: 'rgba(165, 77, 16)', height: '100%'}}/>
          </View>
          </Pressable>
      </View>
      <View style={[styles.infoSections, styles.section]}>
        <Text style={styles.sectionH1}>Education</Text>
        <Button onPress={() => navigation.navigate('MyModal')} title="" style={{width: '100%', height: '100'}}/>
        <Text style={styles.sectionSubText}>{CustomData[0].education[0].AI}</Text>
      </View>
      <View style={[styles.infoSections, styles.section]}>
        <Text style={styles.sectionH1}>Experience</Text>
        <Text style={styles.sectionSubText}>{CustomData[0].experience[0].AI}</Text>
      </View>
      <View style={[styles.flatlistHorizontal, styles.section]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={CustomData}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.social}
        />
      </View>
      <View style={[styles.infoSections, styles.section]}>
        <Text style={styles.sectionH1}>Experience</Text>
        <Text style={styles.sectionSubText}>{CustomData[0].experience[0].AI}</Text>
      </View>
    </ScrollView>
    </LinearGradient>
    </SafeAreaProvider>
  );
}

function ModalScreen({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(0, 0, 0)'}}>
      <Video
        ref={video}
        shouldPlay
        style={{width: screenWidth, height:screenWidth*0.5625, borderRadius: 7}}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{fontSize:28}}>
        <Button onPress={() => navigation.goBack()} title="Back" color="#FFFF"/>
      </View>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <MainStack.Screen name="HomeScreen" headerMode="none" component={HomeScreen} />
    </MainStack.Navigator>
  );
}
function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"

        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="MyModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer
    screenOptions={{
      headerShown:false
    }}
    independent={true}>
      <RootStack.Navigator
      screenOptions={{
        headerShown:false
      }}
      mode="modal">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
