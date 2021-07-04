var arr = JSON.parse(localStorage.getItem("array")) || [];
var checkarr = [];
const addIngredient = () => {
  const temp = document.getElementById("addInput").value;
  console.log("aagya");

  checkarr.push(temp);
  document.getElementById("checkboxes").innerHTML += `<label class="checkbox">
          <input type="checkbox" class="checkb" value=${temp} />
          <span class="checkmark" ></span>
          ${temp}
        </label> <br>`;
  document.getElementById("addInput").value = "";
};
const add = () => {
  const dish = document.getElementById("dish").value;
  const step = document.getElementById("ingred").value;
  arr.push({ dish, step, checkarr });
  localStorage.setItem("array", JSON.stringify(arr));
  console.log(arr);
};
document.getElementById("addRecipe").addEventListener("click", add);
console.log(arr);
