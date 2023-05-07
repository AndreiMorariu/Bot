const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vorbeste")
    .setDescription("Replies according to the user"),
  async execute(interaction) {
    if (interaction.user.username === "AndreiZk")
      await interaction.reply("Da, maestre");
    else await interaction.reply("Nu raspund");
  },
};
