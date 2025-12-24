'use server'

import {
    type IChatRequest,
    type IChatResponse,
    type IChatResult,
} from '@/shared/models/interface/chatinterface';

const BASE_URL = process.env.BASE_API_URL || 'https://bkpm.testingarea.my.id/api/bot';

export async function sendChatMessage(
    chatRequest: IChatRequest
): Promise<IChatResult> {
    console.log('🔍 Request:', chatRequest);
    console.log('🔍 URL:', `${BASE_URL}/chatbot`);

    try {
        const response = await fetch(`${BASE_URL}/bot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
            body: JSON.stringify(chatRequest),
            next: {
                tags: ['chat-service'],
            },
        });

        console.log('📥 Response status:', response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('📦 Raw response:', JSON.stringify(responseData, null, 2));

        // Handle berbagai kemungkinan response format
        let botMessage = null;

        // Format 1: { status: 'success', data: 'message' }
        if (responseData.status === 'success' && responseData.data) {
            botMessage = responseData.data;
        }
        // Format 2: { data: 'message' }
        else if (responseData.data) {
            botMessage = responseData.data;
        }
        // Format 3: { message: 'message' }
        else if (responseData.message) {
            botMessage = responseData.message;
        }
        // Format 4: { response: 'message' }
        else if (responseData.response) {
            botMessage = responseData.response;
        }
        // Format 5: { answer: 'message' }
        else if (responseData.answer) {
            botMessage = responseData.answer;
        }
        // Format 6: Direct string
        else if (typeof responseData === 'string') {
            botMessage = responseData;
        }

        console.log('✅ Extracted message:', botMessage);

        if (botMessage) {
            return {
                success: true,
                response: botMessage,
            };
        }

        // Ga ada message yang bisa di-extract
        console.log('❌ No message found in response');
        return {
            success: false,
            message: 'Response tidak memiliki format yang valid. Response: ' + JSON.stringify(responseData),
        };

    } catch (error) {
        console.error('❌ Error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
