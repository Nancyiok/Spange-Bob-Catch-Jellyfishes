

function resizeAsyc(time, cb) {
  setTimeout(() => {
    // newWindow.resizeTo();
    console.log("resize");
    cb();
  }, time);
}

function moveAsyc(time, cb) {
  setTimeout(() => {
    // newWindow.moveTo(400, 600);
    console.log("move");
    cb();
  }, time);
}

function closeAsyc(time, cb) {
  setTimeout(() => {
    // newWindow.close();
    console.log("close");
    cb();
  }, time);
}

function resizePromise(time) {
  return new Promise((resolve, reject) => {
    resizeAsyc(time, resolve);
  });
}

function movePromise(time) {
  return new Promise((resolve, reject) => {
    moveAsyc(time, resolve);
  });
}

function closePromise(time) {
  return new Promise((resolve, reject) => {
    closeAsyc(time, () => resolve("data"));
  });
}

async function start() {
  await resizePromise(2000);
  await movePromise(2000);
  const data = await closePromise(2000);
  console.log(data);
}

start();
