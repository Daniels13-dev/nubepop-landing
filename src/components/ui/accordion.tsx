"use client"
import * as React from "react"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type AccordionProps = {
    type?: "single" | "multiple"
    collapsible?: boolean
    className?: string
    children?: React.ReactNode
    value?: string | string[]
    defaultValue?: string | string[]
    onValueChange?: (value: string | string[]) => void
}

export const Accordion: React.FC<AccordionProps> = ({
    children,
    type = "single",
    collapsible = false,
    className,
    value,
    defaultValue,
    onValueChange,
}) => {
    return (
        <RadixAccordion.Root
            type={type}
            collapsible={collapsible}
            className={className}
            value={value as any}
            defaultValue={defaultValue as any}
            onValueChange={onValueChange as any}
        >
            {children}
        </RadixAccordion.Root>
    )
}

export const AccordionItem = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Item>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
    <RadixAccordion.Item
        ref={ref}
        className={cn(
            "mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
            "data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 data-[state=open]:shadow-[0_0_20px_rgba(137,37,211,0.15)]",
            className
        )}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Trigger>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
    <RadixAccordion.Header className="flex">
        <RadixAccordion.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between p-5 text-left font-medium text-foreground transition-all hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                "[&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-primary",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:text-primary" />
        </RadixAccordion.Trigger>
    </RadixAccordion.Header>
))
AccordionTrigger.displayName = RadixAccordion.Trigger.displayName

export const AccordionContent = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Content>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...props }, ref) => (
    <RadixAccordion.Content
        ref={ref}
        className={cn(
            "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            className
        )}
        {...props}
    >
        <div className={cn("px-5 pb-5 pt-0 text-muted-foreground", className)}>{children}</div>
    </RadixAccordion.Content>
))
AccordionContent.displayName = RadixAccordion.Content.displayName

export default Accordion
