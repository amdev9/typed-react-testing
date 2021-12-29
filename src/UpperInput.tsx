import * as React from 'react'

const UpperInput: React.FC = () => {
  const [upper, setUpper] = React.useState<string>('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setUpper(e.currentTarget.value.toUpperCase())

  return (
    <div>
      <label htmlFor="upper">Upper</label>
      <input id="upper" value={upper} onChange={handleChange}/> 
    </div>
  )
}

export default UpperInput