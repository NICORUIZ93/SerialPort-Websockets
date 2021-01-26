const socket = io();
let contador = 0;
var mensaje = document.getElementById("mensaje");

socket.on("arduino:data", function (datos) {
  chart.data.datasets.forEach((element) => {
    element.data.push(datos.value);
  });

  chart.update();
  mensaje.innerHTML = datos.value;
});

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["January"],
    datasets: [
      {
        label: "valor Datos arduino",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
