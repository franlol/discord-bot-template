import { Client, Message, Constants } from 'discord.js';

const { Events: { MESSAGE_CREATE } } = Constants;

export default (client: Client) => {
  client.on(MESSAGE_CREATE, (message: Message) => {
    if (message.author === client.user) return;

    // TODO
  });
}
