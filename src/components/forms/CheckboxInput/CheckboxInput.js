export const CheckboxInput = ({name, id}) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id}/>
      {name}
    </label>
  )
}
