import resultBox from './ResultBox.js';

export default function createPastPolls(root) {
    return ({ polls }) => {
        root.innerHTML = '';
        for (const poll of polls) {
            const result = resultBox({ poll });
            root.append(result);
        }
    };
}