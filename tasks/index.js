const headList = document.querySelectorAll('th');
const rowList = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');
const listOfRowList = [...rowList];
let isSorted = false;

const sortList = (arr, index) => {
  headList[0].innerText = headList[0].innerText === 'Name ˅' ? 'Name ^' : 'Name ˅';
  if (index === 0) {
    if (!isSorted) {
      arr.sort((a, b) => {
        let aContent = a.querySelectorAll('td')[index].innerText.trim().toLowerCase();
        let bContent = b.querySelectorAll('td')[index].innerText.trim().toLowerCase();
        if (aContent > bContent) {
          return 1;
        }
        if (aContent < bContent) {
          return -1;
        }
        return 0;
      });
      isSorted = !isSorted;
    } else {
      arr.reverse();
      isSorted = !isSorted;
    }
  } else {
    if (!isSorted) {
      arr.sort((a, b) => {
        let aContent = a.querySelectorAll('td')[index].innerText;
        let bContent = b.querySelectorAll('td')[index].innerText;
        return +aContent - +bContent;
      });
      isSorted = !isSorted;
    } else {
      arr.sort((a, b) => {
        let aContent = a.querySelectorAll('td')[index].innerText;
        let bContent = b.querySelectorAll('td')[index].innerText;
        return +aContent - +bContent;
      });
      arr.reverse();
      isSorted = !isSorted;
    }
  }
  tbody.innerText = '';
  arr.forEach((item) => {
    tbody.append(item);
  });
};

headList.forEach((item, index) => {
  item.addEventListener('click', () => sortList(listOfRowList, index));
});
