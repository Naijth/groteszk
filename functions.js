function renderTable(array, thead, tbody){
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            thead.innerHTML = "";
            const trH = document.createElement('tr');
            thead.appendChild(trH);
            const th1 = document.createElement('th');
            trH.appendChild(th1);
            th1.innerHTML = array[i].nationality;
            const th2 = document.createElement('th');
            trH.appendChild(th2);
            th2.innerHTML = array[i].name;
            const th3 = document.createElement('th');
            trH.appendChild(th3);
            th3.innerHTML = array[i].work;
        } else {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            if (array[i].nationality != undefined) {
                const td1 = document.createElement('td');
                tr.appendChild(td1);
                td1.innerHTML = array[i].nationality;
                if (array[i + 1] != undefined && array[i + 1].nationality == undefined){
                    td1.rowSpan = 2;
                }
            }
            const td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = array[i].name;
            const td3 = document.createElement('td');
            tr.appendChild(td3);
            td3.innerHTML = array[i].work;
        }
    } 
}