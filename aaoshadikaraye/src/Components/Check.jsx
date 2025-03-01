import { useAuth } from "../context/UserContext";
function Check(){
    const [user,AuthUser] = useAuth();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('wed'));
        if (data) { 
            setWedUser(data) }
    }, user)
}