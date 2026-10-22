interface TagProps {
  label: string
  small?: boolean
}

export function Tag({ label, small = false }: TagProps) {
  return (
    <span
      className={`inline-block rounded-md font-mono font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 ${
        small ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'
      }`}
    >
      {label}
    </span>
  )
}
