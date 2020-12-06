function setQueryParams(query) {
  let queryParams = [];

  for (const key in query) {
    if (
      query[key] !== null &&
      query[key] !== undefined &&
      query[key] !== '' &&
      query[key] !== 0
    ) {
      queryParams.push(`${key}=${query[key]}`);
    }
  }

  return queryParams.join('&');
}

function kebabCase(str) {
  if (str === null) return null;

  return str
    .split(' ')
    .join('-')
    .toLowerCase();
}

export { setQueryParams, kebabCase };
