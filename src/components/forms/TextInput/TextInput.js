export const TextInput = ({value, handler, placeholder}) => {

  return (
    <input type="text" value={value} onChange={handler} placeholder={placeholder}/>
  )
}
