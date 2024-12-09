function change_color_start() {
    disable_all();
}
function change_color_end() {
    const color = color_form.value;
    if (color !== curr_color) {
        item2.style.backgroundColor = color;
        localStorage.setItem('color', color);
        curr_color = color;
        enable_all();
    }
}
function disable_all() {
    document.body.querySelectorAll('a').forEach(link => {
        link.style.pointerEvents = 'none';   
    });
    document.body.querySelectorAll('*').forEach(el => {
        if (el.disabled !== undefined) {
            el.disabled = true;
        }
    });
    
    color_form.disabled = false;
    color_form.style.display = 'inline-block';
    change_element_width();
}
function enable_all() {
    document.querySelectorAll('a').forEach(link => {
        link.style.pointerEvents = '';
    });
    document.body.querySelectorAll('*').forEach(el => {
        if (el.disabled !== undefined) {
            el.disabled = false;
        }
    });    
    
    color_form.disabled = true;
    color_form.style.display = 'none';
    change_element_width(); 
}

window.addEventListener('load', () => {
    const color = localStorage.getItem('color');
    if (color !== null && color !== '') {
        item2.style.backgroundColor = color;
    }
});

const item2 = document.getElementById('item-2');

color_form.style.display = 'none';
let curr_color = item2.style.backgroundColor;

item2.addEventListener('mouseleave', change_color_start);
color_form.addEventListener('change', change_color_end);