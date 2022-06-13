// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.poll = null;
    // state.poll = {
    //     question: 'what am I doing?',
    //     optionA: 'programming',
    //     optionB: 'dying'
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