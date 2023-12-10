const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const heading = document.getElementById("heading");

const handleSubmit = (event) => {
  event.preventDefault();

  //   const result = calculatePercentage();
  heading.innerHTML = `Your result is ${calculatePercentage()}%`;
};

const calculatePercentage = () => {
  const result = Math.floor(Math.random() * 100 + 1);
  const percentage = result > 50 ? result : calculatePercentage();
  console.log(percentage);
  return percentage;
};
