function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Sidharth"), 1000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 1000);
    });
}

function fetchVoid(){
    console.log("Void function called")
}

// First Way:
    // loginUser()
    // .then(msg => {
    //     console.log(msg)
    //     return fetchDashboard();
    // })
    // .then(msg1 => {
    //     console.log(msg1)
    //     return fetchVoid();
    // })

//Second Way:
    function runApp(){
        loginUser()
    .then(msg => {
        console.log(msg)
        return fetchDashboard();
    })
    .then(msg1 => {
        console.log(msg1)
        return fetchVoid();
    })

    }

    runApp();
    




