import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { EditIcon } from '../../atoms/icons/EditIcon';
import { styles } from './styles';

type Props = {
  navigate: () => void;
};

export const UserHeader: React.FC<Props> = ({ navigate }) => {
  const user = useSelector(userSelector);
  return (
    <LinearGradient
      colors={[COLOR.bg.gradient.PURPLE, COLOR.bg.gradient.LIGHT_BLUE]}
      style={styles.userHeader}>
      <TouchableOpacity style={styles.userEditIcon} onPress={navigate}>
        <EditIcon />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={{ uri: user.iconUrl }} />
      </View>
      <View style={styles.usernameConatiner}>
        <Text style={styles.usernameText}>{user.username}</Text>
      </View>
    </LinearGradient>
  );
};
