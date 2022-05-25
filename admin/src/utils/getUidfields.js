export const getUidFieldsByContentType = (contentType) => {
  let uidFieldNames = [];

  Object.entries(contentType.attributes).map(([i, e]) => {
    if (e.type === "uid" || e.type === "string") {
      uidFieldNames.push(i);
    }
  });

  return uidFieldNames;
};
