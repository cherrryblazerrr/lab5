function change_line_height(element) {
    element.style.lineHeight = (element.scrollWidth > element.clientWidth ? '1.5' : '2');
    console.log(`${element}: ${element.scrollWidth > element.clientWidth ? '1.5' : '2'}`);
}
const area_output = document.getElementById('print-area');
const word_form = document.getElementById('word-form');
const color_form = document.getElementById('color-form');
const image_link = document.getElementById('bg-image');
const hidden = document.getElementById('hidden-wrapper');
const elements = [image_link, word_form, area_output];
elements.forEach(element => {
    element.addEventListener('change', () => change_line_height(element));
});
window.addEventListener('load', () => {
    elements.forEach(element => change_line_height(element));
});
function change_element_width() {
    const ad = area_output.style.display === 'none';
    const wd = word_form.style.display === 'none';
    const cd = color_form.style.display === 'none';
    hidden.style.display = ad && wd && cd ? 'none' : 'flex';
    if (ad && wd && cd) return;
    if (ad && wd) {
        color_form.style.width = '38rem';
    } else if (wd && cd) {
        area_output.style.width = '38rem';
    } else if (ad && cd) {
        word_form.style.width = '38rem';
    } else if (ad) {
        word_form.style.width = '25rem';
        color_form.style.width = '12rem';
    } else if (wd) {
        area_output.style.width = '25rem';
        color_form.style.width = '12rem';
    } else if (cd) {
        word_form.style.width = '25rem';
        area_output.style.width = '12rem';
    } else {
        area_output.style.width = '12rem';
        word_form.style.width = '12rem';
        color_form.style.width = '12rem';
    }
}