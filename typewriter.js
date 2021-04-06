const sentence = "The potatoes in the my are very spikey!";

let delay = 1000;

for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 50;
}
setTimeout(() => console.log(), delay + 500);