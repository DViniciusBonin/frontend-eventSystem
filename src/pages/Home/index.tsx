import { useEffect, useState } from 'react';
import { EventSection } from '../../components/EventSection';
import { Navbar } from '../../components/Navbar';
import { api } from '../../services/api';
import { Event } from '../../types/Event';
import * as Style from './styles';

export function Home() {

    const[events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        api.get('events').then(res => {
            setEvents(res.data);
        })
    }, []);
    return(
        <Style.Container>
            <Navbar />
            {
                events.map((event, key) => (
                    <EventSection key={key} id={event.id} photo={`${api.defaults.baseURL}/${event.filenameBanner}`} title={
                        event.name
                    }/>
                ))
            }
        </Style.Container>
    )
}