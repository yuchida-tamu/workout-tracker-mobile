type HomeScreenParam = undefined;
type UserScreenParam = undefined;
type UserEditParam = undefined;
type UserHomeParam = undefined;
type WorkoutListParam = undefined;

export type RootStackParamList = {
  Home: HomeScreenParam;
  User: UserScreenParam;
  UserEdit: UserEditParam;
  UserHome: UserHomeParam;
  Workout: WorkoutListParam;
};

export type RootStackParamTypes =
  | HomeScreenParam
  | UserScreenParam
  | UserEditParam
  | UserHomeParam
  | WorkoutListParam;
