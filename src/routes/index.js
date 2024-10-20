import { router as TodoRouter } from './todo/todo.route.js';
import { API_CONSTANTS } from '../constants/api.constants.js'

export const Routes = [
    { path: API_CONSTANTS.TODO, router: TodoRouter },
]