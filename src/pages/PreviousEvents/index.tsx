import { useEffect, useState } from 'react';
import { CardEvent } from '../../components/CardEvent';
import { Navbar } from '../../components/Navbar';
import { api } from '../../services/api';
import * as Style from './styles';
import { Event } from '../../types/Event';


export function PreviousEvents() {

    const [listPreviousEvents, setListPreviousEvents] = useState<Event[]>([]);

    useEffect(() => {
        api.get('events/inactive').then(res => {
            setListPreviousEvents(res.data);
        })
    })

    return(
        <Style.Container>
            <Navbar />

            <Style.ListEvents>
                {
                    listPreviousEvents.length > 0 &&  listPreviousEvents.map((previousEvent) => (
                        <CardEvent name={previousEvent.name}/>
                    ))
                }

                {
                    listPreviousEvents.length === 0 && <span className="span">Não foi encontrado eventos anteriores 😕</span>
                }
            </Style.ListEvents>
        </Style.Container>
    );
}