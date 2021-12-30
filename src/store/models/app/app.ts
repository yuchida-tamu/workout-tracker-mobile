export enum ModalType {
  RECORD_PICKER = 'RECORD_PICKER',
  NONE = 'CLOSE',
}

export type AppModelType = {
  isProcessing: boolean;
  isBooting: boolean; // 起動中かどうか
  needSetup: boolean;
  openedModal: ModalType;
};

const create = (args: Partial<AppModelType> = {}) => {
  return {
    isProcessing: false,
    isBooting: false,
    needSetup: false,
    openedModal: ModalType.NONE,
    ...args,
  };
};

const updateIsProcessing = (data: AppModelType, isProcessing: boolean) => {
  return create({
    ...data,
    isProcessing,
  });
};

const updateIsBooting = (data: AppModelType, isBooting: boolean) => {
  return create({
    ...data,
    isBooting,
  });
};

const updateNeedSetup = (data: AppModelType, needSetup: boolean) => {
  return create({
    ...data,
    needSetup,
  });
};

const openModal = (data: AppModelType, modal: ModalType) => {
  return create({
    ...data,
    openedModal: modal,
  });
};

const closeModal = (data: AppModelType) => {
  return create({
    ...data,
    openedModal: ModalType.NONE,
  });
};

export const AppModel = Object.freeze({
  create,
  updateIsProcessing,
  updateIsBooting,
  updateNeedSetup,
  openModal,
  closeModal,
});
