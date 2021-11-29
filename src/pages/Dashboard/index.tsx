import * as Style from './styles';
import { FiLogOut } from "react-icons/fi";
import { GrEdit } from 'react-icons/gr';
import { ImBin } from 'react-icons/im';
import { useAuth } from '../../contexts/auth';
import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { getDayNumber, getMonth, getYear } from '../../helpers/date';

export function Dashboard() {

    type Event = {
        id: string;
        name: string;
        initialDate: Date;
        endDate: Date,
        workshops: any[],
    }

    const context = useAuth();

    const [listEvents, setListEvents] = useState([]);
    const [eventSelected, setEventSelected] = useState<Event | null>();
    const [eventToUpdate, setEventToUpdate] = useState<Event | null>();
    const [auxWorkshopsUpdate, setAuxWorkshopsUpdate] = useState();

    useEffect(() => {
        api.get('/events/all').then(res => setListEvents(res.data))
    }, [listEvents]);

    useEffect(() => {
        setEventSelected(null);
        console.log(eventToUpdate?.initialDate)
    }, [eventToUpdate])

    async function logout() {
        context.logout();
    }

    async function selectEvent(event: any) {
        //console.log(event);
        setEventSelected(event);
    }

    async function selectEventToUpdate(event: any) {
        setEventToUpdate(event);
        setAuxWorkshopsUpdate(event.workshops);
    }

    async function updateEvent(e: FormEvent) {
        e.preventDefault();
        console.log(eventToUpdate);
        const { id } = eventToUpdate as Event;
        api.patch(`events/${id}`, {
           ...eventToUpdate
        }).then((res) => {
            alert('Evento alterado com sucesso!');
        }).catch(() => {
            alert('Não foi possivel alterar o evento. Contate o desenvolvedor.');
        }).finally(() => setEventToUpdate(null));
    }

    async function deleteEvent(id: string) {
        api.delete(`events/${id}`).then((res) => console.log(res));
        setListEvents([]);
    }

    function updateWorkshop(index: number, value: any, key: string) {
        console.log('entrou')
        console.log(index, value, key)
        let aux = eventToUpdate ? [...eventToUpdate.workshops] : [];
       
        if (key === 'name' && aux.length > 0) {
            aux[index].name = value;
        }

        if (key === 'vacancies' && aux.length > 0) {
            aux[index].vacancies = value;
        }

        setEventToUpdate({
            id: eventToUpdate?.id as string,
            name: eventToUpdate?.name as string,
            endDate: eventToUpdate?.endDate as Date,
            initialDate: eventToUpdate?.initialDate as Date,
            workshops: [...aux] as any[]
        });

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
                            <strong>Eventos cadastrados</strong> <button>+</button>
                            { //onClick={() => selectEvent(event)}
                                listEvents.map((event: any) => (
                                    <li>
                                        <div>
                                            <span onClick={() => selectEvent(event)}>{event.name}</span>
                                            <div>
                                                <button
                                                    className="update"
                                                    onClick={() => selectEventToUpdate(event)}
                                                ><GrEdit /></button>
                                                <button
                                                    className="delete"
                                                    onClick={() => deleteEvent(event.id)}
                                                ><ImBin /></button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Style.ListEvents>
                    {
                        eventSelected &&

                        <Style.AreaEvento>
                            <h3> {eventSelected.name} </h3>
                            <p>De {`${getDayNumber(eventSelected.initialDate)}/${getMonth(eventSelected.initialDate)}/${getYear(eventSelected.initialDate)} `}
                                até {`${getDayNumber(eventSelected.endDate)}/${getMonth(eventSelected.endDate)}/${getYear(eventSelected.endDate)}`}
                            </p>

                            <div>
                                workshops: {eventSelected.workshops.map((workshop: any) => (
                                    <section className="infoWorkshop">
                                        <span>{workshop.name}</span>
                                        <span>Vagas disponiveis: {workshop.vacancies}</span>
                                    </section>
                                ))}
                            </div>
                        </Style.AreaEvento>
                    }

                    {
                        (!eventSelected && !eventToUpdate) &&
                        <Style.AreaEvento>
                            Selecione um evento no menu lateral.
                        </Style.AreaEvento>
                    }


                    {
                        (eventToUpdate && !eventSelected) &&

                        <form onSubmit={updateEvent}>
                            <h3>Alterar evento</h3>
                            <label htmlFor="">
                                Nome
                                <input
                                    type="text"
                                    value={eventToUpdate.name}
                                    onChange={
                                        function (e) {
                                            setEventToUpdate({
                                                ...eventToUpdate,
                                                name: e.target.value
                                            })
                                        }} />
                            </label>

                            <label htmlFor="">
                                Data de início
                                <input type="date" name="" id="" value={`${getYear(eventToUpdate.initialDate)}-${getMonth(eventToUpdate.initialDate)}-${getDayNumber(eventToUpdate.initialDate)}`} onChange={function (e) {
                                   const date = new Date(e.target.value);
                                   if(date.getDate() < 31) { date.setDate(date.getDate() + 1); }
                                    setEventToUpdate({
                                        ...eventToUpdate,
                                        initialDate: new Date(date)
                                    })
                                }} />
                            </label>

                            <label htmlFor="">
                                Data de encerramento
                                <input type="date" name="" id="" value={`${getYear(eventToUpdate.endDate)}-${getMonth(eventToUpdate.endDate)}-${getDayNumber(eventToUpdate.endDate)}`} onChange={function (e) {
                                    setEventToUpdate({
                                        ...eventToUpdate,
                                        endDate: new Date(e.target.value)
                                    })
                                }} />
                            </label>

                            <label htmlFor="">
                                Workshops:
                                {
                                    eventToUpdate.workshops.map((workshop: any, index: number) => (
                                        <label className="workshop" key={index}>

                                            workshop  {index + 1}: <input type="text" value={workshop.name}
                                                onChange={
                                                    function (e) {
                                                        updateWorkshop(index, e.target.value, 'name')
                                                    }
                                                }
                                            />
                                            vagas: <input type="number" value={workshop.vacancies} 
                                                onChange={
                                                    function(e) {
                                                        updateWorkshop(index, e.target.value, 'vacancies')
                                                    }
                                                }
                                            />
                                        </label>

                                    ))
                                }
                            </label>

                            <button>Salvar</button>
                        </form>
                    }

                </Style.AreaEvents>

            </main>
        </Style.Container>
    );
}