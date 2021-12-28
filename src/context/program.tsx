import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { RecordGroupModel, RecordGroupType } from '../store/models/workout/recordGroup';
import { RecordHolderModel, RecordHolderType } from '../store/models/workout/recordHolder';

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
  progress: RecordGroupType;
  recordHolder: RecordHolderType;
  indexOfRecord: number;
  setProgramId?: Dispatch<SetStateAction<programIdType>>;
  setWorkoutId?: Dispatch<SetStateAction<workoutIdType>>;
  setRecordGroupId?: Dispatch<SetStateAction<string>>;
  setRecordHolderId?: Dispatch<SetStateAction<string>>;
  setProgress?: Dispatch<SetStateAction<RecordGroupType>>;
  setRecordHolder?: Dispatch<SetStateAction<RecordHolderType>>;
  setIndexOfRecord?: Dispatch<SetStateAction<number>>;
};

export const ProgramContext = createContext<ProgramContextType>({
  programId: SELECTED_PROGRAM_STATE.NO_PROGRAM_SELECTED,
  workoutId: SELECTED_WORKOUT_STATE.NO_WORKOUT_SELECTED,
  recordGroupId: '',
  recordHolderId: '',
  progress: RecordGroupModel.cerateRecordGroup(),
  recordHolder: RecordHolderModel.create(),
  indexOfRecord: 0,
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
  const [recordGroup, setRecordGroup] = useState<RecordGroupType>(
    RecordGroupModel.cerateRecordGroup(),
  );
  const [recordHolder, setRecordHolder] = useState<RecordHolderType>(RecordHolderModel.create());
  const [indexOfRecord, setIndexOfRecord] = useState<number>(0);
  return (
    <ProgramContext.Provider
      value={{
        programId,
        workoutId,
        recordGroupId,
        recordHolderId,
        progress: recordGroup,
        recordHolder,
        indexOfRecord,
        setRecordHolderId,
        setProgramId,
        setWorkoutId,
        setRecordGroupId,
        setProgress: setRecordGroup,
        setRecordHolder,
        setIndexOfRecord,
      }}>
      {children}
    </ProgramContext.Provider>
  );
};
