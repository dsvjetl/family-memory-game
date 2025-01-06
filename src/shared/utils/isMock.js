const toBoolean = (value) => {
  if (!value) return;

  if (typeof value === 'boolean') {
    return value;
  }

  return value.toLowerCase() === 'true';
};

const isMock = toBoolean(import.meta.env.VITE_API_MOCK);

export { isMock };
