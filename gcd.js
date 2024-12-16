document.getElementById("gcd-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form refresh

  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("gcd-result").textContent = "Please enter valid integers.";
    return;
  }

  const gcd = calculateGCD(num1, num2);
  document.getElementById("gcd-result").textContent = `The Greatest Common Divisor of ${num1} and ${num2} is ${gcd}.`;
});

// Function to Calculate GCD
function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}
