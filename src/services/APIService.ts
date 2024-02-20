import { IItem } from '@/models/item';
import { ICount } from '@/models/count';
import { IPoll } from '@/models/poll';

export class APIService {
  public addPoll = (poll: IPoll): Promise<Response> =>
    fetch(`/api/poll/${poll.pollName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poll)
    });
}
