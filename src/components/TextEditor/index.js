import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  ResponsiveContainer,
  TextEditImageContainer,
  HeadImageContainer,
  TextEditorHeading,
  TextEditorImage,
  TextEditContainer,
  ButtonList,
  ButtonItem,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  HrElement,
  TextAreaElement,
} from './style'

class TextEditor extends Component {
  state = {textToBold: false, textToItalic: false, textToUnderline: false}

  toBold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  toItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  toUnderline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  editContainerView = () => {
    const {textToBold, textToItalic, textToUnderline} = this.state
    const fontWeight = textToBold ? 'bold' : 'normal'

    const fontStyle = textToItalic ? 'italic' : 'normal'

    const textDecoration = textToUnderline ? 'underline' : 'normal'

    return (
      <TextEditContainer>
        <ButtonList>
          <ButtonItem>
            <BoldButton
              type="button"
              data-testid="bold"
              onClick={this.toBold}
              textToBold={textToBold}
            >
              <VscBold size={25} />
            </BoldButton>
          </ButtonItem>
          <ButtonItem>
            <ItalicButton
              type="button"
              data-testid="italic"
              onClick={this.toItalic}
              textToItalic={textToItalic}
            >
              <GoItalic size={25} />
            </ItalicButton>
          </ButtonItem>
          <ButtonItem>
            <UnderlineButton
              type="button"
              data-testid="underline"
              onClick={this.toUnderline}
              textToUnderline={textToUnderline}
            >
              <AiOutlineUnderline size={25} />
            </UnderlineButton>
          </ButtonItem>
        </ButtonList>
        <HrElement />
        <TextAreaElement
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
        />
      </TextEditContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          <TextEditImageContainer>
            <HeadImageContainer>
              <TextEditorHeading>Text Editor</TextEditorHeading>
              <TextEditorImage
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </HeadImageContainer>

            {this.editContainerView()}
          </TextEditImageContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
