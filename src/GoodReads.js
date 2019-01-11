import React, { Component } from 'react';

class GoodReads extends Component {
  render() {
    return (
        <div>
            <h1>Goodreads Book Search</h1>
            <form>
                <input type="text"
                value={this.props.queryText}
                onChange={e => this.props.handleQuery(e)}
                autoFocus={true}/>
                <input type="submit"/>
            </form>
        </div>
        );
    }
}

export default GoodReads;
