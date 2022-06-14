export default function createNewPoll(root, { handleNewPoll }) {

    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(form);
        handleNewPoll(data.get('question'), data.get('optionA'), data.get('optionB'));

        form.reset();

    });

    return (props) => {
        const poll = props.poll;
        if (poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}