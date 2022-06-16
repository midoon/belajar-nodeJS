function samplePromise() {
  return Promise.resolve("harun");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
