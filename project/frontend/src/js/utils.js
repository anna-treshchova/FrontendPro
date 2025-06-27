export function collectFormData(form) {
    const formData = new FormData(form);
    const title = formData.get('title')?.trim();
    const description = formData.get('description')?.trim();

    if (!title) {
        throw new Error('Cannot add an empty task.')
    }

    return {
        title,
        description: description || '',
    };
}

export function getTodoEl(target) {
    return target.closest('.todo__item');
}