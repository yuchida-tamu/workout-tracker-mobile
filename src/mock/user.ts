import { Category } from '../enums/categories';
import { ProgramModel } from '../store/models/program/program';
import { AchievementModel } from '../store/models/user/achievement';
import { GoalModel } from '../store/models/user/goal';
import { UserModelType } from '../store/models/user/user';

export const mockUser: UserModelType = {
  iconUrl: 'https://www.boston.com/wp-content/uploads/2020/07/Wizards_Beal_Basketball_31092.jpg',
  username: 'Bradly Beal',
  programs: [
    ProgramModel.create({
      name: '腕のトレーニング',
      ownerId: 'user',
      category: Category.Arms,
    }),
    ProgramModel.create({
      name: '腕のトレーニング',
      ownerId: 'user',
      category: Category.Arms,
    }),
    ProgramModel.create({
      name: '腕のトレーニング',
      ownerId: 'user',
      category: Category.Arms,
    }),
    ProgramModel.create({
      name: '腕のトレーニング',
      ownerId: 'user',
      category: Category.Arms,
    }),
    ProgramModel.create({
      name: '腕のトレーニング',
      ownerId: 'user',
      category: Category.Arms,
    }),
  ],
  goal: GoalModel.create(),
  achievement: AchievementModel.create(),
};
