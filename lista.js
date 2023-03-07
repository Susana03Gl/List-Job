import dataJson from './data.json' assert { type: 'json' };

const Contlist = document.querySelector('.contlist'),
  filter = document.querySelector('.filter'),
  filterList = [],
  removeDuplications = array => [...new Set(array)]; //Este codigo remueve las duplicaciones en el array

console.log(dataJson);

const showData = (data = dataJson) => {
  const info = data
    .map(el => {
      return `
    <div class="box">
      <div class="boxduo">
        <div class="box1">
          <img class="img" src="${el.logo}" alt="${el.company}" />
        </div>
        <div class="box2">
          <div class="line1">
            <p>${el.company}</p>
          </div>
          <div class="line2">${el.position}</div>
          <div class="line3">
            <p>${el.postedAt}</p>
            <p>${el.contract}</p>
            <p>${el.location}</p>
          </div>
        </div>
      </div>
      <div class="box3">
        <button id="${el.role}" class="p btn">${el.role}</button>
        <button id="${el.level}" class="p btn">${el.level}</button>
        ${el.languages
          ?.map(el => {
            return `<button id="${el}" class="p btn">${el}</button>`;
          })
          .join(' ')}
      </div>
    </div>    
    `;
    })
    .join('');
  Contlist.innerHTML = info;
};

const filterData = filters => {
  const languages = ({ languages }) => languages.some(item => filters.includes(item));
  const positions = ({ role }) => filters.includes(role);
  const levels = ({ level }) => filters.includes(level);

  const res = dataJson.filter(item => languages(item) || positions(item) || levels(item));
  console.log(res);
  return res;
};

Contlist.addEventListener('click', e => {
  if (e.target.classList[1] == 'btn') {
    filter.classList.add('flex');
    filterList.push(e.target.textContent);

    const filtersItems = removeDuplications(filterList)
      .map(filter => {
        return `
        <div class="divfilter">
          <p class="filtertag">${filter}</p>
          <div class="delete"></div>
        </div>
        `;
      })
      .join('');
    filter.innerHTML = filtersItems;
    const addingFilters = filterData(removeDuplications(filterList));
    showData(addingFilters);
  }
});

showData();
