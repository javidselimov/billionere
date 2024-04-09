const list = document.querySelector('.list');
const add = document.querySelector('.add');
const input = document.querySelector('input');
list.innerHTML = '';

let wordsFromLocalStorage = JSON.parse(localStorage.getItem('words'));

if (wordsFromLocalStorage ) {
  wordsFromLocalStorage.forEach((word) => {
    let li = document.createElement('li');
    li.innerText = word;
    list.append(li);
  });
}

const listOfWords =wordsFromLocalStorage?wordsFromLocalStorage: [];

function dummy(){
    add.addEventListener('click', () => {
      console.log('wekfhweif');

      let li = document.createElement('li');

      let word = input.value.trim();
      li.innerText = word;
      list.append(li);
      listOfWords.push(word);
      input.value = '';

      localStorage.setItem('words', JSON.stringify(listOfWords));
    });
}


dummy()