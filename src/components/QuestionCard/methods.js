export const joinAnswers = (obj) => {
    let joinedAnswers = [];
    let correctAnswer = obj.correct_answer;
    let incorrectAnswers = obj.incorrect_answers;

    joinedAnswers.push(correctAnswer);
    for (let i = 0; i < incorrectAnswers.length; i++) {
        joinedAnswers.push(incorrectAnswers[i]);
    }

    return joinedAnswers;
};

export const shuffleAnswersTable = (tab) => {
    let arr = tab.slice();
    let shuffledArray = ['A. ', 'B. ', 'C. ', 'D. '];

    for (let i = arr.length; i > 0; i--) {
        let randomDigit = Math.floor(Math.random() * i);
        let index = arr.indexOf(arr[randomDigit]);
        if (arr[index] === undefined) {
            if (shuffledArray.indexOf(arr[index]) !== -1) {
                shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
            }
        } else {
            shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
        }

        arr.splice(index, 1);
    }

    return shuffledArray;
};