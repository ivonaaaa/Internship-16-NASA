export const getLast20Days = () => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - 19);

  return {
    start: pastDate.toISOString().split("T")[0],
    end: today.toISOString().split("T")[0],
  };
};

export const handleFilter = (
  startDate: string,
  endDate: string,
  fetchNewData: (start: string, end: string) => void
) => {
  if (!startDate || !endDate) {
    alert("Please specify both start and end dates before filtering!");
    return;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  switch (true) {
    case start > today || end > today:
      alert("Selected dates cannot be in the future!");
      return;
    case start > end:
      alert("Start date cannot be after the end date!");
      return;
    case end.getFullYear() < 1995:
      alert(
        "NASA's APOD started in 1995. Please select a date after this one!"
      );
      return;
    default:
      fetchNewData(startDate, endDate);
  }
};

export const loadMore = (
  startDate: string,
  setStartDate: (date: string) => void,
  fetchNewData: (start: string, end: string, append?: boolean) => void,
  loading: boolean
) => {
  if (loading) return;

  const newEndDate = new Date(startDate);
  newEndDate.setDate(newEndDate.getDate() - 1);

  const newStartDate = new Date(newEndDate);
  newStartDate.setDate(newStartDate.getDate() - 9);

  setStartDate(newStartDate.toISOString().split("T")[0]);
  fetchNewData(
    newStartDate.toISOString().split("T")[0],
    newEndDate.toISOString().split("T")[0],
    true
  );
};
