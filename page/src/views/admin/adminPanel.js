import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminPanelButtons } from '../../components/buttons.style';
import { Form } from '../../components/form.style';

import admin from '../../images/administrator.jpg';
import style from '../../style/adminPanel.module.scss';

export default function AdminPanel() {

    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
    }, [])

    const logoutHandle = () => {
        setToken(null);
        sessionStorage.clear();
    }

    if (token == null) {
        return (
            <main className={style.main}>
                <img className={style.image} src={admin} alt="admin" />
                <Form>
                    <h1 className={style.login}>Zaloguj się</h1>
                    <Link to="/admin">
                        <AdminPanelButtons>Zaloguj</AdminPanelButtons>
                    </Link>
                </Form>
            </main>
        )
    } else {
        return (
            <main className={style.main}>
                <img className={style.image} src={admin} alt="admin" />

                <AdminPanelButtons>Studenci</AdminPanelButtons>
                <AdminPanelButtons>Wykładowcy</AdminPanelButtons>
                <Link to="/logout">
                    <AdminPanelButtons onClick={logoutHandle}>Wyloguj</AdminPanelButtons>
                </Link>
            </main>
        )
    }
}