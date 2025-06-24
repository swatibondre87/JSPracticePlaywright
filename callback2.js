function getInformation(callback) {
    console.log("Waiting for information...");
    setTimeout(() => {
        const info = "Information received";
        callback(info); // Calling the callback with the received info
    }, 5000); // Simulates a 3-second delay
}

// Callback function to process the information
function processInformation(info) {
    console.log("Processing: " + info);
}

// Calling getInformation and passing processInformation as the callback
getInformation(processInformation);
