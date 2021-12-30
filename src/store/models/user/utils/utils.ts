import { ProgramType, ProgramModel } from '../../program/program';
import { RecordGroupType } from '../../workout/recordGroup';

export const updateProgramProgressById = (
  program: ProgramType,
  programId: string,
  progress: RecordGroupType,
): ProgramType => {
  if (program.id === programId) {
    return ProgramModel.addProgramProgress(program, progress);
  }
  return program;
};
