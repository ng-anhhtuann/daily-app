import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../utils/device';
import {
  BLUE_HEAVY,
  CREATE_BOLD,
  CREATE_FADE,
  EVENT_BOLD,
  EVENT_FADE,
  GREY_TEXT,
  MEETING_BOLD,
  MEETING_FADE,
  NAME_TEXT,
  PERSONAL_BOLD,
  PERSONAL_FADE,
  PRIVATE_BOLD,
  PRIVATE_FADE,
  WHITE,
  WORK_BOLD,
  WORK_FADE,
} from '../utils/colors.js';
import {
  CreateIcon,
  EventIcon,
  MeetingIcon,
  PersonalIcon,
  PrivateIcon,
  WorkIcon,
} from '../shared/svgs';
import CategoryItem from '../shared/CategoryItem';
const Category = ({categoryContainer, sideCategory}) => {
  return (
    <View style={categoryContainer}>
      <View style={sideCategory}>
        <CategoryItem
          colorBackground={PERSONAL_FADE}
          colorIcon={PERSONAL_BOLD}
          icon={<PersonalIcon />}
          title={'Personal'}
          numberOfTasks={6}
        />
        <CategoryItem
          colorBackground={PRIVATE_FADE}
          colorIcon={PRIVATE_BOLD}
          icon={<PrivateIcon />}
          title={'Private'}
          numberOfTasks={3}
        />
        <CategoryItem
          colorBackground={EVENT_FADE}
          colorIcon={EVENT_BOLD}
          icon={<EventIcon />}
          title={'Events'}
          numberOfTasks={4}
        />
      </View>
      <View style={sideCategory}>
        <CategoryItem
          colorBackground={WORK_FADE}
          colorIcon={WORK_BOLD}
          icon={<WorkIcon />}
          title={'Work'}
          numberOfTasks={8}
        />
        <CategoryItem
          colorBackground={MEETING_FADE}
          colorIcon={MEETING_BOLD}
          icon={<MeetingIcon />}
          title={'Meeting'}
          numberOfTasks={4}
        />
        <CategoryItem
          colorBackground={CREATE_FADE}
          colorIcon={CREATE_BOLD}
          icon={<CreateIcon />}
          title={'Create Boards'}
          numberOfTasks={0}
        />
      </View>
    </View>
  );
};
export default Category;
