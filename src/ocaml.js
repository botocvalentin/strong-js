// @flow 
/**
 * Example 5
 * oCaml Comparison
 */
type Action = 
    | { type: 'create', entity: mixed }
    | { type: 'update', id: number }
    | { type: 'delete', id: number } 
;  

function handleAction(state: mixed, action: Action) {
    switch(action.type) {
        case 'create':
            console.log(action.entity);
        break;
        case 'update':
            console.log(action.id);
        break;
        default:
            (action: empty);
    }
}