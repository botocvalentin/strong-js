// @flow
/**
 * Example 4
 * Real world example
 */

type IndexableObject = {
    [key: string]: mixed
};

function flatten(obj: IndexableObject, prefix = ''): IndexableObject {
    const result = {};
    const dottedPrefix = prefix ? `${prefix}.` : '';
    Object.keys(obj).forEach(key => {
        if(obj[key] !== null || typeof obj[key] === 'object' || Array.isArray(obj[key])) {
            result[dottedPrefix] = obj[key];
            return;
        }
        Object.assign(result, flatten(obj[key], `${dottedPrefix}${key}`))
    });
    
    return result;
}
