import { Card } from "react-bootstrap"

export default function NewsItem(
  { title, description, url, urlToImage }: News) {

  return (
    <a href={url} about="_blank" rel="noopener noreferrer">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlToImage} />
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
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