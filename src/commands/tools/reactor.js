const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reactor")
    .setDescription("Returns reactions."),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: `React here!`,
      fetchReply: true,
    });

    const emoji1 = client.emojis.cache.find(
      (emoji) => emoji.id = "948363209247719495"
    );

    message.react(emoji1);
    message.react("");

    const filter = (reaction, user) => {
      return reaction.emoji.name == "" && user.id == interaction.user.id;
    };

    const collector = message.createReactionCollector({ filter, time: 15000 });

    collector.on("collect", (reaction, user) => {
      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on(`end`, (collected) => {
      console.log(`Collected ${collected.size} items`);
    });
  },
};