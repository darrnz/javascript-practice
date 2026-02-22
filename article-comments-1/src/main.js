
const GET_COMMENTS_API_ENDPOINT = '/comments'
const POST_COMMENTS_API_ENDPOINT = '/comments/post'
const COMMENTS_CONTAINER_ID = 'commentsContainer'
const COMMENTS_SUBMIT_ID = 'submitBtn'

export const fetchData = async (api) => {

  try {
    const response = await fetch(api)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    return data
  } catch (error) {
    console.log('error', error.message)
    return null
  }
}

const createCommentElement = (data) => {
  const container = document.createElement('div')
  const image = document.createElement('img')
  const infoContainer = document.createElement('div')
  const commentTitle = document.createElement('h3')
  const commentContent = document.createElement('p')

  image.src = data.avatar
  commentContent.textContent = data.content
  commentTitle.textContent = data.title
  infoContainer.append(commentTitle, commentContent)

   container.append(image, infoContainer)
   return container

}

const renderComment = (comment) => {

}

const postComment = () => {

}

export const main = async () => {
  // Excute your code here
  const comments = await fetchData(GET_COMMENTS_API_ENDPOINT)

  const commentsSection = document.getElementById(COMMENTS_CONTAINER_ID)
  commentsSection.innerHTML = ""

  if (comments?.data?.length > 0) {
    comments?.data.forEach((comment) => {
      const content = createCommentElement(comment)
      console.log('content', content)
      commentsSection.appendChild(content)
    })
  }






  console.log('comments', comments)
}

