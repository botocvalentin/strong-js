// @flow
/**
 * Example 3
 * Liskov Substitution Principle
 */
class Entity {}
class Entry extends Entity {}
class LogEntry extends Entry {}

class Command {
    run(e: Entry): Entry {
        console.log(e);
        return e;
    }
}

class LogCommand extends Command {
    run(e: LogEntry): LogEntry {
        console.log(e);
        return e;
    }
}