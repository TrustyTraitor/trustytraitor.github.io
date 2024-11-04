import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './featured-projects.ts';
import './project-panel.ts'
import '../LoadingSpinner/loading-spinner.ts'


import axios from 'axios';
import { Repo } from '../../Types/types.ts';

@customElement('projects-page')
export class ProjectsPage extends LitElement {

	static properties = {
		repos: {type: Array, state: true}
	}
	repos = [];

	constructor() {
		super();

		this.GetRepos();
	}

	GetRepos() {
		axios.get('https://api.github.com/users/TrustyTraitor/repos')
		.then(
			(res) => {
				this.repos = res.data;
			},
			(err) => {
				console.log(err);
			}
		);
	}


  render() {
    return html`
		<div id="container">
			${this.repos.length === 0 ?
				html`<loading-spinner></loading-spinner>`
				:
				this.repos.map((repo: Repo) => {
					return html`<project-panel .repo=${repo}></project-panel>`
				})
			}
		</div>
    `
  }

  static styles = css`
    #container {
			width: 100%;
			height: 100%;
			margin: 0%;
			padding: 0%;

			display:flex;
			flex-wrap: wrap;

			position: relative;
		}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'projects-page': ProjectsPage
  }
}
