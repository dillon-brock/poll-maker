// import utilities
import state, { newPoll, addVote, removeVote, endPoll, clearPolls } from './state.js';
// import component creators
import createNewPoll from './components/NewPoll.js';
import createPollResults from './components/PollResults.js';
import createVoteCounter from './components/VoteCounter.js';
import createPastPolls from './components/PastPolls.js';
import createClearPolls from './components/ClearPolls.js';
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
const PastPolls = createPastPolls(document.querySelector('.polls-container'));

const ClearPolls = createClearPolls(document.querySelector('#button-container'), {
    handleClearPolls: () => {
        clearPolls();
        display();
    }
});
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    NewPoll({ poll: state.poll });
    PollResults({ poll: state.poll });
    VoteCounter({ poll: state.poll });
    PastPolls({ polls: state.pastPolls });
    ClearPolls({ polls: state.pastPolls });
}

// Call display on page load
display();
