export const updateElementName = (elementRef, name, updatedName, timeout) => {
  elementRef.current.innerText = updatedName

  setTimeout(() => {
    elementRef.current.innerText = name
  }, timeout)
}
