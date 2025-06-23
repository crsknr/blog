'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Spotlight } from '@/components/ui/spotlight'

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

const AccordionCard = ({
    title,
    content,
}: {
    title: string
    content: string
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
            <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
            />
            <div className="relative w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <button
                    className="flex w-full items-center justify-between text-left text-base font-medium text-zinc-800 dark:text-zinc-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {title}
                    <span className="ml-2 text-zinc-500 dark:text-zinc-400">
                        {isOpen ? '−' : '+'}
                    </span>
                </button>
                {isOpen && (
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400">
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}

export default function StatementsPage() {
    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="max-w-2xl"
        >
            <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
                Statements
            </h1>
            <div className="flex flex-col space-y-2">
                <AccordionCard
                    title="Content Statement"
                    content="Unless otherwise stated, all content on this website—including text, design, code, and other materials—is created by me and is my intellectual property. This excludes certain images used in the Writing section, which may be sourced or referenced for illustrative or editorial purposes. Unauthorized use, reproduction, or distribution of this content without permission is prohibited."
                />
                <AccordionCard
                    title="Open Source Statement"
                    content="This website was created utilizing the Nim Fawn website template created by Julien Thibeaut (@ibelick). The initial Next.js code, along with the styling and premade components are a part of the open-source project and can be accessed on @ibelick's GitHub account. All future additions, including this statement accordion and many other changes are created by me, Christoph Kiener, and are purely my own and do not reflect the work of @ibelick in any way, shape, or form."
                />
            </div>
        </motion.section>
    )
}