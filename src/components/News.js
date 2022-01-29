import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)


    const updateNews = async (pageNo) => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`
        setLoading({ loading: true })
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(80)
        setArticles(parsedData.articles)
        setLoading(false)
        setPage(pageNo)
        settotalArticles(parsedData.totalResults)
        props.setProgress(100)
    }



    useEffect(() => {
        updateNews(1)
    }, [])


    const fetchMoreData = async () => {
        setPage({ page: page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        settotalArticles(parsedData.totalResults)

    };


    return (
        <div style={{ marginTop: '100px' }}>


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                {loading && <Spinner />}
                <div className="my-3">
                    <div className="row" style={{ marginLeft: '70px', marginRight: '70px' }}>
                        {articles.map((ele) => {
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
        </div>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News