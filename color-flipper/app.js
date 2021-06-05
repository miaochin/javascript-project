const hex_unit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const flipBtn = document.getElementById('flip');
const color = document.getElementById('color');
const color_rgb = document.getElementById('color-rgb');
const color_hex = document.getElementById('color-hex');


const flip_color = () => {
    let hex = '#';
    let hex_position = [];
    for (let i = 0; i < 6; i++) {
        const value = hex_unit_generator();
        hex += hex_unit[value];
        hex_position.push(value);
    }
    return [hex, hex_position];
}

const hex_unit_generator = () => Math.floor(Math.random() * hex_unit.length);

const hex_to_rgb = (hex_position) => {
    const r = 16 * hex_position[0] +1 * hex_position[1];
    const g = 16 * hex_position[2] +1 * hex_position[3];
    const b = 16 * hex_position[4] +1 * hex_position[5];
    return `RGB(${r}, ${g}, ${b})` ;
}

flipBtn.addEventListener('click', () => {
    const replace_color = flip_color();
    const hex = replace_color[0];
    const hex_position = replace_color[1]
    const rgb = hex_to_rgb (hex_position);
    color_hex.innerHTML = hex;
    color_rgb.innerHTML = rgb;
    color.style.background = hex;
})





