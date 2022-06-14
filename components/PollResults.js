import resultBox from './ResultBox.js';

export default function createPollResults(root) {
    return ({ poll }) => {
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        const results = resultBox({ poll });

        root.innerHTML = '';
        root.append(results);
    };
}