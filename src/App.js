import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {charList: []}

  onInput = event => {
    this.setState({userText: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {userText} = this.state
    const words = userText
    const item = {words, id: uuidv4()}

    this.setState(prev => ({charList: [...prev.charList, item], userText: ''}))
  }

  render() {
    const {charList, userText} = this.state
    console.log(charList)
    const CharItem = props => {
      const {charItem} = props
      const {words, id} = charItem

      return (
        <li>
          <p id={id}>
            {words}: {words.length}
          </p>
        </li>
      )
    }
    return (
      <div className="bg-container">
        <div>
          <div className="first">
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div className="second">
            {charList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul>
                {charList.map(each => (
                  <CharItem key={each.id} charItem={each} />
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="third">
          <h1 className="heading">Character Counter</h1>
          <form className="row-container" onSubmit={this.onAdd}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onInput}
              value={userText}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
