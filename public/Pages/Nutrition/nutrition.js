













let body = $("body")
body.on("click", "#addB", function () {
    let food = $("#inputFood").val()
    console.log(food);

    $.get(`http://localhost:8080/food/${food}`, function (res) {
        console.log(res);
        
        console.log(Array.from(res));
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Pizza');
                data.addColumn('number', 'Populartiy');
                data.addRows([
                    ['Protein' +" "+  res[1].value + "g", (res[1].value)*100 ],
                    ['Carbs' + " "+ res[2].value + "g",(res[2].value)*100],
                    ['Fat' +" "+  res[3].value + "g", (res[3].value)*100],
                ]);
          
            // data2 = google.visualization.arrayToDataTable(res);
            // console.log(data2);

            var options = {
                title: 'My Daily Activities',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }




    })


})





