//Voting object. All key values must add up to 100
// {
//     vote1: 1,
//     vote2: 4,
//     vote3: 5
// }


var polls = [{"creator": "Denis","name":"Poll 1","votes":{"vote1":["Denis", "Susan"],"vote2":["Susan"],"vote3":["Danny", "Denis", "Marcel"]},"timestamp":"1/13/2020"},{"name":"2","votes":{"vote1":["Denis", "Brian"],"vote2":["Denis", "Danny"],"vote3":["Denis"]},"timestamp":"1/13/2020"},{"name":"3","votes":{"vote1":["Denis"],"vote2":["Denis"],"vote3":["Denis", "Danny", "Kristen"],"vote4":["Denis", "Brian", "Abdiel"]},"timestamp":"1/13/2020"}];
var currentGroupie = null;

//Event Listeners
$('#groupie-selector').on("click", function(e) {
    //To make this reusable check that it's not the first caption in the list
    currentGroupie = e.target.innerText !== "Select a Groupie" ? e.target.innerText : null;
    if(currentGroupie) _setup();
})


//Add a new poll
function addPoll() {
    if(currentGroupie) {
        const name = $('#add-poll').find('input').val();
        //LATER: Validate unique names of polls
        polls.push({
            name,
            creator: currentGroupie,
            votes: {},
            timestamp: new Date().getMonth().toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear()
        })
        console.log(polls);
        _setup();
    }
}

//Add vote to a poll
function addVoteName(pollName, voteName) {
    const poll = polls.find(poll => poll.name === pollName);
    poll.votes[voteName] = [];
}

function openVote(index) {

}
//
function vote(poll, voteKey) {
    if(currentGroupie !== null) {
        for(const key in poll.votes) {
            if(voteKey === key && !poll.votes[key].includes(currentGroupie)) poll.votes[key].push(currentGroupie);
        }
    }
    
}

//Returns an array of percentages
function getTotalVotes(poll) {
    let total = 0;
    for(const key in poll.votes) {
        total += poll.votes[key].length;
    }
    return total;
}

function getPollByName(pollName) {
    return polls.find(poll => poll.name === pollName);
}

function getPolls() {
    //Mock service
    console.log(polls);
}

function _setup() {
    
    getPolls();
    $('#poll-container').empty();
    polls.forEach((poll, index) => {
        let total = getTotalVotes(poll);
        $('#poll-container').append(`
        <div class="poll" id="poll${index}">
            <div style="margin: 10px 0px;">
                <span style="font-weight: bold; font-size: 20px;">${poll.name}</span> 
                <span style="float: right">${poll.timestamp}</span>
            </div>
            <div class="voting-container">
                
            </div>
        </div>`);
        if(index == 0) $(".poll").toggleClass('main');

        console.log(poll.votes)
        //use calc()
        for(const key in poll.votes) {
            $(`#poll${index} .voting-container`).append(`
                <div>
                    <span>${key}</span>
                    <div class="voting-bar" style="width: calc(100% - ${100 - Math.round(poll.votes[key].length/total * 100)}%);"></div>
                    <span>${Math.round(poll.votes[key].length/total * 100)}%</span>
                </div> 
            `);
        }
        if(poll.creator === currentGroupie) {
            $(`#poll${index} .voting-container`).append(`
                <div>
                    <input type="text" placeholder="New Vote Name..."style="border: 1px solid #cecece;">
                    <button onclick="addVoteName(${index})" class="inverse-btn" style="box-shadow: none; ">+</button>
                </div> 
            `);
        }
        
    })
}

_setup();