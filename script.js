const o = document.getElementById('o');
let t;

function run(id, el) {
    clearTimeout(t);

    [...document.links].forEach(l => l.className = '');
    el.className = 'a';
    o.textContent = '';

    const text = document.getElementById(id).textContent.trim();

    (function type(i) {
        if (i < text.length) {
            o.textContent += text[i];
            t = setTimeout(type, 5, i + 1);
        }
    })(0);
}

window.addEventListener('load', () =>
run('f', document.links[0])
);
