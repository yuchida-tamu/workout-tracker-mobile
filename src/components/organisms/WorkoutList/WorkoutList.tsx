import React from 'react';
import { ScrollView, View } from 'react-native';
import { WorkoutListItem } from './WorkoutListItem';

const mock = [
  {
    id: '1',
    photo: 'photo1',
    name: 'test1',
    level: 2,
  },
  {
    id: '2',
    photo: 'photo2',
    name: 'test2',
    level: 3,
  },
  {
    id: '3',
    photo: 'photo3',
    name: 'test3',
    level: 5,
  },
  {
    id: '4',
    photo: 'photo4',
    name: 'test4',
    level: 1,
  },
  {
    id: '5',
    photo: 'photo5',
    name: 'test5',
    level: 1,
  },
];

const items = mock?.map((item) => (
  <WorkoutListItem
    key={item.id}
    id={item.id}
    photo={item.photo}
    name={item.name}
    level={item.level}
  />
));

export const WorkoutList = () => {
  return (
    <View>
      <ScrollView>{items}</ScrollView>
    </View>
  );
};
