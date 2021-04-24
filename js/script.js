// Create politician obj
const candidates = (candidateName, partyColor) => {
    const politician = {
        name : candidateName,
        electionResults : null,
        partyColor : partyColor,
        totalVotes : 0,
        tallyUpResults : function() {
            for(result of this.electionResults) {
                this.totalVotes += result;
            }
        }
    };
    return politician;
}

// Create 2 politicians
let firstCandidate = candidates("Jubilee", [132, 17, 11]);
let secondCandidate = candidates("Austeen", [245, 141, 136]);

// Add electionResult array
firstCandidate.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
secondCandidate.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// Recounts update data
firstCandidate.electionResults[9] = 1;
secondCandidate.electionResults[9] = 28;
firstCandidate.electionResults[4] = 17;
secondCandidate.electionResults[4] = 38;
firstCandidate.electionResults[43] = 11;
secondCandidate.electionResults[43] = 27

// Declare the winner 
let getWinner = '';
if(firstCandidate.totalVotes > secondCandidate.totalVotes) {
    getWinner = firstCandidate.name;
    console.log(getWinner);
} else if (firstCandidate.totalVotes < secondCandidate.totalVotes) {
    getWinner = secondCandidate.name;
    console.log(getWinner);
}

// Assign Winnder of Erach state
const setStateResults = (state) => {
    theState[state].winner = null;
    if(firstCandidate.electionResults[state] > secondCandidate.electionResults[state]) {
        theState[state].winner = firstCandidate;
    } else {
        theState[state].winner = secondCandidate;
    }
}

// Make Tally Up of electionResult
firstCandidate.tallyUpResults();
secondCandidate.tallyUpResults();
