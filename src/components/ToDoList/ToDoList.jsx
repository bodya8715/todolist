import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { TODO_SCHEMA } from '../../utils/validationSchema';
import TaskList from '../TaskList';
import styles from './style.module.scss';

const startFormValue = {
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

    const toggleCompletion = (id) => {
        //map
        setTasks(tasks.map( (item) => {
            if(item.id === id) {
                item.isDone = !item.isDone;
            }
            return item;
        }));
    }


    return (
        <div className={`${styles.toDoList} ${styles.flex_column}`}>
            <Formik initialValues={startFormValue} onSubmit={submitForm} validationSchema={TODO_SCHEMA}>
                <Form className={styles.flex_column}>
                    <Field name="taskValue"/>
                    <ErrorMessage name="taskValue">
                        { (message) => <div className={styles.toDoList_error}>{message}</div>}
                    </ErrorMessage>
                    <button className={styles.toDoList_confirmButton} type="submit">Submit</button>
                </Form>
            </Formik>
            <TaskList listOfTasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask}/>
        </div>
    );
}

export default ToDoList;