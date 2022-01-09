import { useEffect, useState } from "react"
import { getData } from "../../api/HttpClient"
import NewsItem from "./NewsItem"
import { News } from "./NewsItem"

export default function NewsList() {
  const [newsArray, setNewsArray] = useState([] as News[])

  const BASE_URL = "https://saurav.tech/NewsAPI/"
  const url = BASE_URL +
    "top-headlines/category/general/in.json"

  useEffect(() => {
    getData(url).then((data) => {
      setNewsArray(data.articles)
    })
  }, [])

  return (
    <div className="container my-4">
      <h2>News</h2>

      <div className="row">
        {newsArray.map(({ title, description, url, urlToImage, publishedAt }
        ) => {
          return (

            <div className="col-md-4" key={url}>
              <NewsItem title={title} description={description}
                url={url} urlToImage={urlToImage}
                publishedAt={publishedAt} />
            </div>
          )
        })}
      </div>
    </div>
  )
}