let circle = document.querySelectorAll('.circle')
let p = document.querySelector('p')
let count = 0
let min = 0
setTimeout(() => {
   let time = setInterval(() => {
      let ran = Math.floor(Math.random() * circle.length)
      setTimeout(() => {
         circle[ran].classList.toggle('circle2')
      }, 500);
      setTimeout(() => {
         circle[ran].classList.remove('circle2')

      }, 1000);
      min += 1000
      if (min > 10000) {
         alert("time is over")
         clearInterval(time)
      }
   }, 2000);
   for (let i = 0; i < circle.length; i++) {
      circle[i].addEventListener('click', function () {
         count++
         p.innerHTML = count
         if (count > 3) {
            alert("you Win")
            clearInterval(time)
         }
      })

   }

}, min);



