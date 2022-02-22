import React, { useMemo } from 'react';
import { BadIcon } from '../../atoms/icons/Conditions/BadIcon';
import { GoodIcon } from '../../atoms/icons/Conditions/GoodIcon';
import { GreatIcon } from '../../atoms/icons/Conditions/GreatIcon';
import { NotGoodIcon } from '../../atoms/icons/Conditions/NotGoodIcon';
import { OkIcon } from '../../atoms/icons/Conditions/OKIcon';

type Props = {
  condition: number;
  size?: number;
};

export const WorkoutConditionIcon: React.FC<Props> = ({ condition, size }) => {
  const icon = useMemo(() => {
    switch (condition) {
    case 1:
      return <BadIcon size={size} />;
    case 2:
      return <NotGoodIcon size={size} />;
    case 3:
      return <OkIcon size={size} />;
    case 4:
      return <GoodIcon size={size} />;
    case 5:
      return <GreatIcon size={size} />;
    default:
      return <OkIcon size={size} />;
    }
  }, [condition, size]);

  return icon;
};
