import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="preloader-wrapper active" style={{position:'absolute',top:'330px',left:'45%'}}>
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        )
    }
}

export default Spinner