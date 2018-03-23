// @flow
/**
 * Example 2
 * Soundness/Completeness
 */

function log(message: string) {
    console.log(message);
}

function run(entity: { id: ?string}) {
    if (entity.id) {
        log(entity.id);
        log(entity.id);
    }
}