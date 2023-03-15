import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header"

test('Header yüklendi mi?', () => { 
    render(<Header/>)
    const header = screen.getByText("Emoji Search")
    expect(header).toBeInTheDocument();
 })