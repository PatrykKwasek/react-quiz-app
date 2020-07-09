const apiURL = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple';
// const basicURL = 'https://opentdb.com/api.php';
const categoriesURL = 'https://opentdb.com/api_category.php';
const gitURL = "https://ghibliapi.herokuapp.com/people";

export const UploadAPI = async (apiURL) => {
    return await fetch(apiURL)
        .then(response => response.json())
        .catch(error => console.error(error))
};

export const GetCategories = () => {
    const categories = [];
    // categories.push({id: 0, name: "Any Category"});

    return UploadAPI(categoriesURL).then(data => {
        // console.log('FETCH', data);
        categories.push(data.trivia_categories);
        console.log(categories);
        return categories;
    });
};

export const GetLink = async () => {
    const request = await fetch(categoriesURL);
    const data = await request.json();

    console.log(data.trivia_categories);
    console.log(data.trivia_categories[2]);
    return data.trivia_categories;
};

// export const GetLink = () => {
//     const names = [];
//     return UploadAPI(gitURL).then(people => {
//         names.push(people.map(person => person.name));
//         console.log(names);
//         return names;
//     })
// };




















// export const GetQuestionsFromCategory = (questionNumber, category, difficulty) => {
//     const url = new URL(basicURL),
//         params = {amount:questionNumber, category, difficulty,};
//
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//     return fetch(url).then(response => response.json())
//         .catch(error => console.error(error))
// };