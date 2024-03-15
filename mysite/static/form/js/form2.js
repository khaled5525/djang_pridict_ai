


// const measurement = document.getElementById("measurement");
// const yes = document.getElementById("yes");
// console.log(measurement);
// console.log(yes);

// yes.addEventListener("click", (eo) => {

//   measurement.style.display  = "block";

// }  );
document.getElementById('city').addEventListener('change', function () {
  if (this.value === 'losangeles') {
    document.getElementById('measurement').style.display = 'block';
  } else {
    document.getElementById('measurement').style.display = 'none';
  }
});