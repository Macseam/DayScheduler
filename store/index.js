import { createStore } from 'redux'
import { schedules } from './reducers'

export const store = createStore(schedules)

store.subscribe(() => console.log('pinged'))