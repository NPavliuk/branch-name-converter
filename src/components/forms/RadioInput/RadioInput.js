export const RadioInput = ({id, value, groupName, handler}) => {
  return (
    <label htmlFor={id}>
      <input type="radio" id={id} value={value} name={groupName} onClick={handler}/>
      {value}
    </label>
  )
}
