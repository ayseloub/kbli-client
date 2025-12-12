// Interface untuk KBLI Chat (Navigo Template)

export interface IChatRequest {
    question: string;
}

export interface IChatResponse {
    status: 'success' | 'error';
    message?: string;
    data?: string;
}

export interface IChatResult {
    success: boolean;
    response?: string;
    message?: string;
}

// Interface untuk UI components
export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}