const endDate = "02 march 2047 8:00 AM";

document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; //converting milisecond into second by dividing 1000

  if (diff<0) {
    return;
  }

    // converting into days;
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    // converting into hrs
    inputs[1].value = (Math.floor(diff/3600)% 24);
    // converting into minitus
    inputs[2].value = (Math.floor(diff/60)% 60);
    // converting into second
    inputs[3].value = (Math.floor(diff)% 60);
}

setInterval(
    ()=>{
        clock();
    },
    1000
);

clock();


/*
1 day = 24 hrs;
1hr = 60 mins;
60 mins = 3600 sec:
*/