export function Reducers(list , action) {
    switch (action.type) {
        case 'ADD':
            return [...list , {
                state: action.item.state,
                id: 0
            }]
        break;
        case 'DELETE':
            return list.filter(i => action.id !== i.id)

        break;    
        
        
        default:
            return list
        break;
    }
}
