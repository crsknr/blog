'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-medium text-black dark:text-white">
          <Image
            src="profile.jpg"
            alt="Christoph Kiener"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </Link>

        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Christoph Kiener
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Curious Electrical Engineer
          </TextEffect>
        </div>
      </div>
    </header >
  )
}
