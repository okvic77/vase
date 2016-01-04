export const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Inicio</h1>
        {this.props.children}
      </div>
    )
  }
})


export const About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
})


export const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    )
  }
})

export const NotFound = React.createClass({
  render() {
    return (
      <div>
        <h1>No encontrado</h1>
      </div>
    )
  }
})
