export default function createClearPolls(root) {
    return ({ polls }) => {
        if (polls.length === 0) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}