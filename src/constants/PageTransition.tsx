export const transition = {
  initial: { y: "100vh", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};
