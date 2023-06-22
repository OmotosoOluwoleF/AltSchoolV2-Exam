const toggles = document.querySelectorAll(".toggle");
const contentDivs = document.querySelectorAll(".content");
const icons = document.querySelectorAll(".toggle img");

toggles.forEach((toggle, i) => {
  toggle.addEventListener("click", () => {
    const currentContentDiv = contentDivs[i];
    const currentIcon = icons[i];
    
    if (parseInt(currentContentDiv.style.height) !== currentContentDiv.scrollHeight) {
      currentContentDiv.style.height = currentContentDiv.scrollHeight + "px";
      toggle.style.color = "#0084e9";
      currentIcon.src = "asset/images/minus.svg";
    } else {
      currentContentDiv.style.height = "0px";
      toggle.style.color = "#111130";
      currentIcon.src = "asset/images/plus.svg";
    }

    contentDivs.forEach((contentDiv, j) => {
      if (j !== i) {
        contentDiv.style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].src = "asset/images/plus.svg";
      }
    });
  });
});
