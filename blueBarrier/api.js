// api.js
const API_BASE = 'http://localhost:3000';

export const alertAPI = {
    send: (message, language, target) => {
        return fetch(`${API_BASE}/api/alert`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, language, target })
        });
    }
};