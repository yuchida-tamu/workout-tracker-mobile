import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export enum SELECTED_PROGRAM_STATE {
  NO_PROGRAM_SELECTED = 'NO_PROGRAM_SELECTED',
}
export enum SELECTED_WORKOUT_STATE {
  NO_WORKOUT_SELECTED = 'NO_WORKOUT_SELECTED',
}
export type NO_PROGRAM_SELECTED = SELECTED_PROGRAM_STATE.NO_PROGRAM_SELECTED;
export type NO_WORKOUT_SELECTED = SELECTED_WORKOUT_STATE.NO_WORKOUT_SELECTED;

export type programIdType = string | NO_PROGRAM_SELECTED;
export type workoutIdType = string | NO_WORKOUT_SELECTED;
type ProgramContextType = {
  programId: programIdType;
  workoutId: workoutIdType;
  recordGroupId: string;
  recordHolderId: string;
  setProgramId?: Dispatch<SetStateAction<programIdType>>;
  setWorkoutId?: Dispatch<SetStateAction<workoutIdType>>;
  setRecordGroupId?: Dispatch<SetStateAction<string>>;
  setRecordHolderId?: Dispatch<SetStateAction<string>>;
};

export const ProgramContext = createContext<ProgramContextType>({
  programId: SELECTED_PROGRAM_STATE.NO_PROGRAM_SELECTED,
  workoutId: SELECTED_WORKOUT_STATE.NO_WORKOUT_SELECTED,
  recordGroupId: '',
  recordHolderId: '',
});

type Prop = {
  children: JSX.Element | Array<JSX.Element | undefined>;
};

export const ProgramContextProvider: React.FC<Prop> = ({ children }) => {
  const [programId, setProgramId] = useState<programIdType>(
    SELECTED_PROGRAM_STATE.NO_PROGRAM_SELECTED,
  );
  const [workoutId, setWorkoutId] = useState<workoutIdType>(
    SELECTED_WORKOUT_STATE.NO_WORKOUT_SELECTED,
  );
  const [recordGroupId, setRecordGroupId] = useState<string>('');
  const [recordHolderId, setRecordHolderId] = useState<string>('');
  return (
    <ProgramContext.Provider
      value={{
        programId,
        workoutId,
        recordGroupId,
        recordHolderId,
        setRecordHolderId,
        setProgramId,
        setWorkoutId,
        setRecordGroupId,
      }}>
      {children}
    </ProgramContext.Provider>
  );
};
