'use client'

import { useState } from 'react'
import { sendChatMessage } from '@/shared/actions/chatService'
import type { Message } from '@/shared/models/interface/chatinterface'

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Selamat datang di Asisten Virtual BKPM! Bagaimana saya bisa membantu Anda?',
            timestamp: new Date()
        }
    ])
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async (content: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date()
        }
        setMessages(prev => [...prev, userMsg])
        setIsLoading(true)

        try {
            const result = await sendChatMessage({ question: content })

            if (result.success && result.response) {
                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: result.response,
                    timestamp: new Date()
                }
                setMessages(prev => [...prev, botMsg])
            } else {
                const errorMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: result.message || 'Maaf, terjadi kesalahan.',
                    timestamp: new Date()
                }
                setMessages(prev => [...prev, errorMsg])
            }
        } catch (error: any) {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Maaf, terjadi kesalahan saat menghubungi server.',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMsg])
        } finally {
            setIsLoading(false)
        }
    }

    const clearChat = () => {
        setMessages([{
            id: '1',
            role: 'assistant',
            content: 'Selamat datang di Asisten Virtual BKPM! Bagaimana saya bisa membantu Anda?',
            timestamp: new Date()
        }])
    }

    return { messages, isLoading, sendMessage, clearChat }
}