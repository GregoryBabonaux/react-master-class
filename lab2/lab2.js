var Todo = React.createClass({
	getInitialState : function() {
		return {
			todos : [
				{
					text: "Manger des nouilles",
					id: 1
				},
				{
					text: "Boire de l'eau",
					id: 2
				},
				{
					text: "Courir tout nu avec une Polar RS300x",
					key: 3
				}
			]
		}
	},

	submit: function(event){
		event.preventDefault();
		var new_item = this.refs.new_todo_item.value;

		this.refs.new_todo_item.value = '';

		// Need to update main state with new item
		var todos = this.state.todos;

		todos.push({
			text : new_item, 
			id: todos.length + 1
		});

		this.setState(todos);
	},


	render: function(){
		return (
			<div>
				<TodoItems todos={this.state.todos}></TodoItems>
				<hr />

				<form onSubmit={this.submit}>
					<div className="form-group">
						<input type="text" name="" className="form-control" ref="new_todo_item" />
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary">Ajouter</button>
					</div>
				</form>

			</div>
		)
	}
});

var TodoItems = React.createClass({
	render: function(){

		var items = this.props.todos.map(function(todo){
			return (
				<li key={todo.id}>{todo.text}</li>
			)
		}, this);
		return (
			<div>
				{items}
			</div>
		)
	}
});

ReactDOM.render(
	<Todo />,
	document.getElementById('container')
)