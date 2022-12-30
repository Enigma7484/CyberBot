const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu."),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Option #1`,
          value: `https://github.com/Enigma7484`,
        }),
        new SelectMenuOptionBuilder({
          label: `Option #2`,
          value: `https://www.linkedin.com/in/omar-shamsul-haque`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)]
    });
  },
};
