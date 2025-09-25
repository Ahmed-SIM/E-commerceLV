import { schema } from "./register.schema";
import * as zod from 'zod';



// zod give as a type depending on our schema
export type RegisterFormType =zod.infer<typeof schema>