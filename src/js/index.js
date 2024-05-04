window.onload = () => {
  const range = document.querySelectorAll(".range-slider span input");
  let progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");
  
  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);
  
      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });
  
  const filter = document.getElementById("filter");
  try {
    filter.addEventListener("click",() =>{
      document.getElementById("showFilter").classList.toggle("hidden");
  }) 
  } catch (error) {
    
  }
  
  const showNav = document.getElementById("showNav");
  showNav.addEventListener("click", ()=> {
    document.getElementById("nav").classList.toggle("hidden");
  })
}
