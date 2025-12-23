export const getToken = () => localStorage.getItem('token') || sessionStorage.getItem('token');
export const getRole = () => localStorage.getItem('role') || sessionStorage.getItem('role');
export const getUserId = () => localStorage.getItem('userId') || sessionStorage.getItem('userId');

export const setAuthData = (token, role, userId) => {
    if (role === 'admin') {
        sessionStorage.setItem('token', token || '');
        sessionStorage.setItem('role', role || '');
        sessionStorage.setItem('userId', userId || '');
        // Clear localStorage to prevent conflicts
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
    } else {
        localStorage.setItem('token', token || '');
        localStorage.setItem('role', role || '');
        localStorage.setItem('userId', userId || '');
        // Clear sessionStorage to prevent conflicts
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('userId');
    }
};

export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('doctorId'); 
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('userId');
};
