// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateName(name){
//     if(name.length<3){
//         throw new ValidationError("this is custom error");

//     }
// }
// validateName("S");


async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("API call failed:", error);
  }
}

