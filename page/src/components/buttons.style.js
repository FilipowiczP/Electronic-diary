import styled from "styled-components";

const Button = styled.button`
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    outline: none;
    color: white;
    margin: 10px 50px;
`

export const AdminButton = styled(Button)`
    background-color: #013145;
    border-bottom: 4px solid #030303;
`

export const AdminPanelButtons = styled(AdminButton)`
    width: 150px;
`

export const TeacherButton = styled(Button)`
    background-color: #6CD9F5;
    border-bottom: 4px solid #70FFF5;
`

export const StudentButton = styled(Button)`
    background-color: #ABFF0D;
    border-bottom: 4px solid #3DE80C;
`