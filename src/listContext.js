import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            }
    
        default:
            return state;
    }
}

export class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [
                {
                    id: 1,
                    title: "Pray",
                    details: "Go before the throne of grace and obtain mercy.",
                    time: new Date(),
                    checked: false
                },
                {
                    id: 2,
                    title: "Bath",
                    details: "Cleanliness is next to godliness.",
                    time: new Date(),
                    checked: false
                },
                {
                    id: 3,
                    title: "Prepare",
                    details: "Probably wear cloth, comb my hair, eat, an so on...",
                    time: new Date(),
                    checked: false
                }
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;