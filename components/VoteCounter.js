import state from '../state.js';

export default function createVoteCounter(root, { handleAddVote, handleRemoveVote, handleEndPoll }) {

    const [aVoteButton, aRemoveButton, bVoteButton, bRemoveButton, endPollButton] = root.querySelectorAll('button');

    aVoteButton.addEventListener('click', () => {
        handleAddVote('A');
    });

    aRemoveButton.addEventListener('click', () => {
        handleRemoveVote('A');
    });

    bVoteButton.addEventListener('click', () => {
        handleAddVote('B');
    });

    bRemoveButton.addEventListener('click', () => {
        handleRemoveVote('B');
    });

    endPollButton.addEventListener('click', () => {
        handleEndPoll();
    });


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