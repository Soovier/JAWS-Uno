<!-- MyComponent.svelte -->
<script lang="ts">
	import * as cards from "$lib/main";
	let game = new cards.Game();
	game.addPlayer("Stephen");
	game.addPlayer("Owen");
	game.start();
	console.log(game);
	game.play(game.turn, 0);
</script>

<body>
	<li class="boxplay center">
		<div class="play p1">1</div>
		<div class="play p2">2</div>
		<div class="play p3">3</div>
		<div class="play p4">4</div>
	</li>
	<!-- <img src={bluecard0} alt="" /> -->
</body>

<style>
	.boxplay {
		list-style: none;
		color: brown;
	}

	.center {
	}

	.play {
		width: 350px;
		height: 200px;
		background-color: rgb(255, 132, 0);
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2em;
		margin: 0 auto;
	}

	.p4 {
		margin-top: 10%;
		width: 1000px;
		height: 350px;
	}

	.p3 {
		margin-right: 90%;
		rotate: 90deg;
		width: 650px;
		margin-top: -100px;
	}
</style>
