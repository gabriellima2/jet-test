import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { cn } from '@/helpers/cn'

export type MenuButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
>

export function MenuButton(props: MenuButtonProps) {
	const { className, ...rest } = props
	return (
		<button
			type="button"
			title="Menu"
			className={cn(
				'cursor-pointer rounded-full p-2 transition-colors hover:bg-zinc-100 focus:bg-zinc-100',
				className
			)}
			{...rest}
		>
			<Image
				src="/assets/icons/dots-vertical.svg"
				alt="Menu Icon"
				width={20}
				height={20}
			/>
		</button>
	)
}
