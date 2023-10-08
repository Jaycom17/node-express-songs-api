/**
 * validate the song name
 * @param {string} input string to validate
 * @returns true if the string is valid, false otherwise
 */
export const validateSongName = (input) => {
  if (input.length === 0) {
    return false;
  }
  if (input.includes(" ")) {
    return false;
  }

  const sqlChars = ["=", "'", '"', "--"];
  for (const char of sqlChars) {
    if (input.includes(char)) {
      return false;
    }
  }
  return true;
};
