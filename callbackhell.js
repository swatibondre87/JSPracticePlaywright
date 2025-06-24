console.log("Start (callback hell)");

setTimeout(() => {
  console.log("Step 1: Dough prepared 🍞");

  setTimeout(() => {
    console.log("Step 2: Sauce added 🍅");

    setTimeout(() => {
      console.log("Step 3: Cheese sprinkled 🧀");

      setTimeout(() => {
        console.log("Step 4: Pizza baked 🍕");
        console.log("End (callback hell)");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

console.log("This runs immediately after scheduling all callbacks");

