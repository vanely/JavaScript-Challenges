const { Worker } = require('worker_threads');

async function runWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data });

    worker.on('message', (message) => {
      resolve(message);
    });
    worker.on('error', (error) => {
      reject(error);
    });
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

runWorker('running worker with data!').then((message) => {
  console.log(`Main received result: ${message.result}`);
  console.log(`Main sent result: ${message.result}`);
}).catch((error) => {
  console.error(`Main received error: ${error.message}`);
  console.error(`Main sending error: ${error.message}`);
});
