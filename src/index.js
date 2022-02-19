import './sass/main.scss';

document.querySelector('.live-search').oninput = function () {
  let value = this.value.trim();
  let searhItems = document.querySelectorAll('.search li');
  // console.log('~ searhItems', searhItems);
  if (value != '') {
    searhItems.forEach(function (elem) {
      if (elem.innerText.search(value) === -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('hide');
      }
    });
  } else {
    searhItems.forEach(function (elem) {
      elem.classList.remove('hide');
    });
  }
};
