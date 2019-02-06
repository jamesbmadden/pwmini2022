import { html, customElement } from 'lit-element';
import { Page } from '../page';

export class MiniPage extends Page {
  static get properties () {
    return {
      mini: { type: Array }
    }
  }
  constructor () {
    super();
    this.mini = [];
  }
  get styles () {
    return `
      ${this.pageStyles}
    `;
  }
  getMonthName (month) {
    switch (month) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  }
  getWeekDay (day) {
    switch (day) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  }
  render () {
    return html`
      <style>
        ${this.styles}
      </style>
      <page-header title="Mini" .tabs=${this.tabs}></page-header>
      <main class="tab">
        ${this.mini.length > 0 ? html`${this.mini.map(event => {
          const parts = event.date.split('-');
          const date = new Date(parts[0], parts[1]-1, parts[2]);
          return html`<p>${event.title} on ${this.getWeekDay(date.getUTCDay())}, ${this.getMonthName(date.getUTCMonth())} ${date.getUTCDate()}</p>`;
        })}` : html`<p>Nothing Yet!</p>`}
      </main>
      <div class="fab" disabled>
        <i class="material-icons">add</i>
      </div>
    `;
  }
}

customElements.define('mini-page', MiniPage);