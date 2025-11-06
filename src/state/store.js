import { signal, computed } from '@lit-labs/signals'
import { html } from 'lit'
import { ListingService } from './listings.service.js';   

export class ListingsStore {
  #listingService

  constructor(listingService = new ListingService()) {
    this.#listingService = listingService;
  }

  // State signals
  totalListings = signal([])
  favoriteIds = signal([])
  searchTerm = signal('')
  homeSorting = signal({ field: '', order: 'asc' });
  favoritesSorting = signal({ field: '', order: 'asc' })
  currentPage = signal(0)
  pageSize = signal(3)

  //helpers
  filterByTerm = (items, term) => {
    const t = term.toLowerCase();
    return items.filter(
      (item) =>
        item.titulo.toLowerCase().includes(t) ||
        item.descripcion.toLowerCase().includes(t)
    );
  };

  sortListings = (list, sort) => {
    if (!sort.field) return list;
    const direction = sort.order === 'asc' ? 1 : -1;
    return [...list].sort((a, b) => (Number(a[sort.field]) - Number(b[sort.field])) * direction);
  };

  // home view computed
  homeView = computed(() => {
    const list = this.filteredListings.get();
    return this.sortListings(list, this.homeSorting.get());
  });

  filteredListings = computed(() => {
    const items = this.totalListings.get()
    const term = this.searchTerm.get().toLowerCase()
    return items.filter(
      item =>
        item.titulo.toLowerCase().includes(term) ||
        item.descripcion.toLowerCase().includes(term)
    )
  })

  // favorited view computed
  allFavorites = computed(() =>
      this.totalListings.get().filter(item => 
      this.favoriteIds.get().includes(item.link)
    )
  );

  filteredAllFavorites = computed(() =>
    this.filterByTerm(this.allFavorites.get(), this.searchTerm.get())
  );

  favoritedView = computed(() => {
    const list = this.filteredAllFavorites.get();
    return this.sortListings(list, this.favoritesSorting.get());
  });

  // Methods
  loadListings = async () => {
    const data = await this.#listingService.getListings()
    if (data.status === 'ok') {
      this.totalListings.set(Object.values(data.items))
    }
  }

  updateSearch = (searchTerm) => {
    this.searchTerm.set(searchTerm)
    this.currentPage.set(0)
  }

  toggleFavorite = (id) => {
    const isFav = this.favoriteIds.get().includes(id)
    this.favoriteIds.set(
      isFav
        ? this.favoriteIds.get().filter(fav => fav !== id)
        : [...this.favoriteIds.get(), id]
    )
  }

  setHomeSort = (field) => {
    const current = this.homeSorting.get();
    const order = current.field === field && current.order === 'asc' ? 'desc' : 'asc';
    this.homeSorting.set({ field, order });
  };

  setFavoritesSort = (field) => {
    const current = this.favoritesSorting.get();
    const order = current.field === field && current.order === 'asc' ? 'desc' : 'asc';
    this.favoritesSorting.set({ field, order });
  };

  resetFilters = () => {
    this.searchTerm.set('');
    this.homeSorting.set({ field: '', order: 'asc' });
    this.favoritesSorting.set({ field: '', order: 'asc' });
  };

  setPage = (index, size) => {
    this.currentPage.set(index)
    this.pageSize.set(size)
  }

  isFavorite = (id) => this.favoriteIds.get().includes(id)
}

const store = new ListingsStore(new ListingService());
export default store;