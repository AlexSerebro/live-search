import './sass/main.scss';

document.querySelector('.live-search').oninput = function () {
  let value = this.value.trim();
  let searhItems = document.querySelectorAll('.search li');
  // console.log('~ searhItems', searhItems);
  if (value != '') {
    searhItems.forEach(function (elem) {
      if (elem.innerText.search(value) === -1) {
        hideClear(elem);
        // elem.classList.add('hide');
        // elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(value), value.length);
      }
    });
  } else {
    searhItems.forEach(function (elem) {
      // hideClear(elem);
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    });
  }
};

function insertMark(string, pos, len) {
  return (
    string.slice(0, pos) +
    '<mark>' +
    string.slice(pos, pos + len) +
    '</mark>' +
    string.slice(pos + len)
  );
}

function hideClear(elem) {
  elem.classList.add('hide');
  elem.innerHTML = elem.innerText;
}
