const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("load");
    } else entry.target.classList.remove("load");
  });
});

const allInfo = document.querySelectorAll(".content");

allInfo.forEach((el) => {
  observer.observe(el);
});
