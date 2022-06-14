export default function createClearPolls(root) {
    return ({ pastPolls }) => {
        if (pastPolls.length > 0) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}