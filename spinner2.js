let startTime = 0;
let interval = 200;
let char = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
for (let spinner in char) {
  setTimeout(() => {
    process.stdout.write(char[spinner]);
  }, (startTime += interval));
}
