import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../api/HttpClient"
import NewsItem, { News } from "./NewsItem"
import NoMatch from "./NoMatch"

export default function NewsList({ country }:
  { country: string }) {
  const { category } = useParams()
  const URL
    = `https://saurav.tech/NewsAPI/top-headlines/category/${category || "general"}/${country}.json`


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
        {newsArray ? newsArray.map((news
        ) => {
          return (

            <div className="col-md-4 col-sm-6" key={news.url}>
              <NewsItem news={news} />
            </div>
          )
        }) : <NoMatch message="The requested category doesn't exist." />}
      </div>
    </div>
  )
}