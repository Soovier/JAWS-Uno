<!-- MyComponent.svelte -->
<script lang="ts">
	import * as cards from "$lib/main";
	import cardBack from "$lib/cardBack (1).png";
	import cardsImgs from "$lib/files";
	import { fade } from "svelte/transition";
	let animate = false;

	let game = new cards.Game();
	game.addPlayer("Computer");
	game.addPlayer("Player 1");
	game.start();
	let counter = 0;

	while (true) {
		let startingCard: any = game.players[1].getCard(counter);
		if (counter >= 8) {
			break;
		}
		if (startingCard.number == -1) {
			counter++;
			continue;
		}
		break;
	}

	function AddCardToDeck(player: number) {
		let plr = game.players[player];
		plr.addCard(game.players[1].getCard(counter++));
		game = game;
	}

	function handleClick(player: number, index: number) {
		console.log(game);
		if (game.canPlay(player, index)) {
			game.play(player, index);
			console.log(game.players[player]);
			game = game;
		} else {
			console.log("Not     Valid Input For Uno");
		}
	}
</script>

<body class="disBox forplayer1">
	<!-- <div><img class="startCard" src={cardsImgs[4]} alt="startCard" /></div> -->
	<div class="backContain" style="width:100%; height:100% z-index: 0; ">
		{#each game.players[0].cards as card, i}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<a href="#" on:click={(event) => handleClick(0, i)}>
				<img
					style="width: {120 + i * 0.5}px; margin-bottom: 20px; order: 2 "
					class="cardImages"
					src={cardsImgs[card.cardString]}
					alt="Card image"
				/>
			</a>
		{/each}
	</div>

	<div
		class="backContain"
		style="width:100%; height:100% z-index: 10; margin-top: 200px "
	>
		{#each game.players[1].cards as card, i}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<a on:click={(event) => handleClick(1, i)} href="#">
				<img
					style="width: {125 + i * 0.5}px"
					class="cardImages"
					src={cardsImgs[card.cardString]}
					alt="Card image"
				/>
			</a>
		{/each}
	</div>

	<div class="container" style="display: flex; gap: 10em">
		<a
			on:click={(event) => {
				game.draw(game.turn);
				game = game;
			}}
			href="#"
		>
			<img class="backHand" src={cardBack} alt="DECK" />
		</a>
		<img
			style="width: 100px;"
			src={cardsImgs[game.lastCard.cardString]}
			alt=""
		/>
		<a class="unoButton" href="#" style="color: white; font-size: 30px;"
			>Uno Button</a
		>
	</div>
</body>

<style>
	body {
		overflow: hidden;
		width: 100%;
		padding: 0;
		margin: 0 auto;
		height: 100%;
		background-image: url("$lib/woodback.png");
		background-color: rgb(255, 221, 0);
	}

	.unoButton {
		text-decoration: none;
		width: 105px;
		height: 75px;
		background-color: rgb(95, 95, 201);
	}

	.disBox {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		gap: 35em;
	}

	.cardImages {
		transition: all 0.6s ease-in-out;
	}

	.cardImages:hover:not(.forplayer1) {
		transform: translateY(-25px);
		height: 190px;
	}

	.backContain {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		position: absolute;
		left: 650px;
		bottom: 500px;
	}

	.backHand {
		/* position: absolute; */
		width: 120px;
	}
</style>
