const apiURL = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple';

export default function UpdateJSON() {
    return fetch(apiURL)
        .then(response => response.json())
        .catch(error => console.error(error))
}