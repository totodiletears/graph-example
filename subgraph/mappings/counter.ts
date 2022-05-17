import { Update } from "../generated/schema";
import { CounterUpdated } from "../generated/Counter/Counter";

export function handleCounterUpdated(event: CounterUpdated) : void {
    // load event
    let update = Update.load(event.transaction.hash.toHex());

    // create first instance
    if (update === null) {
        update = new Update(event.transaction.hash.toHex());
    }

    update.block = event.block.number;
    update.from = event.params.user.toHex();
    update.count = event.params.count;

    update.save();
}