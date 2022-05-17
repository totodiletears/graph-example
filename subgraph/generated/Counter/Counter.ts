// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CounterUpdated extends ethereum.Event {
  get params(): CounterUpdated__Params {
    return new CounterUpdated__Params(this);
  }
}

export class CounterUpdated__Params {
  _event: CounterUpdated;

  constructor(event: CounterUpdated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get count(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Counter extends ethereum.SmartContract {
  static bind(address: Address): Counter {
    return new Counter("Counter", address);
  }
}

export class UpdateCall extends ethereum.Call {
  get inputs(): UpdateCall__Inputs {
    return new UpdateCall__Inputs(this);
  }

  get outputs(): UpdateCall__Outputs {
    return new UpdateCall__Outputs(this);
  }
}

export class UpdateCall__Inputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}

export class UpdateCall__Outputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}
