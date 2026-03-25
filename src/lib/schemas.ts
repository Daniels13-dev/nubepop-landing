import { z } from "zod"

export const ProductSchema = z
    .object({
        id: z.union([z.string(), z.number()]),
        name: z.string().min(1),
        price: z.coerce.number().positive(),
        images: z.array(z.string().url()).min(1),
        stock: z.coerce.number().optional().default(0),
        category: z.string().optional(),
    })
    .passthrough() // Allow extra fields depending on sheet structure

export const ProductArraySchema = z.array(ProductSchema)

export type ValidatedProduct = z.infer<typeof ProductSchema>

/**
 * Validates raw data from Google Sheets and maps it to Product type
 */
export function validateProducts(data: any[]): ValidatedProduct[] {
    try {
        return ProductArraySchema.parse(data)
    } catch (err) {
        if (err instanceof z.ZodError) {
            console.error("Schema validation failed:", err.issues)
        }
        throw err
    }
}
