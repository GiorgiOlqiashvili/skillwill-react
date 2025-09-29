// ობიექტის ღრმა ასლი
const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(cloneDeep);

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = cloneDeep(value);
    return acc;
  }, {});
};

