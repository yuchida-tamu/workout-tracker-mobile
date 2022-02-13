import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Heart } from '../../atoms/icons/Heart';
import { SIZES } from '../../../constants/sizes';
import { COLOR } from '../../../constants/colors';
import { styles } from './styles';

export const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={likeHandler} style={styles.heartButton}>
      {isLiked ? (
        <Heart size={SIZES.icon.small} color={COLOR.PRIMARY} />
      ) : (
        <Heart size={SIZES.icon.small} color={COLOR.GRAY} />
      )}
    </TouchableOpacity>
  );
};
