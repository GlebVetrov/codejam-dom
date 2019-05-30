if (window.localStorage['Notification'] !== 'true') {    
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => tip ()        
        , 5000);
    }, true);
}

function tip () {
    
    const closeTip = () => {
        page.removeChild(mainTip);
    }

    const inputChecked = () => {    
        window.localStorage['Notification'] = inputToggle.checked;
    }

    let num = 0;

    const toggleMassage = (EO) => {
        EO=EO||window.event;
        
        let massage = [ `<h3>Header one</h3><p>Massage one</p>`, 
                        `<h3>Header two</h3><p>Massage two</p>`, 
                        `<h3>Header tree</h3><p>Massage tree</p>`, 
                        `<h3>Header four</h3><p>Massage four</p>`, 
                        `<h3>Header five</h3><p>Massage five</p>`, 
                        `<h3>Header six</h3><p>Massage six</p>`];

        let note = [
            noteOne,
            noteTwo,
            noteThree,
            noteFour,
            noteFive,
            noteSix
        ];   
        
        if ((EO.target.name === 'ahead' || EO.keyCode  === 39) && num != 5) {
            num += 1;
            displayMassage.innerHTML = massage[num];
            for (i = 0; i < note.length; i++) {
                note[i].className = 'main_toggle_note';
            }
            note[num].className = 'main_toggle_note note_selected';        
        }
        if ((EO.target.name === 'back' || EO.keyCode  === 37) && num != 0) {
            num -= 1;
            displayMassage.innerHTML = massage[num];
            for (i = 0; i < note.length; i++) {
                note[i].className = 'main_toggle_note';
            }
            note[num].className = 'main_toggle_note note_selected';
        }
        EO.preventDefault();
    }

    let page = document.body;
    page.addEventListener('keydown',toggleMassage,false);   

    let mainTip = document.createElement('div');
    
    mainTip.className = 'main';

    // создание элемента закрытия окна
    let close = document.createElement('div');
    close.className = 'main_close';
    close.onclick = closeTip;

    // переключатель состояний
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

    backwardArrow.addEventListener('click',toggleMassage,false);
    backwardArrow.addEventListener('keydown',toggleMassage,false);
  

    aheadArrow.name = 'ahead';
    aheadArrow.className = 'main_toggle_aheadArrow'

    aheadArrow.addEventListener('click',toggleMassage,false);
    aheadArrow.addEventListener('keydown',toggleMassage,false);
    

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