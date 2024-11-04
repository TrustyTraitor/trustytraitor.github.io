import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js';

import {Repo} from '../../Types/types.ts';

@customElement('project-panel')
export class ProjectPanel extends LitElement {

	@property({type: Object})
	repo: Repo = { name: '', language: '', description: '', html_url: '', homepage: '' };

  render() {
    return html`
		<div id="panel">
			<h3>${this.repo.name}</h3>
			<h5>${this.repo.language}</h5>
			<a class="left" href="${this.repo.html_url}">Check out the Repo</a>
			${ 
				(this.repo.homepage !== '' && this.repo.homepage !== null) ?
				html`<a class="right" href=${ifDefined(this.repo.homepage)}>Visit the Website</a>` :
				html`<p class="right"></p>`
			}
			${ 
				(this.repo.description !== '') ?
					html`<p>${this.repo.description}</p>` :
					html`<p></p>`
			}

		</div>
    `
  }

  static styles = css`
    #panel {
			width: 20vw;
			height: 33vh;
			border: 2px solid black;
			border-radius: 4px;

			margin: 1em;
			padding: 1em;
		}

		/* a {
			width: 50%;
		} */

		.left {
			align-self:left;
		}

		.right {
			align-self:right;
		}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'project-panel': ProjectPanel
  }
}
