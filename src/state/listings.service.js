export class ListingService {
  async getListings() {
    const response = await fetch('/mock-listings.json')
    return await response.json()
  }

  toggleFavorite(id, isFav) {
    // Simulate API call
    console.log('Favorite', id, isFav)
    return Promise.resolve()
  }
}   