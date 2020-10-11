import booksData from '../../data/category/books/booksData';
import generalKnowledge from '../../data/category/general/generalKnowledge';
import geographyData from '../../data/category/geography/geographyData';
import historyData from '../../data/category/history/historyData';
import exampleData from '../../data/category/science/computers/exampleData';
import questionData from '../../data/category/science/computers/questionData';
import mathData from '../../data/category/science/mathematics/mathData';
import sportData from '../../data/category/sport/sportData';

const buttonsData = [
  { button: 'COMPUTERS A', data: exampleData },
  { button: 'COMPUTERS B', data: questionData },
  { button: 'BOOKS', data: booksData },
  { button: 'KNOWLEDGE', data: generalKnowledge },
  { button: 'GEOGRAPHY', data: geographyData },
  { button: 'HISTORY', data: historyData },
  { button: 'MATHEMATICS', data: mathData },
  { button: 'SPORT', data: sportData },
];

export default buttonsData;
