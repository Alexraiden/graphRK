import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import './App.css'
import environment from './Environment'

class App extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            characters(page: 2, filter: { name: "rick" }) {
              info {
                count
              }
              results {
                name
              }
            }
            character(id: 1) {
              id
            }
          }
          `}
        variables={{
          pageId: '1'
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return <div>User ID: {props}</div>
        }}
      />
    )
  }
}

export default App