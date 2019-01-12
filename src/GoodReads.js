import React, { Component } from 'react';

class GoodReads extends Component {

    createBookView = (book) => {
        console.log(book);
        return <div className="bookCard"  key={book.id._text}>
            <div> {book.best_book.title._text} </div>
            <img src={book.best_book.image_url._text}/>
         </div>
    };

    render() {
        let booksView = this.props.books.map(book => this.createBookView(book));

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
                <div className="bookList">
                    {booksView}
                </div>
            </div>
        );
    }
}

export default GoodReads;
