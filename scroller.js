const leftArrow = document.querySelector('#leftarrow');
const rightArrow = document.querySelector('#rightarrow');
const title = document.querySelector('#title');
const viewbox = document.querySelector('#viewbox');
let index = 0;

const dict =
{
    'CSS Animations': 'cssanimations.png',
    'My Homepage': 'mainpage.png',
    'Chord Generator': 'chordgenerator.png'
}
const keys = Object.keys(dict);


function setData()
{
    index = (index >= 0) ? index : keys.length - 1;
    const key = keys[index % keys.length];
    title.textContent = key;
    viewbox.style.backgroundImage = `url(${dict[key]})`;
}

leftArrow.addEventListener('click', () =>
{
    --index;
    setData();
});

rightArrow.addEventListener('click', () =>
{
    ++index;
    setData();
});
