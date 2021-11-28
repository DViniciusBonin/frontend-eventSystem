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
    }, [eventToUpdate])

    async function logout() {
        context.logout();
    }

    async function selectEvent(event: any) {
        console.log(event);
        setEventSelected(event);
    }

    async function selectEventToUpdate(event: any) {
        setEventToUpdate(event);
        setAuxWorkshopsUpdate(event.workshops);
    }

    async function updateEvent(e: FormEvent) {
        e.preventDefault();
        console.log(eventToUpdate);
    }

    async function deleteEvent(id: string) {
        api.delete(`events/${id}`).then((res) => console.log(res));
        setListEvents([]);
    }

    function updateWorkshop(index: number, value: any, key: string) {
        
        
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
                            <strong>Eventos cadastrados</strong>
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
                                    <section>
                                        {workshop.name}
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
                                    function(e){
                                        setEventToUpdate({
                                            ...eventToUpdate,
                                            name: e.target.value
                                        })
                                    }} />
                        </label>
                       
                        <label htmlFor="">
                            Data de início
                            <input type="date" name="" id="" value={`${getYear(eventToUpdate.initialDate)}-${getMonth(eventToUpdate.initialDate)}-${getDayNumber(eventToUpdate.initialDate)}`} onChange={function(e) {
                                setEventToUpdate({
                                    ...eventToUpdate,
                                    initialDate: new Date(e.target.value)
                                })
                            } }/>
                        </label>

                        <label htmlFor="">
                            Data de encerramento
                            <input type="date" name="" id="" value={`${getYear(eventToUpdate.endDate)}-${getMonth(eventToUpdate.endDate)}-${getDayNumber(eventToUpdate.endDate)}`}  onChange={function(e) {
                                setEventToUpdate({
                                    ...eventToUpdate,
                                    endDate: new Date(e.target.value)
                                })
                            } }/>
                        </label>

                        <label htmlFor="">
                            Workshops:
                            {
                                eventToUpdate.workshops.map((workshop: any, index: number) => (
                                    <label className="workshop" key={index}>
                                       
                                        workshop  {index + 1}: <input type="text" value={workshop.name} 
                                        onChange={
                                            function(e) {
                                               updateWorkshop(index, e.target.value, 'name')
                                            }
                                        }
                                        />
                                        vagas: <input type="number" value={workshop.vacancies} />    
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