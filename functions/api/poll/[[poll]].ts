import { D1Database } from '@cloudflare/workers-types/experimental';
import { IPoll } from '@/models/poll';

/**
 * Environment variables type definition.
 */
export interface Env {
  SimplePollSystem: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const poll = await context.request.json<IPoll>();

  if (!poll.pollName || !poll.pollItems || poll.pollItems.length === 0) {
    return new Response('Bad Request', { status: 400 });
  }

  await insertItems(context.env, poll, context.request.headers.get('CF-Connecting-IP') ?? '');
  return new Response('OK', { status: 200 });
};

const insertItems = (env: Env, poll: IPoll, ip: string): Promise<D1Result<never>[]> =>
  env.SimplePollSystem.batch(
    poll.pollItems.map<D1PreparedStatement>((item) =>
      env.SimplePollSystem.prepare(
        `INSERT INTO ${poll.pollName} (Key, Value, IP, Time) VALUES (?, ?, ?, ?)`
      ).bind(item[0], item[1], ip, new Date().toUTCString())
    )
  );
