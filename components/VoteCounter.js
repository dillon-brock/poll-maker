import state from '../state.js';

export default function createVoteCounter(root) {

    return ({ poll }) => {
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        const [optionA, optionB] = root.querySelectorAll('span');
        optionA.textContent = state.poll.optionA.option;
        optionB.textContent = state.poll.optionB.option;
    };
}