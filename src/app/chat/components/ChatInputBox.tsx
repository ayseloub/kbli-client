'use client'

import { useState } from 'react'

interface ChatInputProps {
    onSend: (message: string) => void
    disabled?: boolean
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() && !disabled) {
            onSend(input.trim())
            setInput('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='p-4 border-t bg-white'>
            <div className='flex gap-2'>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Ketik pesan Anda...'
                    disabled={disabled}
                    className='flex-1 px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-kbli-primary disabled:opacity-50'
                />
                <button
                    type='submit'
                    disabled={disabled || !input.trim()}
                    className='px-6 py-3 bg-kbli-secondary text-white rounded-xl hover:bg-kbli-secondary/90 disabled:opacity-50 transition-colors'
                >
                    Kirim
                </button>
            </div>
        </form>
    )
}