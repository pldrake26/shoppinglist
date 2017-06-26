import React, {Component} from 'react';

export default class GroceryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            message: 'There are no grocery items on your list.',
            button: <span className="glyphicon glyphicon-remove pull-right" onClick={this.deleteItem} aria-hidden="true"></span>
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const {listItems} = this.state;
        const newItem = event.target.data.value.toLowerCase();
        const duplicate = listItems.includes(newItem);
        if (duplicate) {
            this.setState({
                message: 'This item is already on your list.'
            })
        } else {
            this.setState({
                listItems: [
                    ...this.state.listItems,
                    newItem
                ],
                message: ''
            });
        }
        document.getElementById('data').value = '';
    }
    deleteItem() {
        console.log('Delete item button clicked!');
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
                        <input type="text" className="form-control" name="data" id="data" placeholder="Add item here..." required/>
                    </div>
                    <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add item</button>
                </form>
                <hr/>
                <p className="text-danger">{this.state.message}</p>
                <div className="display">
                    <ul>
                        {
                            this.state.listItems.map((item, index) => {
                                return <li key={index}>{item} {this.state.button}</li>
                            })
                        }
                    </ul>
                </div>
                <hr/>
                {
                    this.state.listItems.length > 0 ? <button type="button" className="btn btn-danger pull-right" onClick={this.resetForm}><span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Reset form</button> : ''
                }
            </div>
        );
    }
}
