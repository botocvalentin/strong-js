// @flow
/**
 * Example 4
 * Higher Order Functions
 */

function promisify<Input, Output>(
    fn: (a: Input) => Output 
): (a: Input) => Promise<Output>  {
    return a => Promise.resolve(fn(a));
}

function track<Input>(event: Input): Input {
    console.log(event);
    return event;
}

const promisifiedTack = promisify(track);

class Foo { bar() {}}

promisifiedTack(new Foo()).then(e => e.bar());