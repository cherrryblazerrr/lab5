const count_button = document.getElementById('count-word')
count_button.addEventListener('click', show_result);
function count_words() {
    const split_pattern = /[.,\s]+/;
    const word_pattern = /^[a-zA-Zа-яА-ЯёЁ]+([-][a-zA-Zа-яА-ЯёЁ]+)?([-][a-zA-Zа-яА-ЯёЁ]+)?$/;
    return word_form.value
    .trim()
    .split(split_pattern)
    .filter(word => {
        return word_pattern.test(word)
    }).length;  
}
function show_result() {
    const wordCount = count_words();
    const confirmResult = confirm(`Кількість слів: ${wordCount}.\nБажаєте зберегти їх кількість в cookies?`);
    if (confirmResult) {
        document.cookie = `wordCount=${wordCount}`;
        alert('Дані збережено в cookies');
        word_form.style.display = "none";
        count_button.style.display = "none";
        area_button.style.width = '25rem';
        swap_button.style.width = '12rem';
        
        change_element_width();
    }
}
window.addEventListener('load', () => {
    const cookies = document.cookie;
    if (cookies.includes('wordCount')) {
        const quantity = cookies.split('=')[1];
        if (quantity !== '') {
            alert(`Кількість слів: ${quantity}.\nПісля натискання «ОК» дані будуть видалені з cookies.`);
        }
    }
    document.cookie = `wordCount=`;
});
