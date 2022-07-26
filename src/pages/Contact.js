import React,{useEffect} from 'react'
import "../styles/Contact.css"
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import { userSchema } from '../Validations/formValidation'
import Aos from 'aos';
import "aos/dist/aos.css"

function Contact() {
    useEffect(() =>{
        Aos.init({duration:2000 })
      },[])
          

  const {values,handleChange,handleSubmit,touched, errors,isSubmitting} = useFormik({

        initialValues: {
            name:'',
            email:'',
            message:''
        },

        validationSchema: userSchema,

        onSubmit: async(values,actions) => {
            console.log(actions,values);
            await new Promise((resolve) => setTimeout(resolve,1000))
                emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, values, process.env.REACT_APP_ACCOUNT_KEY)
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });
            actions.resetForm();
        }
        
  })
    return (
    <div data-aos="flip-left" className='background'>
        <div className='contact-box'>
    
        <div className='contactLeft'>
            <h1> Contact Me</h1>
            <h2>Contact Me</h2>
        </div>

        <div className='contact'>
            <form   onSubmit={handleSubmit}>
              <div className='Contactform'>
                <input type = "text" 
                    name ="name" 
                    placeholder='Your Name' 
                    onChange={handleChange} 
                    value={values.name} 
                    className={errors.name && touched.name ? "input-error" : ""}
                />

                {errors.name && touched.name && <p className='error'>{errors.name}</p>}
                <input 
                    type = "text" 
                    name ="email" 
                    placeholder='Your Email' 
                    onChange={handleChange} 
                    value={values.email} 
                    className={errors.email && touched.email ? "input-error" : ""}
                    />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                <textarea 
                    name = "message"  
                    rows={"13"} 
                    placeholder = "Write Something... " 
                    id ="contactMessage" 
                    onChange={handleChange} 
                    value={values.message} 
                    className={errors.message && touched.message ? "input-error" : ""}
                    />
                 {errors.message && touched.message && <p className='error'>{errors.message}</p>}
                <button disabled={isSubmitting} className='contactSendButton'  type="submit">Send</button>
              </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact