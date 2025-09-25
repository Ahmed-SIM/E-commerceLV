import * as zod from 'zod';
import { loginSchema } from './login.schema';



export type loginFormType=zod.infer<typeof loginSchema>