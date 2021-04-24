// Create politician obj
const candidates = (candidate) => {
    const politician = {
        name : candidate,
        electionResults : null,
        totalVotes : 0
    };
    return politician;
}

// Create 2 politicians
const firstCandidate = candidates("Jubilee");
const secondCandidate = candidates("Austeen");

// Add electionResult array
firstCandidate.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];
secondCandidate.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

