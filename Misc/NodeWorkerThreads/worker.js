const { parentPort, workerData } = require('worker_threads');

async function heavyTask(data) {
  console.log(`Heavy task started with data: ${data}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Heavy task completed with data: ${data}`);
  return `${data.toUpperCase()} - PROCESSED`;
}

heavyTask(workerData).then((result) => {
  console.log(`Worker sending result: ${result}`);
  parentPort.postMessage({ result: result });
  console.log(`Worker sent result: ${result}`);
}).catch((error) => {
  console.error(`Worker sending error: ${error}`);
  parentPort.postMessage({ error: error.message });
  console.log(`Worker sent error: ${error}`);
});
