import { isArray, isEmpty, isNull, isObject, isUndefined } from "lodash";

export const isBlank = (value) => {
  if (value === "") {
    return true;
  }

  if (isNaN(value)) {
    return true;
  }

  if (isUndefined(value)) {
    return true;
  }

  if (isNull(value)) {
    return true;
  }

  if (isArray(value) || isEmpty(value)) {
    return true;
  }

  if (isObject(value) || isEmpty(value)) {
    return true;
  }

  return false;
};

export const _blobToBase64 = async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const { result } = reader;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("readAsDataURL 결과값이 string이 아님"));
      }
    };
    reader.readAsDataURL(blob);
  });
};

export const fileToBase64 = async (file) => {
  const dataUri = await _blobToBase64(file);
  const base64 = dataUri.split(",")[1];
  return base64;
};
