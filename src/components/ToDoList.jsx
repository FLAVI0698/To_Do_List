import { useState, useEffect } from 'react'
import styles from "./ToDoList.module.css"

const ToDoList = () => {
	const [task, setTask] = useState("");
	const [tasks, setTaks] = useState([]);

	console.log("task", task);
	console.log("tasks", tasks);
	

	const addTask = () => {
		if (task.trim() === '') return;
		setTaks([...tasks, task]);
		setTask("")
	}
	console.log(task)
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.title}>Lista de tarefas</h2>
				<div className={styles.inputContainer}>

					<input type="text" className={styles.input} onChange={(e) => setTask(e.target.value)} value={task} placeholder='Adicione uma tarefa' />

					<button onClick={addTask} className={styles.button}>Adicionar</button>
				</div>
				<ul className={styles.taskList}>
					{tasks.map((taskItem, index) => (
						<li key={index} className={styles.taskItems}>{taskItem}</li>
					) )}
				</ul>
			</div>
		</> 
	)
}

export default ToDoList