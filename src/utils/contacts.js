export const getContactFieldValue = (fields, key) => {
  if (!fields[key]) return "";
  if (!fields[key][0]) return "";

  return fields[key][0].value;
};
