import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
function suma(a, b) {
  var result = document.getElementById("resultado");
  result.innerHTML = a + b;
  console.log(a, b);
}
document.getElementById("suma").addEventListener("click", () => {
  const valor1 = parseInt(n1.value);
  const valor2 = parseInt(n2.value);
  suma(valor1, valor2);
});

function resta(a, b) {
  var result = document.getElementById("resultado");
  result.innerHTML = a - b;
  console.log(a, b);
}
document.getElementById("resta").addEventListener("click", () => {
  const valor1 = parseInt(n1.value);
  const valor2 = parseInt(n2.value);
  resta(valor1, valor2);
});
