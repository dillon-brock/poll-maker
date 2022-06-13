import state, {
    initialize,
    newPoll,
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
