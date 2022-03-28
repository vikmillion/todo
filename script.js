const numStart = document.querySelector('.numberStart');
const numEnd = document.querySelector('.numberEnd');
const outValue = document.getElementById('outValue');
const data = [];

const checkFrom = (a) => {
  if (a >= 1 && a <= 200) {
    return true;
  } else return false;
};

const checkTo = (a) => {
  if (a >= 1 && a <= 200) {
    return true;
  } else return false;
};

const checkMoreLess = (a, b) => {
  if (a < b) {
    return true;
  } else false;
};

document.querySelector('.press').addEventListener('click', () => {
  const from = +numStart.value;
  const to = +numEnd.value;

  if (!checkMoreLess(from, to)) {
    outValue.innerHTML = `Please enter correct number<br> first number < second number`;
  } else if (checkFrom(from) && checkTo(to)) {
    for (let i = from; i < to + 1; i++) {
      outValue.innerHTML = '';
      fetch(`https://jsonplaceholder.typicode.com/todos/` + i)
        .then((response) => response.json())
        .then((json) => {
          renderTodos(json);
        });
    }
  } else {
    outValue.innerHTML = 'Please enter number from 1 to 200';
  }
});

const renderTodos = (json) => {
  const div = document.createElement('div');
  const paragraf = document.createElement('p');
  const button = document.createElement(`button`);
  const data = Object.entries(json);
  div.append(paragraf, button);
  outValue.append(div);
  paragraf.innerHTML = data;
  button.innerHTML = `Delete`;
  button.onclick = () => div.remove();
};
