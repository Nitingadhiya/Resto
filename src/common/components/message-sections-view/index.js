import React from "react";
import { View, Text, SectionList } from "react-native";
import _ from "lodash";
import Moment from "react-moment";
import Styles from "./styles";
import { Helper } from "../../../util";
import { Color, Matrics } from "../../styles";

const timeCalendarStrings = {
  lastDay: "LT",
  sameDay: "LT",
  nextDay: "LT",
  lastWeek: "LT",
  nextWeek: "LT",
  sameElse: "LT"
};

const calendarStrings = {
  lastDay: "[Yesterday]",
  sameDay: "[Today]",
  nextDay: "DD MMM YYYY",
  lastWeek: "DD MMM YYYY",
  nextWeek: "DD MMM YYYY",
  sameElse: "DD MMM YYYY"
};

userStatus = owner => {
  if (owner && owner.status === "away") {
    return Color.orangish;
  } else if (owner && owner.status === "online") {
    return Color.green;
  } else if (owner && owner.status === "offline") {
    return Color.darkGray;
  }
};

export default class MessageSectionsView extends React.PureComponent {
  state = {
    headerDate: ""
  };
  setcolor(senderId, userId, bg) {
    const id = senderId !== userId ? true : false;
    if (bg === "background")
      return { backgroundColor: id ? Color.white : "#efffff" };
    if (bg === "time")
      return { color: id ? Color.greyishBrown30 : Color.greyishBrown30 };
    return { color: id ? Color.black30 : Color.black30 };
  }

  _onViewableItemsChanged = (
    info = {
      viewableItems: {
        key,
        isViewable,
        item: { columns },
        index,
        section
      },
      changed: {
        key,
        isViewable,
        item: { columns },
        index,
        section
      }
    }
  ) => {
    const getDate = _.get(
      _.last(info.viewableItems, `[${info.viewableItems.length}]section.title`),
      "section.title",
      ""
    );

    if (this.state.headerDate !== getDate) {
      this.setState({
        headerDate: getDate
      });
    }
    // you will see here the current visible items from top to bottom...
    //Reactotron.log(info.viewableItems);
  };

  listDisplay = (messages, onRefresh, userId, Ref) => (
    <SectionList
      ref={Ref}
      onViewableItemsChanged={this._onViewableItemsChanged}
      renderItem={({ item, index, section }) => (
        <View key={`${index.toString()}`} style={Styles.messageBody}>
          <View
            style={[
              {
                alignSelf: item.user.id !== userId ? "flex-start" : "flex-end",
                flexDirection: "row"
              }
            ]}
          >
            <View
              style={[
                Styles.innerMessageBody,
                this.setcolor(item.user.id, userId, "background")
              ]}
            >
              {item.user.id !== userId ? (
                <Text style={Styles.senderName}>{item.user.full_name}</Text>
              ) : null}
              <Text
                style={[
                  Styles.messageText,
                  this.setcolor(item.user.id, userId)
                ]}
              >
                {item.body}
              </Text>
              <View style={Styles.dateView}>
                <Moment
                  calendar={timeCalendarStrings}
                  element={Text}
                  style={[
                    Styles.dateText,
                    this.setcolor(item.user.id, userId, "time")
                  ]}
                >
                  {Helper.localDateTime(item.sent_at)}
                </Moment>
              </View>
            </View>
          </View>
        </View>
      )}
      renderSectionFooter={({ section: { title } }) => (
        <View style={Styles.renderHeaderView}>
          <Moment
            calendar={calendarStrings}
            element={Text}
            style={[Styles.textTitle]}
          >
            {Helper.localDateTime(title)}
          </Moment>
        </View>
      )}
      inverted={true}
      // invertStickyHeaders={true}
      // stickySectionHeadersEnabled={true}
      sections={messages}
      keyExtractor={(item, index) => item + index}
      automaticallyAdjustContentInsets={true}
      scrollEventThrottle={100}
      onEndReachedThreshold={0.8}
      onEndReached={onRefresh}
      bounces={false}
    />
  );

  render() {
    const { data, onRefresh, userId, Ref } = this.props;
    const { headerDate } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {headerDate ? (
          <View style={Styles.renderHeaderViewStyles}>
            <Moment
              calendar={calendarStrings}
              element={Text}
              style={[Styles.headerDate]}
            >
              {Helper.localDateTime(headerDate)}
            </Moment>
          </View>
        ) : null}
        {this.listDisplay(data, onRefresh, userId, Ref)}
      </View>
    );
  }
}
