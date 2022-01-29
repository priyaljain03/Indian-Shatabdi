import React, { useContext } from 'react'
import '../css/NewsItem.css'
import ThemeContext from '../context/ThemeContext'

const NewsItem = (props) => {
    const context = useContext(ThemeContext)
    const { switchState, switchTheme } = context;
    let { title, description, urlToImage, newsUrl, author, timeNews, source } = props
    let dateOfNews = new Date(timeNews);
    dateOfNews = dateOfNews.toGMTString()

    return (
        <div className="row">
            <div className="col">
                <div className="card" style={{ width: '100%', height: '450px', backgroundColor: switchState === 'dark' ? '#22252b' : 'white' }}>

                    <div className="card-image" >
                        <img src={urlToImage} alt="" />
                        <span className="badge small" style={{ backgroundColor: "red", color: 'white', position: 'absolute', top: '0px', right: '0px' }}>{source.name}</span>
                    </div>
                    <div className="card-content" style={{ color: switchState === 'dark' ? 'white' : 'black' }}>
                        <p className="card-title" style={{ fontSize: '15px', lineHeight: 'normal' }}>{title}</p>
                        <span className="card-footer" style={{ fontSize: '10px', color: 'gray', lineHeight: 'normal' }}>On {dateOfNews} by {author}</span>
                        <p className="card-description" style={{ fontSize: "13px" }}>{description}...<a href={newsUrl} target="_blank" >Read More</a></p>
                    </div>


                </div>



            </div>
        </div >
    )

}

export default NewsItem
