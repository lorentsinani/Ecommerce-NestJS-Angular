export const capitalize = (prop: string) => {
  const [firstL, ...others] = prop.toLowerCase().split('');
  return [firstL.toUpperCase(), ...others].join('');
};
