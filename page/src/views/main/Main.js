import React, { useState } from 'react';
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
            <AdminButton onMouseEnter={adminHandle} onMouseLeave={clearFoto}>Admin</AdminButton>
            <TeacherButton onMouseEnter={teacherHandle} onMouseLeave={clearFoto}>Wykładowca</TeacherButton>
            <StudentButton onMouseEnter={studentHandle} onMouseLeave={clearFoto}>Student</StudentButton>
        </main>
    )
}