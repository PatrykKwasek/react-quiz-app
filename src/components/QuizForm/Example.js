import React from 'react';

const data = [
    {id: 0, name: "Any categories"},
    {id: 9, name: "General Knowledge"},
    {id: 10, name: "Entertainment: Books"},
    {id: 11, name: "Entertainment: Film"},
    {id: 12, name: "Entertainment: Music"},
    {id: 13, name: "Entertainment: TV"},
    {id: 14, name: "Entertainment: Games"},
];

// function Example() {
// //     return (
// //         <select>
// //             {console.log('START FORM', data)}
// //             {data.map((item, index) =>
// //                 <option key={`Create option-${index}`} value={item.id}>{item.name}</option>
// //             )}
// //             {console.log('FINISH FORM')}
// //         </select>
// //     )
// // }

async function Example({tab}) {
    return (
        <select>
                {console.log('START FORM', tab)}
                {/*{tab.map((item, index) =>*/}
                {/*    <option key={`Create option-${index}`} value={item.id}>{item.name}</option>*/}
                {/*)}*/}
                <option value={tab[0].id}>tab[0].name</option>
                <option value={tab[1].id}>tab[1].name</option>
                {/*<option value={9}>General Knowledge</option>*/}
                {/*<option value={10}>Entertainment: Books</option>*/}
                {/*<option value={11}>Entertainment: Film</option>*/}
                {/*<option value={12}>Entertainment: Music</option>*/}
                {/*<option value={13}>Entertainment: Musical & Theatres</option>*/}
                {/*<option value={14}>Entertainment: Television</option>*/}
                {/*<option value={15}>Entertainment: Video Games</option>*/}
                {/*<option value={16}>Entertainment: Board Games</option>*/}
                {console.log('FINISH FORM')}
        </select>
    )
}

export default Example;