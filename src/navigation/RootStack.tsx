type HomeScreenParam = undefined;
type UserScreenParam = undefined;
type UserEditParam = undefined;
type UserHomeParam = undefined;
type ProgramsParam = undefined;
type ProgramListParam = undefined;
type ProgramDetailParam = {
  programId: string;
};
type ProgramCompleteParam = {
  programId: string;
};

export type RootStackParamList = {
  Home: HomeScreenParam;
  User: UserScreenParam;
  UserEdit: UserEditParam;
  UserHome: UserHomeParam;
  Programs: ProgramsParam;
  ProgramList: ProgramListParam;
  ProgramDetail: ProgramDetailParam;
  ProgramComplete: ProgramCompleteParam;
};

export type RootStackParamTypes =
  | HomeScreenParam
  | UserScreenParam
  | UserEditParam
  | UserHomeParam
  | ProgramsParam
  | ProgramListParam
  | ProgramDetailParam
  | ProgramCompleteParam;
