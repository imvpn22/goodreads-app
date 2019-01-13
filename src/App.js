import React, { Component } from 'react';
import GoodReads from './GoodReads';

const convert = require('xml-js');

const USER_KEY = `tmNs0wHYZNwx5cr20pTg`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            queryText: '',
            isSearching: false,
            currentPage: 1,
            totalRecords: 0,
            totalPages: 0,
            pageNeighbours: 2,
            msg: ''
        }
    }

    componentDidMount() {

    }

    handleQuery = e => {
        let queryText = e.target.value;
        this.setState({queryText});
        // this.searchBook(queryText);
    };

    searchBook = () => {
        let queryText = this.state.queryText;
        let currentPage = this.state.currentPage;
        let APIProxy = `https://cors-anywhere.herokuapp.com/`;
        let url = `${APIProxy}https://www.goodreads.com/search.xml?key=${USER_KEY}&q=${queryText}&page=${currentPage}`;

        fetch(url, {
                method: 'GET',
                headers: {
                    "X-Requested-With" : "XMLHttpRequest"
                }
        }).then(res => res.text())
        .then(xml => {
            let res = convert.xml2json(xml, {
                  compact: true,
                  spaces: 0,
                  trim: true,
                  nativeType: true
                });

            res = JSON.parse(res);

            let books = res.GoodreadsResponse.search.results.work;
            let totalRecords = parseInt(res.GoodreadsResponse.search['total-results']._text);
            let queryTime = res.GoodreadsResponse.search['query-time-seconds']._text;
            let msg = `Fetched ${totalRecords} results in ${queryTime} sec.`;
            let totalPages = Math.ceil(totalRecords / 20);

            this.setState({
                books: books,
                isSearching: false,
                msg: msg,
                totalRecords: totalRecords,
                totalPages: totalPages
            });
        }).catch(err => {
            console.log(err);
            this.setState({ isSearching: false, msg: 'Some error occured'});
        })
    };


    handleSubmit = e => {
        e.preventDefault();
        this.searchBook();
        this.setState({isSearching: true});
    };

    onPageChanged = currentPage => {
        this.setState({
            currentPage: currentPage,
            isSearching: true
        }, () => this.searchBook());
    }

    render() {
        return (
            <div className="container-fluid">
                <GoodReads
                    queryText={this.state.queryText}
                    books={this.state.books}
                    handleQuery={this.handleQuery}
                    searchBook={this.searchBook}
                    handleSubmit={this.handleSubmit}
                    isSearching={this.state.isSearching}
                    msg={this.state.msg}
                    currentPage={this.state.currentPage}
                    totalPages={this.state.totalPages}
                    totalRecords={this.state.totalRecords}
                    onPageChanged={this.onPageChanged}
                    pageNeighbours={this.state.pageNeighbours}
                />
            </div>
        );
    }
}

export default App;
