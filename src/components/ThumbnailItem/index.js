// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {ThumbNailItem, selectedId, selectedThumbnailFunction} = props
  const thumbNailFunction = thumbnailId => {
    selectedThumbnailFunction(thumbnailId)
  }

  return (
    <li>
      <button
        type="button"
        className="css-button-itself"
        onClick={() => thumbNailFunction(ThumbNailItem.id)}
      >
        <img
          src={ThumbNailItem.thumbnailUrl}
          alt={ThumbNailItem.thumbnailAltText}
          className={`css-thumbnail-image-itself ${
            selectedId !== ThumbNailItem.id && 'css-blur-thumbnail-image'
          }`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
