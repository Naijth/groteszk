const array = [
    {
        nationality: 'Nemzetiség',
        name: 'Szerző',
        work: 'Mű'
    },
    {
        nationality: 'Orosz',
        name: 'Gogol',
        work: 'A köpönyeg'
    },
    {
        name: 'Csehov',
        work: 'A csinovnyik halála'
    },
    {
        nationality: 'Cseh',
        name: 'Fraz Kafka',
        work: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        name: 'Örkény István',
        work: 'Egyperces Novellák'
    },
    {   
        name: 'József Attila',
        work: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        name: 'Friedrich Dürrenmatt',
        work: 'A fizikusok'
    }
]

renderForm();

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valid = true;

    const nationalityElement = document.getElementById('szarmazas');
    const nameElement = document.getElementById('szerzo1');
    const workElement = document.getElementById('szerzo1mu');
    const name2Element = document.getElementById('szerzo2');
    const work2Element = document.getElementById('szerzo2mu');

    const nationality = nationalityElement.value;
    const name = nameElement.value;
    const work = workElement.value;
    const name2 = name2Element.value;
    const work2 = work2Element.value;

    const valid1 = validateFormField(nationalityElement, "Ezt a mezőt kötelező kitölteni!");
    const valid2 = validateFormField(nameElement, "Ezt a mezőt kötelező kitölteni!");
    const valid3 = validateFormField(workElement, "Ezt a mezőt kötelező kitölteni!");
    const valid4 = validateTwoWriters(name2Element, work2Element);

    if (!valid1 || !valid2 || !valid3 || !valid4)
        valid = false;

    let twoWriters = validateTwoWriters(name2Element, work2Element);

    if (valid){
        const newElement = {
            nationality: nationality,
            name: name,
            work: work
        }
        array.push(newElement);
        if (twoWriters){
            const newElement2 = {
                name: name2,
                work: work2
            }
            array.push(newElement2);
        }
        tbody.innerHTML = '';
        renderTable(array, thead, tbody);
        form.reset();
    }
})