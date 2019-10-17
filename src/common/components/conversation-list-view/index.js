import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";
import _ from "lodash";
import { Images, Color, Matrics } from "../../styles";
import Moment from "react-moment";
import Styles from "./styles";
import { Helper } from "../../../util";

const calendarStrings = {
  lastDay: "L",
  sameDay: "LT",
  nextDay: "L",
  lastWeek: "L",
  nextWeek: "L",
  sameElse: "L"
};

userStatus = recipient => {
  if (recipient && recipient.status === "away") {
    return "yellow";
  } else if (recipient && recipient.status === "online") {
    return Color.green;
  } else if (recipient && recipient.status === "offline") {
    return "grey";
  }
};

export default class ConversationListView extends React.PureComponent {
  listDisplay = (data, onPressItem) => (
    <TouchableOpacity
      style={Styles.rowView}
      activeOpacity={1}
      onPress={() =>
        onPressItem(
          data.id,
          data.recipient ? data.recipient.full_name : "",
          data.recipient ? data.recipient.profile_image_url : ""
        )
      }
    >
      {/* <View style={[Styles.imageView, { backgroundColor: colorCode }]}>
        <Text style={Styles.imageText}>{data.sender_name.charAt(0)}</Text>
      </View> */}
      <View style={[Styles.imageView]}>
        <ImageBackground
          source={Images.profilePhoto}
          style={Styles.userImage}
          resizeMode="center"
        >
          <Image
            source={{ uri: _.get(data, "recipient.profile_image_url") }}
            style={Styles.userImage}
          />
          <View
            style={[
              Styles.onlineView,
              { backgroundColor: userStatus(data.recipient) }
            ]}
          />
        </ImageBackground>
      </View>
      <View style={Styles.listMessageView}>
        {data.recipient.full_name ? (
          <Text style={Styles.userNameText} numberOfLines={1}>
            {_.get(data, "recipient.full_name", "recipient.anonymized_name")}
          </Text>
        ) : null}

        <Text style={Styles.messageText} numberOfLines={1}>
          {_.get(data, "latest_message.body", "")}
        </Text>
      </View>
      <View style={Styles.dateView}>
        {data ? (
          <Moment
            calendar={calendarStrings}
            element={Text}
            style={Styles.dateText}
          >
            {Helper.localDateTime(data.updated_at)}
          </Moment>
        ) : null}
        {data.unread_messages_count ? (
          <View style={Styles.unreadCountView}>
            <Text style={Styles.unreadCountText}>
              {_.get(data, "unread_messages_count", "")}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  render() {
    //const colorCode = Helper.getRandomColor();
    const { data, onPressItem } = this.props;
    return this.listDisplay(data, onPressItem);
  }
}
