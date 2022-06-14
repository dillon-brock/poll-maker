// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.poll = null;
    // state.poll = {
    //     question: 'what am I doing?',
    //     optionA: { option: 'programming', votes: 0 },
    //     optionB: { option: 'crying', votes: 0 }
    // };
    state.pastGames = [];
    // For example:
    // state.game = null;
    // state.pastGames = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function newPoll(question, aOption, bOption) {
    state.poll = {
        question,
        optionA: { option: aOption, votes: 0 },
        optionB: { option: bOption, votes: 0 },
    };
}

export function addVote(option) {
    if (option === 'A') {
        state.poll.optionA.votes++;
    }
    if (option === 'B') {
        state.poll.optionB.votes++;
    }
}

export function removeVote(option) {
    if (option === 'A' && state.poll.optionA.votes > 0) {
        state.poll.optionA.votes--;
    }
    if (option === 'B' && state.poll.optionB.votes > 0) {
        state.poll.optionB.votes--;
    }
}