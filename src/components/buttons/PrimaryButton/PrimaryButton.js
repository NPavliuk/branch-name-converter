export const PrimaryButton = ({name, handler}) => {

  return (
    <button type={'button'} onClick={handler}>{name}</button>
  )
}
