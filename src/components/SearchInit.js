import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import SearchBox from './SearchBox'


const SearchInit = () => (
    <StaticQuery
      query={graphql`
              query SearchIndexQuery {
                  siteSearchIndex {
                      index
                  }
              }
          `}
      render={data => (
        <React.Fragment>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
        </React.Fragment>
      )}
    />
  )
  
  export default SearchInit