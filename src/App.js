import React, { Component } from 'react';
import GoodReads from './GoodReads';

const convert = require('xml-js');

const USER_KEY = `tmNs0wHYZNwx5cr20pTg`;

const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<GoodreadsResponse>
    <Request>
        <authentication>true</authentication>
        <key>
            <![CDATA[tmNs0wHYZNwx5cr20pTg]]>
        </key>
        <method>
            <![CDATA[search_search]]>
        </method>
    </Request>
    <search>
        <query>
            <![CDATA[Ender's Game]]>
        </query>
        <results-start>1</results-start>
        <results-end>20</results-end>
        <total-results>641</total-results>
        <source>Goodreads</source>
        <query-time-seconds>0.13</query-time-seconds>
        <results>
            <work>
                <id type="integer">2422333</id>
                <books_count type="integer">238</books_count>
                <ratings_count type="integer">980416</ratings_count>
                <text_reviews_count type="integer">40516</text_reviews_count>
                <original_publication_year type="integer">1985</original_publication_year>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.30</average_rating>
                <best_book type="Book">
                    <id type="integer">375802</id>
                    <title>Ender's Game (Ender's Saga, #1)</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1408303130m/375802.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1408303130s/375802.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">55447683</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">24960</ratings_count>
                <text_reviews_count type="integer">1675</text_reviews_count>
                <original_publication_year type="integer">2017</original_publication_year>
                <original_publication_month type="integer">11</original_publication_month>
                <original_publication_day type="integer">14</original_publication_day>
                <average_rating>4.15</average_rating>
                <best_book type="Book">
                    <id type="integer">34368113</id>
                    <title>End Game (Will Robie, #5)</title>
                    <author>
                        <id type="integer">9291</id>
                        <name>David Baldacci</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1495976812m/34368113.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1495976812s/34368113.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">938064</id>
                <books_count type="integer">28</books_count>
                <ratings_count type="integer">79028</ratings_count>
                <text_reviews_count type="integer">776</text_reviews_count>
                <original_publication_year type="integer">1984</original_publication_year>
                <original_publication_month type="integer">12</original_publication_month>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.18</average_rating>
                <best_book type="Book">
                    <id type="integer">44687</id>
                    <title>Enchanters' End Game (The Belgariad, #5)</title>
                    <author>
                        <id type="integer">8732</id>
                        <name>David Eddings</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1217735909m/44687.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1217735909s/44687.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">42437887</id>
                <books_count type="integer">6</books_count>
                <ratings_count type="integer">5204</ratings_count>
                <text_reviews_count type="integer">630</text_reviews_count>
                <original_publication_year type="integer">2015</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">8</original_publication_day>
                <average_rating>4.10</average_rating>
                <best_book type="Book">
                    <id type="integer">22874150</id>
                    <title>The End Game</title>
                    <author>
                        <id type="integer">6876994</id>
                        <name>Kate  McCarthy</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1423089153m/22874150.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1423089153s/22874150.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">44223038</id>
                <books_count type="integer">19</books_count>
                <ratings_count type="integer">5369</ratings_count>
                <text_reviews_count type="integer">417</text_reviews_count>
                <original_publication_year type="integer">2015</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">15</original_publication_day>
                <average_rating>4.25</average_rating>
                <best_book type="Book">
                    <id type="integer">24611928</id>
                    <title>The End Game (A Brit in the FBI, #3)</title>
                    <author>
                        <id type="integer">1239</id>
                        <name>Catherine Coulter</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1425319746m/24611928.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1425319746s/24611928.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">11571577</id>
                <books_count type="integer">1</books_count>
                <ratings_count type="integer">1116</ratings_count>
                <text_reviews_count type="integer">46</text_reviews_count>
                <original_publication_year type="integer">2010</original_publication_year>
                <original_publication_month type="integer">4</original_publication_month>
                <original_publication_day type="integer">30</original_publication_day>
                <average_rating>4.14</average_rating>
                <best_book type="Book">
                    <id type="integer">8782597</id>
                    <title>Ender's Game</title>
                    <author>
                        <id type="integer">2940867</id>
                        <name>Frederic P.  Miller</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">6581562</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">33388</ratings_count>
                <text_reviews_count type="integer">222</text_reviews_count>
                <original_publication_year type="integer">2009</original_publication_year>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.38</average_rating>
                <best_book type="Book">
                    <id type="integer">6393082</id>
                    <title>Ender's Game, Volume 1: Battle School (Ender's Saga)</title>
                    <author>
                        <id type="integer">38491</id>
                        <name>Christopher Yost</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">12530</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">1832</ratings_count>
                <text_reviews_count type="integer">61</text_reviews_count>
                <original_publication_year type="integer">2002</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">16</original_publication_day>
                <average_rating>4.49</average_rating>
                <best_book type="Book">
                    <id type="integer">9735</id>
                    <title>Ender's Game Boxed Set: Ender's Game, Ender's Shadow, Shadow of the Hegemon</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">45665816</id>
                <books_count type="integer">14</books_count>
                <ratings_count type="integer">698</ratings_count>
                <text_reviews_count type="integer">51</text_reviews_count>
                <original_publication_year type="integer">2014</original_publication_year>
                <original_publication_month type="integer">11</original_publication_month>
                <original_publication_day type="integer">6</original_publication_day>
                <average_rating>3.90</average_rating>
                <best_book type="Book">
                    <id type="integer">25809834</id>
                    <title>The End Game (Templar, #5)</title>
                    <author>
                        <id type="integer">26011</id>
                        <name>Raymond Khoury</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1451140269m/25809834.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1451140269s/25809834.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">7272274</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">13150</ratings_count>
                <text_reviews_count type="integer">51</text_reviews_count>
                <original_publication_year type="integer">2010</original_publication_year>
                <original_publication_month type="integer">3</original_publication_month>
                <original_publication_day type="integer">24</original_publication_day>
                <average_rating>4.61</average_rating>
                <best_book type="Book">
                    <id type="integer">7025086</id>
                    <title>Ender's Game, Volume 2: Command School</title>
                    <author>
                        <id type="integer">38491</id>
                        <name>Christopher Yost</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">51609213</id>
                <books_count type="integer">7</books_count>
                <ratings_count type="integer">1030</ratings_count>
                <text_reviews_count type="integer">268</text_reviews_count>
                <original_publication_year type="integer">2018</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer">2</original_publication_day>
                <average_rating>4.24</average_rating>
                <best_book type="Book">
                    <id type="integer">30985221</id>
                    <title>End Game (Dirty Money, #4)</title>
                    <author>
                        <id type="integer">73977</id>
                        <name>Lisa Renee Jones</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1497740135m/30985221.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1497740135s/30985221.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">56238306</id>
                <books_count type="integer">4</books_count>
                <ratings_count type="integer">1242</ratings_count>
                <text_reviews_count type="integer">53</text_reviews_count>
                <original_publication_year type="integer" nil="true"/>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.31</average_rating>
                <best_book type="Book">
                    <id type="integer">34963329</id>
                    <title>End Game (Jack Noble #12)</title>
                    <author>
                        <id type="integer">6151659</id>
                        <name>L.T. Ryan</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">56991591</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">686</ratings_count>
                <text_reviews_count type="integer">46</text_reviews_count>
                <original_publication_year type="integer" nil="true"/>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.25</average_rating>
                <best_book type="Book">
                    <id type="integer">35563236</id>
                    <title>End Game (Langthorne #4)</title>
                    <author>
                        <id type="integer">6422267</id>
                        <name>Charlie Gallagher</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1500842571m/35563236.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1500842571s/35563236.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">53830455</id>
                <books_count type="integer">4</books_count>
                <ratings_count type="integer">1755</ratings_count>
                <text_reviews_count type="integer">131</text_reviews_count>
                <original_publication_year type="integer">2016</original_publication_year>
                <original_publication_month type="integer">11</original_publication_month>
                <original_publication_day type="integer">27</original_publication_day>
                <average_rating>4.42</average_rating>
                <best_book type="Book">
                    <id type="integer">33144572</id>
                    <title>End Game (Fallen Empire, #8)</title>
                    <author>
                        <id type="integer">4512224</id>
                        <name>Lindsay Buroker</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">61846440</id>
                <books_count type="integer">2</books_count>
                <ratings_count type="integer">847</ratings_count>
                <text_reviews_count type="integer">218</text_reviews_count>
                <original_publication_year type="integer" nil="true"/>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.45</average_rating>
                <best_book type="Book">
                    <id type="integer">39947220</id>
                    <title>End Game (Bellevue Bullies, #4)</title>
                    <author>
                        <id type="integer">5255580</id>
                        <name>Toni Aleo</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1526291653m/39947220.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1526291653s/39947220.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">66029652</id>
                <books_count type="integer">2</books_count>
                <ratings_count type="integer">588</ratings_count>
                <text_reviews_count type="integer">106</text_reviews_count>
                <original_publication_year type="integer" nil="true"/>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.03</average_rating>
                <best_book type="Book">
                    <id type="integer">42372731</id>
                    <title>The End Game: The Game Duet</title>
                    <author>
                        <id type="integer">15996299</id>
                        <name>Mickey Miller</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">17050695</id>
                <books_count type="integer">2</books_count>
                <ratings_count type="integer">572</ratings_count>
                <text_reviews_count type="integer">25</text_reviews_count>
                <original_publication_year type="integer">2010</original_publication_year>
                <original_publication_month type="integer">3</original_publication_month>
                <original_publication_day type="integer">10</original_publication_day>
                <average_rating>4.35</average_rating>
                <best_book type="Book">
                    <id type="integer">12082688</id>
                    <title>Ender's Game Ultimate Collection</title>
                    <author>
                        <id type="integer">38491</id>
                        <name>Christopher Yost</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1372911791m/12082688.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1372911791s/12082688.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">10523104</id>
                <books_count type="integer">4</books_count>
                <ratings_count type="integer">730</ratings_count>
                <text_reviews_count type="integer">28</text_reviews_count>
                <original_publication_year type="integer">2009</original_publication_year>
                <original_publication_month type="integer">12</original_publication_month>
                <original_publication_day type="integer">9</original_publication_day>
                <average_rating>3.96</average_rating>
                <best_book type="Book">
                    <id type="integer">7734468</id>
                    <title>Ender's Game: War of Gifts</title>
                    <author>
                        <id type="integer">236462</id>
                        <name>Jake Black</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">62571166</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">890</ratings_count>
                <text_reviews_count type="integer">132</text_reviews_count>
                <original_publication_year type="integer">2018</original_publication_year>
                <original_publication_month type="integer">8</original_publication_month>
                <original_publication_day type="integer">1</original_publication_day>
                <average_rating>4.09</average_rating>
                <best_book type="Book">
                    <id type="integer">40281801</id>
                    <title>End Game (Dawson Family, #2)</title>
                    <author>
                        <id type="integer">1635425</id>
                        <name>Emily Goodwin</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1533204256m/40281801.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1533204256s/40281801.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">40179821</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">1066</ratings_count>
                <text_reviews_count type="integer">151</text_reviews_count>
                <original_publication_year type="integer">2014</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer">30</original_publication_day>
                <average_rating>4.15</average_rating>
                <best_book type="Book">
                    <id type="integer">20829088</id>
                    <title>His End Game (MMG #1)</title>
                    <author>
                        <id type="integer">7857834</id>
                        <name>R.B. Hilliard</name>
                    </author>
                    <image_url>https://images.gr-assets.com/books/1393774525m/20829088.jpg</image_url>
                    <small_image_url>https://images.gr-assets.com/books/1393774525s/20829088.jpg</small_image_url>
                </best_book>
            </work>
        </results>
    </search>
</GoodreadsResponse>`;


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            queryText: '',
            isSearching: false,
            pageNo: 1,
            totalPage: 1,
            msg: ''
        }
    }

    componentDidMount() {
        let res = convert.xml2json(xmlData, {
          compact: true,
          spaces: 0,
          trim: true,
          nativeType: true
        });
        res = JSON.parse(res);
        let books = res.GoodreadsResponse.search.results.work;

        this.setState({books});
    }

    handleQuery = e => {
        let queryText = e.target.value;
        this.setState({queryText});
        // this.searchBook(queryText);
    };

    searchBook = () => {

        let queryText = this.state.queryText;
        let pageNo = this.state.pageNo;
        let url = `https://www.goodreads.com/search.xml?key=${USER_KEY}&q=${queryText}&page=${pageNo}`;

        fetch(url, {method: 'GET'})
        .then(res => res.text())
        .then(xml => {
            let res = convert.xml2json(xml, {
                  compact: true,
                  spaces: 0,
                  trim: true,
                  nativeType: true
                });

            res = JSON.parse(res);
            console.log(res);

            let books = res.GoodreadsResponse.search.results.work;
            let totalResults = res.GoodreadsResponse.search['total-results']._text;
            let queryTime = res.GoodreadsResponse.search['query-time-seconds']._text;
            let msg = `Fetched ${totalResults} results in ${queryTime} sec.`;

            let totalPage = parseInt(totalResults, 10) / 20;

            this.setState({books: books, isSearching: false, msg: msg, totalPage: totalPage});
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

    render() {
        return (
            <div className="container">
                <GoodReads
                    queryText={this.state.queryText}
                    books={this.state.books}
                    handleQuery={this.handleQuery}
                    searchBook={this.searchBook}
                    handleSubmit={this.handleSubmit}
                    isSearching={this.state.isSearching}
                    pageNo={this.state.pageNo}
                    totalPage={this.state.totalPage}
                    msg={this.state.msg}
                />
            </div>
        );
    }
}

export default App;
