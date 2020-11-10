const transitionEndEvents = ['transitionend', 'oTransitionEnd', 'webkitTransitionEnd']
const leftArrow = document.querySelector('#leftarrow');
const rightArrow = document.querySelector('#rightarrow');
const title = document.querySelector('#title');
const viewbox = document.querySelector('#viewbox');
let index = 0;
let inTransition = false;

const dict =
{
    'CSS Animations': ['cssanimations.png', 'https://rynstwrt.github.io/CSS-Animations'],
    'My Homepage': ['mainpage.png', 'https://www.ryanstew.art'],
    'Chord Generator': ['chordgenerator.png', 'https://rynstwrt.github.io/ChordProgressionGenerator']
}
const keys = Object.keys(dict);

function setData()
{
    index = (index >= 0) ? index : keys.length - 1;
    const titleText = keys[index % keys.length];
    title.textContent = titleText;
}

viewbox.addEventListener('click', () =>
{
    index = (index >= 0) ? index : keys.length - 1;
    const titleText = keys[index % keys.length];
    const url = dict[titleText][1];
    window.open(url);
});

viewbox.addEventListener('transitionend', () =>
{
    inTransition = false;
});

title.addEventListener('transitionend', () =>
{
    setData();
    title.style.opacity = 1;
});

leftArrow.addEventListener('click', () =>
{
    if (inTransition) return;
    inTransition = true;
    --index;
    index = (index >= 0) ? index : keys.length - 1;
    const titleText = keys[index % keys.length];
    const imageUrl = dict[titleText][0];
    viewbox.style.backgroundImage = `url(${imageUrl})`;
    title.style.opacity = 0;
});

rightArrow.addEventListener('click', () =>
{
    if (inTransition) return;
    inTransition = true;
    ++index;
    index = (index >= 0) ? index : keys.length - 1;
    const titleText = keys[index % keys.length];
    const imageUrl = dict[titleText][0];
    viewbox.style.backgroundImage = `url(${imageUrl})`;
    title.style.opacity = 0;
});


const titleText = keys[index % keys.length];
const imageUrl = dict[titleText][0];
viewbox.style.backgroundImage = `url(${imageUrl})`;
setData();
