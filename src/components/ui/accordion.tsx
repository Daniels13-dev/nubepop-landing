"use client"
import * as React from "react"
import * as RadixAccordion from "@radix-ui/react-accordion"

type AccordionProps = {
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children?: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = "single",
  collapsible = false,
  className,
}) => {
  return (
    <RadixAccordion.Root
      type={type}
      collapsible={collapsible}
      className={className}
    >
      {children}
    </RadixAccordion.Root>
  )
}

type AccordionItemProps = {
  value: string
  children?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return <RadixAccordion.Item value={value}>{children}</RadixAccordion.Item>
}

export const AccordionTrigger: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger className="w-full text-left px-4 py-3 bg-white/60 hover:bg-white/70 flex justify-between items-center">
        {children}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
}

export const AccordionContent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RadixAccordion.Content className="px-4 py-3 text-slate-700">
      {children}
    </RadixAccordion.Content>
  )
}

export default Accordion
