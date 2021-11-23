import { useEffect, useState } from "react";
import { CardWorkshop } from "../../components/CardWorkshop";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/api";
import { Event } from "../../types/Event";
import * as Style from './styles';

export function Registrations() {

    const [event, setEvent] = useState<Event>();

    async function loadEvent() {
        let url: string | string[] = window.location.href;
        const hasId = url.includes('/inscricoes/')
        if(hasId) {
            url = url.split('/');
            const id = url[4];
            const {data} = await api.get<Event>(`events/${id}`);
            setEvent({
                id: data.id,
                name: data.name,
                filenameBanner: data.filenameBanner,
                workshops: data.workshops,
            });
        }
    }

    useEffect(() => {
        loadEvent();
    }, []);

    return (
        <Style.Container>
            <Navbar />
            <Style.Header>
                {event?.name}
            </Style.Header>
            <Style.AreaWorkshop>
              {
                 event?.workshops.map((workshop, key) => (
                    <CardWorkshop data={workshop} key={key} />
                  ))
              }
            </Style.AreaWorkshop>
        </Style.Container>
    )
}