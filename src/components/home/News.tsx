import { useState } from "react"
import { getData } from "../../api/HttpClient"
import NewsItem from "./NewsItem"

export default function News() {
  const [news, setNews] = useState([])

  const BASE_URL = "https://saurav.tech/NewsAPI/"
  const url = BASE_URL +
    "top-headlines/category/general/in.json"

  getData(url).then((data: any) => {
    setNews(data.articles)
  })

  return (
    <div className="container my-4">
      <h2>News</h2>
      
      <div className="row">
        {news.map((item: any) => {
          return (

            <div className="col-md-4" key={item.url}>
              <NewsItem title={item.title} desc={item.description}
                newsUrl={item.url} imageUrl={item.urlToImage}
                time={item.publishedAt} />
            </div>
          )
        })}
      </div>
    </div>
  )
}