import{a,e as n,i as m,s as l,x as o}from"./index-fVAjHoi0.js";import"./listing-grid-HJHOUzpE.js";const f=a`.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#fff;border:1px solid #eee;border-radius:1.25rem;box-shadow:0 6px 16px #0000000a;padding:5rem 2rem;margin:1rem auto;max-width:720px;min-height:320px}.empty-state .empty-heart{display:block;font-size:4rem;line-height:1;height:4rem;width:4rem;color:#ffeb00;margin-bottom:1.5rem}.empty-state .empty-heart path{fill:#ffeb00!important}.empty-state p{margin:.4rem 0;color:#555;line-height:1.5;font-size:1.05rem}.empty-state p:first-of-type{font-weight:600;font-size:1.3rem;color:#000;margin-bottom:.25rem}.empty-state p:last-of-type{color:#777;font-size:1rem}`;function p(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=d(e,"string");return typeof t=="symbol"?t:t+""}function d(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class s extends n(m){constructor(){super(),this.store=l}render(){return this.store.filteredAllFavorites.get().length!==0?o`
          <listing-grid
            .items=${this.store.favoritedView.get()}
            .isFavourite=${r=>this.store.isFavorite(r)}
            @on-favorite=${r=>this.store.toggleFavorite(r.detail)}
          ></listing-grid>
        `:o`
          <div class="empty-state">
            <span class="material-icon">favorite_border</span>
            <p>No favorites yet!</p>
            <p>Add some listings to your favorites by clicking the heart icon.</p>
          </div>
        `}}p(s,"styles",f);customElements.define("favorited-view",s);
