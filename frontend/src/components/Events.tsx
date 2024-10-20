import useEvents from '../hooks/useEvents.ts';
import { IoIosArrowForward } from 'react-icons/io';
import Spotify from './Spotify.tsx';

const Events = () => {
  const { eventsData, loading, error } = useEvents();

  return (
    <div className='container'>
      {loading && <p>Events are loading...</p>}
      {error && <p>An error occurred: {error}</p>}
      {eventsData.map(event => (
        <div key={event.slug.current} className='event'>
          <div className='img-container'>
            {event?.image?.asset?.url && (
              <img
                className='image'
                src={event.image.asset.url}
                alt={event.image.alt || 'Event image'}
              />
            )}
          </div>
          <div className='text-container'>
            <h3>{event.header}</h3>
            <p>{event.textContent}</p>
            <span>
              <button>
                <a
                  href={event.link}
                  className='button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Se mer
                </a>
                <IoIosArrowForward />
              </button>
            </span>
          </div>
        </div>
      ))}
      <Spotify
        title='Gjest hos Raushetspodden ved Tore Petterson'
        buttonText='Se mer'
        buttonLink='vg.no'
        info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
      />
    </div>
  );
};
export default Events;
