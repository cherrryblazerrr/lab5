function swap() {
    const parentx = itemx.parentNode;
    const parenty = itemy.parentNode;
    const temp = document.createElement('div');
    parentx.replaceChild(temp, itemx);
    parenty.replaceChild(itemx, itemy);
    parentx.replaceChild(itemy, temp);
}
const swap_button = document.getElementById('swap');
swap_button.addEventListener('click', swap);
const itemx = document.getElementById('item-x');
const itemy = document.getElementById('item-y');