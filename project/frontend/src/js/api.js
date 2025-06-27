import { BASE_URL, TODOS_URL } from './config';

export async function getTodos() {
    const res = await fetch(`${BASE_URL}${TODOS_URL}`);
    await errorHandler(res);
    return await res.json();
}

export async function addTodo(todo) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });

    await errorHandler(res);
    return await res.json();
}

export async function deleteTodo(id) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${id}`, { method: 'DELETE' })
    await errorHandler(res);
}

export async function getTodo(id) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${id}`);
    await errorHandler(res);
    return await res.json();
}

export async function toggleTodo(id, checked) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({checked})
    });
    await errorHandler(res);
    return await res.json();
}

export async function updateTodo(id, data) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    await errorHandler(res);
    return await res.json();
}

async function errorHandler(res) {
    if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.error || 'Unknown error';
        throw new Error(errorMessage);
    }
}




