import { z } from 'zod';

export const songSchema = z.object({
    songName: z.string({
        required_error: "Song name is required",
        invalid_type_error: "Song name must be a string",
    }),
    artistName: z.string({
        required_error: "Artist name is required",
        invalid_type_error: "Artist name must be a string",
    }),
    songGenre: z.string({
        required_error: "Song genre is required",
        invalid_type_error: "Song genre must be a string",
    })
})