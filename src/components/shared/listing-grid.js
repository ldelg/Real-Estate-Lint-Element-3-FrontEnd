import { LitElement, html, unsafeCSS } from 'lit'
import { watch, SignalWatcher, computed } from '@lit-labs/signals'
import { property } from 'lit/decorators.js';
import styles from './listing-grid.css' with { type: 'css' };
import store from './../../state/store.js';

export class ListingGrid extends SignalWatcher(LitElement){
  static styles = [unsafeCSS(styles)];
  @property({ type: Array }) accessor items = [];
  @property({ type: Function }) accessor isFavourite = () => false;

  constructor() {
    super();
    this.store = store
  }

  favoriteIcon = (id) => computed(() => {
    const isFav = this.store.isFavorite(id);
    return html`<span class=${isFav ? 'red-heart material-icon' : 'material-icon'}>
      ${isFav ? 'favorite' : 'favorite_border'}
    </span>`;
  });

  render() {
    return html`
      <div class="listing-container">
        ${this.items.map(item => html`
          <div class="listing">
            <div class="card">
              <div 
                class="clickable" 
                @click=${() => this.openLink(item.link)}
                @keydown=${(e) => e.key === 'Enter' && this.openLink(item.link)}
                tabindex="0"
                role="button"
              >
                  <img 
                    src=${item.imagenUrl} 
                    alt=${item.titulo || 'Listing image'} 
                    loading="lazy" 
                  />
                <div class="info">
                  <h2>€${item.precio}</h2>
                  <p>${item.titulo}</p>
                  <small>${item.descripcion}</small>
                  <div class="small-details">
                    <span>${item.habitaciones} Beds</span>
                    <span>•</span>
                    <span>${item.size} m²</span>
                  </div>
                </div>
              </div>
              <button class="favorite" @click=${() => this.onFavorite(item.link)}>
                <span>${watch(this.favoriteIcon(item.link))}</span>   
              </button>
            </div>
          </div>
        `)}
      </div>
    `;
  }

  openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  onFavorite(id) {
    this.dispatchEvent(new CustomEvent('on-favorite', { detail: id }));
  }
}

customElements.define('listing-grid', ListingGrid);