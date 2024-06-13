// write a function wait that takes duration and resolves a promise after that amount of time
function wait(duration: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, duration);
  });
}

wait(100).then((res) => {
  console.log(res.length);
});
