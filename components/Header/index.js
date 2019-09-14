// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerData =
  {
    date: 'SMARCH 28, 2019',
    title: 'Lambda Times',
    temp: '98°'
  }

function Header() {
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  headerDate.textContent = headerData.date;
  headerTitle.textContent = headerData.title;
  headerTemp.textContent = headerData.temp;

  header.classList.add('header');
  headerDate.classList.add('date');
  headerTitle.classList.add('h1');
  headerTemp.classList.add('temp');

  return header
}

const headerCont = document.querySelector('.header-container');

headerCont.appendChild(Header(headerData));
