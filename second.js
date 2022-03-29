const outSecond = document.getElementById('outSecond');
const buttonSecond = document.querySelector('.pressSecond');
const amount = document.querySelector('.amount');

async function getResponse() {
  const button = document.querySelector('.delete');

  let key;
  let responce = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  let content = await responce.json();
  content = content.splice(0, amount.value);
  console.log('content :>> ', content);
  for (key in content) {
    outSecond.innerHTML += `<p class="p">userId => ${content[key].userId}, id => ${content[key].id}, title => ${content[key].title}, completed => ${content[key].completed}</p> <button class="delete"> Delete Vers 2.0</button>
    `;
  }
  const par = document.querySelector('.p');
  button.onclick = () => par.remove();
}

buttonSecond.onclick = () => getResponse();
