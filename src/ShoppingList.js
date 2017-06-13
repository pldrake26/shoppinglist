import React, {Component} from 'react';

export default class GroceryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['Banana', 'Apple', 'Orange']
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
    }
    render() {
        return (
            <div>
                <h1 className="text-info">My Grocery List</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="grocery-item">Grocery Item</label>
                        <input type="text" className="form-control" id="data"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
                <br/>
                <div className="display text-left">
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
