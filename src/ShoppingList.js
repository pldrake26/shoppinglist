import React, {Component} from 'react';

export default class GroceryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            message: 'There are no items on your list.'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const newItem = document.getElementById('data').value;
        console.log(newItem);
        this.setState({
            listItems: [
                ...this.state.listItems,
                newItem
            ]
        });
        document.getElementById('data').value='';
    }
    render() {
        return (
            <div>
                <h1 className="text-info">My Grocery List</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="grocery-item">Add grocery item below:</label>
                        <input type="text" className="form-control" id="data" placeholder="Add item here..."/>
                    </div>
                    <input type="submit" value="Add Item"/>
                </form>
                <hr/>
                <div className="display">
                    {
                        this.state.listItems.map((item, index) => {
                            return <p style={{paddingLeft: 3 + '%'}} key={index}>{item}</p>
                        })
                    }
                </div>
            </div>
        );
    }
}
