import { Category } from '../../../enums/categories';

export type WorkoutModelType = {
  id: string;
  name: string;
  difficulty: number;
  description: string;
  category: Category;
  setsRecommended: number;
  repsRecommended: number;
  imageUrl: string;
  isBodyWeight: boolean;
};

const create = (args: Partial<WorkoutModelType>) => {
  return {
    id: `workOut_${Math.random()}`,
    name: '',
    dificulty: 0,
    description: '',
    category: Category.Default,
    setsRecommended: 0,
    repsRecommended: 0,
    imageUrl: '',
    isBodyWeight: false,
    ...args,
  };
};

const updateName = (data: WorkoutModelType, name: string) => {
  return create({ ...data, name });
};

const updateDifficulty = (data: WorkoutModelType, difficulty: number) => {
  return create({ ...data, difficulty });
};

const updateDescription = (data: WorkoutModelType, description: string) => {
  return create({ ...data, description });
};

const updateCategory = (data: WorkoutModelType, category: Category) => {
  return create({ ...data, category });
};

const updateSetsRecommended = (data: WorkoutModelType, setsRecommended: number) => {
  return create({ ...data, setsRecommended });
};

const updateRepsRecommended = (data: WorkoutModelType, repsRecommended: number) => {
  return create({ ...data, repsRecommended });
};

const updateImageUrl = (data: WorkoutModelType, imageUrl: string) => {
  return create({ ...data, imageUrl });
};

const updateIsBodyWeight = (data: WorkoutModelType, isBodyWeight: boolean) => {
  return create({ ...data, isBodyWeight });
};

export const WorkoutModel = Object.freeze({
  create,
  updateName,
  updateDifficulty,
  updateDescription,
  updateCategory,
  updateSetsRecommended,
  updateRepsRecommended,
  updateImageUrl,
  updateIsBodyWeight,
});
