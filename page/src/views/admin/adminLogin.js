import { useState } from 'react';
import { Form, Label, Input } from '../../components/form/form.style';
import { AdminButton } from '../../components/buttons/buttons.style';
import { Link } from 'react-router-dom';

import admin from '../../images/administrator.jpg';

import style from '../../style/login.module.scss';

export default function AdminLogin() {

    const [formValue, setFormValue] = useState({
        login: "",
        password: ""
    });

    const handleLogin = async () => {

    }

    return (
        <section className={style.section}>
            <img className={style.image} src={admin} alt="admin" />
            <Form onSubmit={handleLogin}>
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