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
      <div className="card--location">
        <span className="material-symbols-outlined">location_on</span>
      </div>
    </div>
  );
}