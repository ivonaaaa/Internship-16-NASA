export const filterData = <T,>(
  data: T[],
  filterBy: keyof T,
  value: string | number
): T[] => {
  return data.filter((item) => String(item[filterBy]).includes(String(value)));
};
