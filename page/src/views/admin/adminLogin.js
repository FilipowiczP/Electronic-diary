import { useState, useContext } from 'react';
import { Form, Label, Input } from '../../components/form.style';
import { AdminButton } from '../../components/buttons.style';
import { Link } from 'react-router-dom';
import { adminFeatch } from '../../API/API';

import admin from '../../images/administrator.jpg';

import style from '../../style/login.module.scss';

export default function AdminLogin() {

    const [formValue, setFormValue] = useState({
        login: "",
        password: ""
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        adminFeatch(formValue).then(response => response.json())
            .then(data => sessionStorage.setItem("token", data.token)).then(window.location.replace('admin-panel'))

    }

    return (
        <section className={style.section}>
            <img className={style.image} src={admin} alt="admin" />
            <Form onSubmit={(event) => handleLogin(event)}>
                <Label>
                    Login:
                    <Input type="text" value={formValue.login} onChange={(event) => setFormValue({ ...formValue, login: event.target.value })} />
                </Label>
                <Label>
                    Hasło:
                    <Input type="password" value={formValue.password} onChange={(event) => setFormValue({ ...formValue, password: event.target.value })} />
                </Label>
                <div>
                    <Link to="/"><AdminButton>Wstecz</AdminButton></Link>
                    <AdminButton>Zaloguj</AdminButton>
                </div>
            </Form>
        </section>
    )
}