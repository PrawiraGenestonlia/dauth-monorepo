import { z } from 'zod';
import { procedure, router } from '../trpc';
export const appRouter = router({
    hello: procedure
        .meta({ /* 👉 */ description: "This shows in the panel." })
        .input(
            z.object({
                text: z.string().describe("string input")
            }),
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input.text}`,
            };
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;