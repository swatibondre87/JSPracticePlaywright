try {
  // risky code
  let user;
console.log("username")
} catch (e) {
  console.log("Caught error:", e);
} finally {
  console.log("Cleanup code always runs");
}
