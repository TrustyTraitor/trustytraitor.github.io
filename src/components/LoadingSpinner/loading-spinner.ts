import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('loading-spinner')
export class LoadingSpinner extends LitElement {

  render() {
    return html`
		<div>
			<p>Loading!</p>
		</div>
    `
  }

  static styles = css`
    div {
			width: 100%;
			height: 100%;
			padding: 0%;
			margin: 0%;
			display:flex;
			justify-content: center;
			align-items: center;
		}
		p {
			align-self: center;
		}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'loading-spinner': LoadingSpinner
  }
}
