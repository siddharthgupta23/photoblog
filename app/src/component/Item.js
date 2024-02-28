import React from 'react'

export default function Item(props) {
  let { description, imageUrl, Url, } = props
  // let { description, imageUrl, Url,user_po,user_name } = props


  return (








    <div className="card" style={{ "borderRadius": "17px" }}  >
      <img style={{ "height": "300px" }} src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <h5 className="card-title">{title}</h5> */}
        <p className="card-text">{description}</p>
        <a href={Url} className="btn btn-dark">Full View</a>

      </div>
    </div>


  )
}
