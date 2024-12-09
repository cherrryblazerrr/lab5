function add_bg() {
    const number = block_number.value;
    const pattern = /^[1-5xy]$/;
    const image = image_link.value;
    if (image === '' || image === null || !pattern.test(number)) {
        return;
    }
    const item = document.getElementById(`item-${number}`);
    item.style.backgroundImage = `url('${image}')`;
    localStorage.setItem(number, image);
}
function del_bg() {
    const number = block_number.value;
    const pattern = /^[1-5xy]$/;
    if (!pattern.test(number)) {
        return;
    }
    const item = document.getElementById(`item-${number}`);
    item.style.backgroundImage = 'none';
    localStorage.setItem(number, '');
}
function show_hint() {
    alert('Підказка для номерів блоків.\nДоступні номери: 1, 2, 3, 4, 5, x, y');
}

window.addEventListener('load', () => {
    block_numbers.forEach(number => {
        const image = localStorage.getItem(number);
        if (image === '' || image === null) {
            return;
        }
        const item = document.getElementById(`item-${number}`);
        item.style.backgroundImage = `url('${image}')`;
    });
});


document.getElementById('hint').addEventListener('click', show_hint);
document.getElementById('add-bg-image').addEventListener('click', add_bg);
document.getElementById('del-bg-image').addEventListener('click', del_bg);

const block_number = document.getElementById('block-number');
const block_numbers = ['1','2','3','4','5','x','y'];
