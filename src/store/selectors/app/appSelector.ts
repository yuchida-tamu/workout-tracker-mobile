import { RootState } from '../../store';

export const appIsProcessingSelector = (state: RootState) => state.app.isProcessing;
export const appIsBootingSelector = (state: RootState) => state.app.isBooting;
export const appNeedSetupSelector = (state: RootState) => state.app.needSetup;
export const appOpenedModalSelector = (state: RootState) => state.app.openedModal;
