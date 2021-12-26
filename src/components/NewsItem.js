import React, { Component } from 'react'


export class NewsItem extends Component {
    
    render() {
        let { title, description,urlToImage,newsUrl ,author,timeNews,source} = this.props
        let dateOfNews = new Date(timeNews);
        dateOfNews = dateOfNews.toGMTString()

        return (
            <div className="row">
                <div className="col">
                    <div className="card"  style={{width: '250px',height:'400px'}}>
                    
                        <div className="card-image" >
                        <img src={urlToImage} alt=""/>
                            <span className="badge small" style={{backgroundColor:"red",color:'white',position:'absolute',top:'0px',right:'0px'}}>{source.name}</span> 
                        </div>
                        <div className="card-content">
                            <p className ="card-title" style={{fontSize:'15px',lineHeight:'normal'}}>{title}</p>
                            <p style={{fontSize:"13px"}}>{description}...<a href={newsUrl} target="_blank" >Read More</a></p>
                            
                            <span style={{fontSize:'11px',color:'gray',lineHeight:'normal'}}>On {dateOfNews} by {author}</span>
                        </div>
                        
                    </div>
                        
                        
                    
                </div>
            </div>
        )
    }
}

export default NewsItem
