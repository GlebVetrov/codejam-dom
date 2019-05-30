function tip () {

    let page = document.body;

    let mainTip = document.createElement('div');
    
    mainTip.className = 'main';

    
    let close = document.createElement('div');
    close.className = 'main_close';
    close.onclick = closeTip;

    
    let toggle = document.createElement('div');
    toggle.className = 'main_toggle';

    let labelToggle = document.createElement('label');

    let inputToggle = document.createElement('input');
    inputToggle.type = 'checkbox';
    inputToggle.onclick = inputChecked;

    let toggleText = document.createTextNode('Disabled Tips');
    // сообщения
    let displayMassage = document.createElement('div');
    displayMassage.className = 'main_massage'

    displayMassage.innerHTML = `
        <h3>Header one</h3>
        <p>Massage one</p>
        `;

    let switchPanel = document.createElement('div');
    switchPanel.className = 'main_switchPanel';


    let backwardArrow = document.createElement('div');
    let aheadArrow = document.createElement('div');


    backwardArrow.name = 'back';
    backwardArrow.className = 'main_toggle_backwardArrow'

    aheadArrow.name = 'ahead';
    aheadArrow.className = 'main_toggle_aheadArrow'

    let noteOne = document.createElement('div'),
        noteTwo = document.createElement('div'),
        noteThree = document.createElement('div'),
        noteFour = document.createElement('div'),
        noteFive = document.createElement('div'),
        noteSix = document.createElement('div');

        
        noteOne.className = 'main_toggle_note note_selected';
        noteTwo.className = 'main_toggle_note';
        noteThree.className = 'main_toggle_note';
        noteFour.className = 'main_toggle_note';
        noteFive.className = 'main_toggle_note';
        noteSix.className = 'main_toggle_note';

    // добавление элементов
    page.appendChild(mainTip);
    mainTip.appendChild(close);
    mainTip.appendChild(toggle);
    mainTip.appendChild(displayMassage);
    mainTip.appendChild(switchPanel);
    switchPanel.appendChild(backwardArrow);

    switchPanel.appendChild(noteOne);
    switchPanel.appendChild(noteTwo);
    switchPanel.appendChild(noteThree);
    switchPanel.appendChild(noteFour);
    switchPanel.appendChild(noteFive);
    switchPanel.appendChild(noteSix);

    switchPanel.appendChild(aheadArrow);
    toggle.appendChild(labelToggle);
    labelToggle.appendChild(inputToggle);
    labelToggle.appendChild(toggleText);
}