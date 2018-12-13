import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'

export default class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render () {
    return (
      <React.Fragment>
        <input
          className='input is-primary'
          type='text'
          value={this.state.query}
          onChange={this.search}
          placeholder='Sök på Fonder Direkt'
          autoFocus
        />
        <div className="search-results">
          {this.state.results.map(page => (
            <Link className="search-result" key={page.id} to={page.slug}>{page.title}</Link>
          ))}
        </div>
      </React.Fragment>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    })
  };
}