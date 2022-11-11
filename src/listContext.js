import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    let { lists } = state;

    switch (action.type) {
        case "DELETE_ITEM":
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            };

        case "ADD_ITEM":
            return {
                ...state,
                lists: [action.payload, ...state.lists]
            };

        case "CHECK_ITEM":

            let newLists = [];

            for (let i = 0; i < lists.length; i++) {
                const list = lists[i];
                if (list.id === action.payload) {
                    list.checked = true;
                }
                newLists.push(list);
            }

            return {
                lists: newLists
            };

        case "CLEAR_ALL":
            // let unCheckedLists = [];

            // for (let i = 0; i < lists.length; i++) {
            //     const list = lists[i];
            //     if (!list.checked) {
            //         unCheckedLists.push(list);
            //     }
            // }

            // return {
            //     lists: unCheckedLists
            // };
            alert("Working");
            break;
    
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