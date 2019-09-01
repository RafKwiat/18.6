// INITIALISATION

var Counter = React.createClass({
    
    getInitialState: function() {
        return {
        counter: 0
        };
    },
    
    // INCREMENTATION
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    // DECREMENTATION
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
//ACTUALISATION    
    
    
    render: function() {
        return React.createElement('div', {},
                React.createElement('span', {}, 'Licznik:  ' + this.state.counter + '  '),
                React.createElement('button', {onClick: this.increment}, ' Plus 1 '),
                React.createElement('button', {onClick: this.decrement}, ' Minus 1 ')
        );
    }
});

var element = React.createElement('div', {},
                React.createElement(Counter),
                    React.createElement(Counter)
    );

ReactDOM.render(element, document.getElementById('app'));