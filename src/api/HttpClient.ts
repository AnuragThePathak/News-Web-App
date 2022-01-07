export async function getData(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`)
    }

    return await response.json()
  } catch (e) {
    console.error(e)
  }
}