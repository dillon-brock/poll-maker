// import utilities
import state, { newPoll, addVote, removeVote, endPoll } from './state.js';
// import component creators
import createNewPoll from './components/NewPoll.js';
import createPollResults from './components/PollResults.js';
import createVoteCounter from './components/VoteCounter.js';
// import state and dispatch functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll(question, optionA, optionB) {
        newPoll(question, optionA, optionB);
        display();
    }
});
const PollResults = createPollResults(document.querySelector('#current-poll-results'));
const VoteCounter = createVoteCounter(document.querySelector('#vote-counter'), {
    handleAddVote: (option) => {
        addVote(option);
        display();
    },
    handleRemoveVote: (option) => {
        removeVote(option);
        display();
    },
    handleEndPoll: () => {
        endPoll();
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    NewPoll({ poll: state.poll });
    PollResults({ poll: state.poll });
    VoteCounter({ poll: state.poll });
}

// Call display on page load
display();
