import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('main-comp')
export class MainComp extends LitElement {

  render() {
    return html`
		<div>
			<slot></slot>
		</div>
    `
  }

  static styles = css`
    
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'main-comp': MainComp
  }
}
