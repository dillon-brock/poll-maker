import state from '../state.js';

export default function createPollResults(root) {
    return ({ poll }) => {
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        const question = root.querySelector('h3');
        const [optionA, optionB] = root.querySelectorAll('.option');
        const [votesA, votesB] = root.querySelectorAll('.votes');

        question.textContent = state.poll.question;
        optionA.textContent = state.poll.optionA.option;
        optionB.textContent = state.poll.optionB.option;
        votesA.textContent = state.poll.optionA.votes;
        votesB.textContent = state.poll.optionB.votes;
    };
}