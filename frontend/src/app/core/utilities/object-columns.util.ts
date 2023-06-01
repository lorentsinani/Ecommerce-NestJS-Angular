import { capitalize } from './capitalize-props.util';

export const getObjectColumns = (object: any) => {
  return Object.keys(object[0]).map(prop => capitalize(prop));
};
