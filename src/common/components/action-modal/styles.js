import { Color, Images, Matrics, Fonts, ApplicationStyles } from '../../styles';
export default Styles = {
    ...ApplicationStyles,
    btnStyle: {
      width: '100%', 
      alignItems: 'center', 
      borderBottomWidth: 1, 
      borderColor: Color.paleGrey, 
      height: Matrics.ScaleValue(55), 
      justifyContent: 'center'
    },
    customViewCont: {
      height: Matrics.ScaleValue(45)
    },
    btnTextStyle: {
      fontFamily: Fonts.type.Rubik, fontSize: Matrics.ScaleValue(16), lineHeight: Matrics.ScaleValue(24)
    },
    cancelText: {
      color: Color.lightRed, fontFamily: Fonts.type.RubikMedium, fontSize: Matrics.ScaleValue(14),
    },
    customActionView: {
        marginBottom: 15
    }
};
