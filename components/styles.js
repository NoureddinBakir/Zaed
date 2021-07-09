import {StyleSheet, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const margin = 7;
const colors ={
  grey: '#e4e4e4',
  blue: '#54b3ea',
};

const styles = StyleSheet.create({
  safeAreaViewStyle:{
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: linearGradient(36deg, #f09, #3023AE, #0ff),
  },
  container: {

  },
  gradBackgroung:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  image:{
    backgroundColor: colors.blue,
  },
  scrollView:{
    flexGrow: 1,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  section:{
    // flex: 1,
    marginBottom: margin,
  },
  page: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    width: 100,
    height: 100,
    borderRadius: 200,
    // marginBottom: margin,
  },
  name:{
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  bio:{
    backgroundColor: colors.grey,
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 30,
    textAlign: 'justify',
    width: '70%',
  },
  bioText:{
    color: '#000000',
    fontSize: 12,
    textAlign: 'left',
    // fontFamily: 'SF-Compact-Text-Bold',
  },
  video:{
    borderRadius: 20,
    // height: 90
    // marginBottom: margin,
  },
  infoSections:{
    backgroundColor: colors.grey,
    borderRadius: 7,
    padding: 7,
    textAlign: 'justify',
    width: '95%',
    // marginBottom: margin,
  },
  infoSectionsText:{
    fontSize: 12,
    color: 'black'
  },
  sectionH1:{
    fontWeight: "600",
    color: 'black'
  },
  sectionSubText:{
    marginLeft: 10,
  },
  horizontalScroll:{
    width: screenWidth,
    // marginHorizontal: -20,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  socialMediaBox:{
    width: 150,
    height: 250,
    borderRadius: 7,
    // marginHorizontal: -10,
    height: '100%',
    backgroundColor: colors.blue,
    marginHorizontal: 7,
  },
  item: {
    backgroundColor: colors.grey,
    padding: 20,
    marginVertical: 7,
    borderRadius: 7,
    marginHorizontal: 7,
    width:155,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
  },
  flatlistHorizontal: {
    width: screenWidth,
    // backgroundColor: colors.blue,
    // marginHorizontal: -20,
    height: 200,
    // marginBottom: 10,
  }
});

export {styles, margin}
