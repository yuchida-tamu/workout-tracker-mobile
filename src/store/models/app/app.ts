export type AppModelType = {
  isProcessing: boolean;
  isBooting: boolean; // 起動中かどうか
  needSetup: boolean;
};

const create = (args: Partial<AppModelType> = {}) => {
  return {
    isProcessing: false,
    isBooting: false,
    needSetup: false,
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

export const AppModel = Object.freeze({
  create,
  updateIsProcessing,
  updateIsBooting,
  updateNeedSetup,
});
