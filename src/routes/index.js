import { router as TodoRouter } from './todo/todo.route.js';
import { TODO } from '../constants/api.constants.js'

export const Routes = [
    { path: TODO, router: TodoRouter },
]