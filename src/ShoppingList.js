import React, {Component} from 'react';

export default class GroceryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            message: 'There are no grocery items on your list.'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const newItem = event.target.data.value;
        console.log(newItem);
        this.setState({
            listItems: [
                ...this.state.listItems,
                newItem
            ],
            message: ''
        });
        document.getElementById('data').value = '';
    }
    resetForm() {
        this.setState({
            listItems: [],
            message: 'Your grocery list has been reset.  Please add new items.'
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-info">My Grocery List</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="grocery-item">Add grocery item below:</label>
                        <input type="text" className="form-control" name="data" id="data" placeholder="Add item here..."/>
                    </div>
                    <input type="submit" className="btn btn-success" value="Add Item"/>
                </form>
                <hr/>
                <p className="text-danger">{this.state.message}</p>
                <div className="display">
                    {
                        this.state.listItems.map((item, index) => {
                            return <p style={{paddingLeft: 3 + '%'}} key={index}>{item}</p>
                        })
                    }
                </div>
                <hr/>
                {
                    this.state.listItems.length > 0 ? <button className="btn btn-danger pull-right" onClick={this.resetForm}>Reset form</button> : ''
                }
            </div>
        );
    }
}
