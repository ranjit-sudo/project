var arr = [];
var count = 0;
const addIngredient = () => {
  const temp = document.getElementById("addInput").value;
  console.log("aagya");
  const dish = document.getElementById("dish").value;
  const step = document.getElementById("ingred").value;
  arr.push({ dish, step });
  document.getElementById("checkboxes").innerHTML += `<label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark" id="${count}"></span>
          ${temp}
        </label> <br>`;
  document.getElementById("addInput").value = "";
};
