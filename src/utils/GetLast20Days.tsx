export const getLast20Days = () => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - 19);

  return {
    start: pastDate.toISOString().split("T")[0],
    end: today.toISOString().split("T")[0],
  };
};
