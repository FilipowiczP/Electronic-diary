import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AdminButton, TeacherButton, StudentButton } from '../../components/buttons/buttons.style';

import style from '../../style/home.module.scss';

import admin from '../../images/administrator.jpg';
import nauczyciel from '../../images/nauczyciel.jpg';
import student from '../../images/studnet.jpg';
import mainFoto from '../../images/main.jpg';



export default function Main() {
    const [foto, setFoto] = useState(mainFoto);

    const clearFoto = () => {
        setFoto(mainFoto);
    }

    const teacherHandle = () => {
        setFoto(nauczyciel);
    }

    const adminHandle = () => {
        setFoto(admin);
    }

    const studentHandle = () => {
        setFoto(student);
    }

    return (
        <main className={style.main}>
            <img className={style.image} src={foto} alt={foto} />
            <Link to='/admin'>
                <AdminButton onMouseEnter={adminHandle} onMouseLeave={clearFoto}>Admin</AdminButton>
            </Link>
            <Link>
                <TeacherButton onMouseEnter={teacherHandle} onMouseLeave={clearFoto}>Wykładowca</TeacherButton>
            </Link>
            <Link>
                <StudentButton onMouseEnter={studentHandle} onMouseLeave={clearFoto}>Student</StudentButton>
            </Link>
        </main>
    )
}