import {Color, Matrics, Fonts, ApplicationStyles} from '../../../common/styles';

export default Styles = {
  ...ApplicationStyles,
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
    jusifyContent: 'center',
    alignItems: 'center',
    marginTop: Matrics.ScaleValue(100),
  },
};
module.exports = Styles;
