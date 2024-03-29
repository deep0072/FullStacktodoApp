import { useEffect, useState } from "react";

export default function useTodos() {
    const [todo,setTodo] = useState([])
    console.log("running")
    useEffect(()=>{
        console.log("inside useEffect running")
        fetch("http://localhost:8000/todo/get", {
            method: "GET",
        }).then((response) => {
            response.json().then((data)=>{
            console.log(data)
            setTodo(data)
        })
        })

        // first time it will trigger the setInterval which will open kind of clock. so thats why 
        // it will fetch api after every second . though useeffect will run one time

        setInterval(() => {
            fetch("http://localhost:8000/todo/get", {
            method: "GET",
        }).then((response) => {
            response.json().then((data)=>{
            console.log(data)
            setTodo(data)
        })
        })
            
        }, 2000);

    },[])

    return todo

}