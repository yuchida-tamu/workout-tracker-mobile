export type AppModelType = {
  isProcessing: boolean;
};

const create = (args: Partial<AppModelType> = {}) => {
  return {
    isProcessing: false,
    ...args,
  };
};

const updateIsProcessing = (data: AppModelType, isProcessing: boolean) => {
  return create({
    ...data,
    isProcessing,
  });
};

export const AppModel = Object.freeze({
  create,
  updateIsProcessing,
});
