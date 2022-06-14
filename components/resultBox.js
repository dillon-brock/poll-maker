export default function resultBox({ poll }) {

    const div = document.createElement('div');
    div.classList.add('poll-results');

    const question = document.createElement('h3');
    question.classList.add('question');
    question.textContent = poll.question;

    const optionA = document.createElement('span');
    optionA.classList.value = 'option a';
    optionA.textContent = poll.optionA.option;

    const optionB = document.createElement('span');
    optionB.classList.value = 'option b';
    optionB.textContent = poll.optionB.option;

    const votesA = document.createElement('span');
    votesA.classList.value = 'votes a';
    votesA.textContent = poll.optionA.votes;

    const votesB = document.createElement('span');
    votesB.classList.value = 'votes b';
    votesB.textContent = poll.optionB.votes;

    div.append(question, optionA, optionB, votesA, votesB);

    return div;
}