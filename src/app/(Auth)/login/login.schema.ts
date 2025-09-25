import * as zod from 'zod';



export const loginSchema=zod.object({
email:zod.email().nonempty(),
password:zod.string().nonempty().min(6,'minimum is 6')



})