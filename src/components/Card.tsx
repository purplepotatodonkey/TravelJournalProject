interface CardProps {
  title: string,
  location: string,
  googleMapsUrl: string,
  startDate: string,
  endDate: string,
  description: string,
  imageUrl: string
}

export default function Card({
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl
  }: CardProps) {
  return (
    <div className="card">
      <img className="card--image" src={imageUrl} alt="" />
      <div className="card--content">
        <div className="card--location">
          <span className="material-symbols-outlined">location_on</span>
          <span className="location--text">{location}</span>
          <a className="location--map" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card--name">{title}</h1>
        <span className="card--time">
          {startDate} - {endDate}
        </span>
        <p className="card--description">{description}</p>
      </div>
    </div>
  );
}