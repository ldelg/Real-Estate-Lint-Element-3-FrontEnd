import { LitElement, html } from 'lit'
import { SignalWatcher, watch, computed  } from '@lit-labs/signals'
import { property } from 'lit/decorators.js';
import store from './../state/store.js';
import styles from './favorited-view.css'
import './shared/listing-grid.js'

class FavoritedView extends SignalWatcher(LitElement)  {
  static styles = styles

  constructor() {
    super()
    this.store = store
  }

  //favoritedViewTemplate = computed(() => {
    //return this.store.filteredAllFavorites.get().length !== 0
      //? html`
          //<listing-grid
            //.items=${this.store.favoritedView.get()}
            //.isFavourite=${(id) => this.store.isFavorite(id)}
            //@on-favorite=${(e) => this.store.toggleFavorite(e.detail)}
          //></listing-grid>
       // `
      //: html`
         // <div class="empty-state">
           // <span class="material-icon">favorite_border</span>
            //<p>No favorites yet!</p>
            //<p>Add some listings to your favorites by clicking the heart icon.</p>
          //</div>
        //`;
  //})

  render() {
    const favorites = this.store.filteredAllFavorites.get();
    return favorites.length !== 0
      ? html`
          <listing-grid
            .items=${this.store.favoritedView.get()}
            .isFavourite=${(id) => this.store.isFavorite(id)}
            @on-favorite=${(e) => this.store.toggleFavorite(e.detail)}
          ></listing-grid>
        `
      : html`
          <div class="empty-state">
            <span class="material-icon">favorite_border</span>
            <p>No favorites yet!</p>
            <p>Add some listings to your favorites by clicking the heart icon.</p>
          </div>
        `;
  }
}

customElements.define('favorited-view', FavoritedView)