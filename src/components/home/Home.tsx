import NewsList from "./NewsList"

export default function Home({ category, country }: 
  { category: string, country: string }) {
     
  return (
    <div>
      <NewsList country={country} category={category}/>
    </div>
  )
}
