let toggleState = false
let toggleElement = document.getElementById('toggle')

function toggle() {
    toggleState = !toggleState;
    if (toggleState) {
        // -- Turn toggle on --
        toggleElement.classList.add('toggle-on');
    }
    else {
        // -- Turn toggle off --
        toggleElement.classList.remove('toggle-on');
    }
}