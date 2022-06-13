export default function createPollResults(root) {
    return ({ poll }) => {
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}