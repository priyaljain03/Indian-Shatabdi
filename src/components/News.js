import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 20,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0
        }

    }

    async updateNews(pageNo) {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(80)
        this.setState({
            page: pageNo,
            articles: parsedData.articles,
            loading: false,
            totalArticles: parsedData.totalResults
        })
        this.props.setProgress(100)
        // document.title = `NewsMonkey - ${this.props.category} Top headlines`
    }

    async componentDidMount() {

        this.updateNews(1)

    }

    
    fetchMoreData = async() => {
        this.setState({page:this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalArticles: parsedData.totalResults
        })
        // document.title = `NewsMonkey - ${this.props.category} Top headlines`
      };

    render() {
        return (
            <>
                <h4 className="center-align">NewsMonkey Top Headlines</h4>
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalArticles}
                    loader={<Spinner />}
                >
                    {this.state.loading &&<Spinner />}
                     <div className=" container my-3">
                    <div className="row">
                        {this.state.articles.map((ele) => {
                            return <div key={ele.url} className="col m4">
                                        <NewsItem title={ele.title != null ? ele.title : ""} description={ele.description != null ? ele.description.slice(0, 100) : ""}
                                            urlToImage={ele.urlToImage != null ? ele.urlToImage : "../../public/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"}
                                            newsUrl={ele.url} author={ele.author ? ele.author : "Unknown"}
                                            timeNews={ele.publishedAt} source={ele.source} />
                                    </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
           </>
        )
    }
}

export default News


