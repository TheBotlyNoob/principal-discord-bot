import { Client } from '@types';
import log from '@log';

export default async (client: Client) => {
  log.info(`Logged In As ${client.user.tag}!`);
  client.user.setActivity('Bart Simposon', { type: 'WATCHING' });
};
