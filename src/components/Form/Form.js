import { useState } from 'react';


const Form = ({ onAddFunction }) => {

  const [form, setForm] = useState({
    patient: '',
    date: '',
    time: '',
    symptoms: ''
  });
  const { patient, date, time, symptoms } = form;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onAddFunction(form);
  }
  return (
    <>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Paciente</label>
          <input
            type="text"
            className="form-control"
            name="patient"
            value={patient}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input 
            type="date"
            className="form-control"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Hora</label>
          <input 
            type="time"
            className="form-control"
            name="time"
            value={time}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Síntomas</label>
          <textarea
            className="form-control"
            name="symptoms"
            value={symptoms}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2 d-block w-full">Enviar</button>
      </form>
    </>
  );
}

export default Form;