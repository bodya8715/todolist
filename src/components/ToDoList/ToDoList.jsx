import {Field, Form, Formik} from 'formik';
import {useState} from 'react';

const startFormVelue = {
    taskValue: ""
}

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const submitForm = ({taskValue}, formikBag) => {
        const newTask = [...tasks, {id: Date.now(), body: taskValue, isDone:false}];
        setTasks(newTask);
        formikBag.resetForm();
    }

    const deleteTask = (id) => {
        let results = tasks.filter( item => item.id !== id);
        setTasks(results);

    }


    return (
        <>
        <Formik initialValues={startFormVelue} onSubmit={submitForm}>
            <Form>
                <Field name="taskValue"/>
                <button>Submit</button>
            </Form>
        </Formik>
        <ul>
            {tasks.map(item =><li onClick={() => deleteTask(item.id)} key={item.id}>{item.body}</li>)}
        </ul>
        </>
    );



}

export default ToDoList;