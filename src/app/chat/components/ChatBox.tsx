'use client'

import { useRef, useEffect } from 'react'
import ChatBubble from './ChatBubble'
import ChatInput from './ChatInputBox'
import { useChat } from '../usecase/useChatMessage'
import { UserOutlined } from '@ant-design/icons'

export default function ChatBox() {
    const { messages, isLoading, sendMessage, clearChat } = useChat()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className='flex flex-col h-screen bg-white rounded-2xl shadow-lg overflow-hidden'>
            <div className='bg-kbli-primary text-white p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'
                     onClick={() => window.location.href = "/home"}>
                        <span className='text-2xl'><UserOutlined /></span>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Asisten Virtual BKPM</h3>
                        <p className='text-sm text-white/80'>Online - Siap Membantu</p>
                    </div>
                </div>
                <button 
                    onClick={clearChat}
                    className='px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors'
                >
                    Clear
                </button>
            </div>

            <div className='flex-1 overflow-y-auto p-6'>
                {messages.map((msg) => (
                    <ChatBubble
                        key={msg.id}
                        role={msg.role}
                        content={msg.content}
                        timestamp={msg.timestamp}
                    />
                ))}
                
                {isLoading && (
                    <div className='flex gap-3 mb-6'>
                        <div className='w-8 h-8 rounded-full bg-kbli-primary flex items-center justify-center'>
                            <span className='text-white text-sm'>🤖</span>
                        </div>
                        <div className='bg-gray-100 rounded-2xl px-4 py-3'>
                            <div className='flex gap-1'>
                                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]'></div>
                                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]'></div>
                            </div>
                        </div>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
    )
}