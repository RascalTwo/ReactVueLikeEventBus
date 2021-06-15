export class Bus{
	constructor(name){
		this.name = name;
		this.handlers = {}
	}

	listen(event, cb){
		this.handlers[event] = cb;
		return () => delete this.handlers[event];
	}

	emit(event, ...args){
		console.log(this.name, event, args);
		if (this.handlers[event]) this.handlers[event](...args);
	}
}

export const GLOBAL_BUS = new Bus('GlobalBus');