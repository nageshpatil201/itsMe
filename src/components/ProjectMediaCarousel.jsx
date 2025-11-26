function ProjectMediaCarousel({ images = [] }) {
  if (!images.length) return null
  const slides = [...images, ...images]

  return (
    <div className="project-carousel">
      <div className="project-carousel__track">
        {slides.map((image, index) => (
          <div className="project-carousel__slide" key={`${image.src}-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectMediaCarousel

