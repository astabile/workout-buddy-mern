import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }

        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setEmptyFields([]);
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    }

    return (
        <div className="workout-form">
            <h3>Add a New Workout</h3>
            <form onSubmit={handleSubmit}>
                <label>Exercise Title:</label>
                <input className={emptyFields.includes('title') ? 'error' : ''} type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} />
                <label>Load (in kg):</label>
                <input className={emptyFields.includes('load') ? 'error' : ''} type="number" onChange={(e) => setLoad(e.target.value)} name="load" value={load} />
                <label>Reps:</label>
                <input className={emptyFields.includes('reps') ? 'error' : ''} type="number" onChange={(e) => setReps(e.target.value)} name="reps" value={reps} />
                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default WorkoutForm;