import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './project-panel.ts';


@customElement('featured-projects')
export class FeaturedProjects extends LitElement {

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
    'featured-projects': FeaturedProjects
  }
}
