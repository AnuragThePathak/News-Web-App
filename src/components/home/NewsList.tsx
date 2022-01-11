import { useEffect, useState } from "react"
import { getData } from "../../api/HttpClient"
import NewsItem from "./NewsItem"
import { News } from "./NewsItem"

export default function NewsList({ category, country }: 
  { category: string, country: string }) {
  const URL
    = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`


  const [newsArray, setNewsArray] = useState([] as News[])

  useEffect(() => {
    getData(URL).then((data) => {
      setNewsArray(data.articles)
    })
  }, [URL])

  return (
    <div className="container my-4">
      <h2>News</h2>

      <div className="row">
        {newsArray.map((news
        ) => {
          return (

            <div className="col-md-4" key={news.url}>
              <NewsItem news={news} />
            </div>
          )
        })}
      </div>
    </div>
  )
}