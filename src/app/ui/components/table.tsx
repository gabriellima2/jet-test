import {
	HTMLAttributes,
	TableHTMLAttributes,
	TdHTMLAttributes,
	ThHTMLAttributes,
} from 'react'
import { cn } from '@/helpers/cn'

export type TableProps = TableHTMLAttributes<HTMLTableElement>
export type HeadProps = HTMLAttributes<HTMLTableSectionElement>
export type RowProps = HTMLAttributes<HTMLTableRowElement>
export type HeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>
export type BodyProps = HTMLAttributes<HTMLTableSectionElement>
export type DataCellProps = TdHTMLAttributes<HTMLTableCellElement>

function Root(props: TableProps) {
	const { className, ...rest } = props
	return (
		<table
			className={cn(
				'w-full max-w-[1370px] rounded-lg border-x-2 border-x-zinc-200 shadow-md',
				className
			)}
			{...rest}
		/>
	)
}

function Head(props: HeadProps) {
	return <thead {...props} className="bg-gray-50" />
}

function Row(props: RowProps) {
	const { className, ...rest } = props
	return (
		<tr
			className={cn('flex w-full border-t-2 border-t-zinc-200 p-2', className)}
			{...rest}
		/>
	)
}

function HeaderCell(props: HeaderCellProps) {
	const { className, ...rest } = props
	return (
		<th
			className={cn(
				'flex h-[50px] max-w-[330px] flex-1 items-center text-xs font-semibold uppercase text-gray-500',
				className
			)}
			{...rest}
		/>
	)
}

function Body(props: BodyProps) {
	return <tbody {...props} />
}

function DataCell(props: DataCellProps) {
	const { className, ...rest } = props
	return (
		<td
			className={cn(
				'flex min-h-[58px] max-w-[330px] flex-1 items-center overflow-auto text-sm text-gray-500',
				className
			)}
			{...rest}
		/>
	)
}

export const Table = {
	Root,
	Head,
	Row,
	HeaderCell,
	Body,
	DataCell,
}
