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

// write an async function. Create a type of the value that function returns

async function getData() {
  return 4;
}

type AwaitedData = Awaited<ReturnType<typeof wait>>;
