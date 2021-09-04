import { useEffect } from 'react';
import { Form } from '../../components/form.style';

import style from '../../style/logout.module.scss';
import logout from '../../images/logout.jpg';
export default function Logout() {

    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/");
        }, 2500);
    }, [])
    return (
        <main className={style.main}>
            <img className={style.image} src={logout} alt="logout" />
            <Form>
                <h1 className={style.h1}>Wylogowano pomyślnie</h1>
            </Form>
        </main>
    )
}