const Card = ({ appointment }) => {
  return (
    <div className="cita">
      <p>Paciente: <span>{appointment.patient}</span></p>
      <p>Fecha: <span>{appointment.date}</span></p>
      <p>Hora: <span>{appointment.time}</span></p>
      <p>Síntomas: <span>{appointment.symptoms}</span></p>
    </div>
  );
}

export default Card;