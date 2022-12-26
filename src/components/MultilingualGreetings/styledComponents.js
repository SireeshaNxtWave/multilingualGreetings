import styled from 'styled-components'

export const MultilingualContainer = styled.div`
  font-family: 'roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  color: #1e293b;
  font-size: 30px;
`
export const LanguageItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const LanguageListItem = styled.li`
  list-style: none;
  margin-right: 25px;
`
export const CustomButton = styled.button`
  background-color: ${props => (props.outline ? '#ffffff' : '#db1c48')};
  color: ${props => (props.outline ? '#db1c48' : '#ffffff')};
  border-color: ${props => (props.outline ? '#db1c48' : '#ffffff')};
  border-width: ${props => (props.outline ? '1px' : '0px')};
  border-radius: 8px;
`
export const GreetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'roboto';
`
export const GreetingImage = styled.img`
  width: 150px;
  height: 300px;
`
