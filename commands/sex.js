const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("salut").setDescription("Replies"),
  async execute(interaction) {
    await interaction.reply("Sex?");
  },
};
