import { SignalWatcher, watch, computed } from '@lit-labs/signals'
import { LitElement, html } from 'lit'
import { Router } from '@vaadin/router'
import { routes } from './routes.js'
import styles from './app.css'
import store from './state/store.js';

class LitApp extends SignalWatcher(LitElement) {
  static styles = styles

  constructor() {
    super()
    this.store = store 
  }

  onSearchInput = (e) => this.store.updateSearch(e.target.value.toLowerCase())
  
  changeSorting = (field) => {
    const path = location.pathname;
    if (path === '/home') {
      this.store.setHomeSort(field);
    } else if (path === '/favorited') {
      this.store.setFavoritesSort(field);
    }
  };

  get isActive() {
    return (path) => location.pathname === path ? 'active' : ''
  }  

  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet')
    this.router = new Router(outlet).setRoutes(routes)

    window.addEventListener('vaadin-router-location-changed', () => {
      this.requestUpdate()
    })
  }

  sortingIndicatorFor = (field) => computed(() => {
    const path = location.pathname;
    const sort =
      path === '/home'
        ? this.store.homeSorting.get()
        : path === '/favorited'
          ? this.store.favoritesSorting.get()
          : { field: '', order: 'asc' };

    return sort.field === field ? (sort.order === 'asc' ? ' ↑' : ' ↓') : '';
  });

  resetButton = computed(() => {
    const path = location.pathname;
    const sort =
      path === '/home'
        ? this.store.homeSorting.get()
        : path === '/favorited'
          ? this.store.favoritesSorting.get()
          : { field: '', order: 'asc' };

    const searchTerm = this.store.searchTerm.get();

    const shouldShowReset = sort.field !== '' || searchTerm !== '';

    return shouldShowReset
      ? html`<button class="reset-button" @click=${this.store.resetFilters}>Reset</button>`
      : html``;
  });

  render() {
    return html`
      <div class="header">
        <div class="header-contaner">
          <h1>Where do you want to live?</h1>
          <div class="tabs">
            <a class="tab ${this.isActive('/home')}" href="/home">Home</a>
            <a class="tab ${this.isActive('/favorited')}" href="/favorited">Favorited</a>
          </div>
        </div>
      </div>
      <div class="body-wrapper">
        <div class="filter-container">
          <input class="search" type="text" placeholder="Filter results with keywords" .value=${watch(this.store.searchTerm)} @input=${this.onSearchInput} />
          <div class="filters">
            <div class="sorting">
              <button class="sorting-button" @click=${() => this.changeSorting('precio')}>
                Price <span>${watch(this.sortingIndicatorFor('precio'))}</span>
              </button>
              <button class="sorting-button" @click=${() => this.changeSorting('habitaciones')}>
                Beds & baths <span>${watch(this.sortingIndicatorFor('habitaciones'))}</span>
              </button>
              <button class="sorting-button" @click=${() => this.changeSorting('size')}>
                Home size <span>${watch(this.sortingIndicatorFor('size'))}</span>
              </button>
            </div>
            ${watch(this.resetButton)}
          </div>
        </div>
        <div id="outlet"></div>
      </div>
    `
  }
}

customElements.define('lit-app', LitApp)