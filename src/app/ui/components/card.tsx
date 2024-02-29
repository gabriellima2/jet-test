import { cn } from '@/helpers/cn'
import { HTMLAttributes } from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { MenuButton, MenuButtonProps } from '../atoms/menu-button'

export type RootProps = HTMLAttributes<HTMLElement>
export type ImageProps = NextImageProps
export type ContentProps = HTMLAttributes<HTMLElement>
export type TitleProps = HTMLAttributes<HTMLHeadingElement>
export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>
export type MenuProps = MenuButtonProps

function Root(props: RootProps) {
	const { className, ...rest } = props
	return (
		<article
			className={cn(
				'flex min-h-[100px] flex-row flex-wrap gap-5 border-t-2 border-t-zinc-200 py-2',
				className
			)}
			{...rest}
		/>
	)
}

function Image(props: ImageProps) {
	const { className, ...rest } = props
	return (
		<div
			className={cn(
				'xs:max-w-[85px] relative min-h-[85px] w-full min-w-[85px] flex-1',
				className
			)}
		>
			<NextImage fill className="object-cover" priority {...rest} />
		</div>
	)
}

function Content(props: ContentProps) {
	const { className, ...rest } = props
	return (
		<section
			className={cn(
				'flex w-full min-w-[156px] flex-1 flex-row items-start justify-between',
				className
			)}
			{...rest}
		/>
	)
}

function Title(props: TitleProps) {
	const { className, ...rest } = props
	return (
		<h1
			className={cn('text-base font-semibold text-gray-900', className)}
			{...rest}
		/>
	)
}

function Paragraph(props: ParagraphProps) {
	const { className, ...rest } = props
	return <p className={cn('text-xs text-gray-500', className)} {...rest} />
}

function Menu(props: MenuProps) {
	const { className, ...rest } = props
	return (
		<MenuButton
			className={cn('p-0 hover:bg-transparent focus:bg-transparent', className)}
			{...rest}
		/>
	)
}

export const Card = {
	Root,
	Image,
	Content,
	Title,
	Paragraph,
	Menu,
}
