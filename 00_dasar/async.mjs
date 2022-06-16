function samplePromise() {
  return Promise.resolve("harun");
}

const name = await samplePromise();
console.info(name);
