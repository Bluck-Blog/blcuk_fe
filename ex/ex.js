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
