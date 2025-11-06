import { LitElement, html } from 'lit'
import { SignalWatcher, watch } from '@lit-labs/signals'
import { property } from 'lit/decorators.js';
import './shared/listing-grid.js'
import store from './../state/store.js';

export class HomeView extends SignalWatcher(LitElement) {
@property({ type: Boolean }) accessor visible = false;

  constructor() {
    super()
    this.store = store
    store.loadListings();
  }

  render() {
    return html`
      <listing-grid
        .items=${watch(this.store.homeView)}
        .isFavourite=${(id) => this.store.isFavorite(id)}
        @on-favorite=${(e) => this.store.toggleFavorite(e.detail)}
      ></listing-grid>`
  }
}

customElements.define('home-view', HomeView)