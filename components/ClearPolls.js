export default function createClearPolls(root, { handleClearPolls }) {

    const clearPollsButton = root.querySelector('#clear-polls');

    clearPollsButton.addEventListener('click', () => {
        handleClearPolls();
    });

    return ({ polls }) => {
        if (polls.length === 0) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}