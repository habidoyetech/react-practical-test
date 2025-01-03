import { useEffect, useState } from "react"


export const useFetchUsers = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    
           
    useEffect(() => { 
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json(); 
                
                setUsers(result); 
            } catch (err) {
                window.alert(err.message) 
            } finally {
                setLoading(false); 
            }
        };

        fetchUsers();
    }, []);

    return [users, loading]
}

export const useFetchUser = (userId) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
           
    useEffect(() => {

        const fetchUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const users = await response.json(); 
                const selectedUsers = users.find((user) => user.id === Number(userId))
                console.log(selectedUsers)
                setUser(selectedUsers); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchUser();
    }, []);

    return [user, loading, error]
}

