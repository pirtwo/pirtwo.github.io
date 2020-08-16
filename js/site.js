const quotes = {
    '❶❷❸': 'CAST IT INTO FIRE',
    '→→❹': 'HADOUKEN',
    '↓❶❶': 'SHORYUKEN',
    '↓↑❶': 'RELEASE THE KRAKEN',
    '❶❷❸': 'ECHO SLAM',
    '↑←❷': 'HAA YAAAAAAAA',    
    '↑↑↑': 'JACKPOT',
    '←↑→': 'FINISH HIM!',
    '❸❷❶': 'GAME OVER!',
    '←←❹': 'YOU SHALL NOT PASS',
    '❶↓❷': 'GET OVER HERE!',
}

let keys = ['←', '↑', '→', '↓', '❶', '❷', '❸', '❹'],
    action = document.getElementsByClassName('header__combo__quote')[0],
    cells = document.getElementsByClassName('header__combo__cell'),
    currIndex = 0,
    currCombo = '',
    canUpdateCombo = true,
    lastIndexChange = 0,
    lastComboChange = 0,
    lastComboSuccess = 0;

action.setAttribute('style', 'display:none;');
render();

function render(timestamp) {
    updateCombo(timestamp);
    requestAnimationFrame(render);
}

function updateCombo(ts) {
    if (canUpdateCombo) {
        if (ts - lastComboChange >= 100) {
            cells[currIndex].innerHTML =
                keys.filter(i => i != cells[currIndex].innerHTML)[randInt(0, keys.length)];
            lastComboChange = ts;
        }

        if (ts - lastIndexChange >= 100) {
            currIndex = currIndex + 1 > cells.length - 1 ? 0 : currIndex + 1;            
            currCombo = [...cells].map(i => i.innerHTML).join('');
            lastIndexChange = ts;

            if (quotes[currCombo]) {
                canUpdateCombo = false;
                updateCellsVisiblity(false);
                action.setAttribute('style', 'display:block;');
                action.innerHTML = quotes[currCombo];
                lastComboSuccess = ts;
            }
        }
    } else if (ts - lastComboSuccess >= 10000) {
        action.setAttribute('style', 'display:none;');
        action.innerHTML = '';
        updateCellsVisiblity(true);
        canUpdateCombo = true;
    }
}

function updateCellsVisiblity(isVisible) {
    [...cells].forEach(cell => {
        cell.setAttribute('style', isVisible ? 'display:block;' : 'display:none;');
    });
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
}