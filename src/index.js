class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Babel and React!</p>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById("example-babel"));
root.render(<HelloMessage />);