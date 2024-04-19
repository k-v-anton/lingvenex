const mainData = {
  title: 'Travel and Hospitality',
  text: 'Offline & Online Translation: image translation, translation history, file translation, bookmarks, dictionary meaning.',
  buttonName: 'Request a free trial',
}

const solutionData = {
  title: 'Our language solution',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ",
}

const helpData = {
  title: 'How can Lingvanex help you?',
  text: "",
  buttonName: 'Request a free trial',
}

const generateButtonElement = (name) => {
  const button = name && document.createElement('button')
  button.textContent = name
  button.className = 'button_secondary'

  return button
}

const generateTitleElement = (title, main = false) => {
  const titleElement = title && document.createElement(main ? 'h1' : 'h2')
  titleElement.textContent = title
  titleElement.className = main ? 'title-main' : 'title-section'

  return titleElement
}

const generateTextElement = (text) => {
  const textElement = text && document.createElement('p')
  textElement.textContent = text
  textElement.className = 'text'

  return textElement
}

const generateTitleSection = (title, text, isH1Title = false) => {
  const titleElement = generateTitleElement(title, isH1Title)
  const textElement = generateTextElement(text)

  const containerElement = document.createElement('div')
  containerElement.className = 'title-container'

  containerElement.append(titleElement, textElement)

  return containerElement
}



const main = document.getElementById('main')
const solution = document.getElementById('solution')
const help = document.getElementById('help')

main.prepend(generateTitleSection(mainData.title, mainData.text, true))
main.append(generateButtonElement(mainData.buttonName))

solution.prepend(generateTitleSection(solutionData.title, solutionData.text, false))

help.prepend(generateTitleSection(helpData.title, helpData.text, false))
help.append(generateButtonElement(mainData.buttonName))