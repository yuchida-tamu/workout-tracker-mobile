export type AppModelType = {
  isProcessing: boolean;
  isBooting: boolean; // 起動中かどうか
};

const create = (args: Partial<AppModelType> = {}) => {
  return {
    isProcessing: false,
    isBooting: false,
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

export const AppModel = Object.freeze({
  create,
  updateIsProcessing,
  updateIsBooting,
});
