import {Component} from 'react'

import {
  MultilingualContainer,
  MainHeading,
  LanguageItemContainer,
  LanguageListItem,
  CustomButton,
  GreetingsContainer,
  GreetingImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    selectedLanguage: languageGreetingsList[0],
    outline: true,
  }

  changeGreetingEnglish = () => {
    this.setState({selectedLanguage: languageGreetingsList[0]})
  }

  changeGreetingTamil = () => {
    this.setState({selectedLanguage: languageGreetingsList[1]})
  }

  changeGreetingTelugu = () => {
    this.setState({selectedLanguage: languageGreetingsList[2]})
  }

  render() {
    const {outline, selectedLanguage} = this.state

    return (
      <MultilingualContainer>
        <MainHeading>Multilingual Greetings</MainHeading>
        <LanguageItemContainer>
          <LanguageListItem>
            <CustomButton
              type="button"
              outline={outline}
              onClick={this.changeGreetingEnglish}
            >
              {languageGreetingsList[0].buttonText}
            </CustomButton>
          </LanguageListItem>
          <LanguageListItem>
            <CustomButton
              type="button"
              outline={outline}
              onClick={this.changeGreetingTamil}
            >
              {languageGreetingsList[1].buttonText}
            </CustomButton>
          </LanguageListItem>
          <LanguageListItem>
            <CustomButton
              type="button"
              outline={outline}
              onClick={this.changeGreetingTelugu}
            >
              {languageGreetingsList[2].buttonText}
            </CustomButton>
          </LanguageListItem>
        </LanguageItemContainer>
        <GreetingsContainer>
          <GreetingImage
            alt={selectedLanguage.imageAltText}
            src={selectedLanguage.imageUrl}
          />
        </GreetingsContainer>
      </MultilingualContainer>
    )
  }
}

export default MultilingualGreetings
