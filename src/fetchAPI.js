// const apiURL = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple';
// const basicURL = 'https://opentdb.com/api.php';
const categoriesURL = 'https://opentdb.com/api_category.php';

export const UploadAPI = async (apiURL) => {
    return await fetch(apiURL)
        .then(response => response.json())
        .catch(error => console.error(error))
};

export const GetCategories = () => {
    const categories = [];
    // categories.push({id: 0, name: "Any Category"});

    return UploadAPI(categoriesURL).then(data => {
        console.log('FETCH', data);
        categories.push(data.trivia_categories);

        return categories[0];
    });
};

// Let's connect to API to get questions
export const GetQuestions = (questionNumber, category, difficulty) => {
  const questions = [];
  const host = `https://opentdb.com/api.php?amount=12&category=23&difficulty=hard&type=multiple`;
  // const host = `https://opentdb.com/api.php?amount=${questionNumber}&category=${category}&difficulty=${difficulty}&type=multiple`;

  return UploadAPI(host).then(data => {
      console.log('HOST', data.results);
      questions.push(data.results);

      return questions[0];
  });
};





// export const LoadAPI = (putURL) => {
//     return fetch(putURL);
// };
//
// export const GetLink = async () => {
//     const request = await LoadAPI(categoriesURL);
//     const categories = await request.json();
//
//     // console.log('Categories', categories.trivia_categories);
//     return categories.trivia_categories;
// };




// export const GetQuestionsFromCategory = (questionNumber, category, difficulty) => {
//     const url = new URL(basicURL),
//         params = {amount:questionNumber, category, difficulty,};
//
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//     return fetch(url).then(response => response.json())
//         .catch(error => console.error(error))
// };