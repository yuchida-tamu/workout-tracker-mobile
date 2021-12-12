import { RootState } from '../../store';

export const appIsProcessingSelector = (state: RootState) => state.app.isProcessing;
