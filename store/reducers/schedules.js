import { store}  from '../../store'

const initialState = {
    pinged: false
}

export const pingStore = value => store.dispatch({type: 'PING', pinged: true})

export const schedules = (state = initialState, action) => {
    switch (action.type) {
        case 'PING': return { pinged: action.pinged }
    }
}