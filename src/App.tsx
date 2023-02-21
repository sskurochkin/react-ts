import React, {useEffect, useState} from 'react';
import Card, {cardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./components/types/types";
import axios from "axios";

const App = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        fetchUsers()
    }, [])

    async function fetchUsers(){
        try {
            console.log('here')
           const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            setUsers(response.data)
        }catch (e){
            alert(e)
        }
    }

    return (
        <div>
            <Card width='120px' height='300px' variant={cardVariant.outlined} onClick={(num)=>{console.log('click', num)}}>
                <button>Click</button>
            </Card>
            <div>
                <UserList users={users}/>
            </div>
        </div>

    );
};

export default App;
