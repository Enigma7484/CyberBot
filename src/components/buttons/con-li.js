module.exports = {
    data: {
        name: `con-li`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://www.linkedin.com/in/omar-shamsul-haque/`
        });
    }
}