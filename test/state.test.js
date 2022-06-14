import state, {
    initialize,
    newPoll,
    addVote,
    removeVote,
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('creates a new poll with specified question and options', (expect) => {
    newPoll('what am I doing?', 'programming', 'crying');
    expect.deepEqual(state.poll, {
        question: 'what am I doing?',
        optionA: {
            option: 'programming',
            votes: 0
        },
        optionB: {
            option: 'crying',
            votes: 0
        }
    });
});

test('adds a vote to corresponding option', (expect) => {

    newPoll('what am I doing?', 'programming', 'crying');
    addVote('A');
    addVote('A');
    addVote('A');
    addVote('B');
    addVote('B');

    expect.deepEqual(state.poll, {
        question: 'what am I doing?',
        optionA: {
            option: 'programming',
            votes: 3
        },
        optionB: {
            option: 'crying',
            votes: 2
        }
    });
});

test('removes a vote from corresponding option', (expect) => {

    newPoll('what am I doing?', 'programming', 'crying');
    addVote('A');
    addVote('A');
    addVote('A');
    addVote('B');
    addVote('B');

    removeVote('A');
    removeVote('A');
    removeVote('B');

    expect.deepEqual(state.poll, {
        question: 'what am I doing?',
        optionA: {
            option: 'programming',
            votes: 1
        },
        optionB: {
            option: 'crying',
            votes: 1
        }
    });
});