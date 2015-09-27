import {
	CORE_DIRECTIVES,
	bootstrap,
	Component,
	OnInit,
	View
} from "angular2/angular2";

import {
	HTTP_BINDINGS
} from "angular2/http";

@Component({
	selector: "app"
})
@View({
	templateUrl: "/app/app.html",
	styleUrls: ["/app/app.css"],
	directives: [
		CORE_DIRECTIVES
	]
})
class App implements OnInit {
	private _pokemons: Array<any>;
	private _hideCatched: boolean;

	constructor() {
		this._pokemons = [];
		this._hideCatched = false;
	}

	onInit() {
		for (var i = 1; i <= 720; i++) {
			var pokemon:any = {
				catched: false
			};

			if (i < 10) {
				pokemon.id = "00" + i;
			}
			else if (i < 100) {
				pokemon.id = "0" + i;
			}
			else {
				pokemon.id = "" + i;
			}

			pokemon.catched = !!localStorage.getItem("pokemon:" + pokemon.id + ":catched");

			this._pokemons.push(pokemon);
		}
	}

	toggleCatched(pokemon: any) {
		if (pokemon.catched) {
			localStorage.removeItem("pokemon:" + pokemon.id + ":catched");
		}
		else {
			localStorage.setItem("pokemon:" + pokemon.id + ":catched", "true");
		}
		pokemon.catched = !pokemon.catched;

	}
}

bootstrap(App);
