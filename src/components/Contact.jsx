import React, {useState} from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    const [exito,setExito] = useState(false)
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_0ecv10q',
          'template_67jkrgg',
          toSend,
          '-FQn50laVmiDp-3P6'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setExito(true)
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          setToSend({
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
          })
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <div id="main2" className='container-fluid'>
            <form onSubmit={onSubmit}>
        <input
            type='text'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
        />
        <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
        />
        <input
            type='hidden'
            name='to_name'
            placeholder='to name'
            value="Alejandro"
            onChange={handleChange}
        />
        <textarea
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
        />

        <button type='submit' className='button btn btn-primary'>Submit</button>
        </form>
        {exito && <p>exito</p>}
        </div>
    );
}
export default Contact