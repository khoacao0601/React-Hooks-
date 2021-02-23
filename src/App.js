
function App() {
  const [todoList, setTodoList] = useState([
      { id: 1, title: 'I love Easy Frontend! 😍 ' },
      { id: 2, title: 'We love Easy Frontend! 🥰 ' },
      { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const view = {
    viewNow: "home",
  };


  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
  }

  function handleChangeView(viewValue) {
    console.log(viewValue);
  }

  function handlePages(pageInfo){
    console.log(pageInfo);
  }



  return (
    <div className="App">
      <h1>Welcome to react hooks</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
      <TodoFrom onSubmit={handleTodoFormSubmit} />
      <Menu view={view} changeView={handleChangeView}/>
      <PostList pageInfos={handlePages}/>
    </div>
  );
  
}

export default App;
