import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { styles } from './styles';

export const UserHeader: React.FC = () => {
  const user = useSelector(userSelector);
  return (
    <LinearGradient
      colors={[COLOR.bg.gradient.PURPLE, COLOR.bg.gradient.LIGHT_BLUE]}
      style={styles.userHeader}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={{ uri: user.iconUrl }} />
      </View>
      <View style={styles.usernameConatiner}>
        <Text style={styles.usernameText}>{user.username}</Text>
      </View>
    </LinearGradient>
  );
};
