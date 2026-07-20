/** check stop flag */
export const decide = async ({ state }) => {
  if (state.stop) return "rest";
  return "move";
};