// Create politician obj
const candidates = (candidate) => {
    const politician = {
        name : candidate,
        electronResults : null,
        totalVotes : 0
    };
    return politician;
}

const getFirstCandidate = candidates("Jubilee");
console.log(getFirstCandidate);
const getSecondCandidate = candidates("Austeen");
console.log(getSecondCandidate);

