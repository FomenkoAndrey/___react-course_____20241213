const Button = ({ text, type, num, disabled }) => {
  return (
    <div>
      {/*{disabled ? <h2>Button {num} disabled</h2> : <h2>Button {num} enabled</h2>}*/}
      <h2>Button {num} {disabled ? 'disabled' : 'enabled'}</h2>
      <button type={type} disabled={disabled}>{text}</button>
    </div>
  )
}

export default Button
