const categoriesURL = 'https://opentdb.com/api_category.php';

export const UploadAPI = async apiURL => {
  return await fetch(apiURL)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const GetCategories = () => {
  const categories = [];

  return UploadAPI(categoriesURL).then(data => {
    categories.push(data.trivia_categories);

    return categories[0];
  });
};

export const GetQuestions = (questionNumber, category, difficulty) => {
  const questions = [];
  const host = `https://opentdb.com/api.php?amount=${questionNumber}&category=${category}&difficulty=${difficulty}&type=multiple`;

  return UploadAPI(host).then(data => {
    console.log('HOST', data.results);
    console.log('questionNumber', questionNumber);
    console.log('category', category);
    console.log('difficulty', difficulty);
    questions.push(data.results);

    return questions[0];
  });
};
