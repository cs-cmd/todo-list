import '../../../res/styles/todo-item-styles.css';

const buttonState = (() => {
    let currentButton = null;

    // returns boolean (true if button changed, false if else)
    const changeButton = (newButton) => {
        if (currentButton === newButton) {
            return false;
        }

        if (currentButton !== null) {
            currentButton.classList.remove('is-selected');
        } 

        newButton.classList.add('is-selected');
        currentButton = newButton;
        return true;
    };

    return { changeButton };
})();

export default buttonState;