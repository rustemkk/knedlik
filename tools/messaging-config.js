export default function (instance) {
  instance.emitter.on("init", function () {
    if (process.send) {
      process.send('online');
    }
  });

  process.on('message', function (message) {
    if (message === 'shutdown') {
      instance.exit();
    }
  });
}
