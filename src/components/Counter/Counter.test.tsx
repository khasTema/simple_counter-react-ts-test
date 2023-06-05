import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import Button from "../Button/Button"
// import { BtnProps } from "../Button/Button"


test('component should be rendered on teh page', ()=> {
    render(<Counter/>)
    const component = screen.getByTestId('counter-comp')
    expect(component).toBeInTheDocument()
})

test('component should have button Add', ()=> {
    render(<Button action="add" onClick={()=>{}}/>)
    const addBtn = screen.getByRole('add')
    expect(addBtn).toBeInTheDocument()
})

test('component should have button delete', ()=> {
    render(<Button action="delete" onClick={()=>{}}/>)
    const deleteBtn = screen.getByRole('delete')
    expect(deleteBtn).toBeInTheDocument()
})

test('counter initial value should be 0', ()=> {
    render(<Counter />)
    const valueEl = screen.getByTestId('value')
    expect(Number(valueEl.textContent)).toBe(0)
})

test('Add button should add 1 point to the value when clicked once', ()=> {

})

test('no negative numbers when clicked delete button', ()=> {

})




export {}