import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('home-page')
export class HomePage extends LitElement {

  render() {
    return html`
		<div>
			
		</div>
    `
  }

  static styles = css`
		
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage
  }
}
