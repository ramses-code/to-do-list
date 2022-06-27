import React, {useState} from "react";
import Task from "./Task";
import NumberOfTask from "./NumberOfTask";


const Home = () => {
	
	const [task, setTask] = useState([]);
	const [isShown, setIsShown] = useState(false);
	const [taskCount, setTaskCount] = useState(0);

	return (
		<div className="main-container">
			<h1>TO-DO List</h1>			
			<div className="todos">
				<input className="input-group" type="text" placeholder="add task" 
				onKeyDown={e => e.key === "Enter" ? (setTask([...task, e.target.value]), setTaskCount(taskCount + 1), (e.target.value = "")) : ""}/> 
				{task.map((elem, index) => {
					return (
						<div className="row"  onMouseEnter={() => setIsShown(true)}  onMouseLeave={() => setIsShown(false)}>
							<div className="col">
								<Task todoTask={elem} key={index}/>
								
							</div>
							<div className={isShown ? "col-6 d-block" : "d-none"}>
								<button type="button" onClick={() => (task.splice(index, 1), setTaskCount(taskCount - 1))}>X</button>
							</div>
						</div>
					);
				})}
				<NumberOfTask numberOfTask={taskCount === 0 ? "No tasks, add a task" : `${taskCount} tasks left`}/>
			</div>			
			<div className="bottom-box"></div>
			<div className="bottom-box2"></div>
		</div>
	);
};

export default Home;