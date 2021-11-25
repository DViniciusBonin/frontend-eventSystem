import * as Style from './styles';
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../contexts/auth';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Dashboard() {

    interface Event {
        name: string;
        initialDate: Date;
        endDate: Date,
        workshops: [],
    }

    const context = useAuth();

    const [listEvents, setListEvents] = useState([]);
    const [eventSelected, setEventSelected] = useState<Event>();

    useEffect(() => {
        api.get('/events/all').then(res => setListEvents(res.data))
    }, [])

    async function logout() {
        context.logout();
    }

    async function selectEvent(event: any) {
        console.log(event);
        setEventSelected(event);
    }

    return (
        <Style.Container>
            <header>
                <Style.Navbar>
                    Painel admin
                    <button onClick={logout}><FiLogOut size="20" /></button>
                </Style.Navbar>
            </header>

            <main>
                <Style.AreaEvents>
                    <Style.ListEvents>
                        <ul>
                            {
                                listEvents.map((event: any) => (
                                    <li onClick={() => selectEvent(event)} >{event.name}</li>
                                ))
                            }
                        </ul>
                    </Style.ListEvents>
                    {
                        eventSelected &&

                        <Style.AreaEvento>
                            <strong> {eventSelected.name} </strong>
                            <p>Data de início: {eventSelected.initialDate}
                               Data de encerramento: {eventSelected.endDate} 
                            </p>

                            <div>
                                workshops: {eventSelected.workshops.map((workshop: any) => (
                                    <section>
                                        {workshop.name}
                                    </section>
                                ))}
                            </div>
                        </Style.AreaEvento>
                    }

                    {
                        !eventSelected &&
                        <Style.AreaEvento>
                            Selecione um evento no menu lateral.
                        </Style.AreaEvento>
                    }

                </Style.AreaEvents>


            </main>
        </Style.Container>
    );
}