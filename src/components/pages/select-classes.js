import { html } from 'lit-element';
import { Page } from '../page';
import { blocks } from '../shared';

export class SelectClasses extends Page {

  static get properties () {
    return {
      classes: { type: Object }
    }
  }

  render () {
    return html`
      <style>
        ${this.pageStyles}
        p[slot=title] {
          margin-top: 0px;
          margin-bottom: 0px;
        }
      </style>
      <page-header title="Select Classes" .tabs=${this.tabs}></page-header>
      <main class="tab scrollable">
        ${blocks.map(block =>  {
          return html`
            <graviton-panel>
              <p slot="title">${block}</p>
              <form slot="body" id="block-${block.replace(/\./, '-')}">
                ${this.classes[block].map(className => {
                  return html`
                    <input type="radio" name=${block} value="${className}" id=${className.replace(/ /g, '-')}><label for=${className.replace(/ /g, '-')}>${className}</label>
                  `;
                })}
                <graviton-button>Other Class</graviton-button>
              </form>
            </graviton-panel>
          `;
        })}
        <graviton-button filled>Begin</graviton-button>
      </main>
    `;
  }

}

customElements.define('select-classes-page', SelectClasses);