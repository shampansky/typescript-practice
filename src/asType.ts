function getSomeDataFromApi() {
  const response = fetch('hello')
    .then((res) => {
      return res.json();
    })
    .then((res) => res as string);
}
