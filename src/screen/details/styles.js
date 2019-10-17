import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Matrics, ApplicationStyles, Color, Fonts} from '../../common/styles';
export default Styles = {
  ...ApplicationStyles,
  mainContainer: {
    backgroundColor: Color.white,
    flex: 1,
  },
  detailView: {
    flex: 1,
  },
  mainCView: {
    flex: 1,
  },
  bgImage: {
    height: Matrics.ScaleValue(180),
    width: Matrics.screenWidth,
    justifyContent: 'flex-end',
  },
  prodcutTitleView: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    height: Matrics.ScaleValue(50),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Matrics.ScaleValue(10),
  },
  starIconCss: {
    width: Matrics.ScaleValue(20),
    height: Matrics.ScaleValue(18),
    marginRight: Matrics.ScaleValue(3),
  },
  titleText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
    color: Color.white,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ratingCount: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: Matrics.ScaleValue(10),
    paddingVertical: Matrics.ScaleValue(15),
  },
  locationIconCss: {
    width: Matrics.ScaleValue(13),
    height: Matrics.ScaleValue(20),
  },
  locationAddressView: {
    flexDirection: 'row',
  },
  addressText: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
  },
  distanceView: {
    marginLeft: Matrics.ScaleValue(10),
    borderLeftWidth: 1,
    borderColor: Color.paleGrey,
    paddingLeft: Matrics.ScaleValue(10),
  },
  descriptionText: {
    color: Color.black30,
    fontSize: Matrics.ScaleValue(14),
    fontFamily: Fonts.type.Rubik,
  },
  descriptionView: {
    padding: Matrics.ScaleValue(10),
  },
  iconDetails: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.paleGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Matrics.ScaleValue(10),
    paddingVertical: Matrics.ScaleValue(10),
  },
  foodMenuIcon: {
    width: Matrics.ScaleValue(80),
    height: Matrics.ScaleValue(80),
    margin: Matrics.ScaleValue(10),
  },
  foodMenuView: {
    alignItems: 'center',
  },
  reviewView: {},
  starReviewView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: Matrics.ScaleValue(10),
  },
  textView: {
    flex: 1,
  },
  welcomeText: {
    color: Color.black30,
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(18),
  },
  touchOpac: {
    width: Matrics.ScaleValue(250),
    height: Matrics.ScaleValue(50),
    // padding: Matrics.ScaleValue(15),
    // paddingHorizontal: Matrics.ScaleValue(40),
    borderWidth: 1,
    borderColor: Color.darkRed,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Matrics.ScaleValue(20),
    marginVertical: Matrics.ScaleValue(10),
  },
  touchText: {
    color: Color.black30,
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(18),
  },
  extraTouch: {
    backgroundColor: Color.darkRed,
  },
  colorWhite: {
    color: 'white',
  },
  moreInfoView: {
    paddingHorizontal: Matrics.ScaleValue(10),
    flexWrap: 'wrap',
    marginTop: Matrics.ScaleValue(20),
  },
  contactInfo: {
    flexDirection: 'row',
    marginVertical: Matrics.ScaleValue(10),
    width: '100%',
  },
  emailIcon: {
    width: Matrics.ScaleValue(24),
    height: Matrics.ScaleValue(16),
  },
  imageView: {
    width: Matrics.ScaleValue(30),
  },
  textContact: {
    color: Color.black30,
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
  },
  mapview: {
    borderWidth: 1,
    borderColor: Color.paleGreyThree,
    borderRadius: Matrics.ScaleValue(5),
    height: Matrics.ScaleValue(150),
    width: Matrics.screenWidth - Matrics.ScaleValue(10),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  starCss: {
    marginRight: Matrics.ScaleValue(3),
  },
  paginationView: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: Matrics.ScaleValue(2),
  },
  textPagination: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
  },
};
module.exports = Styles;
