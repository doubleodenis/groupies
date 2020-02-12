//Voting object. All key values must add up to 100
// {
//     vote1: 1,
//     vote2: 4,
//     vote3: 5
// }

$(document).ready(function () {
    
});

var polls = [];

//Add a new poll
function addPoll(name) {
    //LATER: Validate unique names of polls
    polls.push({
        name,
        votes: {}
    })
}

//Add vote to a poll
function addVoteName(pollName, voteName) {
    const poll = polls.find(poll => poll.name === pollName);
    poll.votes[voteName] = 0;
}

//
function vote(poll, voteKey) {
    for(const key in poll.votes) {
        if(voteKey === key) poll.votes[key]++;
    }
}

//Returns an array of percentages
function getTotalVotes(poll) {
    let total = 0;
    for(const key in poll.votes) {
        total += poll.votes[key];
    }
    return total;
}

function getPollByName(pollName) {
    return polls.find(poll => poll.name === pollName);
}

function getPolls() {
    //Mock service
    addPoll('Poll 1');
    const poll = getPollByName('Poll 1');
    addVoteName('Poll 1', 'vote1');
    vote(poll, 'vote1');
    vote(poll, 'vote2');
    vote(poll, 'vote2');
}

function _setup() {
    
    getPolls();
    polls.forEach((poll, index) => {
        let total = getTotalVotes(poll);
        $('#pollContainer').append(`
        <div class="poll" id="poll${index}">
            <h3>${poll.name}</h3> 
            <div class="votingContainer">
                
            </div>
        </div>`);
        console.log(poll.votes)
        for(const key in poll.votes) {
            $(`#poll${index} .votingContainer`).append(`
                <div>${key}: <span>${poll.votes[key]/total * 100}%</span></div>
            `);
        }
        
    })
}

_setup();