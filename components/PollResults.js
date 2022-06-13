export default function createPollResults(root) {
    return ({ poll }) => {
        if (!poll) {
            console.log('should be hidden');
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
        console.log('should show');
    };
}