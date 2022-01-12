import { Card } from "react-bootstrap"

export default function NewsItem({ news }: { news: News }) {

  return (
    <a href={news.url} about="_blank" rel="noopener noreferrer">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news.urlToImage} />

        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export type News = {
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string
}

/* We could have extracted props with double destructuring as like this -

 { news: { title, description, url, urlToImage } }
     : { news: News }

  But we are not much benefitted.
*/