# Very Cool Stuff

Take a look at this:

<DiscordMessages>
	<DiscordMessage profile="bot">
		<template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
				:ephemeral="true"
			>button</DiscordInteraction>
		</template>
		I think you should:
		<template #embeds>
			<DiscordEmbed
				border-color="#0099ff"
				embed-title="Some title"
				url="https://discord.js.org"
			>
				Some description here
			</DiscordEmbed>
		</template>
		<template #actions>
			<DiscordButtons>
				<DiscordButton>Click me!</DiscordButton>
			</DiscordButtons>
		</template>
	</DiscordMessage>
</DiscordMessages>