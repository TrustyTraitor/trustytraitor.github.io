import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('navbar-comp')
export class Navbar extends LitElement {

  render() {
    return html`
		<div>
			<a href="/">Home</a>
			<a href="/projects/">Projects</a>
		</div>
    `
  }

  static styles = css`
    
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'navbar-comp': Navbar
  }
}
