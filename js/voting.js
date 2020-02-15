//Voting object. All key values must add up to 100
// {
//     vote1: 1,
//     vote2: 4,
//     vote3: 5
// }


var polls = [{"creator": "Denis","name":"Poll 1","votes":{"This is a giant vote text":["Denis"],"vote2":["Susan"],"vote3":["Danny", "Marcel"]},"timestamp":"1/10/2020"},{"creator":"Susan","name":"2","votes":{"vote1":["Denis", "Brian"]},"timestamp":"1/13/2020"},{"name":"3","votes":{"vote1":["Brian"],"vote2":["Denis"],"vote3":["Danny", "Kristen"],"vote4":["Abdiel", "Susan"]},"timestamp":"1/13/2020"}];
var currentGroupie = null;

//Event Listeners
$('#groupie-selector').on("click", function(e) {
    //To make this reusable check that it's not the first caption in the list
    currentGroupie = e.target.innerText !== "Select a Groupie" ? e.target.innerText : null;
    if(currentGroupie) _setup();
})


//Add a new poll
function addPoll() {
    const name = $('#add-poll').find('input').val();
    const multi = false; //Get from checkbox
    if(currentGroupie && name !== '') {
        
        //LATER: Validate unique names of polls
        polls.push({
            name,
            creator: currentGroupie,
            multi,
            votes: {},
            timestamp: new Date().getMonth().toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear()
        })
        console.log(polls);
        _setup();
    }
}

//Add vote to a poll
function addVoteName(index) {
    const voteName = $(`#poll${index} .add-vote`);
    const val = voteName.val();
    if(val && val !== "") {
        const poll = polls[index];
        poll.votes[val] = [];
        _setup();
        voteName.val("");
    }
}

function openVote(index) {

}
//
function vote(pollIndex, voteKey) {
    // console.log(poll, voteKey)
    const poll = polls[pollIndex]
    if(currentGroupie !== null) {
        for(const key in poll.votes) {

            //Multi vote
            if(poll.multi == true) {
                //Need to handle unchecking checkboxes
                if(voteKey === key && !poll.votes[key].includes(currentGroupie)) poll.votes[key].push(currentGroupie);
            }
            //Single vote
            else {
                // console.log(poll.votes[key].includes(currentGroupie))
                if(voteKey !== key && poll.votes[key].includes(currentGroupie)) {
                    const idx = poll.votes[key].indexOf(currentGroupie);
                    console.log(currentGroupie, idx);
                    if(idx > -1) poll.votes[key].splice(idx, 1);
                }    
                else if(voteKey === key && !poll.votes[key].includes(currentGroupie))
                    poll.votes[key].push(currentGroupie);
            }
        }
    }
    _setup();
    
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
    // console.log(polls);
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
                by ${poll.creator} 
                <span style="float: right">${poll.timestamp}</span>
            </div>
            <div class="voting-container">
                
            </div>
        </div>`);
        if(index == 0) $(".poll").toggleClass('main');

        // console.log(poll.votes)
        //use calc()
        for(const key in poll.votes) {
            const checked = poll.votes[key].includes(currentGroupie)
            $(`#poll${index} .voting-container`).append(`
                <div class="tooltip">
                    <input type="radio" onclick="vote(${index}, '${key}')" ${checked ? "checked" : ""}>
                    <div class="ellipse">${key}</div>
                    <div class="voting-bar" style="width: calc(${.75 * Math.round(poll.votes[key].length/total * 100)}%);"></div>
                    <span>${Math.round(poll.votes[key].length/total * 100)}%</span>
                    <div class="tooltiptext" >
                        <b style="margin-bottom: 5px">${key}</b>
                        <span>Voters: ${poll.votes[key].join(", ")}</span>
                    </div>
                </div> 
            `);
        }
        if(poll.creator === currentGroupie) {
            $(`#poll${index}`).append(`
                <div>
                    <input type="text" class="add-vote" placeholder="New Vote Name..."style="border: 1px solid #cecece;">
                    <button onclick="addVoteName(${index})" class="inverse-btn" style="box-shadow: none; ">+</button>
                </div> 
            `);
        }
        
    })
}

_setup();