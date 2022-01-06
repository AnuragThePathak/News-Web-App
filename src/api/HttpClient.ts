export const GetData = (url: string) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`)
    }

    return response.json()
  }).catch((e: Error) => {
    console.error(e)
  })
}