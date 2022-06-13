export default function createNewPoll(root) {
    return (props) => {
        const poll = props.poll;
        if (poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}