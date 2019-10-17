import {Color, Matrics, Fonts, ApplicationStyles} from '../../../common/styles';

export default Styles = {
  ...ApplicationStyles,
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  bgView: {
    flex: 1,
  },
  catView: {
    height: Matrics.ScaleValue(40),
    backgroundColor: Color.darkRed,
    justifyContent: 'center',
    padding: Matrics.ScaleValue(10),
    borderRadius: Matrics.ScaleValue(5),
    margin: Matrics.ScaleValue(5),
  },
  categoryText: {
    color: Color.white,
    fontFamily: Fonts.type.Rubik,
    FontSize: Matrics.ScaleValue(18),
  },
  categoryMainView: {
    flexDirection: 'row',
    padding: Matrics.ScaleValue(5),
  },
  productImage: {
    width: Matrics.screenWidth / 2 - Matrics.ScaleValue(15),
    height: Matrics.screenWidth / 2,
    borderRadius: Matrics.ScaleValue(10),
    overflow: 'hidden',
  },
  mainListView: {
    flex: 1,
    minHeight: Matrics.screenHeight - Matrics.ScaleValue(180),
    //padding: Matrics.ScaleValue(10),
  },
  gridView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shadowBg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCategoryText: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(20),
    color: Color.white,
  },
  touchSpace: {
    margin: Matrics.ScaleValue(10),
  },
};
module.exports = Styles;
