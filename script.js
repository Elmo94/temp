var data = [];
    function CreateTableFromJSON() {
        var myData = data;
		
        var col = [];
        for (var i = 0; i < myData.length; i++) {
            for (var key in myData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");
        var tr = table.insertRow(-1);                   // table row

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < myData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myData[i][col[j]];
            }
        }
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
