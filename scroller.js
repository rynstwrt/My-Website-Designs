const transitionEndEvents = ['transitionend', 'oTransitionEnd', 'webkitTransitionEnd']
const leftArrow = document.querySelector('#leftarrow');
const rightArrow = document.querySelector('#rightarrow');
const title = document.querySelector('#title');
const viewbox = document.querySelector('#viewbox');
let index = 0;
let isInTransition = false;

const dict =
{
    'CSS Animations': ['cssanimations.png', 'https://rynstwrt.github.io/CSS-Animations'],
    'My Homepage': ['mainpage.png', 'https://www.ryanstew.art'],
    'Chord Generator': ['chordgenerator.png', 'https://rynstwrt.github.io/ChordProgressionGenerator']
}
const keys = Object.keys(dict);

function viewboxClick(e)
{
    const titleText = title.textContent;
    const url = dict[titleText][1];
    window.open(url);
}

function setData()
{
    viewbox.removeEventListener('click', viewboxClick);

    index = (index >= 0) ? index : keys.length - 1;
    const titleText = keys[index % keys.length];

    title.textContent = titleText;

    viewbox.style.backgroundImage = `url(${dict[titleText][0]})`;

    viewbox.addEventListener('click', viewboxClick);
}

transitionEndEvents.forEach((v) =>
{
    viewbox.addEventListener(v, () =>
    {
        isInTransition = false;
    });
});

leftArrow.addEventListener('click', () =>
{
    if (isInTransition) return;
    isInTransition = true;
    --index;
    setData();
});

rightArrow.addEventListener('click', () =>
{
    if (isInTransition) return;
    isInTransition = true;
    ++index;
    setData();
});

setData();
