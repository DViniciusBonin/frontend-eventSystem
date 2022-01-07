import { FormEvent, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import { Workshop } from '../../types/Event';
import * as Style from './styles';

export function RegisterEvents() {

    const context = useAuth();

    const [workshops, setWorkshops] = useState<Workshop[]>([]);

    const [name, setName] = useState<string>('');
    const [initialDate, setInitialDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [file, setFile] = useState<any>('');
    const [loading, setLoading] = useState(false);

    async function logout() {
        context.logout();
        console.log(context)
    }

    function resetStates() {
        setLoading(false);
        setName('');
        setFile('');
        setWorkshops([]);
    }

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault();

        if(workshops.length < 1) {
            window.alert('Obrigatório ter no minimo 1 workshop');
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
        const uploadBanner = await api.post('/uploads', formData);
        await api.post('/events', {
            name,
            initialDate,
            endDate,
            workshops,
            filenameBanner: uploadBanner.data.filename
        });

        resetStates();

        }catch(error: any) {
            setLoading(false);
            window.alert('Houve um erro no cadastro do evento. Contate o suporte!');
        }
    }

    return (
        <Style.Container>
            <header>
                <Style.Navbar>
                    Painel admin
                    <button onClick={logout}><FiLogOut size="20" /></button>
                </Style.Navbar>
            </header>
            <div>
                <h3>Cadastrar evento</h3>

                <form action="" onSubmit={handleFormSubmit}>
                    <label>Nome
                        <input type="text" onChange={(e) => setName(e.target.value)} required/>
                    </label>

                    <label htmlFor="">
                        Data de início
                        <input type="date" onChange={(e) => setInitialDate(new Date(e.target.value))} required/>
                    </label>

                    <label htmlFor="">
                        Data de encerramento
                        <input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} required/>
                    </label>

                    <label htmlFor="">
                        Banner
                        <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : '')} required/>
                    </label>

                    <label id="workshops">
                        Workshops:
                        <button id='add' onClick={() => {
                            const name = prompt('Digite o nome do workshop');
                            const vacancies = prompt('Digite o número de vagas do workshop');

                            const aux = [...workshops];
                            aux.push({
                                name: name ? name : 'nome não informado',
                                vacancies: vacancies ? parseInt(vacancies) : 0
                            });

                            setWorkshops(aux);
                        }}>
                            <GrAdd />
                        </button>

                        {
                            (workshops.length > 0) &&
                            workshops.map(workshop => (
                                <label>
                                    Workshop: <input type="text" value={workshop.name} disabled></input>
                                    Vagas: <input type="number" value={workshop.vacancies} disabled />
                                </label>
                            ))

                        }
                    </label>


                    <button className='submit'>{loading ? 'Carregando ...' : 'Cadastrar'}</button>

                </form>
            </div>

        </Style.Container>
    );
}