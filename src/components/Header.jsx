import React from 'react'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="w-full py-6 px-6 lg:px-12 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl lg:text-2xl font-semibold">Country Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="hidden md:block text-gray-500 dark:text-gray-400 text-sm">
          Built with REST Countries API
        </div>
        <button
          onClick={onToggleTheme}
          className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-sm"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
