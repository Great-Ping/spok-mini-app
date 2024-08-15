import type { ITopic } from "./topic";

export class FakeTopicCollection implements IEnumerable<ITopic>{
    getEnumarator(): IEnumerator<ITopic> {
        return new ArrayEnumerator<ITopic>([], -1);
    }

}

