import React, { Component, Fragment } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
    let i = from;
    let range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};

class Pagination extends Component {

    /**
   * Let's say we have 10 pages and we set pageNeighbours to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
   fetchPageNumbers = () => {

        let totalPages = this.props.totalPages;
        let currentPage = this.props.currentPage;
        let pageNeighbours = this.props.pageNeighbours;

        /**
        * totalNumbers: the total page numbers to show on the control
        * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
        */
        let totalNumbers = (this.props.pageNeighbours * 2) + 3;
        let totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {

            let startPage = Math.max(2, currentPage - pageNeighbours);
            let endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages = range(startPage, endPage);

            /**
            * hasLeftSpill: has hidden pages to the left
            * hasRightSpill: has hidden pages to the right
            * spillOffset: number of hidden pages either to the left or to the right
            */
            let hasLeftSpill = startPage > 2;
            let hasRightSpill = (totalPages - endPage) > 1;
            let spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    let extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    let extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    };

    gotoPage = page => {
        let currentPage = Math.max(0, Math.min(page, this.props.totalPages));
        this.props.onPageChanged(currentPage);
    };

    handleClick = page => evt => {
        evt.preventDefault();
        this.gotoPage(page);
    };

    handleMoveLeft = evt => {
        evt.preventDefault();
        this.gotoPage(this.props.currentPage - (this.props.pageNeighbours * 2) - 1);
    };

    handleMoveRight = evt => {
        evt.preventDefault();
        this.gotoPage(this.props.currentPage + (this.props.pageNeighbours * 2) + 1);
    };


    render() {
        // console.log(this.props);
        if (!this.props.totalRecords || this.props.totalPages === 1) return null;

        let currentPage = this.props.currentPage;
        let pages = this.fetchPageNumbers();

        return (
            <Fragment>
                <nav aria-label="Pagination">
                  <ul className="pagination">
                    { pages.map((page, index) => {

                      if (page === LEFT_PAGE) return (
                        <li key={index} className="page-item">
                          <button className="page-link" aria-label="Previous" onClick={this.handleMoveLeft}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </button>
                        </li>
                      );

                      if (page === RIGHT_PAGE) return (
                        <li key={index} className="page-item">
                          <button className="page-link" aria-label="Next" onClick={this.handleMoveRight}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </button>
                        </li>
                      );

                      return (
                        <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                          <button className="page-link" onClick={ this.handleClick(page) }>{ page }</button>
                        </li>
                      );

                    }) }

                  </ul>
                </nav>
          </Fragment>
        );
    }
}

export default Pagination;
