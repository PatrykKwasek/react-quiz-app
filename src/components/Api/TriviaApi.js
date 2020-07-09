import React from "react";
// import QuestionCard from "../QuestionCard";

class FetchApi extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        hits: [],
    };

    componentDidMount() {
        const api = 'https://opentdb.com/api.php?';
        const {amount, category, difficulty} = this.props;
        const type = 'multiple';

        const option = ['east', 'medium', 'hard'];
        let index = Math.floor(Math.random() * 3);
        let chooseDifficulty = difficulty === 'Any Difficulty' ? option[index] : difficulty;

        fetch(api +
            'amount=' + amount +
            '&category=' + category +
            '&difficulty=' + chooseDifficulty +
            '&type=' + type
        )
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        hits: data.results,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    // render() {
    //     const { hits } = this.state;
    //
    //     return (
    //         <div>
    //             <QuestionCard version={hits} />
    //         </div>
    //     );
    // }

    render() {
        const { error, isLoaded, hits } = this.state;
        console.log(hits);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {hits.map((hit, index) =>
                        <li key={`Question list-${index}`}>
                            <p>{hit.question}</p>
                            <p><strong>{hit.correct_answer}</strong></p>
                        </li>
                    )}
                </ul>

                // <QuestionCard version={hits} />
            )
        }
    }
}

export default FetchApi;