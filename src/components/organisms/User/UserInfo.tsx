import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { UserModel } from '../../../store/models/user/user';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { UserCard } from '../../molecules/User/UserCard';

export const UserInfo: React.FC = () => {
  const user = useSelector(userSelector);

  return (
    <View>
      <UserCard
        cardHeader="GOAL"
        text={user.goal.goal}
        gradient1={COLOR.bg.gradient.LIGHT_GREEN}
        gradient2={COLOR.bg.gradient.TEAL}
      />
      <UserCard
        cardHeader="ACHIEVEMENT"
        text={UserModel.getNumberOfAchievements(user)}
        gradient1={COLOR.bg.gradient.YELLOW}
        gradient2={COLOR.bg.gradient.ORANGE}
      />
    </View>
  );
};
