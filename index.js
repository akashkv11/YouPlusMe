import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js" 
import { getDatabase,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  databaseURL:"https://youplusme-185d0-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const heading = document.getElementById("heading");

const handleSubmit = (event) => {
  console.log("handle triggered");
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
