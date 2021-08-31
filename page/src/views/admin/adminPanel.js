import { useContext, useState, useEffect } from "react";
import Context from '../../context/context';

export default function AdminPanel() {
    const { token } = useContext(Context);
    const [test, setTest] = useState(null)
    useEffect(() => {

        setTest(sessionStorage.getItem("token"))
    }, [])

    return <h1>{test}</h1>
    // if (token == null) {
    //     window.location.replace("/admin");
    // } else {
    //     return (
    //         <h1>{token}</h1>
    //     )
    // }
}