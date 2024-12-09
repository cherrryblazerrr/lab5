function calculate_area() {
    const width = item3.clientWidth;
    const height = item3.clientHeight;
    const area = width * height;
    area_output.textContent = `${area}px²`;
    area_output.style.display = 'inline-block';
    change_element_width();
}
const area_button = document.getElementById('calculate-area');
area_button.addEventListener('click', calculate_area);
const item3 = document.getElementById('item-3');
area_output.style.display = 'none';
