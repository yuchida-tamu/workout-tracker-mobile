import { RootState } from '../../store';
import { RecordGroupType } from '../../models/workout/recordGroup';
import { COLOR } from '../../../constants/colors';
import { Category } from '../../../enums/categories';

export type ProgressDisplayDataType = {
  id: string;
  date: string;
  total: number;
  loadPerRep: number;
  max: number;
  condition: number;
};

type CategoryCounterType = {
  ARM: number;
  BACK: number;
  SHOULDERS: number;
  LEGS: number;
  CHEST: number;
  ABS: number;
  FULL_BODY: number;
  OTHER: number;
};

function getColorByCategory(category: Category) {
  switch (category) {
  case Category.Abs:
    return COLOR.graph.category.ABS;
  case Category.Arms:
    return COLOR.graph.category.ARM;
  case Category.Back:
    return COLOR.graph.category.BACK;
  case Category.Chest:
    return COLOR.graph.category.CHEST;
  case Category.Legs:
    return COLOR.graph.category.LEGS;
  case Category.Shoulders:
    return COLOR.graph.category.SHOULDERS;
  case Category.FullBody:
    return COLOR.graph.category.FULL_BODY;
  default:
    return COLOR.graph.category.OTHER;
  }
}

function countCategory(category: Category, counter: CategoryCounterType) {
  const clone = { ...counter };
  switch (category) {
  case Category.Abs:
    clone.ABS += 1;
    break;
  case Category.Arms:
    clone.ARM += 1;
    break;
  case Category.Back:
    clone.BACK += 1;
    break;
  case Category.Chest:
    clone.CHEST += 1;
    break;
  case Category.Legs:
    clone.LEGS += 1;
    break;
  case Category.Shoulders:
    clone.SHOULDERS += 1;
    break;
  case Category.FullBody:
    clone.FULL_BODY += 1;
    break;
  default:
    clone.OTHER += 1;
  }
  return clone;
}

function getRatio(total: number, counter: CategoryCounterType, category: Category) {
  switch (category) {
  case Category.Abs:
    return counter.ABS / total;
  case Category.Arms:
    return counter.ARM / total;
  case Category.Back:
    return counter.BACK / total;
  case Category.Chest:
    return counter.CHEST / total;
  case Category.Legs:
    return counter.LEGS / total;
  case Category.Shoulders:
    return counter.SHOULDERS / total;
  case Category.FullBody:
    return counter.FULL_BODY / total;
  default:
    return counter.OTHER / total;
  }
}

export const userSelector = (state: RootState) => state.user;
export const usernameSelector = (state: RootState) => state.user.username;
export const iconUrlSelector = (state: RootState) => state.user.iconUrl;
export const numberOfProgramsSelector = (state: RootState) => state.user.programs.length;
export const programsSelector = (state: RootState) => state.user.programs;
export const programByIdSelector = (programId: string) => (state: RootState) => {
  const filtered = state.user.programs.filter((program) => program.id === programId);
  return filtered[0];
};
export const progressSelector = (programId: string) => (state: RootState) => {
  const targetProgram = state.user.programs.filter((program) => program.id === programId);
  if (targetProgram.length === 0) return undefined;
  return targetProgram[0].progressList;
};
export const categoryRatioDataSelector = (state: RootState) => {
  const flatWorkoutList = state.user.programs.flatMap((program) => program.workoutList);
  const total = flatWorkoutList.length;
  const counter = flatWorkoutList.reduce(
    (prev, current) => {
      return countCategory(current.category, prev);
    },
    {
      ARM: 0,
      BACK: 0,
      SHOULDERS: 0,
      LEGS: 0,
      CHEST: 0,
      ABS: 0,
      FULL_BODY: 0,
      OTHER: 0,
    },
  );

  const rationData: { ratio: number; category: Category; color: string }[] = [];

  Object.entries(Category).forEach(([, value]) => {
    rationData.push({
      ratio: getRatio(total, counter, value),
      category: value,
      color: getColorByCategory(value),
    });
  });

  return rationData;
};

export const progressFilteredByWorkoutSelector =
  (programId: string, workoutId: string) => (state: RootState) => {
    const targetProgram = state.user.programs.filter((program) => program.id === programId);
    if (targetProgram.length === 0) return undefined;

    const list: RecordGroupType[] = targetProgram[0].progressList.map((progress) => {
      return {
        id: progress.id,
        date: progress.date,
        recordHolders: progress.recordHolders.filter((rh) => rh.workoutId === workoutId),
        condition: progress.condition,
      };
    });

    const processed: ProgressDisplayDataType[] = list.map((rg) => {
      let max = 0;
      let total = 0;
      let totalReps = 0;
      rg.recordHolders.forEach((item) => {
        item.records.forEach((record) => {
          total += record.load * record.reps;
          totalReps += record.reps;
          if (record.load > max) {
            max = record.load;
          }
        });
      });

      return {
        id: `processed_${rg.id}`,
        date: rg.date,
        loadPerRep: total / totalReps,
        max,
        total,
        condition: rg.condition,
      };
    });

    return processed;
  };
