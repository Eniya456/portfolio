import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  external?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  const variantClasses = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500 shadow-lg shadow-indigo-900/30',
    outline:
      'border border-indigo-500/50 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200 hover:bg-indigo-900/20',
    ghost:
      'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50',
  }

  const baseClasses = `inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (Tag === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
