

function TodoFrom(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!onSubmit) return;

        const formValue = {
            title: value,
        };

        onSubmit(formValue);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value = { value } onChange={handleValueChange}></input>
        </form>
    );
}

export default TodoFrom;
