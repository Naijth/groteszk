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

function validateFormField(inputElement, inputErrorMessage){
    if (inputElement.value == ''){
        const parentElement = inputElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = inputErrorMessage;
        }
        return false;
    } else {
        return true;
    }
}

function validateTwoWriters(inputNameElement, inputWorkElement){
    if (inputNameElement.value != '' && inputWorkElement.value == ''){
        return validateFormField(inputWorkElement, "Mind két mezőt ki kell tölteni!");
    } else if (inputNameElement.value == '' && inputWorkElement.value != '') {
        return validateFormField(inputNameElement, "Mind két mezőt ki kell tölteni!")
    }
    return true;
}

function renderForm() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '';
    document.body.appendChild(form);

    formField(form, "text", "Származás:", "szarmazas")
    formField(form, "text", "1. szerző:", "szerzo1")
    formField(form, "text", "1. szerző műve:", "szerzo1mu")
    formField(form, "text", "2. szerző:", "szerzo2")
    formField(form, "text", "2. szerző műve:", "szerzo2mu")

    const button = document.createElement('button');
    button.innerHTML = "Hozzáadás";
    form.appendChild(button);
}

function formField(form, type, labelText, id){
    const mainDiv = document.createElement('div');
    form.appendChild(mainDiv);

    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = labelText;
    mainDiv.appendChild(label);
    const br1 = document.createElement('br');
    mainDiv.appendChild(br1);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    mainDiv.appendChild(input);
    const br2 = document.createElement('br');
    mainDiv.appendChild(br2);

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error'); 
    mainDiv.appendChild(errorDiv);
    const br3 = document.createElement('br');
    mainDiv.appendChild(br3);
}