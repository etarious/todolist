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
            let unCheckedLists = [];

            for (let i = 0; i < lists.length; i++) {
                const list = lists[i];
                if (!list.checked) {
                    unCheckedLists.push(list);
                }
            }

            return {
                lists: unCheckedLists
            };
            // alert("Working");
            // break;
    
        default:
            return state;
    }
}

export class Provider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [
                // {
                //     id: 1,
                //     title: "Pray",
                //     details: "Go before the throne of grace and obtain mercy.",
                //     time: new Date(),
                //     checked: false
                // },
                // {
                //     id: 2,
                //     title: "Bath",
                //     details: "Cleanliness is next to godliness.",
                //     time: new Date(),
                //     checked: false
                // },
                // {
                //     id: 3,
                //     title: "Prepare",
                //     details: "Probably wear cloth, comb my hair, eat, an so on...",
                //     time: new Date(),
                //     checked: false
                // }
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }
    }

    componentDidMount() {
        let lists = window.localStorage.getItem("lists");
        // console.log(lists);
        if (lists === null) {
            lists = [
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
            ]
            lists = JSON.stringify(lists);
            window.localStorage.setItem("lists", lists);
            // console.log(lists);
        } else {
            lists = JSON.parse(lists);
            this.setState({lists: lists});
            // console.log(lists);
            for (let i = 0; i < lists.length; i++) {
                let list = lists[i];
                list.time = new Date(list.time)
            }
            // console.log(lists);
        }
        
    }

    componentDidUpdate() {
        let lists = this.state.lists;
        lists = JSON.stringify(lists);
        window.localStorage.setItem("lists", lists);
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