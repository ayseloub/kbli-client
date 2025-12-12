'use client'
import { UserOutlined } from '@ant-design/icons'

interface ChatBubbleProps {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

export default function ChatBubble({ role, content, timestamp }: ChatBubbleProps) {
    const isUser = role === 'user'
    
    return (
        <div className={`flex gap-3 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className='w-8 h-8 rounded-full bg-kbli-primary flex items-center justify-center flex-shrink-0'>
                    <span className='text-white text-sm'><UserOutlined /></span>
                </div>
            )}
            
            <div className='flex flex-col max-w-[70%]'>
                <div className={`rounded-2xl px-4 py-3 ${
                    isUser 
                        ? 'bg-kbli-secondary text-white' 
                        : 'bg-gray-100 text-gray-900'
                }`}>
                    <p className='text-sm leading-relaxed whitespace-pre-wrap'>{content}</p>
                </div>
                <span className='text-xs text-gray-500 mt-1'>
                    {timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>

            {isUser && (
                <div className='w-8 h-8 rounded-full bg-kbli-secondary flex items-center justify-center flex-shrink-0'>
                    <span className='text-white text-sm'>👤</span>
                </div>
            )}
        </div>
    )
}