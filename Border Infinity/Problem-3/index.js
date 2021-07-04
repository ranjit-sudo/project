var json = localStorage.getItem("array");
var arr = JSON.parse(json);
var isPresent = localStorage.getItem("array") === null;
if (isPresent === true) {
  document.getElementById("list").innerHTML = `<h2>
          You have currently 0 Recipes stored in your <br />
          recipe app!
        </h2>`;
} else {
  arr.map((item) => {
    document.getElementById(
      "list"
    ).innerHTML += ` <a href="" style="text-decoration: none; color: white">
          <div id="show">
            <h4>${item.dish}</h4>
          </div>
        </a>`;
  });
}

const change = () => {
  console.log("phirse");
  var temp = arr;
  temp.filter((item) => {
    return item.dish === document.getElementById("search").value;
  });
  document.getElementById("list").innerHTML = "";
  temp.map((item) => {
    document.getElementById(
      "list"
    ).innerHTML += ` <a href="" style="text-decoration: none; color: white">
          <div id="show">
            <h4>${item.dish}</h4>
          </div>
        </a>`;
  });
};
document.getElementById("search").addEventListener("change", change);
console.log("aagya");
