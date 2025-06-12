import {BASE_URL, GET_TODOS_URL} from "./config.js";

export async function getTodos() {
    const res = await fetch(`${BASE_URL}${GET_TODOS_URL}`);

    if (!res.ok) {
        throw new Error(`Failed to get todos: ${res.statusText}`);
    }

    return await res.json();
}

export async function addTodo(title) {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            completed: false
        }),
    })

    if (!res.ok) {
        throw new Error(`Failed to add todo: ${res.statusText}`);
    }
    return res.json()
}

export async function toggleTodo(id, completed) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({completed})
    })

    if (!res.ok) {
        throw new Error(`Failed to toggle todo's status: ${res.statusText}`);
    }
}

export async function deleteTodo(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error(`Failed to delete todo: ${res.statusText}`);
    }
}