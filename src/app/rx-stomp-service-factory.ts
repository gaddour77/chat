import { RxStompService } from './rx-stomp.service';
import { myRxStompConfig } from './rx.config';

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}