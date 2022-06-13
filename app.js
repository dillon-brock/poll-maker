// import utilities
import state from './state.js';
// import component creators
import createNewPoll from './components/NewPoll.js';
import createPollResults from './components/PollResults.js';
import createVoteCounter from './components/VoteCounter.js';
// import state and dispatch functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const newPoll = createNewPoll(document.querySelector('#new-poll'));
const pollResults = createPollResults(document.querySelector('#current-poll-results'));
const voteCounter = createVoteCounter(document.querySelector('#vote-counter'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    newPoll({ poll: state.poll });
    pollResults({ poll: state.poll });
    voteCounter({ poll: state.poll });
}

// Call display on page load
display();
