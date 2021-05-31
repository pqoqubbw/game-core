class Event {
  listeners: [];

  constructor() {
    this.listeners = [];
  }

  addListener(listener: any): void {
    this.listeners.push(listener);
  }

  trigger(params: any): void {
    this.listeners.forEach((listener) => listener(params));
  }

  triggerTwo(param1: any, param2: any): void {
    this.listeners.forEach((listener) => listener(param1, param2));
  }
}

export default Event;
