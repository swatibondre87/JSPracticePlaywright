function delayStep(stepMsg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stepMsg);
      resolve();
    }, delay);
  });
}

console.log("Start (Promise)");

delayStep("Step 1: Dough prepared 🍞", 1000)
  .then(() => delayStep("Step 2: Sauce added 🍅", 1000))
  .then(() => delayStep("Step 3: Cheese sprinkled 🧀", 1000))
  .then(() => delayStep("Step 4: Pizza baked 🍕", 1000))
  .then(() => console.log("End (Promise)"));

console.log("This runs immediately after scheduling all Promise steps");

