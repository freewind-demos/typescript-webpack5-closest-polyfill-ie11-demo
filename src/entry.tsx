
const a = document.querySelector('#main')?.closest<HTMLDivElement>('.a')

if (a) {
  a.style.border = "1px solid red";
}


