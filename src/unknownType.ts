function processData(data: unknown) {
  if (data && typeof data === 'object' && 'test' in data) {
    return data.test;
  }
}
