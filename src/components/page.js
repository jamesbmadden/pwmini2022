import { LitElement, customElement } from 'lit-element';
import { HeaderComponent, TabContainer, TabComponent, TabView } from './tabs';
import { BottomAppBar } from './bottom-app-bar';
import { red } from './shared';

export class Page extends LitElement {
  get tabs() {
    return [];
  }
  get pageStyles() {
    return `
      main.tab {
        margin-top: ${this.tabs.length > 0 ? 7 : 3.5}rem;
      }
      main {
        margin: 8px;
        width: 100%;
        box-sizing: border-box;
      }
      .fab {
        position: fixed !important;
        width: 3.5rem;
        height: 3.5rem;
        background: ${red};
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 1.75rem;
        right: 1rem;
        border-radius: 50%;
        z-index: 2;
        color: white;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        overflow: hidden;
      }
      .fab[disabled] {
        background:#e3e3e3;
        color: black;
        box-shadow: none;
        cursor: default;
      }
      @media(min-width: 1024px) {
        .fab {
          right: 1.25rem;
        }
      }
      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
      }
    `;
  }
}