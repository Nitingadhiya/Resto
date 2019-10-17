import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Matrics, ApplicationStyles, Color, Fonts} from '../../common/styles';
export default Styles = {
  ...ApplicationStyles,
  mainContainer: {
    backgroundColor: Color.white,
    flex: 1,
  },
  listView: {
    overflow: 'hidden',
    borderRadius: Matrics.ScaleValue(10),
    marginBottom: Matrics.ScaleValue(10),
  },
  prodcutImage: {
    height: Matrics.ScaleValue(180),
    width: Matrics.screenWidth - Matrics.ScaleValue(20),
  },
  viewSpace: {
    padding: Matrics.ScaleValue(10),
  },
  shadowBg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    fontSize: Matrics.ScaleValue(22),
    fontFamily: Fonts.type.RubikMedium,
    color: Color.white,
  },
  itemCategoryName: {
    fontSize: Matrics.ScaleValue(13),
    fontFamily: Fonts.type.RubikLight,
    color: Color.white,
  },
  ratingView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: Matrics.ScaleValue(40),
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
  },
  ratingImage: {
    width: Matrics.ScaleValue(20),
    height: Matrics.ScaleValue(20),
    marginHorizontal: Matrics.ScaleValue(3),
  },
  compactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Matrics.ScaleValue(10),
    flex: 1,
  },
  starView: {
    width: '50%',
    flexDirection: 'row',
  },
};
module.exports = Styles;
