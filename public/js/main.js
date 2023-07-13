document.getElementById("addStockBtn").addEventListener("click", function () {
  let form = document.getElementById("addStockForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

let stockDataElement = document.getElementById("stock-data");
stockDataElement.innerHTML = `<tr>
  <td>${symbol}</td>
  <td>${shares}</td>
  <td>${purchasePrice}</td>
  <td>${lossGain}</td>
</tr>`;
