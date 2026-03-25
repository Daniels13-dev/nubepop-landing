"use client"

import { FilterOption, ThemeClasses } from "@/types"

interface CatalogFiltersProps {
    filterValue: string
    setFilterValue: (value: string) => void
    sortOrder: string
    setSortOrder: (value: string) => void
    filterOptions: FilterOption[]
    defaultFilterLabel: string
    themeClasses: ThemeClasses
}

export function CatalogFilters({
    filterValue,
    setFilterValue,
    sortOrder,
    setSortOrder,
    filterOptions,
    defaultFilterLabel,
    themeClasses,
}: CatalogFiltersProps) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-0">
            <div className="relative group w-full sm:w-auto">
                <select
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    className={`appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 ${themeClasses.borderHover} text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 ${themeClasses.bgFocus} w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg ${themeClasses.shadowHover}`}
                >
                    <option value="all">{defaultFilterLabel}</option>
                    {filterOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <div
                    className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 ${themeClasses.text} transition-colors group-hover:opacity-80`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            <div className="relative group w-full sm:w-auto">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className={`appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 ${themeClasses.borderHover} text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 ${themeClasses.bgFocus} w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg ${themeClasses.shadowHover}`}
                >
                    <option value="featured">Destacados</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                </select>
                <div
                    className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 ${themeClasses.text} transition-colors group-hover:opacity-80`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
