import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


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

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,
            totalArticles: 0
        }
        
    }

    async updateNews(pageNo){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153a931175984623b8129e79f0d198ad&page=${pageNo}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: pageNo,
            articles: parsedData.articles,
            loading: false,
            totalArticles:parsedData.totalResults
        })
        document.title = `NewsMonkey - ${this.props.category} Top headlines`
    }

    async componentDidMount(){
        this.updateNews(1)
    }

    handlePrevClick = async ()=>{
        // this.setState({loading:true})
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153a931175984623b8129e79f0d198ad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page-1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        console.log("Page",this.state.page)
        this.updateNews(this.state.page - 1)
    }

    handleNextClick = async()=>{
        // console.log("Next")
        // this.setState({loading:true})
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153a931175984623b8129e79f0d198ad&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page+1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        console.log("Page",this.state.page)
        this.updateNews(this.state.page+1)
        console.log("PageNow",this.state.page)
    }
    

    render() {
        return (
            <div className=" container my-3">
                <h4 className="center-align">NewsMonkey Top Headlines</h4>
                {this.state.loading &&<Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((ele)=>{
                            return <div key={ele.url} className="col m4">
                                        <NewsItem  title={ele.title !=null?ele.title:""} description={ele.description != null ? ele.description.slice(0,100): ""} 
                                        urlToImage={ele.urlToImage!=null?ele.urlToImage:"../../public/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} 
                                        newsUrl={ele.url} author={ele.author?ele.author:"Unknown"}
                                        timeNews={ele.publishedAt} source={ele.source}/>
                                    </div>
                        })}
                    </div>
                
                  <div className="row">
                    <a disabled={this.state.page<=1}  onClick={this.handlePrevClick} className="btn-small col s1">Prev</a>
                    <a disabled={this.state.page >= (Math.ceil(this.state.totalArticles/this.props.pageSize))} onClick={this.handleNextClick} className="btn-small col s1 offset-s9">Next</a>
                </div>
            </div>  
        )
    }
}

export default News


