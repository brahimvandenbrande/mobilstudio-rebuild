export default function TextImage({ heading, content, image, imagePosition = 'left' }) {
  return (
    <section className={`text-image ${imagePosition}`}>
      <div className="container">
        <div className={`content-wrapper ${imagePosition}`}>
          <div className="text-content">
            <h2>{heading}</h2>
            <p>{content}</p>
          </div>
          {image && (
            <div className="image-wrapper">
              <img src={image.url} alt={heading} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}