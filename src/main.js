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
  text: '',
  buttonName: 'Request a free trial',
}

const productData = {
  title: 'Who is this product for?',
  text: 'Lingvanex Bot can simply solve a language barrier problem in your team, community,  with your international clients and outsourcing partners. It automatically identifies the languages  in a conversation and translates all messages of your team members into a chosen language.',
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
const product = document.getElementById('product')

main.prepend(generateTitleSection(mainData.title, mainData.text, true))
main.append(generateButtonElement(mainData.buttonName))

solution.prepend(
  generateTitleSection(solutionData.title, solutionData.text, false)
)

help.prepend(generateTitleSection(helpData.title, helpData.text, false))
help.append(generateButtonElement(mainData.buttonName))

product.prepend(
  generateTitleSection(productData.title, productData.text, false)
)
product.append(generateButtonElement(productData.buttonName))

// =============tabs============

let activeTabProduct = 0
const tabsProduct = document.getElementById('tabs-product')
const tabsProductButtonsList = tabsProduct.querySelectorAll(
  '.tabs_buttons__button'
)
const tabsInfoSlides = tabsProduct.querySelectorAll('.tabs_info__slide')

const handleClickTabProductButton = (e) => {
  activeTabProduct =
    e.target && e.target.dataset && e.target.dataset.id
      ? (activeTabProduct = +e.target.dataset.id)
      : activeTabProduct

  e.target.classList.contains('tabs_buttons__button') &&
    tabsProductButtonsList.forEach((btn) => {
      if (
        e.target &&
        e.target.dataset &&
        e.target.dataset.id &&
        +btn.dataset.id === activeTabProduct
      ) {
        btn.classList.add('tabs_buttons__button-active')
      } else {
        btn.classList.remove('tabs_buttons__button-active')
      }
    })

  e.target.classList.contains('tabs_buttons__button') &&
    tabsInfoSlides.forEach((slide, index) => {
      const next = index === 2 ? 0 : index + 1
      const pre = index === 0 ? 2 : index - 1

      if (activeTabProduct === index) {
        slide.classList.add('slide_one')
        slide.classList.remove('slide_two')
        slide.classList.remove('slide_three')

        tabsInfoSlides[next].classList.add('slide_two')
        tabsInfoSlides[next].classList.remove('slide_one')
        tabsInfoSlides[next].classList.remove('slide_three')

        tabsInfoSlides[pre].classList.add('slide_three')
        tabsInfoSlides[pre].classList.remove('slide_one')
        tabsInfoSlides[pre].classList.remove('slide_two')
      }
    })
}

tabsProduct.addEventListener('click', handleClickTabProductButton)
