// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
            {
                name: 'Texas',
                capital: 'Austin',
                largestCity: 'Houston',
                area: 695662,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
            {
                name: 'Quetzaltenango',
                capital: 'Quetzaltenango',
                largestCity: 'Quetzaltenango',
                area: 1919,
            },
        ],
    },
]

function createCountryHTML(country) {
    const countryEl = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = `${country.country}: Capital is ${country.capital}, Largest city is ${country.largestCity}`;

    const subdivisionsList = document.createElement('ul');
    country.subdivisions.forEach(sub => {
        const item = document.createElement('li');
        const subInfo = `<strong>${sub.name}</strong> (Capital: ${sub.capital}, Largest City: ${sub.largestCity}, Area: ${sub.area} km²)`;
        item.innerHTML = subInfo;
        subdivisionsList.appendChild(item);
    });

    countryEl.appendChild(header);
    countryEl.appendChild(subdivisionsList);

    return countryEl;
}

function renderCountries() {
    const mainContent = document.getElementById('mainContent');
    GEOGRAPHY_LIST.forEach(country => {
        const countryHTML = createCountryHTML(country);
        mainContent.appendChild(countryHTML);
    });
}

document.addEventListener('DOMContentLoaded', renderCountries);