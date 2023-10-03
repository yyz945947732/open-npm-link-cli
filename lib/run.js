import open from 'open-npm-link';

async function runTasks(options) {
  try {
    const packageName = options?._?.[0];
    if (!packageName) {
      return;
    }
    const browser = options?.browser;
    await open(packageName, browser);
  } catch (err) {
    console.error(err);
  }
}

export default runTasks;
