import { LitElement, PropertyValues, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { Router } from '@vaadin/router';

import './components/Projects/projects-page.ts';
import './components/HomePage/home-page.ts';
import './components/Navigation/navbar-comp.ts'

@customElement('main-comp')
export class MainComp extends LitElement {

	protected firstUpdated(_changedProperties: PropertyValues): void {
			super.firstUpdated(_changedProperties);

			const router = new Router(this.shadowRoot?.querySelector('#content'));
			router.setRoutes([
				{ path: '/', component: 'home-page' },
				{ path: '/projects/', component: 'projects-page' },
			]);
	}

  render() {
    return html`
		<div id="main">
			<navbar-comp></navbar-comp>
			<div id="content"></div>
		</div>
    `
  }

  static styles = css`
	div {
    width: 100%;
		height: 100%;
		margin: 0%;
		padding: 0%;
	}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'main-comp': MainComp
  }
}
