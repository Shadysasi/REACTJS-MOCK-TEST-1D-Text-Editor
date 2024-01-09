import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextEditImageContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
`
export const HeadImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const TextEditorHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`
export const TextEditorImage = styled.img`
  height: 200px;
  width: 200px;
`

export const TextEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`
export const ButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`
export const ButtonItem = styled.li``
export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.textToBold ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.textToItalic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.textToUnderline ? '#faff00' : '#f1f5f9')};
`

export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`
export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
