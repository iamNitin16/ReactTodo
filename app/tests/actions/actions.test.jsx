var expect = require('expect');
var actions = require('actions');

describe('Actions', ()=>{
	it('should generate search text action', () => {
		var action = {
			type : 'SET_SEARCH_TEXT',
			searchText : 'Some Search Text'
		};

		var res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action);
	});

	it('should gen1rate add todo action', () => {
		var action = {
			type : 'ADD_TODO',
			text : 'Thing to do'
		};

		var res = actions.addTodo(action.text);
		expect(res).toEqual(action);
	});

	it('should generate show completed action', () => {
		var action = {
			type : 'TOGGLE_SHOW_COMPLETED'
		};

		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});

	it('should generate toggle todo action', () => {
		var action = {
			type : 'TOGGLE_TODO',
			id : 11
		};

		var res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	});
});