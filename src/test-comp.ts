import { LitElement, html} from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('test-comp')
export class TestComp extends LitElement {

	render() {

		return html`<p>Hello World from my custom component!</p>`;
	}
}
