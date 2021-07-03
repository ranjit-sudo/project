const addIngredient = () => {
  const temp = document.getElementById("addInput").value;
  console.log("aagya");
  document.getElementById("checkboxes").innerHTML += `<label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
          ${temp}
        </label> <br>`;
  document.getElementById("addInput").value = "";
};
