import React, { Component } from 'react';
import Pagination from './Pagination';

class GoodReads extends Component {

    createBookView = (book) => {
        return <div className="bookCard"  key={book.id._text}>
            <img className="bookImg"
                src={book.best_book.image_url._text}
                alt={book.best_book.title._text + " image"}/>
            <div className="bookTitle"> {book.best_book.title._text} </div>
            <div className="bookAuthor"> {book.best_book.author.name._text} </div>
            <div className="bookRating">
                <i className="fa fa-star"></i>
                {book.average_rating._text}
            </div>
            <div className="bookOther">
                Based on {book.ratings_count._text} Ratings
                and {book.text_reviews_count._text} Reviews
            </div>
         </div>;
    };

    render() {
        let booksView = 'No Books';
        if (this.props.books && this.props.books.length > 0) {
            booksView = this.props.books.map(book => this.createBookView(book));
        }

        return (
            <div className="main">
                <div className="header">Goodreads Book Search</div>
                <form className="searchForm" onSubmit={e => this.props.handleSubmit(e)}>
                    <div className="searchBox">
                        <input type="text"
                            placeholder="Book name, author"
                            value={this.props.queryText}
                            onChange={e => this.props.handleQuery(e)}
                            required={true}
                            autoFocus={true}/>
                        <button type="submit" value="Search">
                            <i className={(this.props.isSearching ? "fas fa-circle-notch fa-spin" : "fas fa-search")}></i>
                        </button>
                    </div>
                    <div className="responseBox">
                        {this.props.msg}
                    </div>
                    <Pagination
                        currentPage={this.props.currentPage}
                        totalRecords={this.props.totalRecords}
                        totalPages={this.props.totalPages}
                        onPageChanged={this.props.onPageChanged}
                        pageNeighbours={this.props.pageNeighbours}
                    />
                </form>

                <div className="bookList">
                    {booksView}
                </div>

            </div>
        );
    }
}

export default GoodReads;
