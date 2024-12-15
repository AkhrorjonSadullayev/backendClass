import { router as TodoRouter } from './todo/todo.route.js';
import { router as UserRouter } from './user/user.route.js';
import { API_CONSTANTS } from '../constants/api.constants.js'

export const Routes = [
    { path: API_CONSTANTS.TODO, router: TodoRouter },
    { path: API_CONSTANTS.USER, router: UserRouter },
]