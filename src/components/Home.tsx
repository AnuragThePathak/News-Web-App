import NewsList from "./NewsList"

export default function Home({ country }: { country: string }) {  
  return (
    <div>
      <NewsList country={country} />
    </div>
  )
}
