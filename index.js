const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const heading = document.getElementById("heading");

const handleSubmit = (event) => {
  event.preventDefault();

  const result = calculatePercentage();
  heading.innerHTML = `Your result is ${result}%`;
};

const calculatePercentage = () => {
  const percentage = Math.floor(Math.random() * 100 + 1);
  console.log(percentage);
  if (percentage < 50) calculatePercentage();
  else {
    return percentage;
  }
};
