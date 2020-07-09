import React from "react";
import axios from "axios";

function getQuestionData() {

}

function displayComponent() {

}

class Fetch extends React.Component {
    state = {
        contacts: [],
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(json => {
                            console.log(json);
                            this.setState({
                                contacts: json,
                            })
                        });
                }
            });
    }

    render() {
        return (
            <div>
                <Contacts contacts={this.state.contacts}/>
            </div>
        )
    }
}

class Api extends React.Component {
    state = {
        questions: [],
    };

    // componentDidMount() {
    //     fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple')
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ contacts: [data] })
    //         })
    //         .catch(console.log)
    // }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(json => {
                            console.log(json);
                            this.setState({
                                questions: [json],
                            })
                        });
                }
            });
    };


    render() {
        return (
            <div>
                {console.log(this.state.questions)}
                {/*<Contacts contacts={this.state.contacts}/>*/}
                {/*<QuestionCard version={this.state.contacts} />*/}
            </div>
        )
    }

    // const result = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple';
}

const Contacts = ({ contacts }) => {
    return (
        <div>
            <h1>Contact List</h1>
            {contacts.map((contact, index) => (
                <div key={`Create list-${index}`}>
                    <h5>{contact.name}</h5>
                    <h6>{contact.email}</h6>
                    <p>{contact.company.catchPhrase}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
};

class PersonList extends React.Component {
    state = {
        persons: [],
    };

    // http://jsonplaceholder.typicode.com/users
    // https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                this.setState({persons: res.data});
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(item => <li>{item.name}</li>)}
                {/*{this.state.persons.map(item => <li>{item.question}</li>)}*/}
            </ul>
        )
    }
}