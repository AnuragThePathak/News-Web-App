import { Card } from "react-bootstrap"

export default function NewsItem(
  { title, description: desc, url: newsUrl, urlToImage: imageUrl }: NewsEntity) {

  return (
    <a href={newsUrl} about="_blank" rel="noopener noreferrer">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export type NewsEntity = {
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string
}