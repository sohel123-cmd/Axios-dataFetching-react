import { React, useState } from "react";
import axios from "axios";
function FetchNews() {
  const [news, setNews] = useState([]);
  //    this getNews is used to fetch the data from api
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d7457bfcd3ca4a929694cc38cb323bfe"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row"></div>
        <button class="btn btn-primary" onClick={getNews}>
          Fetch news
        </button>
      </div>

      {/* for displaying the news using bootstrap */}
      <div className="container">
        <div className="row">
         {
            news.map((value)=>{
              return(
                <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                 
                   
                    <a href="#" class="btn btn-primary">Main</a>
                   
               
                    </div>
                  </div>
                </div>
              );
            })
         }
        </div>
      </div>
    </>
  );
}

export default FetchNews;
