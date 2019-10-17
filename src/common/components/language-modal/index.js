import React, { Component } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { Matrics, Color, Images } from "../../styles";
import { Radio } from "../../components/";
import BottomButton from "../../components/bottom-button";
import Styles from "./styles";
import { Helper } from "../../../util";

// const countryFlag = res => {
//   if (res.value === "de")
//     return <Image source={Images.deFlag} style={Styles.flagStyles} />;
//   if (res.value === "en")
//     return <Image source={Images.enFlag} style={Styles.flagStyles} />;
//   if (res.value === "pl")
//     return <Image source={Images.plFlag} style={Styles.flagStyles} />;
// };

const LanguageModal = ({
  visible,
  item,
  onPress,
  imageSrc,
  title,
  closeModalReq,
  selectOption,
  saveLanguage
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={closeModalReq}
    >
      <TouchableOpacity
        style={Styles.mainViewCenter}
        onPress={closeModalReq}
        activeOpacity={1}
      >
        <View style={Styles.bgMaintain}>
          {/* <View style={Styles.headerView}>
            <TouchableOpacity
              style={Styles.closeModalStyle}
              onPress={closeModalReq}
            >
              <MIcon
                name="close"
                size={Matrics.ScaleValue(20)}
                color={Color.black}
              />
            </TouchableOpacity>
            <Text style={Styles.headerText}>{"Language Preference"}</Text>
          </View> */}
          <View style={Styles.bodyModalContent}>
            <View style={{ marginTop: Matrics.ScaleValue(0) }}>
              {item.map((res, index) => (
                <TouchableOpacity
                  style={Styles.closeModalStyle}
                  onPress={() => selectOption(item, index)}
                  key={`${index.toString()}`}
                >
                  <Image
                    source={Helper.countryFlag(res.value)}
                    style={Styles.flagStyles}
                  />

                  <Text style={{ width: Matrics.ScaleValue(70) }}>
                    {res.key}
                    {"\n"}
                    <Text style={{ fontSize: Matrics.ScaleValue(8) }}>
                      ({res.title})
                    </Text>
                  </Text>
                  {res.checked && (
                    <MIcon
                      name={"check"}
                      color={Color.darkRed}
                      size={Matrics.ScaleValue(15)}
                    />
                  )}
                </TouchableOpacity>
              ))}

              {/* <Radio
                items={item}
                title={"Language"}
              /> */}
            </View>
          </View>
          {/* <View
            style={{
              width: "100%",
              borderwidth: 1,
              width: Matrics.screenWidth - 25,
              alignSelf: "center",
              marginBottom: 0
            }}
          >
            <BottomButton
              onPress={saveLanguage}
              buttonText="Save"
              color={Color.darkRed}
              customStyle={Styles.bottomBTN}
            />
          </View> */}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export { LanguageModal };
