import styles from './style.module.scss';

function TaskList(props) {
    return (
        <ul className={styles.toDoList_taskList}>
                {props.listOfTasks.map(item =>
                    <li key={item.id} className={styles.toDoList_tasks}>
                        <label className={styles.toDoList_taskLabel}>
                            <input type="checkbox" checked={item.isDone} onChange={() => props.toggleCompletion(item.id)}/>
                            <span>{item.body}</span>
                        </label>
                        <button onClick={() => props.deleteTask(item.id)} type="button">X</button>
                    </li>
                )}
        </ul>
    );
}

export default TaskList;