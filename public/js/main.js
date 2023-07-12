document.getElementById("addStockBtn").addEventListener("click", function () {
  let form = document.getElementById("addStockForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
