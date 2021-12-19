import { RootState } from '../../store';

export const appIsProcessingSelector = (state: RootState) => state.app.isProcessing;
export const appIsBootingSelector = (state: RootState) => state.app.isBooting;
