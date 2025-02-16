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
        nationality: '',
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
    {   nationality: '',
        name: 'József Attila',
        work: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        name: 'Friedrich Dürrenmatt',
        work: 'A fizikusok'
    }
]

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);