class MyComponent extends Component {
    doSomeAjaxThing() {
        // do something
    }





    componentDidMount() {
        $('#my-button').on('click', () => doSomeAjaxThing())
    }

    render() {
        return <button id="my-button">Do Something</button>
    }
} 