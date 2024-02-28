import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Item from './Item'
import axios from 'axios'
import InfiniteScrolleScroll from "react-infinite-scroll-component";
import Navbar from './Navbar'




export default function Home(props) {
  const {category,heading, Title} = props
  document.title = `Bk-PG Blog || ${Title}`
    
  const [Photos, setPhoto] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [totalResult, settotalResult] = useState(0)
  const [page, setPage] = useState(1)
  

  useEffect(() => {
    update();
  }, []);



  const update = () => {
    // e.preventDefault()
    // axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-06-18&sortBy=publishedAt&page=${page}&apiKey=525a4bc5be06478786849798e427aa32`)
    axios.get(`https://api.unsplash.com/search/photos/?page=${page}&query=${category}&client_id=gtesjZq9xjbidbroaDazoc6ixLg4Nb2_tJL2iNDstrI`)

      .then((val) => {
        console.log(val)
        setPhoto(val.data.results);
        settotalResult(val.data.total)
        // setLoading(true);
        // console.log(val)
        // setLoading(false);
      })
  }

  const fetchmoreData = () => {
    setPage(page + 1)
    axios.get(`https://api.unsplash.com/search/photos/?page=${page}&query=${category}&client_id=gtesjZq9xjbidbroaDazoc6ixLg4Nb2_tJL2iNDstrI`)


      .then((val) => {
        console.log(val)
        setPhoto(Photos.concat(val.data.results));
        settotalResult(val.data.total)
      }

      )
  }
  

  



  return (
    <>
    <Navbar/>
      <div className="container ">
        {/* {loading && <Spinner />} */}
        <InfiniteScrolleScroll
          dataLength={Photos.length}
          next={fetchmoreData}
          hasMore={Photos.length !== totalResult}
          loader={<Spinner />}
          style={{ "overflow": "hidden" }}
        >
        <h1 style={{ "display": "flex", "justifyContent": "center", "alignContent": "center", "marginTop": "40px", "marginLeft": '30px' }}><strong>Top {heading} Photos</strong></h1>
          <div className="container ">
            <div className="row" style={{ "margin": "1.5rem" }} >

              {Photos.map((value) => {
                return (
                  <div className="col-md-4" style={{"marginBottom":"30px" ,}} key={value.id}>

                    <Item description={value.alt_description} imageUrl={value.urls.regular} Url={value.links.download} />
                    {/* <Item description={value.alt_description} imageUrl={value.urls.full} Url={value.links.download}  user_po={value.user.profile_image.small} user_name={value.user.name}/> */}

                  </div>)
              }
              )}
            </div>
          </div>
        </InfiniteScrolleScroll>
      </div>
      </>
  )
}

