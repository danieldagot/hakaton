






let name = localStorage.getItem('Name')





let body = $("body")
body.on("click", "#addB", function () {
    let food = $("#inputFood").val()
    localStorage.setItem('name', food)
    console.log(food);

    $.get(`http://localhost:8080/food/${food}`, function (res) {
        console.log(res);

        console.log(Array.from(res));
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        localStorage.setItem("food", JSON.stringify(res))
        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Pizza');
            data.addColumn('number', 'Populartiy');
            data.addRows([
                ['Protein' + " " + res[1].value + "g", (res[1].value) * 100],
                ['Carbs' + " " + res[2].value + "g", (res[2].value) * 100],
                ['Fat' + " " + res[3].value + "g", (res[3].value) * 100],
            ]);

            // data2 = google.visualization.arrayToDataTable(res);
            // console.log(data2);

            var options = {
                title: 'nutrition chart',
                pieHole: 0.4,
            };
            $(".card-action").html(res[0].value + " calories")
            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }




    })


})

body.on("click", "#addB2", function () {

    console.log($(".card-action").text())
   console.log( ("#inputFood2").val());
   
    localStorage.getItem("name")
    Ldata = JSON.parse(localStorage.getItem("food"))

    
    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        let obg = { "enargy":  ( Ldata[0].value), "Protein": Ldata[1].value  , "Carbs" : Ldata[2].value, "Fat" : Ldata[3].value}
    let food = JSON.parse(res.food)
    food.push(obg)
    res.food = JSON.stringify(food)
        console.log();

        // $.ajax({
        //     url: `http://localhost:8080/updateProfile/${name}`,
        //     method: "PUT",
        //     data: res,
        //     success: function (response) {
        //         console.log("PUT complete")
        //     }


        // })
    })


})




